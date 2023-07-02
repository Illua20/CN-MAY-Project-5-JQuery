$(document).ready(function(){

    //hide tag p
    $( "p" ).on( "click", function() {
    $( this ).hide();
    });

    //hide id (#)
    $( "#HideThis" ).on( "click", function() {
    $( "p" ).hide();
    });


    // Box
    $( "#btnShow" ).on( "click", function() {
        $( ".box" ).show();
     });
    
    $( "#btnHide" ).on( "click", function() {
        $( ".box" ).hide();
    });

    $( "#toggle" ).on( "click", function() {
        $( ".box" ).fadeToggle();
    });

    $( "#clicktobig" ).on( "click", function() {
        $( ".box" ).animate({
            width:"300px",
            height: "300px",
            marginLeft: "100px",
        }, 500).css({
            "background-color": "yellow"
        });
    });

    $( "#clicktosmall" ).on( "click", function() {
        $( ".box" ).animate({
            width:"100px",
            height: "100px",
            marginLeft: "0px"
        }, 500).css({
            "background-color": "#dedede"
        });
    });
    
    //dblclick - class (.)
    $( ".dbl_click" ).on( "dblclick", function() {
        $( "#HideThis" ).show();
    })
    
    // On Change
    $( ".inputName" ).on( "change", function() {
        $( ".alert-name" ).show();
    })

    // On Blur
    $( ".inputAddress" ).on( "blur", function() {
        $( ".alert-address" ).show();
    })

    $("a").on( "click", function(e) {
        e.preventDefault()
    })

    // Pointer Coordinate
    $(document).mousemove(function(e){
        $(".pointerCount").text('X: '+e.pageX+'Y: '+e.pageY)
    })

    // Add Class - Remove Class
    $(".text").on( "click", function() {
        $(".text").addClass('disabled')
    })

    $(".text2").on( "click", function() {
        $(".text").removeClass('disabled')
      })

    //   Product Tab
    $('.product-item').hide()
    $('.product-item:first').show()

    $('.product-colors li a:not(:first)').addClass('inactive')

    $('.product-colors li a').on('click',function(){
        const n = $(this).attr('id')
        if($(this).hasClass('inactive')){
            $('.product-colors li a').addClass('inactive')
            $(this).removeClass('inactive')
        }

    $('.product-item').hide()
    $('#'+n+'image').fadeIn(500)    
    })

    $(".regular").slick({
        dots: true,
        infinite: true,
        slideToShow: 3,
        slidetoScroll: 3,
        centerMode: true,
        centerPadding: '50px',

    })
})
