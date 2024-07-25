const todo=[
  'make dinner',
  'wash dishes',
  'Watch youtube'
]

for(let index=0;index<=todo.length-1;index++)
  {
    console.log(todo[index])
  }

// Accumulator Pattern

const nums=[1,1,3]
let total=0

for(let key of nums)
  {
    total=total+key
  }

console.log(total)

let newArray=[]
for(let key of nums)
  {
    newArray.push(key*2)
  }

console.log(newArray)