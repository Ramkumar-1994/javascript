const myArray=[10,20,30]

console.log(myArray)

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])

myArray[0]=99

console.log(myArray)

console.log(Array.isArray([1,'hello',true,{name:'socks'},[1,2]]))

console.log(myArray.length)

myArray.push(100)
console.log(myArray)

myArray.splice(1,1,30,40)

console.log(myArray)


let arr=[]
function addItems()
{
  let input=document.getElementById('input')
  arr.push(input.value)
  console.log(arr)
}

let listArray=[]
function renderList()
{
  let input=document.getElementById('inputElement')
  listArray.push(input.value)
  input.value=''
  createList()
}


function createList()
{
  
  let container=document.querySelector('.container')
  container.innerHTML=''
  for(let i=0;i<listArray.length;i++)
    {
      let listItems=document.createElement('p')
      container.appendChild(listItems)
      listItems.innerHTML=`${listArray[i]}<button style="margin-left:30px;background-color:green;padding:8px;border:none;cursor:pointer" onclick="listArray.splice(${i},1);
      createList();">Delete</button>`
    }
    console.log(listArray)
}

function newList(event)
{
  if(event.key==='Enter')
    {
      let input=document.getElementById('inputElement')
      let container=document.querySelector('.container')
      let listItems=document.createElement('p')
      container.appendChild(listItems)
      listItems.innerText=input.value
      input.value=''
    }
}



function todoList(event)
{
  if(event.key==='Enter')
    {
      let input=document.getElementById('input')
      arr.push(input.value)
      console.log(arr)
      input.value=''
    }
}