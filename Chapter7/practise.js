const nums=[10,20,30]
nums[nums.length-1]=99

console.log(nums)

function getLastvalue(arr)
{
  return arr[arr.length-1]
}

console.log(getLastvalue([1,2,22,24,5]))
console.log(getLastvalue(['hi','hello','good']))

function arraySwap(arr)
{
  let index1=arr[0]
  arr[0]=arr[arr.length-1]
  arr[arr.length-1]=index1
  return arr
}

console.log(arraySwap([1,2,22,24,5]))
console.log(arraySwap(['hi','hello','good']))

for(let i=0;i<=10;i++)
  {
    if(i%2==0)
      {
        console.log(i)
      }
  }

for(let i=5;i>=0;i--)
  {
    console.log(i)
  }

let i=5
while(i>=0)
  {
    console.log(i)
    i=i-1
  }

let addArr=[1,2,3]
let newArr=[]
for(let key of addArr)
  {
    newArr.push(key+1)
  }

console.log(newArr)


function addOne(array)
{
  let newArr=[]
  for(let key of array)
  {
    newArr.push(key+1)
  }

  return newArr
}

console.log(addOne([1,2,3]))
console.log(addOne([-2,-1,0,99]))

function addNum(array,num)
{
  let newAr=[]
  for(let key of array)
  {
    newAr.push(key+num)
  }

  return newAr
}

console.log(addNum([1,2,3],2))
console.log(addNum([1,2,3],3))
console.log(addNum([-2,-1,0,99],2))

function addArrays(array1,array2)
{
  let newAddArray=[]
  for(let i=0;i<array1.length;i++)
  {
    newAddArray.push(array1[i]+array2[i])
  }
  return newAddArray
}

console.log(addArrays([1,1,2],[1,1,3]))
console.log(addArrays([1,2,3],[4,5,6]))

function countPositive(nums)
{
  let count=0
  for(let key of nums)
  {
    if(key>=0)
      {
          count+=1
      }
  }
  console.log(count)
}

countPositive([1,-3,5])
countPositive([1,-3,-5,7,0,10])

function minMax(nums)
{
  let arrObject={
    min:0,
    max:0
  }
  for(let key of nums)
    {
      if(key>arrObject.min) //1>0 true -3>1 false 
        {
          arrObject.max=key
        }
      else
      {
        arrObject.min=key
      }
    }
  console.log(arrObject)
}

minMax([1,-3,5])
minMax([2,-3,-5,7,10])











