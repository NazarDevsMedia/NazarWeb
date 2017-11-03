$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(window).ready(function(){
    $(".jumbotron").fadeIn(3000, )
});

//Scroll
$('body').scrollspy({ target: '.navbar' })

//Scroll to Top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("topbtn").style.display = "block";
    } else {
        document.getElementById("topbtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

//Random Color
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


$("#skills").mouseover(function setRandomColor() {
  $("#skills").css("color", getRandomColor());
});
$("#berbahn").mouseover(function setRandomColor() {
  $("#berbahn").css("color", getRandomColor());
});
$("#ausbildung").mouseover(function setRandomColor() {
  $("#ausbildung").css("color", getRandomColor());
});


$('#skills').mouseenter(function() {
  $('#starempty').css('display', 'none');
  $('#starfull').css('display', 'inline-block');
});
$('#skills').mouseleave(function() {
  $('#starfull').css('display', 'none');
  $('#starempty').css('display', 'inline-block');
});

$('#uniwien').mouseenter(function() {
  $('#UW').css('text-decoration', 'underline');
});
$('#uniwien').mouseleave(function() {
  $('#UW').css('text-decoration', 'none');
});


//UNI LINKS
$('#unidnepr').mouseenter(function() {
  $('#ANU').css('text-decoration', 'underline');
});
$('#unidnepr').mouseleave(function() {
  $('#ANU').css('text-decoration', 'none');
});
