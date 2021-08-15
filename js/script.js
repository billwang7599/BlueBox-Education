$("#burger-icon").click(function(){
    $(".collapse-container").css("visibility", "visible")
    disableScroll()
})

$('body').click(function(e){
    if(e.clientX > $('#collapse-content').width()+20){
        $(".collapse-container").css("visibility", "hidden")
        enableScroll()
    }
});

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};}

$("#login").click(function(){
    $(".login-screen-container").css("visibility", "visible")
    disableScroll()
})
