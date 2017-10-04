//JS code goes here

var noDoubleClick = [{id:"0", status:true},
                      {id:"1", status:true},
                      {id:"2", status:true},
                      {id:"3", status:true},
                      {id:"4", status:true},
                      {id:"5", status:true},
                      {id:"6", status:true},
                      {id:"7", status:true},
                      {id:"8", status:true}]
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
    }

  }

  //event.target.innerHTML = turn? "O" : "X"; turn = !turn

}

var cells = document.getElementsByClassName('cell')

for(var i=0; i<cells.length; i++)
{
  cells[i].addEventListener('click', divclicked);
}
