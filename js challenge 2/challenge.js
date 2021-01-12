



var bottomContainer = document.querySelector('.bottom-container');
var submit = document.querySelector('.submit-btn');
var emailInput = document.querySelector('#email-input');
var emailValue = "";
var responseURL = "";
var errorMsg = document.querySelector('.error-msg');
var emailArray = [];



function getImage() {
    $.ajax({
        url:"https://source.unsplash.com/random/500x500",
        cache: false,
        xhrFields:{
            responseType:'blob'
        },
        success:function(data){
            const url = window.URL.createObjectURL(data)
            responseURL = url
            const Image = document.getElementById('img')
            Image.src = url
        },
        error:function(error){
            console.log(error)
        }
    })
} 

function includes(container, value) {
    var returnValue = false;
    var position = container.indexOf(value);
    if (position >= 0) {
        returnValue = true;
    }
    return returnValue;
 }


submit.addEventListener('click', function(){
    if(responseURL == ""){
        alert("Please click Get Random Image");
     } else{
     emailValue = emailInput.value;
    }

    if (emailValue.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
        var newEntry = document.createElement('div');
        bottomContainer.appendChild(newEntry);
        errorMsg.innerHTML = "";
        
        
        result = includes(emailArray, emailValue);
        
        if(result === true){
            newEntry.innerHTML = "<img src=\"" + responseURL + "\">";
        } else {
            newEntry.innerHTML = "<p> \"" + emailValue + "\" </p> <br> <img src= \"" + responseURL + "\">";
            resultTwo = includes(emailArray, emailValue);
            if(resultTwo === false){
                emailArray.push(emailValue);
            }
        }
        
    } else { 
        errorMsg.innerHTML = "<p>Please enter a valid email address and ensure there is an image present!</p>";
    }
});



