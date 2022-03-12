document.querySelector("a").addEventListener("click", function(){
    var buttoninnerHTML = this.innerHTML;  
    
    
    var countryCode = prompt("enter country code ");
    var phoneNo = prompt("enter WhatsApp bumber ");

var attachment1 = "http://wa.me/+"+ countryCode + phoneNo;
var link1 = document.querySelector("a");
link1.setAttribute("href",attachment1);

    

    
});