let link = document.getElementById("link") ;
console.log(link);

let btn = document.getElementById("btn") ;

let toDisplay = document.getElementById("qrCode") 

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(link.value){
        getQrCode()
    }
    else{
        console.log("error");
        
    }
    
})

/*
async function getQrCode(){
    let response = await fetch("http://localhost:3000/qr",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({data:link.value})
    }) 
    response = await response.json()
    console.log(response);
    let img = document.createElement("img")
    img.src=response
    toDisplay.innerHTML=""
    toDisplay.append(img)
}
*/

async function getQrCode(){
    let response = await fetch("http://localhost:3000/qr?link=${link.value")
    response = await response.json()
    console.log(response);
    let img = document.createElement("img")
    img.src=response
    toDisplay.innerHTML=""
    toDisplay.append(img)
}



// async function getQrCode(){           //get request
//     let response = await fetch(`http://localhost:3000/qr?link=${link.value}`)    //${} - wrapping in template literals | link=${link.value} - query
//     response = await response.json()
//     console.log(response);
//     let img = document.createElement("img")
//     img.src=response
//     toDisplay.innerHTML=" "   // by using this, if we click submit again qr-code will not be created again
//     toDisplay.append(img)
// }

// // for get request - body is not required


