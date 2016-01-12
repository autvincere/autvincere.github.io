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
            $('div.content div#wrapper_header a figure img').addClass('down_logo');
		}else{
			$('div.content').removeClass('down_content');
            $('div.content nav').removeClass('down_nav');
            $('div.content div#wrapper_header a figure img').removeClass('down_logo');            
		}
		});
    //INICIO MASONERY JS
      $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 350,
    gutter: 10
  });
    //FIN MASONERY JS
        //INICIO SLIDER JS
    $(function() {
      $('#slides').slidesjs({
        width: 1070,
        height: 350,
        play: {
          active: true,
          auto: true,
          interval: 5000,
          swap: true
        }
      });
    });
    //FIN SLIDER JS
    var URLactual = window.location.href;
    URLactual.split("/")
     console.log(URLactual);
    
    //INICIO validacion formulario
    $('form').submit(function(e){
        e.preventDefault();
        var nombre = $("[name=nombre]").val();
        var email = $("[name=email]").val();
        var asunto = $("[name=asunto]").val();
        var comentario=$("[name=comentario]").val();
        //console.log("nombre");
        //console.log("email");
        //console.log("asunto");
        //console.log("comentario");
        if(nombre, email, asunto, comentario != ""){
            $(this).submit();
        }else{
            console.log("debe venir algo");
        }
        //if(faltaArroba)
        
    });
    
});