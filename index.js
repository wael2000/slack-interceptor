var express = require("express")
var Client = require('node-rest-client').Client;

var app = express()
var client = new Client();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

var HTTP_PORT = 8080

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.post("/", (req, res, next) => {
 console.log(req.body.text);
 var data = {
            "message":"success",
            "user": req.body.text
        };
 //console.log(data);
 //res.json(data);
 var args = {
   	data: data,
    "message":"success",
    "user": req.body.text,
   	headers: { "Content-Type": "application/json" }
   };
  client.post("http://el-demo-slack-event-listener-devspaces.apps.cluster-nzpkj.nzpkj.sandbox410.opentlc.com",
              args,
              function (response_data, response) {
 	              console.log(response_data);
 	              //console.log(response);
                res.json(data);
   });



})

app.get("/", (req, res, next) => {

res.json({
            "message":"success",
            "data":"Hello World"
        })

})
