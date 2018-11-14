particlesJS("particles-js", { "particles": { "number": { "value": 50, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#9bdaed" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#40b0d6" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } }, "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 0.3, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "bubble" }, "onclick": { "enable": false, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; count_particles = document.querySelector('.js-count-particles');;

$(".project.website > div > a").hover(
    function () {
        $("#" + $(this).attr("alt")).addClass("project-background-visible");
        $("#projects-section").addClass("light");
    },
    function () {
        $("#" + $(this).attr("alt")).removeClass("project-background-visible");
        $("#projects-section").removeClass("light");
    }
);

$("#projects-filter > li").click(function() {
    $("#projects-filter > .active").removeClass("active");
    $(".projects > .active").removeClass("active");
    $("." + $(this).attr("alt")).addClass("active");
    $(this).addClass("active");
});

function visible(item) {
    var w = $(window);
    var viewTop = w.scrollTop();
    var viewBottom = viewTop + w.height();
    var top = item.offset().top;
    // var bottom = top + item.height();
    return top < viewBottom;
}

window.onload = function () {

    //varsta
    let currentDate = new Date();

    $(".age").text(" " + currentDate.getFullYear() - 1996 + " ")

    $(".animated:not('.play')").each((index, element) => {
        if (visible($(element)))
            $(element).addClass("play");
    });

    let hamburgerClicked = false;

    //interactiuni hamburger
    // $(".hamburger > svg").on("click", ()=>{
    //     if(!hamburgerClicked){
    //         $(".main").addClass("side-menu")
    //         $(".hamburger").addClass("clicked")
    //         hamburgerClicked = true;
    //     }
    //     else{
    //         $(".main").removeClass("side-menu")
    //         $(".hamburger").removeClass("clicked")
    //         hamburgerClicked = false;
    //     }
    // })
    $(".hamburger").on("click", ()=>{
        if(!hamburgerClicked){
            $(".main.side-menu").removeClass("inactive")
            $(".main.side-menu").addClass("active")
            $(".hamburger").addClass("is-active")
            hamburgerClicked = true;
        }
        else{
            $(".main.side-menu").removeClass("active")
            $(".main.side-menu").addClass("inactive")
            $(".hamburger").removeClass("is-active")
            hamburgerClicked = false;
        }
    })

    var feather1Top = $(".feather1-wrapper").offset().top;
    var feather2Top = $(".feather2-wrapper").offset().top;
    var feather3Top = $(".feather3-wrapper").offset().top;
    var contactTop = $("#contact-section").offset().top;
    var ok = false;

    var viewHeight = $(window).height();

    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();

        // $("#projects-section .header").css("top", scrollTop - $("#projects-section").offset().top + "px");
        // $("#contact-section .header").css("top", scrollTop - $("#contact-section").offset().top + "px");


        //tranzitii hero
        var face = $("#face");
        face.css("transform", "translateX(" + 200/viewHeight*scrollTop + "%)");
        $("#hero-text").css({ "transform": "translateY(" + 80 / viewHeight * scrollTop + "vh)", "opacity": -1.5 / viewHeight * scrollTop + 1 });
        $("#info-area").css("opacity", -2/viewHeight * scrollTop + 1);
        $(".social-media").css({
            "opacity": -2.5/viewHeight * scrollTop + 1,
            "transform": "translateY(" + 70 / viewHeight * scrollTop + "vh"
        });

        //tranzitii header
        if(scrollTop > 30/100*viewHeight){
            $(".header").addClass("play");
            $(".header").removeClass("play-reverse");
            ok=true;
        }
        else{
            $(".header").removeClass("play");
            $(".hamburger").removeClass("is-active")
            $(".main.side-menu").removeClass("active")
            if(hamburgerClicked)
                $(".main.side-menu").addClass("inactive")
            if(ok)
                $(".header").addClass("play-reverse");
        }


        //tranzitii elemente animate
        $(".animated:not('.play')").each((index,element) => {
            if(visible($(element)))
                $(element).addClass("play");
        });
        $(".animated.play").each((index,element) => {
            if(!visible($(element)))
                $(element).removeClass("play");
        });

        //parallax
        if(scrollTop+(viewHeight*2) > feather1Top){
            if ((scrollTop - feather1Top) * 0.5 < 0){
                $(".feather1").css({
                    "top": "100px",
                    "transform": "translate3d(0," + (scrollTop - feather1Top) * 0.5 + "px,0)",
                    "background-position": "center " + -(scrollTop - feather1Top) * 0.5 + "px"
                });
            }
            else{
                $(".feather1").css({
                    "transform": "translate3d(0, 0,0)",
                    "top": (scrollTop - feather1Top) * 0.5 + 100 + "px",
                    "background-position": "center 0px"
                });
            }
        }
        if(scrollTop+(viewHeight*2) > feather2Top){
            if ((scrollTop - feather2Top) * 0.35 < 0){
                $(".feather2").css({
                    "top": "180px",
                    "transform": "translate3d(0," + (scrollTop - feather2Top) * 0.35 + "px,0)",
                    "background-position": "center " + -(scrollTop - feather2Top) * 0.35 + "px"
                });
            }
            else{
                $(".feather2").css({
                    "transform": "translate3d(0, 0,0)",
                    "top": (scrollTop - feather2Top) * 0.35 + 180 + "px",
                    "background-position": "center 0px"
                });
            }
        }
        if(scrollTop+(viewHeight*2) > feather3Top){
            if ((scrollTop - feather3Top) * 0.6 < 0){
                $(".feather3").css({
                    "top": "100px",
                    "transform": "translate3d(0," + (scrollTop - feather3Top) * 0.6 + "px,0)",
                    "background-position": "center " + -(scrollTop - feather3Top) * 0.6 + "px"
                });
            }
            else{
                $(".feather3").css({
                    "transform": "translate3d(0, 0,0)",
                    "top": (scrollTop - feather1Top) * 0.6 + 100 + "px",
                    "background-position": "center 0px"
                });
            }
        }
        if(scrollTop+(viewHeight*2) > contactTop){
            if ((scrollTop - contactTop) * 0.6 < 0){
                $(".hand").css({
                    "top": "0px",
                    "transform": "translate3d(0," + (scrollTop - contactTop) * 0.6 + "px,0)",
                    "background-position": "center " + -(scrollTop - contactTop) * 0.6 + "px"
                });
            }
        }
        if(scrollTop+(viewHeight*2) > contactTop){
            if ((scrollTop - contactTop) * 0.35 < 0){
                $(".pigeon").css({
                    "top": "0px",
                    "transform": "translate3d(0," + (scrollTop - contactTop) * 0.35 + "px,0)",
                    "background-position": "center " + -(scrollTop - contactTop) * 0.35 + "px"
                });
            }
        }

        //tranzitii contact
        $(".copyright").css({
            "opacity": 1 + 2.5 / viewHeight * (scrollTop-contactTop),
            "transform": "translateY(" + -70 / viewHeight * (scrollTop - contactTop) + "vh"
            // "opacity": -2.5 / viewHeight * scrollTop + 1,
            // "transform": "translateY(" + 70 / viewHeight * scrollTop + "vh"
        });


    });

    // website background turns visible on hover
    $(".website").hover(
        function () {
            $("#" + $(this).data("project") + " .title").addClass("play");
            $("#" + $(this).data("project") + " .text").addClass("play");
            $(".feather-wrapper").removeClass("visible");
        },
        function () {
            $("#" + $(this).data("project") + " .title").removeClass("play");
            $("#" + $(this).data("project") + " .text").removeClass("play");
            $(".feather-wrapper").addClass("visible");
        }
    );

}