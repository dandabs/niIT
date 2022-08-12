import execute from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === 'GET' && 'user' in req.query) { // check if the account exists
        
        try {
            const result = await execute({
              q: "SELECT * FROM users WHERE username=?",
              v: [req.query.user]
            });
            //console.log(result);
            res.send(result.length > 0 ? {"status": true} : {"status": false});
          } catch (error) {
            //console.log(error);
          }

    } else {
      res.sendStatus(405);
    }
  }