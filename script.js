<script>
  setTimeout(function() {
    // show the pop-up message
    document.getElementById("popup").style.display = "block";

    // animate the transition between old and new websites
    document.getElementById("old-website").style.transform = "translateX(-100%)";
    document.getElementById("new-website").style.transform = "translateX(0)";
  }, 7000);
</script>
