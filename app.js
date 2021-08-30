let decrement = document.querySelector("#decrease");
let reset = document.querySelector("#reset");
let increment = document.querySelector("#increase");
let value = document.querySelector("#value");

let count = 0;

increment.addEventListener("click", () => {
    count++;
    value.innerText = count;
    if(count>0){
        value.style.color = "green";
    }
});
reset.addEventListener("click", () => {
    count = 0;
    value.innerText =count;
    value.style.color = "black";
});
decrement.addEventListener("click", () => {
    count--;
    value.innerText =count;
    if(count<0){
        value.style.color = "red";
    }
});


