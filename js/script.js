// ========= js part start 

let box=document.querySelectorAll(".box")

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turn=true;

box.forEach((item)=>{
    item.addEventListener("click",()=>{
       if(turn){
        item.innerHTML="X"
        turn=false
        item.disabled=true
        item.style="color:red";
       
       }else{
        item.innerHTML="0"
        turn=true
        item.disabled=true
        item.style="color:green";
   
        
       }
       winner()
    })
})
function winner(){

    for(pattern of winPattern){
    
        let num1=box[pattern[0]]
        let num2=box[pattern[1]]
        let num3=box[pattern[2]]
        console.log(box)
        console.log(pattern)
    }
}
