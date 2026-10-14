import express from "express";
import "dotenv/config"
const app = express();
const PORT=process.env.PORT
app.get("/ruksana", (req, res) => {
  res.send("hii server is working");
});
app.get("/helath",(req,res)=>{
    res.json({
        status:"ok"
    })

})

app.listen(PORT, () => {
  console.log("Server is running on 3000");
});