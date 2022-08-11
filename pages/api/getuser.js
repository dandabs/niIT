import execute from "../../lib/db";

import aes from "crypto-js/aes";
import utf8 from "crypto-js/enc-utf8"

export default async function handler(req, res) {
    if (req.method === 'GET' && 'user' in req.query) { // check if the account exists
        
        try {
            const result = await execute({
              q: "SELECT * FROM users WHERE username=?",
              v: [req.query.user]
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
