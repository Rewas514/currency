var express = require("express");
var path = require("path");

//app.set('trust proxy', true);

var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 3000)

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(app.get("port"),function(){
  console.log("Server started on port " + app.get("port"));
});



//express

const expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);


app.get('/', function (req, res) {
  const ipInfo = req.ipInfo;
  var message = `Hey, you are browsing from ${ipInfo.city}, ${ipInfo.country}`;
  res.send(message);
});

app.listen(app.get('PORT'), function () {
    console.log('Express started on http://localhost:' +
        app.get('PORT') + '; press Ctrl-C to terminate.');
});