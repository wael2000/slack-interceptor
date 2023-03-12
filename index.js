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

app.post("/slack", (req, res, next) => {
 console.log(req.body.text);
 var data = {
            "message":"success",
            "user": req.body.text
        };
  var args = {
  	data: data,
  	headers: { "Content-Type": "application/json" }
  };
 client.post("https://naas-waas.free.beeceptor.com/my/api/path", args, function (response_data, response) {
	 console.log(response_data);
	 console.log(response);
   res.json(data);

  });



})

app.get("/slack", (req, res, next) => {

res.json({
            "message":"success",
            "data":"Hello World"
        })

})