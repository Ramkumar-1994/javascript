const product={
  name:'socks',
  price:1090
};

console.log(product);
console.log(product.name);
console.log(product.price);

product.name='cotton socks'
console.log(product.name)

console.log(product['name'])
product.newProperty=true
console.log(product)

delete product.newProperty
console.log(product)

let stats={
  wins:0,
  Losses:0,
  Tie:0
}

function generateResult()
{
  let matchResult=['Wins','Losses','Tie']
  let random=Math.floor(Math.random()*3)
  console.log(random)
  return matchResult[random]
}

// let result=generateResult()
function gamePlay()
{
  let result=generateResult()
  if(result==='Wins')
    {
      stats.wins+=1
    }
  else if(result==='Losses')
    {
      stats.Losses+=1
    }
  else
  {
    stats.Tie+=1
  }
  alert(`wins:${stats.wins}.Losses ${stats.Losses} Tie:${stats.Tie}`)
}

const product2={
  name:'shirt',
  ['delivery-time']:'1 day',
  rating:{
    stars:4.5,
    count:87
  },
  fun:function func1()
  {
    console.log('function inside object')
  }
}

console.log(product2.rating.count)

product2.fun()
console.log(product2.name)
console.log(product2['name'])

// Convert objects into JSON
console.log(JSON.stringify(product2))
let data=JSON.stringify(product2)

// Converts JSON to objects
console.log(JSON.parse(data))

// String Methods
console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1={
  message:'hello'
}

const object2=object1

object2.message='hey'

console.log(object1)

const object3={
  message:'hey',
  name:'rohit'
}

// destructuring
const { message,name }=object3
console.log(message)
console.log(name)

console.log(object3.message===object1.message)
console.log(object3===object1)

const object={
  message:message,
  
}





















