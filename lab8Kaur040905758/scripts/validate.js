//validate module
var validate = (function(){

  var  validateProfile = function(e){

    //create private and public functions/objects/variables to validate the form
    e.preventDefault();

    var valid=true;

    if(profile.fname.value === ""){
     document.getElementById('fnameWarning').innerHTML="*Please enter a First Name*";
      valid = false;
    }

    if(profile.lname.value == ""){
          document.getElementById('lnameWarning').innerHTML="*Please enter a Last Name*";
          valid=false;
    }
    if(profile.address1.value == ""){
          document.getElementById('address1Warning').innerHTML="*Please enter a address*";
          valid=false;
     }
    if(profile.city.value == ""){
        document.getElementById('cityWarning').innerHTML="*Please enter a city*";
        valid=false;
      }

    if(profile.province.options.selectedIndex === 0 ){
        valid=false;
        document.getElementById('provinceWarning').innerHTML="*Please choose atleast one province*";
    }
    if(profile.country.options.selectedIndex === 0 ){
      valid=false;
      document.getElementById('countryWarning').innerHTML="*Please choose atleat one country*";

      }
          if (valid){
            alert("Thank you !");

           }
          else{
            alert("Invalid Form")
          }
          return valid;
          };
          return {
            validateProfile:validateProfile
        };

}());
