const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello world')
});
app.get("/",(req,res)=>{
    res.send('hello root');
})
app.post("/users",(req,res)=>{
    console.log(req.body);
    res.json({
        message:'user data received'
    });
})

app.get("/users",(req,res)=>{
    res.json({
        message:'fetching user data'
    });
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
