const hElement = document.getElementById("loginOrRegister");
const passing = document.getElementById("passwordId");
const emailing = document.getElementById("emailId")
function smoothing(a){
    setTimeout(() => {
        hElement.innerText = a
        hElement.style.opacity = "1";
        },500)
}


passing.addEventListener("focus",() => {
    hElement.style.opacity = "0";
       smoothing("Enter your password")  
});
emailing.addEventListener("focus",() => {
    hElement.style.opacity = "0";
    smoothing("Enter your email") 
});
passing.addEventListener("blur",() => {
    hElement.style.opacity = "0";
    smoothing("login or register")
});
emailing.addEventListener("blur",() => {
    hElement.style.opacity = "0";
    smoothing("login or register")
});


function passcode(event) {
const pass = document.getElementById("passwordId").value;
const em = document.getElementById("emailId").value;
    if(em === "" || !em.slice(-10).includes("@gmail.com")){
        hElement.style.opacity = "0";
       smoothing("not a valid email")
    }else if(pass.length < 8){
        hElement.style.opacity = "0";
       smoothing("password must be more than 8 characters")
    }else if(pass.length >= 8 && em !== "" && em.slice(-10).includes("@gmail.com")){
        hElement.style.opacity = "0";
        smoothing("Login successful") 
    }
}  


    
const loginForm = document.querySelector(".loginform");
const dayMode = document.querySelector(".sliderDay");
const nightMode = document.querySelector(".sliderNight");
const themeSwitch = document.getElementById("themeSwitch");
const switchLabel = document.querySelector(".switch");
themeSwitch.addEventListener("change", () => {

    if (themeSwitch.checked) {
        document.body.style.opacity = "0";
        setTimeout(() => {
        loginForm.style.border = "solid 1px black"
        document.body.style.opacity = "1"
        document.body.style.backgroundImage = 'url("night.mode.png")';
        dayMode.style.display = "block";
        dayMode.style.background = "black";
        dayMode.style.color = "white";
        nightMode.style.display = "none";
        },200)
        
    } else {
        document.body.style.opacity = "0";
        setTimeout(() => {
        document.body.style.opacity = "1"
        document.body.style.backgroundImage = 'url("day.mode.png")';
        nightMode.style.display = "block";
        nightMode.style.background = "white";
        nightMode.style.color = "black";
        dayMode.style.display = "none";
            },200)
        
    }

});







