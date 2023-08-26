$(document).ready(function(){
    jQuery.validator.addMethod("noSpace", function(value, element) { 
        return value == '' || value.trim().length != 0;  
      }, "No space please and don't leave it empty");
    $("#signup-form").validate({
      rules:{
        Name:{
          required:true,
          minlength:4,
          noSpace:true
        },
        Email:{
          required:true,
          email:true
        },
        Subject:{
          required:true,
          minlength:4,
          maxlength:20,
          noSpace:true
        },
       Message:{
          required:true,
          minlength:50,
          noSpace:true
        }
      
      },
        messages:{
         Name:{
          required:"enter the name ",
          minlength:"should enter atleast 4 characters"
         },
         Email:{
            required: "Enter your Email",
                  email: "Please enter a valid email address."
  
         },
         Subject:{
          minlength:"should enter atleast 4 characters",
          maxlength:"maxLength is 20 characters"
         },
        Message:{
          required:"fill the text area"
         }
  
  
         
        },
        highlight: function (element) {
                  $(element).parent().addClass('error')
              },
              unhighlight: function (element) {
                  $(element).parent().removeClass('error')
              }
    })
  })