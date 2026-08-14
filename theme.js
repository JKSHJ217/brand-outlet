/* =================================
   GLOBAL THEME SYSTEM
   brand_outlet.tm
================================= */

(function(){

    const themes = [
        "dark",
        "light",
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "pink"
    ];


    window.setTheme = function(theme){

        if(!themes.includes(theme)){
            theme = "dark";
        }

        themes.forEach(t => {
            document.body.classList.remove("theme-" + t);
        });

        document.body.classList.add("theme-" + theme);

        localStorage.setItem(
            "siteTheme",
            theme
        );

    };


    function loadTheme(){

        const saved =
            localStorage.getItem("siteTheme")
            || "dark";

        setTheme(saved);

    }


    if(document.readyState === "loading"){

        document.addEventListener(
            "DOMContentLoaded",
            loadTheme
        );

    }else{

        loadTheme();

    }

})();
