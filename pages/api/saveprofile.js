import execute from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === 'GET' && 'user' in req.query && 'displayname' in req.query && 'bio' in req.query) { // check if the account exists
        
        try {
            const result = await execute({
              q: "UPDATE users SET displayname=?, bio=? WHERE username=?",
              v: [req.query.displayname, req.query.bio, req.query.user]
            });
            console.log(result);
            res.send(result);
          } catch (error) {
            console.log(error);
          }

    } else {
      res.sendStatus(405);
    }
  }
