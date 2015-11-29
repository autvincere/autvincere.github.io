$(document).ready(function(){
// alert('el sitio ya cargo')
	$(window).scroll(function(e){//event(e)
		//console.log('usuario hiso scroll');
		//console.log(
			var desdeTop = $(window).scrollTop();
	//427
		if(desdeTop >42){
			console.log('es mayor :)')
			$('div.container').addClass('azul');
		}else{
			$('div.container').removeClass('azul');

		}
		});
    

});