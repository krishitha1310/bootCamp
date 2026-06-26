const express = require("express");
const mongoose = require("mongoose");
const { error } = require("node:console");

const app = express();  

app.use(express.json());
const cors=require("cors");
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/attendnaceDb')
.then(() => {
    console.log("mongodb connected");

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
})
.catch(err => console.log(err));

const attendanceSchema = new mongoose.Schema({
    name:String,
    rollno: String,
    percentage: Number,
    dept: String
});

const Student = mongoose.model('Attendance', attendanceSchema);

app.get("/", (req, res) => {
    res.send("Attendance management api");
});


app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();

        res.json({
            count: students.length,
            students  
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});


app.post("/att", async (req, res) => {
    try {
        const student = new Student(req.body);
        console.log(req.body.name)
        await student.save();

        res.status(201).json({
            message: "attendance added successfully",
            student
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});


app.put('/students/:rollNo', async (req, res) => {
    try {
        const student = await Attendance.findOneAndUpdate(
            { rollNo: req.params.rollNo }, 
            req.body,
            { new: true }
        );

        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        res.json({
            message: 'Student updated',
            student
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
