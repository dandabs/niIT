import execute from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log(req.query);

    if (!("p" in req.query)) {
      // request does not include a specific post xoxo
      try {
        const result = await execute({
          q: "SELECT blog.*,users.displayname FROM blog INNER JOIN users ON blog.user=users.id ORDER BY time DESC",
          v: []
        });
        console.log(result);
        res.send(result);
      } catch (error) {
        console.log(error);
      }
    } else {
        try {
            const result = await execute({
                q: "SELECT * FROM blog INNER JOIN users ON blog.user=users.id WHERE blog.id=?",
                v: [req.query.p]
            })
            console.log(result[0]);
            res.send(result[0]);
        } catch (error) {
            console.log(error);
        }
    }
  }
}
