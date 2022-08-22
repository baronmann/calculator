//selectors

const input = document.querySelector(".input");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventListener
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

//calculatorFunction
function calculate(){
  let buttonText = this.innerText;
  if(buttonText==="C"){
    input.innerText = "";
    result.innerText = "0";
    return;
  }

  if(buttonText==="DEL"){
    input.textContent = input.textContent.substr(0,input.textContent.length-1);
        return;
  }

  if(buttonText==="="){
    result.innerText = eval(input.innerText);
    return;
  }

  else{
    input.textContent += buttonText;
    return;
  }

  
}