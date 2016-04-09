// A $( document ).ready() block.
$(document).ready(function () {
     var svg = document.getElementById("plano");
    $(function() {
        $('#plano').svg({onLoad: drawInitial});

    });

    function drawInitial(svg) {
        var circleab = svg.circle(465, 75, 5, {fill: 'cyan', stroke: 'cyan', strokeWidth: 3, id: 'circleab'});

        //var g = svg.group({stroke: 'red', strokeWidth: 2});
    }

    $( "#rutaspredefinidas" ).change(function() {
        var idRuta = $("#rutaspredefinidas").val();
        $.post(
                '/Mapas/coordenadas',
                {idRuta: idRuta},
                function (data) { 
                    var datauser = data;
                          $.post( "/Mapas/mapa", { idsvgplano: $("#idsvgplano").val() } ,function(data) {
                                $("#mapaContent").html(data);
                                //$('#plano').svg('get').clear();
                                var svg = document.getElementById("plano");
                                $(function() {
                                        $('#plano').svg({onLoad: drawInitial});

                                    });
                                
                                function drawposition(coordenadax,coordenaday,svg,colortono){
                                    var shape = this.id;
                                    var svg = $('#plano').svg('get');
                                    x=parseInt(coordenadax);
                                    y=parseInt(coordenaday);
                                    svg.circle(x, y, 5, {fill: colortono, stroke: colortono, strokeWidth: 3, id: 'circle'});

                                }

                                var aux = 1;
                                var total = Object.keys(datauser['user']).length;

                                $.each(datauser['user'], function(i, item) {                        

                                    setTimeout(function(){ 
                                        if(aux === total)
                                        {
                                            drawposition(item["coordenadax"],item["coordenaday"],svg,"yellow");
                                        }
                                        else
                                        {
                                            drawposition(item["coordenadax"],item["coordenaday"],svg,"red");
                                        }
                                        aux++;
                                    },1000*i);	

                                });
                            });          
                }).done(function(data){
                                
        }).fail(function(res){
                alert("Error: en ajax");
            });
        
    });    
});

/*function drawposition(coordenadax,coordenaday,svg,colortono){
        var shape = this.id;
        //$('#plano').svg('get').clear();
        //var svg = $('#plano').svg('get');
    
        //var svg = document.getElementById("plano");
        //alert(svg);
        //alert(val);
    
        x=parseInt(coordenadax);
        y=parseInt(coordenaday);
        var circle = svg.circle(x, y, 5, {fill: colortono, stroke: colortono, strokeWidth: 3, id: 'circle'});
        
    }*/


