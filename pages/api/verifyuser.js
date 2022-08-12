import execute from "../../lib/db";

import aes from "crypto-js/aes";
import utf8 from "crypto-js/enc-utf8"

export default async function handler(req, res) {
    if (req.method === 'GET' && 'user' in req.query && 'pass' in req.query) { // check if the account exists

        //console.log(aes.decrypt(req.query.pass, 'insecurehashxoxo').toString(utf8));

        const p = aes.decrypt(req.query.pass, 'insecurehashxoxo').toString(utf8);
        
        try {
            const result = await execute({
              q: "SELECT * FROM users WHERE username=?",
              v: [req.query.user]
            });
            //console.log(result);
            res.send(aes.decrypt(result[0].password, 'insecurehashxoxo').toString(utf8) == p ? {"status": true} : {"status": false});
          } catch (error) {
            //console.log(error);
          }

    } else {
      res.sendStatus(405);
    }
  }
