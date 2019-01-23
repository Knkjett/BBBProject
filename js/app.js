const fade = document.querySelectorAll('.fade');


window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;
    if (window.scrollY > 400) {
            fade[0].classList.remove('fade');
            fade[0].classList.add('fade-in');
        if (window.scrollY > 1000) {
            fade[1].classList.remove('fade');
            fade[1].classList.add('fade-in');
            if (window.scrollY > 1600) {
                fade[2].classList.remove('fade');
                fade[2].classList.add('fade-in');
            }
        }
        // All FADE
        // for (let i = 0; i < fade.length; i++) {
        //     fade[i].classList.remove('fade');
        //     fade[i].classList.add('fade-in');
        // }
    } else {
        for (let i = 0; i < fade.length; i++) {
            fade[i].classList.add('fade');
            fade[i].classList.remove('fade-in');
        }
    }

});