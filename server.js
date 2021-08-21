var express = require('express');
var app = express();
var app_port = 3000;

app.listen(app_port, function(){
	console.log('Server is running on port ' + app_port);
});

// Home Page route
app.get('/',function(req,res){

	res.send(`<html><head><title>Home Page</title>
		</head><body><a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a><br/>
		<h1>This is Home Page</h1></body></html>`)

});

// About Page route
app.get('/about',function(req,res){

	res.send(`<html><head><title>About Page</title>
		</head><body><a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a><br/>
		<h1>This is About Page</h1></body></html>`)
});

// Contact Page route
app.get('/contact',function(req,res){

	res.send(`<html><head><title>Contact Page</title>
		</head><body><a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a><br/>
		<h1>This is Contact Page</h1></body></html>`)
});