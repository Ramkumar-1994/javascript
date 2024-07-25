// function function1()
// {
//   console.log('Hello');
//   console.log(2+2);
// }

// function1();
// function1();

// function calculateTax(price,taxPer)
// {
//   let tax=taxPer/100
//   let taxCost=price*tax
//   console.log(taxCost)
// }

// calculateTax(5000,10)
// calculateTax(3000,10)

function greet()
{
  console.log('Hello')
}

greet()

function greet(name)
{
  if(name!=undefined)
    {
      console.log(`Hello ${name}`)
    }
  else
  {
    console.log('Hi There')
  }
  
}

greet('Simon')
greet()

function convertToFahrenheit(celsius)
{
  let fahrenheit=(celsius*9/5)+32
  console.log(fahrenheit)
}

convertToFahrenheit(25)

function convertToCelsius(fahrenheit)
{
  let celsius=(fahrenheit-32)*5/9
  console.log(celsius)
}
convertToCelsius(86)

function convertTemperature(degree,unit)
{
  if(unit==='F')
    {
      let celsius=(degree-32)*5/9
      console.log(celsius)
    }
  else
  {
    let fahrenheit=(degree*9/5)+32
    console.log(fahrenheit)
  }
}

convertTemperature(25,'C')
convertTemperature(86,'F')

function convertLength(length,from,to)
{
  if(from==='miles' && to==='km')
    {
      let distance=length*1.6
      console.log(`${distance}km`)
    }
  else if(from==='km' && to==='miles')
    {
    let distance=length/1.6
    console.log(`${distance}miles`)
    }

  else if(from==='km'&& to==='km')
    {
          let distance=length*1
          console.log(`${distance}km`)
    }
  else if(from==='miles' && to==='miles')
    {
    let distance=length*1
    console.log(`${distance}miles`)
    }
  else if(from==='miles'&& to==='ft')
    {
      let distance=length*5280
      console.log(`${distance}ft`)
    }
  else if(from==='km'&& to==='ft')
      {
        let distance=length*3281
        console.log(`${distance}ft`)
      }
  else
  {
    console.log(`Invalid unit:${from}`)
  }
  
}

convertLength(50,'miles','km')
convertLength(32,'km','miles')
convertLength(50,'km','km')
convertLength(30,'miles','miles')
convertLength(5,'miles','km')
convertLength(5,'miles','ft')
convertLength(5,'km','ft')
convertLength(5,'lbs','lbs')












