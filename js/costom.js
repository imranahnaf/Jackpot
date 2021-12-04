$(function () {
    new WOW().init();
    // ****** pricing animate css js ****** //
    

});

$('.para1').hide();
$('.para2').hide();
$('.para3').hide();
$('.para4').hide();

$(document).ready(function () {
    $(".item1").click(function () {
		$('.para1').toggle();
    });
    
    $(".item2").click(function () {
		$('.para2').toggle();
    });

    $(".item3").click(function () {
		$('.para3').toggle();
    });

    $(".item4").click(function () {
		$('.para4').toggle();
    });
    
});

        
