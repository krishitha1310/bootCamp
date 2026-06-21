// console.log("Welcome to javaScript")
// var a=10;
// var b="10"
// console.log(a===b)

// function greet(){
//     var name="abc"
//     console.log(name)
// }
// console.log(name)

// if(true){
//     let c=100
//     console.log(c)
// }
// console.log(c)


// let a=45
// console.log(a)
// let a="krishi"
// console.log(a)


// let a=47
// console.log(a)
// a=56
// console.log(a)


// const a=45
// console.log(a)
// const a="krishi"
// console.log(a)

// const a=47
// console.log(a)
// a=56
// console.log(a)


// var a=10
// var b="25"
// console.log(a+b)

// const a=1
// const b=2
// const c=3
// if(a>b&&a>c) console.log("a is greater:"+a)
// else if(b>c&&b>a) console.log("B is greater:"+b)
// else console.log("C is greater:"+c)


// const arr=["a","b","c","d"]
// for (const temp of arr) {
//     console.log(temp)
// }


// const obj={
//     name: "Samsung",
//     disc: "Stylish phone",
//     price: 25000
// }
// for (let mobile in obj) {
//     console.log(mobile)
// }
// for (let mobile in obj) {
//     console.log(obj[mobile])
// }

// const arr2=[{
//     name: "Samsung",
//     disc: "Stylish phone",
//     price: 25000
// },
// {
//     name: "realme",
//     disc: "modern phone",
//     price: 30000
// },{
//     name: "iphone",
//     disc: "classic phone",
//     price: 100000
// },
// ]

// for (const key of arr2) {
//     for (const element in key) {
//         console.log(key[element])
//     }
// }

//Arrow function
// const fullstack=()=>{
//     console.log("learning fullstack")
//     return "Fullstack completed"
// }
// //we can also return values without using return using arrow function
// const backend=()=>"Backend completed"
// const b=backend()
// console.log(b)


// const higheroderfunction=(a)=>{
//     console.log("you are in HOF")
// }

// const callbackfunction=()=>{
//     console.log("I'm in CBF")
// }

// higherorderfunction(callbackfunction)
// //example
// const x=(a)=>{
//     console.log("you are in HOF")
// }

// const y=()=>{
//     console.log("I'm in CBF")
// }

// x(y)    // here x is higher order function and y is callback function







//ARRAY METHODS

// const arr=[3,2,12,42,56,[4,52,29]]
// console.log(arr.push(8))
// console.log(arr)

// console.log(arr.pop())
// console.log(arr)

// arr.unshift("krishi")
// console.log(arr.unshift())
// console.log(arr)

// arr.shift()
// console.log(arr.unshift())
// console.log(arr)

// //deleting elemnt at 2nd index
// arr.splice(2,1) //starts from 2nd index and removes 1 elemnt
// console.log(arr)

// arr.splice(0,2,"abc") //starts from 0 index and removes 2 elemnts and replaces them with aelemnts given 
// console.log(arr)
// arr.splice(2)  //starts from index 2 and removes every elemnt after 2nd index
// console.log(arr)







//SEARCHING METHODS

// const arr2=[2,3,"ace"]
// console.log(arr2.indexOf("ace")) //it returns 2
// console.log(arr2.indexOf("sk")) //as there is no value it returns -1


// const students=[
//     {
//         rollNo:"24agg0",
//         name:"krishi",
//         dept:"cse"
//     },{
//         rollNo:"24age2",
//         name:"sowmya",
//         dept:"cse"
//     },{
//         rollNo:"24agg3",
//         name:"bindu",
//         dept:"cse"
//     },{
//         rollNo:"24agi1",
//         name:"reethu",
//         dept:"cse"
//     }
// ]
// const studentReport=students.find(
//     s=>s.rollNo==="24agg0"
// )
// console.log(studentReport)

// let index=students.findIndex(
//     s=>s.rollNo="241gg0"
// )
// console.log(index)





