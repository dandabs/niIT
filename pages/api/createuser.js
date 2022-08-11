import execute from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === 'GET' && 'user' in req.query && 'pass' in req.query) { // check if the account exists

        // https://ui-avatars.com/api/?background=random&name=Daniel%20Adams

        const pres = await fetch('https://ui-avatars.com/api/?background=random&name=' + req.query.user);
        const buffer = Buffer.from(await pres.arrayBuffer())
        
        try {
            const result = await execute({
              q: "INSERT INTO users (username, password, displayname, photo, bio) VALUES (?,?,?,?,?)",
              v: [req.query.user, req.query.pass, req.query.user, buffer.toString('hex'), " "]
            });
            console.log(result);
            res.send({"success": true});
          } catch (error) {
            res.send({"success": false});
            console.log(error);
          }

    } else {
      res.sendStatus(405);
    }
  }
