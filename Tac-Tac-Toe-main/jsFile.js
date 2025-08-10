let btns = document.querySelectorAll('.btn');//all btns
let msg = document.querySelector('.win');// show winning status heading
let newGame = document.querySelector('.newGame');
let reset = document.querySelector('.reset');

newGame.addEventListener('click', ()=>{
    enableboxes();
    msg.classList.add('win');
})
//reset game
reset.addEventListener('click',()=>{
    enableboxes();
    msg.classList.add('win');
})
//winning patterns
const patterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turnx = true;//turn o/x
//for each button eventlistener
btns.forEach((btn) => {
    btn.addEventListener('click',()=>{
        if(turnx){
            btn.innerText = 'X';
            turnx = false;
        }
        else{
            btn.innerText = 'O';
            turnx = true;
        }
        btn.disabled = true;
        checkwinner();
    });
});
//to check winner
const checkwinner = () =>{
    for (const pattern of patterns) {
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner();
            }
        }
    }
}
//to show winner
const showWinner = ()=>{
    if(!turnx){
        msg.innerText = 'winner X';
        msg.classList.remove('win');
        disableboxes();
    }
    else{
        msg.innerText = 'winner O';
        msg.classList.remove('win');
        disableboxes();
    }
}
const disableboxes = ()=>{
    for (const btn of btns) {
        btn.disabled = true;
    }
}
const enableboxes = ()=>{
    for (const btn of btns) {
        btn.disabled = false;
        btn.innerText = '';
    }
}