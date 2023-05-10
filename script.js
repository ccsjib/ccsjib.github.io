window.onload = function() {
  setTimeout(function() {
    document.getElementById('old-website').style.display = 'none';
    document.getElementById('new-website').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    setTimeout(function() {
      document.getElementById('popup').style.display = 'none';
    }, 5000);
    setTimeout(function() {
      document.getElementById('popup').style.display = 'block';
      document.getElementById('new-website').style.display = 'none';

    }, 7000);
  }, 7000);
};
