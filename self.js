window.addEventListener('load', () => {
    const wrap = document.querySelector('.wrap');
    if(wrap.classList.contains('fullscreen') && window.innerWidth > 1024){

        const section = document.querySelectorAll('section');
        const contents = document.querySelector('.contents');
        let spin_value = 0;
        let can_scroll = true;

        window.addEventListener('mousewheel', (e) => {
            if(can_scroll){
                can_scroll = false;
                if(e.deltaY > 0){
                    //scroll down
                    if(spin_value < section.length - 1) spin_value += 1;
                } else {
                    if(spin_value > 0) spin_value -= 1;
                }

                setTimeout(()=> {can_scroll = true;}, 560);
            }

            scroll_content(spin_value);
        });

        function scroll_content(count){
            contents.setAttribute('style', `transform: translateY(-${count*100}vh);`);
        }

    }
});