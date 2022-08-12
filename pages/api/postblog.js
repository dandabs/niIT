import execute from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === 'GET' && 'user' in req.query && 'title' in req.query && 'content' in req.query) {
        
        try {

            const result1 = await execute({
                q: "SELECT * FROM users WHERE username=?",
                v: [req.query.user]
              });

            const result = await execute({
              q: "INSERT INTO blog (user,title,content) VALUES (?,?,?)",
              v: [result1[0].id, req.query.title, req.query.content]
            });
            console.log(result);
            console.log(result1);
            res.send({"success": true});
          } catch (error) {
            res.send({"success": false});
            //console.log(error);
          }

    } else {
      res.sendStatus(405);
    }
  }
