// Var Let const.

// ES-5 var && ES-6-Let and const.

// Var-Function scope.

// Let and const-block/brace scope.

// let outer=10;

// function scope()
// {
//     let outer=20;
//     console.log(outer);
// }

// scope();

// console.log(outer);


// function abcd()
// {
//     let i=20
//     for(let i=1;i<12;i++)
//     {
//         console.log(i)
//     }
//     console.log(i)
// }

// abcd()

// // var adds itself to the window object

// var a=12

// let b=12

// console.log(a)

// console.log(b)

// // Execution Context-Variables,functions,lexical Environment


// function ab()
// {
//     let a=100
//     function def()
//     {
//         let b=200
//         console.log(a)
//         console.log(b)
//     }
//     def()
// }

// ab()

// // Execution context is a container where the function's code is executed and it's created whenever a function is called,it contains 3 things,variables,function and lexical environment.

// var a=[1,2,3,4,5]
// var n=a;

// console.log(a)
// console.log(n)
// n[2]=1000

// console.log(a)
// console.log(n)

var original=[10,20,30,40,50]

var newVariable=[...original]

newVariable[3]=1000
console.log(newVariable)
console.log(original)

var obj={
    name:'harsh',
    age:35
}

var obj1={...obj}

obj1.city='Chennai'

console.log(obj)

console.log(obj1)

// Truthy and falsy

// falsy-0,null,undefined,NaN,false,document.all,'',""

if(-1)
{
    console.log('Truthy');
}
else
{
    console.log('falsy');
}

let num=1
switch(num)
{
    case 1:
        console.log('1')
        break;
    case 2:
        console.log('2')
        break;
}

// forEach loop sirf array pe chalta hai

var a=[1,2,3,7,8,9,6,2,1,3,4,63,2]

a.forEach((val,idx)=>
{
    a[idx]=val+2
})

console.log(a)


var obj={
    name:'harsh',
    age:24,
    city:'Chennai'
}

delete obj

console.log(obj)

for(let key in obj)
{
    console.log(`key-${key}:value-${obj[key]}`)
}

let alphabets="abcdefghijklmnopqrstuvwxyz"

let count=0

for(let i=0;i<alphabets.length;i++)
{
    count+=1
}
console.log(count)


// Callback Functions

setTimeout(function()
{
    console.log('Download Completed')
},2000);

console.log('Loading....');

// First class function

var method=function()
{
    console.log('First class function')
}


function pass(cb)
{
    cb();
}
pass(method)

// How arrays are made behind the scenes

var array=[1,2,3,4,5];

array[-1]=6;

console.log(Array.isArray(array));

let obj7={
    name:'harish',
    age:30
}

console.log(delete obj7)

console.log(obj7)



































