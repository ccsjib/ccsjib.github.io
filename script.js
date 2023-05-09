window.onload = function() {
  setTimeout(function(){
    var old_website = document.getElementById("old-website");
    var new_website = document.getElementById("new-website");
    var popup = document.getElementById("popup");
    
    old_website.style.display = "none";
    new_website.style.display = "block";
    
    popup.style.display = "block";
    
    setTimeout(function(){
      popup.style.display = "none";
    }, 5000);
  }, 7000);
};
