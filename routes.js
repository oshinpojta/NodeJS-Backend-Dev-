const fs = require("fs");

const requestHandler = (req, res) => {
    let url = req.url;
    let method = req.method;
    res.setHeader("Content-Type" , "text/html");
    if(url==="/"){
        res.write("<html>")
        res.write("<h1>Welcome home</h1>");
        let msgArray = fs.readFileSync('message.txt','utf-8');
        console.log(msgArray);
        for(let i=0; i<msgArray.length;i++){
            let msg = msgArray[i];
            console.log(msg);
            res.write(msg);
        }
        res.write("<body><form action='/msg' method='POST'><input type='text' name='message'><input type='submit' value='Add Message'></form></body></html>");
        return res.end();
    }else if(url==='/msg' && method==='POST'){
        const body = [];
        req.on('data', (chunk)=> {
            body.push(chunk);
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt',`\n${message},`, {flag : "a"});
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end()
        });
    }else if(url==="/node"){
        res.write("<h1>Welcome to my NodeJS project<h1>");
        return res.end();
    }
}

module.exports = requestHandler;