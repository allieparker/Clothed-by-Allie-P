

 //*** CLASS REQUIRMENT OF JAVASCRIPT CHANGING TEXT WHEN HOVERED OVER PHOTOS***  
function upDate(element) {
    document.getElementById('image').innerHTML = element.alt;
  }
  function unDo(){
    document.getElementById('image').innerHTML = "Sample Work";
  }
  function openFunction(){
    el = document.getElementById("content");
    el.style.display = "block";
  }
  function closeFunction(){
    el = document.getElementById("content");
    el.style.display = "none";
  }