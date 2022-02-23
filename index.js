
// add event listener to collapse navbar on click

// $(".navbar-collapse a").click(function(){
//   $(".navbar-collapse").slideToggle();
//   $(".navbar-toggler").toggleClass("collapsed");
//   $(".navbar-toggler").
// });



// FAQ accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active1");

    /* Toggle between hiding and showing the active panel */
    // Make animated transition
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// Case studies Read More
var readMore = document.getElementsByClassName("case-btn");
var i;

for (i = 0; i < readMore.length; i++){
  readMore[i].addEventListener("click", function(){

    this.style.display = "none";
});
}
