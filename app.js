//better approach and dynamic
function method1(){

    let btns= document.querySelectorAll(".button")
    btns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            document.body.style.backgroundColor= e.target.id
          // console.log(e.target.id);
        })
     
    })

}

function method2(){

let grey = document.querySelector("#grey")

grey.addEventListener("click",()=>{
    //alert("grey ")
   // console.log(grey.style.backgroundColor);
    document.body.style.backgroundColor = "grey"
})
let yellow = document.querySelector("#yellow")
yellow.addEventListener("click",()=>{
    //alert("grey ")
  //  console.log(grey.style.backgroundColor);
    document.body.style.backgroundColor = "yellow"
})
let blue= document.querySelector("#blue")
blue.addEventListener("click",()=>{
    //alert("grey ")
  //  console.log(grey.style.backgroundColor);
    document.body.style.backgroundColor = "blue"
})
let beige = document.querySelector("#beige")
beige.addEventListener("click",()=>{
    //alert("grey ")
  //  console.log(grey.style.backgroundColor);
    document.body.style.backgroundColor = "beige"
})

}
method1()
//method2()

