function computerMove()
{
  let computer=Math.floor(Math.random()*3);
  console.log(computer);
  let rps=['Rock','Paper','Scissors'];
  let computerPick=rps[computer];
  return computerPick
}

let score=JSON.parse(localStorage.getItem('score'))
function playGame(rps)
{
  let computerPick=computerMove()
  console.log(computerPick)
  let result=''
  if(rps==='Rock')
  {
      if(computerPick==='Rock')
        {
          result='Tie'
        }
      else if(computerPick==='Paper')
        {
          result='You Lose'
        }
      else if(computerPick==='Scissors')
        {
          result='You Win'
        }
  }
  else if(rps==='Paper')
    {
      if(computerPick==='Paper')
        {
          result='Tie'
        }
      else if(computerPick==='Rock')
        {
          result='You Win'
        }
      else if(computerPick==='Scissors')
        {
          result='You Lose'
        }
    }
  else if(rps==='Scissors')
    {
      if(computerPick==='Scissors')
        {
          result='Tie'
        }
      else if(computerPick==='Paper')
        {
          result='You Win'
        }
      else if(computerPick==='Rock')
        {
          result='You Lose'
        }
    }
  
  if(result==='You Win')
  {
    score.Wins+=1
  }
  else if(result==='You Lose')
  {
    score.Losses+=1
  }
  else if(result==='Tie')
    {
      score.Tie+=1
    }

  localStorage.setItem('score',JSON.stringify(score));
  alert(`You Picked ${rps}.Computer Picked ${computerPick}.${result}\nWins:${score.Wins}.Losses:${score.Losses}.Tie:${score.Tie}`)
}