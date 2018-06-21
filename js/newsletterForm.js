function validateForm() {
    
    var actualMail = $("#mail").val();
    
    if(localStorage.getItem("newsletter-mail")!=actualMail){
        alert("Zostałeś zapisany do newsletteru!");
        localStorage.setItem("newsletter-mail",actualMail);
    }
    else{
        alert("Ten e-mail jest już zapisany do newslettera!");
    }
    
}


