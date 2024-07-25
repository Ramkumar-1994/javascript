setTimeout(function()
{
  console.log('Timeout')
},3000)

console.log('Next Line')

// setInterval(function()
// {
//   console.log('interval')
// },1000)

console.log('Next line 2')

let add=function()
{
  console.log(2+3)
}
add()
add()

function runTwice(fun)
{
  fun()
  fun()
}
runTwice(function()
{
  console.log('12b')
})

runTwice(add)

let btn=document.querySelector('button')
let arr=[1,2,3]
function start()
{
  btn.innerText='Loading...'
  setTimeout(function()
{
  btn.innerText='Finished'
},3000)
}


let addbtn=document.querySelector('addbtn')
let notify=document.getElementById('notify')
function notifyAdd()
{
  notify.innerText='Added'
  setTimeout(function()
{
  notify.innerText=''
},2000)
}