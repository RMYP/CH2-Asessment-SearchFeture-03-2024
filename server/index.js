const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");
const PORT = 8000;

const server = (req, res) =>{
    if (req.url === "/"){
        req.url = "/index.html"
    }else if(req.url === "/search"){
        req.url = "search.html"
    }else {
        req.url = req.url
    };

    const parseURL = url.parse(req.url);
    const pathName = `${parseURL.pathname}`;
    const extension = path.parse(pathName).ext;
    const absolutePath = path.join(PUBLIC_DIRECTORY, pathName);

    const contentTypes = {
        ".css": "text/css",
        ".png": "image/png",
        ".svg": "image/svg+xml",
        ".html": "text/html",
        ".js": "text/javascript",
    };

    fs.readFile(absolutePath, (err, data) => {
        if (err){
            res.statusCode = 500;
            res.end("file not found 😒");
        }else{
            res.setHeader("Content-Type", contentTypes[extension] || "text/plain");
            res.end(data);
        }
    })

};

http.createServer(server).listen(PORT);