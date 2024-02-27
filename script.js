     
console.log("js initializing")
function check(){
function rand(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
let ele = document.querySelector(".container").children 
Array.from(ele).forEach(e=>{
    e.style.backgroundColor = rand()
    e.style.color = rand()
})
}
function navi(){
    window.location.href='index1.html';
}