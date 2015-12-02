$(document).ready(function(){
// alert('el sitio ya cargo')
	$(window).scroll(function(e){//event(e)
		//console.log('usuario hiso scroll');
		//console.log(
			var desdeTop = $(window).scrollTop();
	//427
		if(desdeTop >42){
			console.log('es mayor :)')
			$('div.container').addClass('down_container');
            $('div.container nav').addClass('down_nav');
            $('div.container a figure img').addClass('down_logo');
		}else{
			$('div.container').removeClass('down_container');
            $('div.container nav').removeClass('down_nav');
            $('div.container a figure img').removeClass('down_logo');                               

		}
		});
    

});