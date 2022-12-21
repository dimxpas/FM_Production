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
        $("#video_container").css("perspective", "none");
    }

    $("#btn_access").click(function() {
        afterVideo();
    });

    $("#video_demo").on("play", function() {
        $("#video_demo").addClass("animated-video");
        setTimeout(function() {
            afterVideo();
            $("#video_demo").removeClass("animated-video");
        }, 21000);
    });

    $(".blurp").mouseenter(function() {
        $(this).addClass("animated blurpMove");
        setTimeout(() => {
        $(this).removeClass("animated blurpMove");
        }, 1000);
    });
    
    // Perspective
    document.onmousemove = handleMouseMove;
    target = document.getElementById("video_demo");
    console.log(target);
    function handleMouseMove(event) {
    const height = window.innerHeight;
    const width = window.innerWidth;
    // const yAxisDegree = event.pageX / width * 10 - 5;
    // const xAxisDegree = event.pageY / height * -1 * 10 + 5;
    const yAxisDegree = event.pageX / width * 20 - 10;
    const xAxisDegree = event.pageY / height * -1 * 20 + 10;
    target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
    }

});
