function sendMessage() {
   $("#my-form").submit(function(e) {
      e.preventDefault();
    
      var $form = $(this);
      $.post($form.attr("action"), $form.serialize()).then(function() {
        alert("Thank you!");
      });
    });
}

/*function sendMessage(){
   var msg = document.getElementById("message").value;
   console.log(msg.value);
   var name = document.getElementById("name").value;

   if(msg == "" || name == ""){
      document.getElementById("submiterror").innerHTML = "<p style='text-align:center;'>You need to enter a name and message!</p>";
      document.getElementById("submiterror").style = "background-color: red;";
      
   }
 if(msg !== "" || name !== ""){
 var url = "https://wissehes.nl/chickenfm.php";
 var params = "name="+name+"&msg="+msg;
 var xhr = new XMLHttpRequest();
 xhr.open("POST", url, true);

 //Send the proper header information along with the request
 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

 xhr.send(params);

 document.getElementById("submitreq").innerHTML = "<p style='text-align:center;'>success!</p>";
 document.getElementById("submiterror").innerHTML = "";

}
}*/