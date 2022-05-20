
           
            //Esta función será la encargada de mostrar la ventana emergente. Recibirá como parámetro el id ("#nombre_del_id") de la ventana emergente.
            function abrirVentanaPopUp(identificacion){
                $(".bloquer").css('z-index', '998');
                $(".bloquer").css('opacity', '0.5');                
                $(".bloquer").fadeIn(500);
                var w = $(window).width();
                var h = $(window).height();
                var divW = $(identificacion).width();
                var divH = $(identificacion).height();
                $(identificacion).css('left', (w/2)-(divW / 2)+"px");
                $(identificacion).css('top', (h/2)-(divH / 2)+"px");
                $(identificacion).css('z-index', '999');
                $(identificacion).css('opacity', '1.0');
                $(identificacion).fadeIn(500);
                $(".cerrar_emergente").click(function(){
                    $(identificacion).css('display', 'none');
                    $(".bloquer").css('display', 'none'); 
                });
            }
           
            $(document).ready(function(){
                $("#abrir_ventana").click(function(){
                    // Acá se llama a la función nombrada anteriormente.
                    abrirVentanaPopUp("#ventana_emergente");
                });
            });
           


 function abrirVentana(identificacion){
                $(".bloquer").css('z-index', '998');
                $(".bloquer").css('opacity', '0.5');                
                $(".bloquer").fadeIn(500);
                var w = $(window).width();
                var h = $(window).height();
                var divW = $(identificacion).width();
                var divH = $(identificacion).height();
                $(identificacion).css('left', (w/2)-(divW / 2)+"px");
                $(identificacion).css('top', (h/2)-(divH / 2)+"px");
                $(identificacion).css('z-index', '999');
                $(identificacion).css('opacity', '1.0');
                $(identificacion).fadeIn(500);
                $(".cerrar_emergente").click(function(){
                    $(identificacion).css('display', 'none');
                    $(".bloquer").css('display', 'none'); 
                });
            }
           
            $(document).ready(function(){
                $("#abrir-ventana").click(function(){
                    // Acá se llama a la función nombrada anteriormente.
                    abrirVentanaPopUp("#ventana-emergente");
                });
            });
           



          

 


