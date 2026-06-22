# JavaScript
->it is a high-level,dynamically typed,loosely types,single-threaded,object-oriented,event driven programming language
->javaScript is a scripting language
->by deafult any browser supports javascript language

->to compare just the values use ==
   var a=10
   var b="10"
   console.log(a==b)--->true-->it is comparing only value
->to compare accurately use ===
     var a=10
   var b="10"
   console.log(a===b)--->false-->it is comparing both value and datatype
## Variables
    ->var
    ->let
    ->const
**var**
    var a=10
    var a -->declaration
    a=10  -->initialization
    ->redeclaration and reinitialisation is possible
    ->hoisting is possible(even before declaration of a variable if qwe try to perform an           operation it doesn't throw any error)like
    console.log(name)
    here we didn't even declare the variable name but it doesnt throw any error
    ->var is a functional scope(if deckared var inside the funstion then we access that variable outside the function)
    ->var is a not a block scope
**let**
    ->let is a block scope and functional scope but basically it is **block scope**
    ->redeclaration is not possible but reinitialization is possible;
**const**
    ->it was intoduces in ES6
    ->redclaration and reinitaialization is not possible
    ->const is a functional scope and block scope but basically it is **block scope**
    ->**that's why const is preferred**
->>>Before ES6(2015) they used only var to create variables in javascript

## Types of functions in javascript
    ->Function declaration
    ->function expression
    ->arrow function
    ->anonymous function
**Arrow function**
const backend=() =>{
    console.log("Backend")
}

**Call back function**
a function is acting like a parameter to the oter function
**Higher order function**
a function which is acting as a parameter to the higher order function
## Array methods
**ADD/REMOVE METHODS**
    ->push()---->adds  and returns the modified length
    ->pop()---->removes the last element and returns the removed length
    ->shift()---->removes the first elemnt and returns the removed element
    ->unshift()---->adds the elemnt at first and returns the modified length
    ->splice()---->splice is used to
                    ->add elemnts
                    ->remove elemnys
                    ->replace elemnts
                    ->**Syntax**->array_name.splice(startIndex,deleteCount,item1,item2,...)
                    ->if we want to add elements then the deleteCount should be zero

                    ->if we dont want to add the elemnts then only starting index and deletecount is enough as parameters

**searching methods**
    ->includes()
    ->indexOf()  ->returns index of element
    ->find()  -->returns first matching element
    ->findIndex()-->
**iteration methods**
    ->forEach-->it is used to iterate each elemnt from an array
    ->map()-->
    ->filter
**transformation methods**
    ->reduce-->reduces array to a single value
    ->sort-->sort method converts elemnts to strings and sorts
        -->to avoid that we include arrow function
    ->reverse

## DOM(Document Object Model)
## Event handling
    ->click event(onClick)
    ->double click event(ondblClick)
    ->mouse hiver event(onMouseOver)
## React Js
    ->React is an open source JavaScript library used for building fast,interactive,and reusable user interfaces developed by Meta platforms(Facebook) released in 2013
    ->react allows developers to create modern web applications using reusable components

**Features of react**
->component based architecture
->virtual DOM
->JSX
->one way data flow
->reusable code
->fast rendering
**React supports Single Page Applications(SPA)**
loads a single page and dynamically updates content without rerfreshing the entire page
## **virtual DOM**
virtual dom is a js representation of the real dom that react uses to track UI changes efficiently
->react does not update the real dom directly
->instead,it updates the virtual dom first
->**Diffing** is the process of comparing the old virtual dom with new virtual dom to idenify the exact changes that need to be applied to the real dom
->**Reconcillation** is the process by whickh react updates the real dom efficiently after diffing by applying only the necessary changes


## (JSX)JavaScript Extensible Markup Language
->jsx is a syntax extension for javascript that allows us to write html-like inside js
->JSX is not HTML
->it only looks like html ,behinf the scenes react converts jsx into js using Babel(js compiler)

**JSX Rules**
->one parent element  (only one return element if we want to return many elements then combine all those element into one div element)
->clasaName instaed of class
->JavaSript inside{}-->if we want to use js code in html then use {} like name is declared and initialized in js the in html to use name put it in {name}

->html related code should be written inside return and js related code should be written above return in app.jsx


            
                                    





