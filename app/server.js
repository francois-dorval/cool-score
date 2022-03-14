let express = require("express");
let app = express();
let calculator = require("./calculator");

let prefix = "<pre>" +
    "  / ____|          | |  / ____|                     _ <br/>" +
    " | |     ___   ___ | | | (___   ___ ___  _ __ ___  (_)<br/>" +
    " | |    / _ \\ / _ \\| |  \\___ \\ / __/ _ \\| '__/ _ \\    <br/>" +
    " | |___| (_) | (_) | |  ____) | (_| (_) | | |  __/  _ <br/>" +
    "  \\_____\\___/ \\___/|_| |_____/ \\___\\___/|_|  \\___| (_)<br/>" +
    "                                                      <br/>" +
    "                                                      <br/></pre>";


/**
 * app endpoint
 */
app.get("/score", function (req, res) {
    let scorePhrase = calculator.score(req.query.name);
    let result = prefix ;
    result +=  "<h1>" + req.query.name + " -> "+scorePhrase + "</h1>";
    res.send(result);

});

app.get("/", function (req, res) {
    res.send("calculez votre score de coolitude ici : <a href='/score?name=toto'>lien<a/>");

});

console.log("serveur lancé ici -> http://127.0.0.1:3000/score?name=test")
app.listen(3000);






pouet





