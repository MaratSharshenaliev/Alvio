/*global window */

'use strict';

const _window = window;

_window.onload = function(){


   function getCookie(name) { 
        return null
    }

    function setCookie(name,value,days) {
        return null
    }

    const burger = _window.document.getElementById("burger");
    const hiddenMenu = _window.document.getElementsByTagName("nav")[0];

    var isClicked = true;

    burger.addEventListener("click", (e) => {
        e.preventDefault(); 
        let children = _window.document.getElementById("burger").children;
        if (isClicked){
            children[0].style.transform = 'rotate(-45deg) translate(2px)';
            children[1].style.transform = 'rotate(45deg) translate(2px)';
            hiddenMenu.style.right = 0;
        } else {
            children[0].style.transform = 'rotate(0deg) translate(0px)';
            children[1].style.transform = 'rotate(0deg) translate(0px)';
            hiddenMenu.style.right = '-100vw';
        }

        isClicked = !isClicked;
    });

    const header = _window.document.getElementById("header");
    const how_it_works_section_pos = _window.document.getElementById("how_it_works").offsetTop;

    const how_it_works_h2 = _window.document.getElementById("how_it_works_h2");
    const how_it_works_p = _window.document.getElementById("how_it_works_p");

    const steps = _window.document.getElementsByClassName("step");
    const steps_top_pos = steps[0].offsetTop;
    const steps_bottom_pos = steps[1].offsetTop;

    const footer_height = _window.document.getElementById("footer").offsetHeight;
    const last_section = _window.document.getElementById("last_section");

    last_section.style.marginBottom = footer_height + "px";

    _window.addEventListener("scroll", () => {
        var lastScrollTop = 0;
        let state = _window.pageYOffset || _window.document.documentElement.scrollTop;

        if (parseInt( _window.innerWidth ) >= 500) {
            if (state > lastScrollTop) {
                header.style.transform = "translate(0, -80%)";
            } else {
                header.style.transform = "translate(0, 0)";
            }
        }

        lastScrollTop = state <= 0 ? 0 : state;

        if (_window.pageYOffset > how_it_works_section_pos - _window.document.documentElement.clientHeight / 2){
            how_it_works_h2.style.transform = "translate(0)";
            how_it_works_p.style.transform = "translate(0)";
        }

        if (_window.pageYOffset > steps_top_pos - _window.document.documentElement.clientHeight / 2){
            steps[0].style.opacity = 1;
            steps[2].style.opacity = 1;
        }

        if (_window.pageYOffset > steps_bottom_pos - _window.document.documentElement.clientHeight / 2){
            steps[1].style.opacity = 1;
        }

    }, false);

    header.addEventListener("mouseover", () => {
        header.style.transform = "translate(0, 0)";
    });

    header.addEventListener("mouseout", () => {
        if ( _window.document.documentElement.scrollTop > 100){
            header.style.transform = "translate(0, -80%)";
        } 
    });

    // Ligh / Dark Themes 

    (function increaseOpacity(arrows){

        arrows.forEach((arrow, index) => {
            if (Number(arrow.style.opacity) === 1){
                arrow.style.opacity = 0;
            }
            arrow.style.opacity = Number(arrow.style.opacity) + 0.1;
        });

        _window.setTimeout(() => increaseOpacity(arrows), 200); 

    })([..._window.document.getElementsByClassName("arrow")]);


    const hideArrows = _window.document.getElementById("arrows");

    const showSwitcher = this.document.getElementById("show_switcher");

    hideArrows.addEventListener("click", () => {
        if (_window.innerWidth <= 500){
            themeSwitcher.parentNode.style.transform = "translate(500%)";
            showSwitcher.style.display = "flex";
        } else {
            themeSwitcher.parentNode.style.transform = "translate(-500%)";
            showSwitcher.style.display = "flex";
        }
    });

    showSwitcher.addEventListener("click", () => {
        themeSwitcher.parentNode.style.transform = "translate(0)";
        showSwitcher.style.display = "none";
    });

    const lamp_light = this.document.getElementById("lamp_light");

    const lamp_light_right = this.document.getElementById("lamp_light_right");

    const lamp_strip = this.document.getElementById("lamp_strip");

    const darkTheme = {
        lamp_color : "#d6d6d6"
    };

    const lightTheme = {
        lamp_color : "#fec165",
        lamp_right_color : "#fdb441"
    };

    let isLight;

    if( getCookie('dark') == 'true'){
        isLight = false;
        _window.document.body.classList.add("dark");
        lamp_light.style.fill = darkTheme.lamp_color;
        lamp_light_right.style.fill = darkTheme.lamp_color;
    } else {
        isLight = true;
    }

    const themeSwitcher = this.document.getElementById("switcher");

    themeSwitcher.addEventListener("click", function(){

        lamp_strip.classList.remove("stripAimation");

        if (isLight) {
            _window.document.body.classList.add("dark");
            lamp_light.style.fill = darkTheme.lamp_color;
            lamp_light_right.style.fill = darkTheme.lamp_color;
            themeSwitcher.parentNode.classList.remove("switcher-shadow");
            lamp_strip.classList.add("stripAimation");
            setCookie('dark', true, 360);
            setTimeout(function() {
                lamp_strip.classList.remove("stripAimation");
            }, 500);
        }else {
            _window.document.body.classList.remove("dark");
            lamp_light.style.fill = lightTheme.lamp_color;
            lamp_light_right.style.fill = lightTheme.lamp_right_color;
            themeSwitcher.parentNode.classList.add("switcher-shadow");
            lamp_strip.classList.add("stripAimation");
            setCookie('dark', false, 360);
            setTimeout(function() {
                lamp_strip.classList.remove("stripAimation");
            }, 500);
        }
        
        isLight = !isLight;
        
    });

    const preloader = _window.document.getElementById("preloader");

    if (preloader){
        let show_content = _window.setTimeout( () => preloader.style.display = "none", 2000 );
    }
    
};

