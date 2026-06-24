const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/studentDb')
.then(() => {
    console.log("mongodb connected");

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
.catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    course: String,
    dept: String
});

const Student = mongoose.model('Student', studentSchema);

app.get("/", (req, res) => {
    res.send("student management api");
});

app.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.status(201).json({
            message: "student added successfully",
            student
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

app.put('/students/:id',async(req,res)=>{
    try{
        const students=await Student.findByIdAndUpdate(
            {id:req.body.params},
            req.body,{new:true}
        )
        if(!student){
            return res.status(404).json({message:"student not found"})
        }
    }
})