const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRouter=require("./controllers/patientRouter")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://mariya:Mariya56076@cluster0.1zhdgrg.mongodb.net/patientDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})
app.use("/api/patient",patientRouter)


app.listen(3004,()=>{
    console.log("server running")

})