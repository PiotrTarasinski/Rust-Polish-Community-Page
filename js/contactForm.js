
var slider = document.getElementById("rangeh");
var output = document.getElementById("hours");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

var username = $("#username");
var userurl = $("#userurl");

function saveForm(){
    localStorage.setItem("username",username.val());
    localStorage.setItem("userurl",userurl.val());
}

$("#load").click(function(){ 
    username.val(localStorage.getItem("username"));
    userurl.val(localStorage.getItem("userurl"));
});

