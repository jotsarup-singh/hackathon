const moongose=require("mongoose")
const express=require("express")
const app=express()
app.use(express.json())

const connection=()=>{
    return new moongose.connect("mongodb://127.0.0.1:27017/quiz",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })

}

const quiz=new moongose.Schema({
    id : Number,
    question :String,
    option1 : String,
    option2 : String,
    option3 : String,
    option4: String,
    correctanswer:String
})

const Quiz=moongose.model("quiz",quizschema)

app.get("/quiz",async (req,res)=>{
    try{
        const quiz= await Quiz.find().lean().exec()
        return res.status(200).json(quiz)
    }
    catch{

    }
})

app.get("/quiz/:id",async(req,res)=>{
    try{
        const quiz=await Quiz.findById(req.params.id).lean().exec()
        return res.status(200).json(quiz)
    }
    catch{

    }
})

app.post("/quiz",async (req,res)=>{
    try{
        const quiz=await quiz.create(req.body)

        return res.status(201).json(quiz)
    }
    catch{

    }
})


app.listen(2200,async()=>{
    await connection();
    console.log("listening on port 2200")
})