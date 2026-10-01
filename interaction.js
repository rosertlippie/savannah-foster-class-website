const button = document.querySelector("#button"); 
const message = document.querySelector("#message");

function chnageMessage(){
    message.textContent="Button has been #clicked";
}

button.addEventListener("click",changeMessage);
