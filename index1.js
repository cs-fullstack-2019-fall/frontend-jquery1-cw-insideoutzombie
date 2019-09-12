$(".redText").addClass("text_red");

$(".myElement").addClass("text_blue");
$(".myElement").click(function(e){
    $(e.target).ready(alert("myElement was clicked!"));
});

$("#greenSide").addClass("text_side1");
$("#orangeSide").addClass("text_side2");
