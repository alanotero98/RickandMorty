const http = require("http");
const characters = require("./data.js");
const { json } = require("express");

const PORT = 5040;

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const url = req.url.split("/")
    const param1 = url[1]
    const param2 = url[2]
    const id = url[3]
    if(param1 === "rickandmorty" && param2 === "characters"){
       res.writeHead(200, {"Content-type":"application/json"} )
       res.end(JSON.stringify(characters)) 
    }

    if(param1 === "rickandmorty" && param2 === "character"){
        const character = characters.find((ch)=>{
            return ch.id === Number(id)
        })
        if(character)
        return res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character))
    }

    res.end("El server esta en funcionamiento, no hay motivos de es 3")
}).listen(PORT, ()=> {
    console.log("in port http://localhost:3001");
})