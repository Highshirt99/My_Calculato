let ans = document.getElementById("ans");
let clear = document.getElementById("clear");
let del = document.getElementById("del");
let equ = document.getElementById("=");

clear.addEventListener("click", clearAll = () => ans.innerHTML = "")

function display(num){ ans.textContent += num;
}


del.addEventListener("click", del = () =>{ 
    let  valAns = ans.innerText;
   ans.innerText = valAns.substring( 0, valAns.length-1)
}
   )



function evaluateResult(sign) {
    ans.innerText += sign
    
     }

   
    equ.addEventListener("click", showResult = () => {
        let res = ans.innerText
        if(res){
try{
    ans.innerText = eval(res);
}

catch(e){
    ans.innerText = "Syntax Error"
}
        }
    }
    )


   