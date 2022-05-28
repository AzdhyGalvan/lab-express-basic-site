
const express= require("express")

const app =express()
app.use(express.static('public'))

/*app.get("/",(req,res,next)=>{
    res.send("Bienvenido a las biografias")

})*/

app.get("/",(req,res,next)=>{
    res.sendFile(__dirname + '/views/index.html')
})
app.get("/about",(req,res,next)=>{
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/jobs",(req,res,next)=>{
    res.sendFile(__dirname + '/views/jobs.html')
})

app.get("/galery",(req,res,next)=>{
    res.sendFile(__dirname + '/views/galery.html')
})




app.listen(3000,()=>{
    console.log("Estoy corriendo mi laboratorio")
})
