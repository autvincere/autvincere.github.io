$(document).ready(function(){
// alert('el sitio ya cargo')
	$(window).scroll(function(e){//event(e)
		//console.log('usuario hiso scroll');
		//console.log(
			var desdeTop = $(window).scrollTop();
	//427
		if(desdeTop >42){
			//console.log('es mayor :)')
			$('div.content').addClass('down_content');
            $('div.content nav').addClass('down_nav');
            $('div.content a figure img').addClass('down_logo');
		}else{
			$('div.content').removeClass('down_content');
            $('div.content nav').removeClass('down_nav');
            $('div.content a figure img').removeClass('down_logo');                               

		}
		});
    //SLIDER JS
    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });
    //FIN SLIDER JS
    

});