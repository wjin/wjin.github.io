$(document).ready(function () {
    // set interval to 4 seconds(4000)
    slideShow(4000);
});

function slideShow(interval) {
    // append an 'li' item for displaying the caption
    $('ul.slideshow').append('<li id="slideshow-caption" class="caption"><p></p></div></li>');

    // set opacity to 0 for of all images
    $('ul.slideshow li').css({
        opacity: 0.0
    });

    // display first image
    $('ul.slideshow li:first').css({
        opacity: 1.0
    }).addClass('show');

    // get current image's corresponding caption
    $('#slideshow-caption p').html($('ul.slideshow li.show').find('img').attr('alt'));

    // display caption
    $('#slideshow-caption').css({
        opacity: 1,
        bottom: 0
    });

    // show images alternatively
    var intervalId = setInterval('doShow()', interval);

    // pause slideshow when mouse over
    $('ul.slideshow').hover(
        function () {
            clearInterval(intervalId);
        },
        function () {
            intervalId = setInterval('doShow()', interval);
        }
    );
}

function doShow() {
    // get current image
    var current = ($('ul.slideshow li.show') ? $('ul.slideshow li.show') :
        $('#ul.slideshow li:first'));

    // avoid interval issue
    if (current.queue('fx').length == 0) {
        // get the next image 
        // rotate it back to the first image if it reached to the end
        var next = ((current.next().length) ? ((current.next().attr('id') == 'slideshow-caption') ?
                $('ul.slideshow li:first') : current.next()) :
            $('ul.slideshow li:first'));

        // get the next image caption
        var desc = next.find('img').attr('alt');

        // set the fade in effect for the next image
        // it is due to 'show' class has higher z-index in css
        next.css({
            opacity: 0.0
        }).addClass('show').animate({
            opacity: 1.0
        }, 1000);

        // hide the caption first, and then set and display
        $('#slideshow-caption').slideToggle(300, function () {
            $('#slideshow-caption p').html(desc);
            $('#slideshow-caption').slideToggle(500);
        });

        // hide the current image
        current.animate({
            opacity: 0.0
        }, 1000).removeClass('show');
    }
}
