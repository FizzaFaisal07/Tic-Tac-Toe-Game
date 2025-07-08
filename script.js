let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let turnO=true;   //playerX,playerO
let newGameBtn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg");    //class
let m_id=document.querySelector("#msg");    //msg id

//2D Array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>
{
turnO=true;
enableBoxes();
 msgContainer.classList.add("hide");
};


 boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
   
    if(turnO)
    {
        box.innerText="O";
        box.classList.add("o-mark");;
        turnO=false;
    }
    else
    {
        box.innerText="X";
        box.classList.add("x-mark");    //class for color
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
    });
});


  //disable buttons

const disableBoxes=()=>
{
for(let box of boxes)
{
    box.disabled=true;
}
};
//enable buttons
const enableBoxes=()=>
{
for(let box of boxes)
{
    box.disabled=false;
    box.innerText= "";
     box.classList.remove("x-mark", "o-mark");
}
};
//show winner
const showWinner=(winner)=>
{
    m_id.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

 //check winner
const checkWinner=()=>
{
    for(let pattern of winPatterns)
    {
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
  if(pos1 !="" && pos2!=""&& pos3 !="")
  {
  if(pos1 === pos2 && pos2 === pos3)
  {
         showWinner(pos1);
  }} }
               //draw condition
  let isDraw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        m_id.innerText = "Game ended in a Draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

newGameBtn.addEventListener("click",resetGame);  
resetBtn.addEventListener("click",resetGame);   //reset button
