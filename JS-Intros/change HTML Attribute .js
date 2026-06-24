const light = document.querySelector(".light")
const onButton = document.querySelector(".on")
const offButton = document.querySelector(".off")

onButton.addEventListener("click", () => {
    light.src = "./asset/pic_bulbon.gif"
})

offButton.addEventListener("click", () => {
    light.src = "./asset/pic_bulboff.gif"
})