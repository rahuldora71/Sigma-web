console.log("Script.js initialized")

// let boxes=document.getElementsByClassName("box")
let boxes=document.querySelector(".container").children

console.log(boxes)


function getRandomColor(){
    let min=0
    let max=255

    let c1=Math. floor(Math. random() * (max - min + 1)) + min
    let c2=Math. floor(Math. random() * (max - min + 1)) + min
    let c3=Math. floor(Math. random() * (max - min + 1)) + min
    // console.log(`rgb(${c1},${c2},${c3})`)
    return `rgb(${c1},${c2},${c3})`

}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()

    console.log(e)
    
})

