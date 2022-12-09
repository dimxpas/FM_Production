jQuery(document).ready(function () {
    var video_flo = document.getElementById("video_demo");
    var slider = document.getElementById("video_vol");

    slider.oninput = function() {
        amount = this.value;
        video_flo.muted = false;
        video_flo.volume = amount;
        video_flo.style.filter = "grayscale(" + (1 - amount) + ")";
        slider.style.backgroundSize = (amount) * 100 + '% 100%';
    }

    function afterVideo() {
        video_flo.muted = true;
        video_flo.classList.add("after-video");
        $("#video_vol, #btn_access").hide();
        $("nav, #bio_section, #project_section, #presta_section").removeClass("hidden");
        $("nav").addClass("header-start-animation");
        setTimeout(() => {
            $("footer").addClass("footer-start-animation");
            $("footer").removeClass("hidden");
        }, 2000);
        $("#bio_section").addClass("bio-start-animation");
        $("#project_section").addClass("project-start-animation");
        $("#presta_section").addClass("presta-start-animation");
    }

    $("#btn_access").click(function() {
        afterVideo();
    });

    $("#video_demo").on("play", function() {
        setTimeout(function() {
            afterVideo();
        }, 21000);
    });

    $(".blurp").mouseenter(function() {
        $(this).addClass("animated blurpMove");
        setTimeout(() => {
        $(this).removeClass("animated blurpMove");
        }, 1000);
    });

});