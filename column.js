window.addEventListener('load', function() {

	if ( document.body.classList.contains('fullscreen') && window.innerWidth > 1024 ) {

		const sections = document.querySelectorAll('section');
		const content = document.querySelector('.main__content');
		let spin_value = 0;
		let can_scroll = true;
		// sec_nav = '';

		// document.body.insertAdjacentHTML('beforeEnd', '<div class="section_navigation"></div>');

		// for ( let i=0; i<sections.length; i++ ) {
		// 	sec_nav += '<div class="sec_button"><span>'+ sections[i].dataset.title +'</span></div>';
		// }

		// document.querySelector('.section_navigation').innerHTML = sec_nav;

		// const buttons = document.querySelectorAll('.sec_button');

		// buttons[0].classList.add('active');

		// for ( let i=0; i<buttons.length; i++ ) {

		// 	buttons[i].addEventListener('click', function() {

		// 		document.querySelector('.sec_button.active').classList.remove('active');
		// 		this.classList.add('active');
		// 		spin_value = i;
		// 		scroll_content(spin_value);

		// 	});

		// }

		window.addEventListener('mousewheel', function(e) {

			if ( can_scroll ) {

				can_scroll = false;

				if ( e.deltaY > 0 ) {
					// scroll down
					if ( spin_value < sections.length-1 ) spin_value += 1;
				} else {
					// scroll up
					if ( spin_value > 0 ) spin_value -= 1;
				}

				scroll_content(spin_value);

			}

			setTimeout(function() {
				can_scroll = true;
			}, 560);

		});

		function scroll_content( count ) {

			content.setAttribute('style', '\
				-webkit-transform: translateY(-'+ count*100 +'vh);\
				-ms-transform: translateY(-'+ count*100 +'vh);\
				-o-transform: translateY(-'+ count*100 +'vh);\
				transform: translateY(-'+ count*100 +'vh);\
			');

			// content.style.transform = 'translateY(-'+ count*100 +'vh)';

			document.querySelector('.sec_button.active').classList.remove('active');
			buttons[count].classList.add('active');

		}

	}

});