//JS code goes here

var noDoubleClick = [{id:"0", status:true,  mark:"*"},
                      {id:"1", status:true,  mark:"*"},
                      {id:"2", status:true,  mark:"*"},
                      {id:"3", status:true,  mark:"*"},
                      {id:"4", status:true,  mark:"*"},
                      {id:"5", status:true,  mark:"*"},
                      {id:"6", status:true,  mark:"*"},
                      {id:"7", status:true,  mark:"*"},
                      {id:"8", status:true,  mark:"*"}]

var winners = new Array();
  winners.push([0, 1, 2]);
  winners.push([3, 4, 5]);
  winners.push([6, 7, 8]);
  winners.push([0, 3, 6]);
  winners.push([1, 4, 7]);
  winners.push([2, 5, 8]);
  winners.push([0, 4, 8]);
  winners.push([2, 4, 6]);


  function isWinner(Us)
  {
      if(noDoubleClick[0].status == false && noDoubleClick[1].status == false && noDoubleClick[2].status == false && noDoubleClick[0].mark == Us && noDoubleClick[1].mark == Us && noDoubleClick[2].mark == Us)
      {
        return true;
      }
      if(noDoubleClick[3].status == false && noDoubleClick[4].status == false && noDoubleClick[5].status == false && noDoubleClick[3].mark == Us && noDoubleClick[4].mark == Us && noDoubleClick[5].mark == Us)
      {
        return true;
      }
      if(noDoubleClick[6].status == false && noDoubleClick[7].status == false && noDoubleClick[8].status == false && noDoubleClick[6].mark == Us && noDoubleClick[7].mark == Us && noDoubleClick[8].mark == Us)
      {
        return true;
      }
      if(noDoubleClick[0].status == false && noDoubleClick[3].status == false && noDoubleClick[6].status == false && noDoubleClick[0].mark == Us && noDoubleClick[3].mark == Us && noDoubleClick[6].mark == Us)
      {
        return true;
      }
      if(noDoubleClick[1].status == false && noDoubleClick[4].status == false && noDoubleClick[7].status == false && noDoubleClick[1].mark == Us && noDoubleClick[4].mark == Us && noDoubleClick[7].mark == Us)
      {
        return true;
      }
      if(noDoubleClick[2].status == false && noDoubleClick[5].status == false && noDoubleClick[8].status == false && noDoubleClick[2].mark == Us && noDoubleClick[5].mark == Us && noDoubleClick[8].mark == Us)
      {
        return true;
      }
      if(noDoubleClick[0].status == false && noDoubleClick[4].status == false && noDoubleClick[8].status == false && noDoubleClick[0].mark == Us && noDoubleClick[4].mark == Us && noDoubleClick[8].mark == Us)
      {
        return true;
      }
      if(noDoubleClick[2].status == false && noDoubleClick[4].status == false && noDoubleClick[6].status == false && noDoubleClick[2].mark == Us && noDoubleClick[4].mark == Us && noDoubleClick[6].mark == Us)
      {
        return true;
      }

      return false;

  }

  var xw = 0;

  var ow = 0;


//isWinner();

var turn = true;
function divclicked(event)
{
  console.log(event);
  if(turn)
  {
    if(noDoubleClick[parseInt(event.target.id)].status)
    {
      event.target.innerHTML = "X";
      turn = false;
      console.log(event.target.id+ "");
      noDoubleClick[parseInt(event.target.id)].status = false;
      noDoubleClick[parseInt(event.target.id)].mark = "X";
      if(isWinner("X"))
      {
        alert("X player Wins !")
        xw++;
        document.getElementById("xwon").innerHTML = xw;
        document.getElementById("olost").innerHTML = xw;

        var cells = document.getElementsByClassName('cell')

        for(var i=0; i<cells.length; i++)
        {
          cells[i].innerHTML = "";

          noDoubleClick[i].status = true;
          noDoubleClick[i].mark = true;
        }
      }
    }

  }
  else
  {
    if(noDoubleClick[parseInt(event.target.id)].status)
    {
      event.target.innerHTML = "O";
      turn = true;
      console.log(event.target.id);
      noDoubleClick[parseInt(event.target.id)].status = false;
      noDoubleClick[parseInt(event.target.id)].mark = "O";
      if(isWinner("O"))
      {
        alert("O player Wins !")
        ow++;
        document.getElementById("owon").innerHTML = ow;
        document.getElementById("xlost").innerHTML = ow;

        var cells = document.getElementsByClassName('cell')

        for(var i=0; i<cells.length; i++)
        {
          cells[i].innerHTML = "";
          noDoubleClick[i].status = true;
          noDoubleClick[i].mark = true;
        }
      }
    }

  }

  //event.target.innerHTML = turn? "O" : "X"; turn = !turn

}

var cells = document.getElementsByClassName('cell')

for(var i=0; i<cells.length; i++)
{
  cells[i].addEventListener('click', divclicked);
}

function LoadNew()
{
  window.location.reload();

}
