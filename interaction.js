const button = document.querySelector("#button"); 
const message = document.querySelector("#message");

function changeMessage(){
    message.textContent="Button has been #clicked";
}

button.addEventListener("click",changeMessage);
