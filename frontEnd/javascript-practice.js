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
const students=[
    {
        rollNo:"24agg0",
        name:"krishi",
        dept:"cse"
    },{
        rollNo:"24age2",
        name:"sowmya",
        dept:"cse"
    },{
        rollNo:"24agg3",
        name:"bindu",
        dept:"csm"
    },{
        rollNo:"24agi1",
        name:"reethu",
        dept:"csm"
    }
]

//forEach
// students.forEach(student=>{
//     console.log(student)
// })

// //map
// const modarr=students.map(student=>"abc")
// console.log(modarr)
// const modrr=students.map(student=>student.rollNo)
// console.log(modrr)
// const arrx=[36,48,19,43]
// const modarrx=arrx.map(element=>element+5)
// console.log(modarrx)


//filter
const filter_stud=students.filter(
    dep=>dep.dept==="csm"
)
console.log(filter_stud)
console.log(filter_stud.length)

//reduce







