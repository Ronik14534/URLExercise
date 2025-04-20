let backgroundColors=["white","red","green","blue","orange"]
let backgroundButton=document.getElementById("backgroundButton")
const url=new URL(window.location.href)
const params=new URLSearchParams(url.search)
let text=document.getElementById("text")
let textButton=document.getElementById("textButton")
let textColors=["black","red","green","blue","yellow"]

console.log(params)
for (const [key, value] of params) {
    if (key=="bgcolor"){
        document.body.style.backgroundColor=backgroundColors[value%(backgroundColors.length)]

    }
    if(key=="textcolor"){
        text.style.color=textColors[value%(textColors.length)]
    }
}
function changeBackgroundColor(){
    let bgColorIndex
    if (params.get("bgcolor")){
        bgColorIndex=parseInt(params.get("bgcolor"))
    }
    else {
        bgColorIndex=0
    }
    bgColorIndex=(bgColorIndex+1)%(backgroundColors.length)
    params.set("bgcolor",bgColorIndex)  
    console.log(params.get("bgcolor"))
    console.log(bgColorIndex)
    window.location.href=`?${params}`
}
backgroundButton.addEventListener("click",changeBackgroundColor)

function changeTextColor(){
    let textColorIndex
    if (params.get("textcolor")){
        textColorIndex=parseInt(params.get("textcolor"))
    }
    else {
        textColorIndex=0
    }
    textColorIndex=(textColorIndex+1)%(textColors.length)
    params.set("textcolor",textColorIndex)
    window.location.href=`?${params}`
    console.log(textColorIndex)

}
textButton.addEventListener("click",changeTextColor)

