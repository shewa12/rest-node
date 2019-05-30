//importing express
const express= require('express');

//creatin express app
const app= express();

//creating routes get
app.get('/posts',(req, res)=>{
	res.send({
		name:'shewa'
	});
});


//connecting server on a port

app.listen('3300',()=>{
	console.log("checking nodemon on port 3300");
});