//ITERATION METHODS
// const students=[
//     {
//         rollNo:"24agg0",
//         name:"krishi",
//         dept:"cse"
//     },{
//         rollNo:"24age2",
//         name:"sowmya",
//         dept:"cse"
//     },{
//         rollNo:"24agg3",
//         name:"bindu",
//         dept:"csm"
//     },{
//         rollNo:"24agi1",
//         name:"reethu",
//         dept:"csm"
//     }
// ]

//forEach
// students.forEach(student=>{
//     console.log(student)
// })

//map
// const modarr=students.map(student=>"abc")
// console.log(modarr)
// const modrr=students.map(student=>student.rollNo)
// console.log(modrr)
// const arrx=[36,48,19,43]
// const modarrx=arrx.map(element=>element+5)
// console.log(modarrx)


//filter
// const filter_stud=students.filter(
//     dep=>dep.dept==="csm"
// )
// console.log(filter_stud)
// console.log(filter_stud.length)

//reduce
// const marks=[1,2,3,4,5]
// const total=marks.reduce(
//     (sum,sub)=>sum+sub,0  //here sub is each element of marks and sum is 2 the next parameter 
// )
// console.log(total)

// //sort
// const arr=[10,250,35,50,65]
// console.log(arr.sort())
// console.log(arr)  //output will be 10,250,35,50,65 because it first compares the first character of elements

// arr.sort(
//     (a,b)=>a-b  //ascending order
// )
// console.log(arr)

// arr.sort(
//     (a,b)=>b-a  //descending order
// )
// console.log(arr)


// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
//   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
//   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
//   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

//   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
//   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
//   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
//   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
//   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

//   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
//   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
//   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
//   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
//   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

//   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
//   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
//   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
//   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
//   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

//   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
//   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
//   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
//   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
//   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

//   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
//   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
//   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
//   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
//   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// ]

// const filter_stud=students.filter(
//     mark=>mark.marks>=35
// )
// console.log(filter_stud)

// const fil_cse=students.filter(
//     mark=>mark.department==="CSE"
// )
// console.log(fil_cse)

// const fil_csd=students.filter(
//     mark=>mark.department==="CSD"
// )
// console.log(fil_csd)

// const fil_it=students.filter(
//     mark=>mark.department==="IT"
// )
// console.log(fil_it)

// const fil_cso=students.filter(
//     mark=>mark.department==="CSO"
// )
// console.log(fil_cso)

// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
//   { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
//   { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
//   { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
//   { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
//   { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
//   { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
//   { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
//   { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
// ]

// const placed_stud=students.filter(
//     place=>place.placed===true  // as it is a boolean value no need of ""
// )
// console.log(placed_stud)


// //to display only name and package of placed students
// const placed_stud_name=placed_stud.map(
//     student=>({
//         name:student.name,
//         package:student.package
//     })
// ) 
// console.log(placed_stud_name)

// //calculate avg package of placed students

// const total=placed_stud.reduce(
//     (sum,student)=>sum+student.package,0
// )

// console.log(total/placed_stud.length)

// //get the highest package
// const high_pack=placed_stud.reduce(
//     (max,student)=>max>student.package?max:student.package,0
// )
// console.log(high_pack)

// //more than 10 lpa
// const lpa10=placed_stud.filter(
//     pack=>pack.package>10
// )
// console.log(lpa10)
// lpa10.map(console.log(student=>student.name))



let isColor = false
let p = document.createElement("p")
p.innerText = "Like"
const container = document.getElementById("container")
const paragraph = document.getElementById("paragraph")
const heart = document.getElementById("heart")
function heartColorChange() {
    const heart = document.getElementById("heart")
    if (isColor) {
        heart.src = "https://media.istockphoto.com/id/1903985199/vector/heart-flat-icon.jpg?s=612x612&w=0&k=20&c=FOAQ1kofne38dLzm6C6vBE39nY9fynVBpQb7UcDW7gk="
        isColor = false;
        p.innerText = "dislike"
    }
    else {
        heart.src = "https://www.clipartmax.com/png/middle/12-123476_lofty-design-heart-images-clip-art-clipart-outline-heart-shape-vector-free.png"
        isColor = true;
        p.innerText = "like"
    }
}


// let p=document.createElement("p")
// p.innerText="Like"
// const container=document.getElementById("container")
// container.appendChild(p)















