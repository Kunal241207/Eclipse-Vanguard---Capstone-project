let container = document.getElementById("container");
let registerBtn = document.getElementById("register");
let loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", function(){
    container.classList.add("active");
});

loginBtn.addEventListener("click",function(){
    container.classList.remove("active");
});