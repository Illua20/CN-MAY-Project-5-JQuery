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

})
