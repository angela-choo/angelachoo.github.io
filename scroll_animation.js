window.addEventListener("load", init);

function init(e)	{
    
    
    /*==================== scroll animation start ==================== */
    var spacing = $(window).height();

    function backToTop() {
        smoothScrollTo(0, 400);
    }

    var navi = document.querySelectorAll("a.links");
    console.log(navi);
    for (var i = 0; i < navi.length; i++){
        navi[i].setAttribute("id", "links"+(i+1));
        navi[i].addEventListener("click", stopDefault, false);
        navi[i].addEventListener("click", gotoContent, false);
    }

    function stopDefault(e) {
        e.preventDefault();
        window.location.href.split('#')[0];
    }

    var position_about = $("#about-me").position();
    var position_edu = $("#edu").position();
    var position_resume = $("#resume").position();
    var position_contact = $("#contact").position();

    function gotoContent(e) {
        if (e.target.id == "links1" || e.target.id == "links3") smoothScrollTo(position_about.top-90, 400); // About Me
        else if (e.target.id == "links2") smoothScrollTo(0, 400); // Jumbotron
        else if (e.target.id == "links4") smoothScrollTo(position_edu.top-10, 400); // Eduation
        else if (e.target.id == "links5") smoothScrollTo(position_resume.top-10, 400); // Resume
        else if (e.target.id == "links6") smoothScrollTo(position_contact.top-10, 400); // Contact
    }

    var about = document.querySelector("#links1");
    about.addEventListener("click", stopDefault, false);
    about.addEventListener("click", goSwitch, false);

    //about header, scroll to about wrapper and switches content (drop down menu)
    function goSwitch(e) {
        smoothScrollTo(spacing, 400);
        if (e.target.id == "links1") {
            aboutContent.classList.remove("hidden");
            aboutContent.classList.add("fadeIn", "items");
            philosophyContent.classList.add("hidden");
            teamContent.classList.add("hidden");

            //document.querySelector("#about-wrapper").style.backgroundImage =  "url('http://i31.photobucket.com/albums/c355/zHiME/MSYG%20TEMP/about-us-bg-v2-1.jpg~original')";
        }
    }

    //http://codereview.stackexchange.com/questions/13111/smooth-page-scrolling-in-javascript
    var smoothScrollTo = (function () {
        var timer, start, factor;

        return function (target, duration) {
            var offset = window.pageYOffset,
                delta  = target - window.pageYOffset; // Y-offset difference

            duration = duration || 1000; // default 1 sec animation
            start = Date.now();	// get start time
            factor = 0;

            if( timer ) {
                clearInterval(timer); // stop any running animation
            }

            function step() {
                var y;
                factor = (Date.now() - start) / duration; // get interpolation factor
                if( factor >= 1 ) {
                    clearInterval(timer); // stop animation
                    factor = 1;           // clip to max 1.0
                } 
                y = factor * delta + offset;
                window.scrollBy(0, y - window.pageYOffset);
            }

            timer = setInterval(step, 10);
            return timer; // return the interval timer, so you can clear it elsewhere
        };
    }());
    /*==================== scroll animation end ==================== */
    
}