const test = document.querySelector(".test")
const button = document.querySelector("button")
button.addEventListener("click",()=>{
    test.innerHTML = "External JavaScript"
})