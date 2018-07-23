// Activate Carousel
$("#characterCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#characterCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#characterCarousel").carousel("prev");
});
