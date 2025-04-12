let backgroundColors=["white","red","green","blue","orange"]
let bgColorIndex=0
let backgroundButton=document.getElementById("backgroundButton")
function changeBackgroundColor(){
    bgColorIndex=(bgColorIndex+1)%(backgroundColors.length)
    document.body.style.backgroundColor=backgroundColors[bgColorIndex]
    console.log(bgColorIndex)
}
backgroundButton.addEventListener("click",changeBackgroundColor)
