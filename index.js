let firstvalid = false
let lastvalid=false
let emailvalid=false
let numbervalid=false
let passwordvalid=false
let confirmvalid=false
document.getElementById("buttoncheck").disabled=true

function fevent(){
    let wrongA = document.getElementById("first-error")
    let firstel= document.getElementById("first").value
    const isRight= /^[A-Za-z]{2,}$/


        if(firstel==""){
            wrongA.textContent=""
            
        }
    else if (isRight.test(firstel)){  
    
        wrongA.textContent ="ok"
        wrongA.style.color="green"
        firstvalid =true
    }
    else{
        
        wrongA.textContent ="Invalid !!!!!"
        wrongA.style.color="red"
    }
    console.log("working")
       signin()
}

function levent(){

    let wrongB=document.getElementById("second-error")
     let lastel = document.getElementById("last").value

    const lastRight= /^[A-Za-z]{2,}$/

    
    if(lastel==""){
            wrongB.textContent=""
            
        }

    else if (lastRight.test(lastel)){
        wrongB.textContent ="ok"
        wrongB.style.color="green"
        lastvalid=true
        
    }
    else{
        
         wrongB.textContent ="Invalid !!!!!"
        wrongB.style.color="red"
    }
    console.log("working")
       signin()
}

function Eevent(){
    
      let wrongMsg = document.getElementById("third-error")
    let emailel = document.getElementById("email").value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(emailel)){
        wrongMsg.textContent="Done"
        wrongMsg.style.color= "green"
        emailvalid=true
    }
    else{
        wrongMsg.textContent = "Invalid email address!!. Please try again."
        wrongMsg.style.color ="red";
    }

    console.log("Email value:", emailel);
       signin()
}

function nevent(){

    let wrongC= document.getElementById("fourth-error")
    let phoneel = document.getElementById("phone").value

    const phoneRegex = /^(98|97)\d{8}$/;

    if (phoneRegex.test(phoneel)){
        wrongC.textContent= "done"
        wrongC.style.color="green"
        numbervalid=true
    }
    else{
        wrongC.textContent= "Invalid!!"
        wrongC.style.color="red"
    }
    console.log("working")

       signin()
}

function pevent(){
    let passwordel = document.getElementById("password").value

    let wrongD=document.getElementById("fifth-error")
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (passwordRegex.test(passwordel)){
        wrongD.textContent= "done"
        wrongD.style.color="green"
        passwordvalid=true
    }
    else{
        wrongD.textContent= "should contain minimum 8 characters,atleast 1 letter, atleast 1 number and no spaces."
        wrongD.style.color="red"
    }

       signin()
}

function cevent(){
     let passwordel = document.getElementById("password").value
    let confirmel = document.getElementById("confirm").value

    let wrongE= document.getElementById("sixth-error")
    if (confirmel==passwordel && confirmel!=""){
        wrongE.textContent="password matched."
        wrongE.style.color="green"
        confirmvalid=true
    }
    else{
        wrongE.textContent="password dont match!!"
        wrongE.style.color="red"
    }
    signin()
}
function signin(){
   
    if(
        firstvalid && lastvalid && emailvalid 
        && numbervalid && passwordvalid && confirmvalid 
    ){
        document.getElementById("buttoncheck").disabled=false
    }
    else{
        document.getElementById("buttoncheck").disabled=true
    }

}





