//form element events


document.getElementById("fname").addEventListener("blur", function(){
    if(this.value !== ""){
        fnameWarning.innerHTML = "";
  }
});

document.getElementById("lname").addEventListener("blur", function(){
    if(this.value !== ""){
        lnameWarning.innerHTML = "";
  }
});

document.getElementById("address1").addEventListener("blur", function(){
    if(this.value !== ""){
        address1Warning.innerHTML = "";
  }
});

document.getElementById("city").addEventListener("blur", function(){
    if(this.value !== ""){
        cityWarning.innerHTML = "";
  }
});

document.getElementById("country").addEventListener("click", function(){
    if(profile.country.options.selectedIndex !== 0){
        countryWarning.innerHTML = "";
    }
    });
document.getElementById("province").addEventListener("click", function(){
        if(profile.province.options.selectedIndex !== 0){
            provinceWarning.innerHTML = "";
        }
  });

document.profile.addEventListener("submit", validate.validateProfile);
