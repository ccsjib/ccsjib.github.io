window.onload = function() {
  setTimeout(function() {
    document.getElementById('old-website').style.display = 'none';
    document.getElementById('new-website').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    setTimeout(function() {
      document.getElementById('popup').style.display = 'none';
    }, 5000);
  }, 7000);
};
