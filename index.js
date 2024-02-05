
import express from 'express';

const app = express();


app.get("/",(req,res)=>{
    res.send("I AM AN ENDPOINT")
})
app.get("/ritu",(req,res)=>{
    res.send("I AM RItu")
})
app.listen(3000, () => console.log('Example app listening on port 3000!'));

