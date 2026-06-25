const express = require('express');
const app = express();
let users =[]
app.use(express.json());
app.get('/ace',(req,res) => {
    res.send('krishitha');
} );
app.post("/users",(req,res) => {
  //  console.log(req.body);
  users.push(req.body);
    res.json({messege: 'user data received'});
});
app.get("/users",(req,res) => {
    res.json({users})
})
app.get("/users/:id",(req,res) => {
    const user = req.params.id;
    console.log(user);
    res.json({users});
} );

app.put("/students/:id (req, res) => {
 const idd = req.params.name
  console.log(idd)
    // const student = students.find(
    //     s => s.id == req.params.id
    // );

    // if (!student) {
    //     return res.status(404).json({
    //         message: "Student not found"
    //     });
    // }

    // student.name = req.body.name;
    // student.age = req.body.age;
    // student.course = req.body.course;

    // res.json({
    //     message: "Student Updated",
    //     student
    // });
});
app.delete("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id == req.params.id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter(
        s => s.id != req.params.id
    );

    res.json({
        message: "Student Deleted",
        student
    });
});

app.listen(3000,() => {
    console.log('server is running at port 3000');
})