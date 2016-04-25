$(document).ready(function () {
    //lamada de funcion cookies
    cookiesinicio();
    //Boton navegacion por defecto
    $("button[tabindex='19']").prop('disabled', true);

    $("#botondescripcion").click(function () {
        $("div[tabindex='170']").focus();
    });

    $("#botonindicaciones").click(function () {
        $("div[tabindex='171']").focus();
    });

    $("#botonnavegacion").click(function () {
        $("div[tabindex='172']").focus();
    });
    $("#botonsimulacion").click(function () {
        $("div[tabindex='173']").focus();
    });


    //Creacion de accesskey
    document.getElementById("ofidocentes").accessKey = "m";
    document.getElementById("volvermapa").accessKey = "p";
    document.getElementById("botondeaccesibilidad").accessKey = "c";
    document.getElementById("botondeayuda").accessKey = "a";

    $("#botondeayuda").click(function () {

        $("#menuaccesibilidad").removeClass("in").addClass('collapse');

    });

    $("#botondeaccesibilidad").click(function () {
        $("#menuayuda").removeClass("in").addClass('collapse');
    });



    //Declaracion Stycky Bar
    /*    var stickyNavTop = $('#styckybar').offset().top;

        var stickyNav = function () {
            var scrollTop = $(window).scrollTop();

            if (scrollTop > stickyNavTop) {
                $('#styckybar').addClass('sticky');
            } else {
                $('#styckybar').removeClass('sticky');
            }
        };

        stickyNav();

        var offset = 25;

        var duration = 300;

        $(window).scroll(function () {
            stickyNav();



            if (jQuery(this).scrollTop() > offset) {
                jQuery('.back-to-top').fadeIn(duration);
            } else {
                jQuery('.back-to-top').fadeOut(duration);
            }
        });*/

    //declaracion back on top

    /*  jQuery('.back-to-top').click(function (event) {

        event.preventDefault();

        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);

        return false;

    });*/

    //barra de zoom svg
    var zoomTiger = svgPanZoom('#plano', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
    });


    //Keypress event with enter key
    $("body").keypress(function (e) {
        if (e.which == 13) {
            var focused = $(':focus');
            var focusedParent = focused.parent();
            if (focused.attr('tabindex') >= 29 && focused.attr('tabindex') <= 115) {
                focusedParent.trigger("click");
            } else {
                focused.trigger("click");
            }
        }


    });

    //Keyup event
    $("body").keyup(function (e) {

        var focused = $(':focus');

        //Oficina de imagen sistemas, tabindex30

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '30':
                if (e.which == 38) {
                    $("path[tabindex='45']").focus();
                } else {
                    $("path[tabindex='75']").focus();
                }
                break;
            }
        }
        //key left and right
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '30':
                if (e.which == 37) {
                    $("path[tabindex='31']").focus();
                } else {
                    $("path[tabindex='29']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '30':
                if (e.which == 38) {
                    $("button[tabindex='1']").focus();
                } else {
                    $("path[tabindex='47']").focus();
                }
                break;
            }
        }

        //Sala de reuniones , tabindex 31
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '31':
                if (e.which == 37) {
                    $("path[tabindex='33']").focus();
                } else {
                    $("path[tabindex='30']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '31':
                if (e.which == 38) {
                    $("button[tabindex='1']").focus();
                } else {
                    $("path[tabindex='39']").focus();
                }
                break;
            }
        }

        //subdecanato , tabindex 33
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '33':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='31']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '33':
                if (e.which == 38) {
                    $("button[tabindex='1']").focus();
                } else {
                    $("path[tabindex='35']").focus();
                }
                break;
            }
        }
        //baño rectorado, tabindex 35
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '35':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='39']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '35':
                if (e.which == 38) {
                    $("path[tabindex='33']").focus();
                } else {
                    $("path[tabindex='37']").focus();
                }
                break;
            }
        }
        //decanato, tabindex 37
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '37':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '37':
                if (e.which == 38) {
                    $("path[tabindex='35']").focus();
                } else {
                    $("path[tabindex='41']").focus();
                }
                break;
            }
        }
        //secretaria decanato, tabindex 39
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '39':
                if (e.which == 37) {
                    $("path[tabindex='37']").focus();
                } else {
                    $("path[tabindex='47']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '39':
                if (e.which == 38) {
                    $("path[tabindex='31']").focus();
                } else {
                    $("path[tabindex='41']").focus();
                }
                break;
            }
        }
        //almacen decanato, tabindex 41
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '41':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='43']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '41':
                if (e.which == 38) {
                    $("path[tabindex='39']").focus();
                } else {
                    $("path[tabindex='59']").focus();
                }
                break;
            }
        }
        //cocina, tabindex 43
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '43':
                if (e.which == 37) {
                    $("path[tabindex='41']").focus();
                } else {
                    $("path[tabindex='45']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '43':
                if (e.which == 38) {
                    $("path[tabindex='47']").focus();
                } else {
                    $("path[tabindex='55']").focus();
                }
                break;
            }
        }

        //decanato, tabindex 37
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '37':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='39']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '37':
                if (e.which == 38) {
                    $("path[tabindex='35']").focus();
                } else {
                    $("path[tabindex='41']").focus();
                }
                break;
            }
        } //secretaria general, tabindex 45
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '45':
                if (e.which == 37) {
                    $("path[tabindex='47']").focus();
                } else {
                    $("rect[tabindex='49']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '45':
                if (e.which == 38) {
                    $("path[tabindex='30']").focus();
                } else {
                    $("path[tabindex='53']").focus();
                }
                break;
            }
        }
        //secretaria doctorado, tabindex 47
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '47':
                if (e.which == 37) {
                    $("path[tabindex='39']").focus();
                } else {
                    $("path[tabindex='45']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '47':
                if (e.which == 38) {
                    $("path[tabindex='30']").focus();
                } else {
                    $("path[tabindex='43']").focus();
                }
                break;
            }
        }
        //guardia, tabindex 29
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '29':
                if (e.which == 37) {
                    $("path[tabindex='30']").focus();
                } else {
                    $("rect[tabindex='49']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '29':
                if (e.which == 38) {
                    $("button[tabindex='1']").focus();
                } else {
                    $("path[tabindex='79']").focus();
                }
                break;
            }
        }
        //area profesores1, tabindex 49
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '49':
                if (e.which == 37) {
                    $("path[tabindex='29']").focus();
                } else {
                    $("rect[tabindex='51']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '49':
                if (e.which == 38) {
                    $("button[tabindex='1']").focus();
                } else {
                    $("path[tabindex='83']").focus();
                }
                break;
            }
        }
        //area profesores2, tabindex 51
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '51':
                if (e.which == 37) {
                    $("rect[tabindex='49']").focus();
                } else {
                    $("div[tabindex = '150']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '51':
                if (e.which == 38) {
                    $("button[tabindex='1']").focus();
                } else {
                    $("rect[tabindex='101']").focus();
                }
                break;
            }
        }
        //marco santorum, tabindex 59
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '59':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='57']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '59':
                if (e.which == 38) {
                    $("path[tabindex='41']").focus();
                } else {
                    $("path[tabindex='61']").focus();
                }
                break;
            }
        }
        //luis salvador, tabindex 57
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '57':
                if (e.which == 37) {
                    $("path[tabindex='59']").focus();
                } else {
                    $("path[tabindex='55']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '57':
                if (e.which == 38) {
                    $("path[tabindex='41']").focus();
                } else {
                    $("path[tabindex='71']").focus();
                }
                break;
            }
        }
        //rodrigo chancusig, tabindex 55
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '55':
                if (e.which == 37) {
                    $("path[tabindex='57']").focus();
                } else {
                    $("path[tabindex='53']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '55':
                if (e.which == 38) {
                    $("path[tabindex='43']").focus();
                } else {
                    $("path[tabindex='73']").focus();
                }
                break;
            }
        }

        //Tabindex 53, oficina de bolivar palan

        //keys up and down
        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '53':
                if (e.which == 38) {
                    $("path[tabindex='45']").focus();
                } else {
                    $("path[tabindex='75']").focus();
                }
                break;
            }
        }
        //key left and right
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '53':
                if (e.which == 37) {
                    $("path[tabindex='55']").focus();
                } else {
                    $("path[tabindex='83']").focus();
                }
                break;
            }
        }
        //myriam hernandez, tabindex 61
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '61':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='73']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '61':
                if (e.which == 38) {
                    $("path[tabindex='59']").focus();
                } else {
                    $("path[tabindex='63']").focus();
                }
                break;
            }
        }
        //henry paz, tabindex 63
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '63':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='73']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '63':
                if (e.which == 38) {
                    $("path[tabindex='61']").focus();
                } else {
                    $("path[tabindex='65']").focus();
                }
                break;
            }
        }
        //andres larco, tabindex 65
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '65':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='71']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '65':
                if (e.which == 38) {
                    $("path[tabindex='63']").focus();
                } else {
                    $("path[tabindex='67']").focus();
                }
                break;
            }
        }
        //profesor visitante, tabindex 67
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '67':
                if (e.which == 37) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("path[tabindex='69']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '67':
                if (e.which == 38) {
                    $("path[tabindex='65']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        //enrique mafla, tabindex 69
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '69':
                if (e.which == 37) {
                    $("path[tabindex='67']").focus();
                } else {
                    $("path[tabindex='77']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '69':
                if (e.which == 38) {
                    $("path[tabindex='71']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        //tania calle, tabindex 71
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '71':
                if (e.which == 37) {
                    $("path[tabindex='65']").focus();
                } else {
                    $("path[tabindex='77']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '71':
                if (e.which == 38) {
                    $("path[tabindex='73']").focus();
                } else {
                    $("path[tabindex='69']").focus();
                }
                break;
            }
        }

        //marco benalcazar, tabindex 73
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '73':
                if (e.which == 37) {
                    $("path[tabindex='61']").focus();
                } else {
                    $("path[tabindex='75']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '73':
                if (e.which == 38) {
                    $("path[tabindex='55']").focus();
                } else {
                    $("path[tabindex='71']").focus();
                }
                break;
            }
        }

        //maria perez, tabindex 75
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '75':
                if (e.which == 37) {
                    $("path[tabindex='73']").focus();
                } else {
                    $("path[tabindex='89']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '75':
                if (e.which == 38) {
                    $("path[tabindex='53']").focus();
                } else {
                    $("path[tabindex='74']").focus();
                }
                break;
            }
        }

        //consejeria2, tabindex 74
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '74':
                if (e.which == 37) {
                    $("path[tabindex='63']").focus();
                } else {
                    $("path[tabindex='91']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '74':
                if (e.which == 38) {
                    $("path[tabindex='73']").focus();
                } else {
                    $("path[tabindex='77']").focus();
                }
                break;
            }
        }

        //baño hombres, tabindex 77
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '77':
                if (e.which == 37) {
                    $("path[tabindex='71']").focus();
                } else {
                    $("path[tabindex='79']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '77':
                if (e.which == 38) {
                    $("path[tabindex='74']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        //baño mujeres, tabindex 79
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '79':
                if (e.which == 37) {
                    $("path[tabindex='77']").focus();
                } else {
                    $("rect[tabindex='115']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '79':
                if (e.which == 38) {
                    $("path[tabindex='29']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        //proyecto de investigacion, tabindex 83
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '83':
                if (e.which == 37) {
                    $("path[tabindex='53']").focus();
                } else {
                    $("path[tabindex='85']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '83':
                if (e.which == 38) {
                    $("rect[tabindex='49']").focus();
                } else {
                    $("path[tabindex='89']").focus();
                }
                break;
            }
        }

        //consejeria1, tabindex 89
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '89':
                if (e.which == 37) {
                    $("path[tabindex='75']").focus();
                } else {
                    $("path[tabindex='87']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '89':
                if (e.which == 38) {
                    $("path[tabindex='83']").focus();
                } else {
                    $("rect[tabindex='115']").focus();
                }
                break;
            }
        }

        //archivo, tabindex 87
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '87':
                if (e.which == 37) {
                    $("path[tabindex='89']").focus();
                } else {
                    $("path[tabindex='85']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '87':
                if (e.which == 38) {
                    $("path[tabindex='83']").focus();
                } else {
                    $("rect[tabindex='113']").focus();
                }
                break;
            }
        }

        //tnia pazmiño, tabindex 85
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '85':
                if (e.which == 37) {
                    $("path[tabindex='83']").focus();
                } else {
                    $("path[tabindex='99']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '85':
                if (e.which == 38) {
                    $("rect[tabindex='49']").focus();
                } else {
                    $("path[tabindex='91']").focus();
                }
                break;
            }
        }

        //proyecto de investigacion2, tabindex 91
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '91':
                if (e.which == 37) {
                    $("path[tabindex='74']").focus();
                } else {
                    $("rect[tabindex='93']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '91':
                if (e.which == 38) {
                    $("path[tabindex='85']").focus();
                } else {
                    $("rect[tabindex='113']").focus();
                }
                break;
            }
        }

        //zambrano archundia, 93
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '93':
                if (e.which == 37) {
                    $("path[tabindex='91']").focus();
                } else {
                    $("rect[tabindex='107']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '93':
                if (e.which == 38) {
                    $("rect[tabindex='95']").focus();
                } else {
                    $("rect[tabindex='111']").focus();
                }
                break;
            }
        }

        //profesor, tabindex 95
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '95':
                if (e.which == 37) {
                    $("path[tabindex='85']").focus();
                } else {
                    $("rect[tabindex='105']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '95':
                if (e.which == 38) {
                    $("rect[tabindex='97']").focus();
                } else {
                    $("rect[tabindex='93']").focus();
                }
                break;
            }
        }

        //jonathan barriga, tabindex 97
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '97':
                if (e.which == 37) {
                    $("path[tabindex='85']").focus();
                } else {
                    $("rect[tabindex='103']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '97':
                if (e.which == 38) {
                    $("path[tabindex='99']").focus();
                } else {
                    $("rect[tabindex='95']").focus();
                }
                break;
            }
        }

        //bodega, tabindex 99
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '99':
                if (e.which == 37) {
                    $("path[tabindex='85']").focus();
                } else {
                    $("rect[tabindex='101']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '99':
                if (e.which == 38) {
                    $("rect[tabindex='51']").focus();
                } else {
                    $("rect[tabindex='97']").focus();
                }
                break;
            }
        }

        //mayra carrion, tabindex 101
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '101':
                if (e.which == 37) {
                    $("path[tabindex='99']").focus();
                } else {
                    $("div[tabindex='150']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '101':
                if (e.which == 38) {
                    $("rect[tabindex='51']").focus();
                } else {
                    $("rect[tabindex='103']").focus();
                }
                break;
            }
        }

        //sandra sanchez, tabindex 103
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '103':
                if (e.which == 37) {
                    $("rect[tabindex='97']").focus();
                } else {
                    $("div[tabindex='150']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '103':
                if (e.which == 38) {
                    $("rect[tabindex='101']").focus();
                } else {
                    $("rect[tabindex='105']").focus();
                }
                break;
            }
        }

        //jenny torres, tabindex 105
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '105':
                if (e.which == 37) {
                    $("rect[tabindex='95']").focus();
                } else {
                    $("div[tabindex='150']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '105':
                if (e.which == 38) {
                    $("rect[tabindex='103']").focus();
                } else {
                    $("rect[tabindex='107']").focus();
                }
                break;
            }
        }

        //carlos montenegro, tabindex 107
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '107':
                if (e.which == 37) {
                    $("rect[tabindex='93']").focus();
                } else {
                    $("div[tabindex='150']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '107':
                if (e.which == 38) {
                    $("rect[tabindex='105']").focus();
                } else {
                    $("rect[tabindex='109']").focus();
                }
                break;
            }
        }

        //carrera, intriago, mena, tabindex 109
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '109':
                if (e.which == 37) {
                    $("rect[tabindex='111']").focus();
                } else {
                    $("div[tabindex='150']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '109':
                if (e.which == 38) {
                    $("rect[tabindex='107']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        //rosa navarrete, tabindex 111
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '111':
                if (e.which == 37) {
                    $("rect[tabindex='113']").focus();
                } else {
                    $("rect[tabindex='109']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '111':
                if (e.which == 38) {
                    $("rect[tabindex='93']").focus();
                } else {

                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        //maria hallo, tabindex 113
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '113':
                if (e.which == 37) {
                    $("rect[tabindex='115']").focus();
                } else {
                    $("rect[tabindex='111']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '113':
                if (e.which == 38) {
                    $("path[tabindex='91']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        //raul cordova 115
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '115':
                if (e.which == 37) {
                    $("path[tabindex='79']").focus();
                } else {
                    $("rect[tabindex='113']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '115':
                if (e.which == 38) {
                    $("path[tabindex='89']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        //boton oficina de docentes 15
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '15':
                if (e.which == 37) {
                    $("path[tabindex='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '15':
                if (e.which == 38) {
                    $("button[tabindex='1']").focus();
                } else {
                    if ($("#ofidocentes").attr("aria-expanded") == "false") {
                        $("button[tabindex='19']").focus();

                    } else {
                        $("input[id='a-c']").focus();
                    }

                }
                break;
            }
        }

        //boton simulacion de rutas 19
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '19':
                if (e.which == 37) {
                    $("path[tabindex='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '19':
                if (e.which == 38) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("a[id='BañoMujeresruta']").focus();
                }
                break;
            }
        }

        //boton informacion principal 150
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '150':
                if (e.which == 37) {
                    $("rect[tabindex='51']").focus();
                } else {
                    $("rect[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '150':
                if (e.which == 38) {
                    $("button[tabindex='1']").focus();
                } else {
                    $("button[tabindex='161']").focus();
                }
                break;
            }
        }

        //boton carga horaria 154
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '154':
                if (e.which == 37) {
                    $("rect[tabindex='51']").focus();
                } else {
                    $("rect[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '154':
                if (e.which == 38) {
                    $("button[tabindex='150']").focus();
                } else {
                    $("button[tabindex='158']").focus();
                }
                break;
            }
        }

        //boton informacion del profesor
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '158':
                if (e.which == 37) {
                    $("rect[tabindex='51']").focus();
                } else {
                    $("rect[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '158':
                if (e.which == 38) {
                    $("button[tabindex='154']").focus();
                } else {
                    $("button[tabindex='']").focus();
                }
                break;
            }
        }

        //boton accesibilidad tabindex 0
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '1':
                if (e.which == 37) {
                    $("button[id='botondeayuda']").focus();
                } else {
                    $("rect[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '1':
                if (e.which == 38) {
                    $("button[id='1']").focus();
                } else {
                    $("button[tabindex='15']").focus();
                }
                break;
            }
        }

        //boton accesibilidad menu id 1
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '1':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("button[id='2']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '1':
                if (e.which == 38) {
                    $("input[id='']").focus();
                } else {
                    $("input[id='3']").focus();
                }
                break;
            }
        }

        //boton estilo normal id 3
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '3':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("input[id='4']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '3':
                if (e.which == 38) {
                    $("button[id='1']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //boton estilo blanco id 4
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '4':
                if (e.which == 37) {
                    $("input[id='3']").focus();
                } else {
                    $("input[id='5']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '4':
                if (e.which == 38) {
                    $("button[id='1']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //boton estilo amarillo negro id 5
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '5':
                if (e.which == 37) {
                    $("input[id='4']").focus();
                } else {
                    $("input[id='6']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '5':
                if (e.which == 38) {
                    $("button[id='1']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }


        //boton estilo negro amaarillo id 6
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '6':
                if (e.which == 37) {
                    $("input[id='5']").focus();
                } else {
                    $("input[id='7']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '6':
                if (e.which == 38) {
                    $("button[id='1']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //boton estilo ngro id 7
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '7':
                if (e.which == 37) {
                    $("input[id='6']").focus();
                } else {
                    $("input[id='8']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '7':
                if (e.which == 38) {
                    $("button[id='1']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //boton estilo gris id 7
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '8':
                if (e.which == 37) {
                    $("input[id='7']").focus();
                } else {
                    $("input[tabindex='4']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '8':
                if (e.which == 38) {
                    $("button[id='1']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }


        //boton tamanio letra tabindex 4
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '4':
                if (e.which == 37) {
                    $("input[id='8']").focus();
                } else {
                    $("input[tabindex='5']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '4':
                if (e.which == 38) {
                    $("button[id='']").focus();
                } else {
                    $("button[tabindex='']").focus();
                }
                break;
            }
        }

        //boton interespaciado tabindex 5
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '5':
                if (e.which == 37) {
                    $("input[tabindex='4']").focus();
                } else {
                    $("select[tabindex='6']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '5':
                if (e.which == 38) {
                    $("input[tabindex='']").focus();
                } else {
                    $("button[tabindex='']").focus();
                }
                break;
            }
        }

        //combo tipo letra tabindex 6
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '6':
                if (e.which == 37) {
                    $("input[tabindex='5']").focus();
                } else {
                    $("input[id='radionavegacion']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '6':
                if (e.which == 38) {
                    $("button[id='']").focus();
                } else {
                    $("a[tabindex='']").focus();
                }
                break;
            }
        }

        //boton reload letra tabindex 7
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '7':
                if (e.which == 37) {
                    $("input[id='radionavegacion']").focus();
                } else {
                    $("button[id='2']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '7':
                if (e.which == 38) {
                    $("button[id='1']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }


        //boton accesibilidad menu id 2
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '2':
                if (e.which == 37) {
                    $("button[id='1']").focus();
                } else {
                    $("button[id='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '2':
                if (e.which == 38) {
                    $("input[id='']").focus();
                } else {
                    $("input[id='9']").focus();
                }
                break;
            }
        }

        //boton patron negro menu id 9
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '9':
                if (e.which == 37) {
                    $("a[id='']").focus();
                } else {
                    $("input[id='10']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '9':
                if (e.which == 38) {
                    $("button[id='2']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }


        //boton patron color menu id 9
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '10':
                if (e.which == 37) {
                    $("input[id='9']").focus();
                } else {
                    $("input[id='11']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '10':
                if (e.which == 38) {
                    $("button[id='2']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }


        //boton patron normal menu id 10
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case '11':
                if (e.which == 37) {
                    $("input[id='10']").focus();
                } else {
                    $("input[id='Saturation']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case '11':
                if (e.which == 38) {
                    $("button[id='2']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //input id Saturation
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Saturation':
                if (e.which == 37) {
                    $("input[id='11']").focus();
                } else {
                    $("input[id='Brightness']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Saturation':
                if (e.which == 38) {
                    $("button[id='2']").focus();
                } else {
                    $("input[id='Sepia']").focus();
                }
                break;
            }
        }
        //input id Brightness
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Brightness':
                if (e.which == 37) {
                    $("input[id='Saturation']").focus();
                } else {
                    $("input[id='Hue']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Brightness':
                if (e.which == 38) {
                    $("button[id='2']").focus();
                } else {
                    $("input[id='Invert']").focus();
                }
                break;
            }
        }

        //input id Hue
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Hue':
                if (e.which == 37) {
                    $("input[id='Brightness']").focus();
                } else {
                    $("input[id='Grayscale']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Hue':
                if (e.which == 38) {
                    $("button[id='2']").focus();
                } else {
                    $("input[id='Opacity']").focus();
                }
                break;
            }
        }

        //input id Grayscale
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Grayscale':
                if (e.which == 37) {
                    $("input[id='Hue']").focus();
                } else {
                    $("a[tabindex='10']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Grayscale':
                if (e.which == 38) {
                    $("button[id='2']").focus();
                } else {
                    $("input[id='Contrast']").focus();
                }
                break;
            }
        }

        //input id Sepia
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Sepia':
                if (e.which == 37) {
                    $("input[id='Grayscale']").focus();
                } else {
                    $("input[id='Invert']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Sepia':
                if (e.which == 38) {
                    $("input[id='Saturation']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //input id Invert
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Invert':
                if (e.which == 37) {
                    $("input[id='Sepia']").focus();
                } else {
                    $("input[id='Opacity']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Invert':
                if (e.which == 38) {
                    $("input[id='Brightness']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //input id Opacity
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Opacity':
                if (e.which == 37) {
                    $("input[id='Invert']").focus();
                } else {
                    $("input[id='Contrast']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Opacity':
                if (e.which == 38) {
                    $("input[id='Hue']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //input id Contrast
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Contrast':
                if (e.which == 37) {
                    $("input[id='Opacity']").focus();
                } else {
                    $("a[tabindex='10']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Contrast':
                if (e.which == 38) {
                    $("input[id='Grayscale']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //boton reload tab 10
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '10':
                if (e.which == 37) {
                    $("input[id='Grayscale']").focus();
                } else {
                    $("a[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '10':
                if (e.which == 38) {
                    $("button[id='2']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //Menu izquierdo 
        //boton a-c
        //boton reload tab 10
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'a-c':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("input[id='d-l']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'a-c':
                if (e.which == 38) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("a[id='Archundia']").focus();
                }
                break;
            }
        }

        //Archundia

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Archundia':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Archundia':
                if (e.which == 38) {
                    $("input[id='a-c']").focus();
                } else {
                    $("a[id='AreaProfesores']").focus();
                }
                break;
            }
        }
        //AreaProfesores

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'AreaProfesores':
                if (e.which == 37) {
                    $("input[id='Archundia']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'AreaProfesores':
                if (e.which == 38) {
                    $("a[id='Archundia']").focus();
                } else {
                    $("a[id='Almacén']").focus();
                }
                break;
            }
        }

        //Almacén

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Almacén':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Almacén':
                if (e.which == 38) {
                    $("a[id='AreaProfesores']").focus();
                } else {
                    $("a[id='Hombres']").focus();
                }
                break;
            }
        }

        //Hombres

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Hombres':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Hombres':
                if (e.which == 38) {
                    $("a[id='Almacén']").focus();
                } else {
                    $("a[id='Mujeres']").focus();
                }
                break;
            }
        }

        //Mujeres

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Mujeres':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Mujeres':
                if (e.which == 38) {
                    $("a[id='Hombres']").focus();
                } else {
                    $("a[id='Bodega']").focus();
                }
                break;
            }
        }
        //Bodega

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Bodega':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Bodega':
                if (e.which == 38) {
                    $("a[id='Mujeres']").focus();
                } else {
                    $("a[id='Barriga']").focus();
                }
                break;
            }
        }

        //Barriga

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Barriga':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Barriga':
                if (e.which == 38) {
                    $("a[id='Bodega']").focus();
                } else {
                    $("a[id='Benalcazar']").focus();
                }
                break;
            }
        }

        //Benalcazar

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Benalcazar':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Benalcazar':
                if (e.which == 38) {
                    $("a[id='Barriga']").focus();
                } else {
                    $("a[id='Calle']").focus();
                }
                break;
            }
        }


        //Calle

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Calle':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Calle':
                if (e.which == 38) {
                    $("a[id='Benalcazar']").focus();
                } else {
                    $("a[id='Carrera']").focus();
                }
                break;
            }
        }

        //Carrera

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Carrera':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Carrera':
                if (e.which == 38) {
                    $("a[id='Calle']").focus();
                } else {
                    $("a[id='Carrión']").focus();
                }
                break;
            }
        }


        //Carrión

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Carrión':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Carrión':
                if (e.which == 38) {
                    $("a[id='Carrera']").focus();
                } else {
                    $("a[id='Cevallos']").focus();
                }
                break;
            }
        }

        //Cevallos

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Cevallos':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Cevallos':
                if (e.which == 38) {
                    $("a[id='Carrión']").focus();
                } else {
                    $("a[id='Chancusig']").focus();
                }
                break;
            }
        }

        //Chancusig

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Chancusig':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Chancusig':
                if (e.which == 38) {
                    $("a[id='Cevallos']").focus();
                } else {
                    $("a[id='Cordova']").focus();
                }
                break;
            }
        }

        //Cordova

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Cordova':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Cordova':
                if (e.which == 38) {
                    $("a[id='Chancusig']").focus();
                } else {
                    $("a[id='Cocina']").focus();
                }
                break;
            }
        }

        //Cocina

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Cocina':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Cocina':
                if (e.which == 38) {
                    $("a[id='Cordova']").focus();
                } else {
                    $("a[id='Conserjería1']").focus();
                }
                break;
            }
        }

        //Conserjería1

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Conserjería1':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Conserjería1':
                if (e.which == 38) {
                    $("a[id='Cocina']").focus();
                } else {
                    $("a[id='Conserjería2']").focus();
                }
                break;
            }
        }

        //Conserjería2

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Conserjería2':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Conserjería2':
                if (e.which == 38) {
                    $("a[id='Conserjería1']").focus();
                } else {
                    $("button[tabindex='19']").focus();
                }
                break;
            }
        }

        //d-l

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'd-l':
                if (e.which == 37) {
                    $("input[id='a-c']").focus();
                } else {
                    $("input[id='m-p']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'd-l':
                if (e.which == 38) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("a[id='Decanato']").focus();
                }
                break;
            }
        }

        //m-p

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'm-p':
                if (e.which == 37) {
                    $("input[id='d-l']").focus();
                } else {
                    $("input[id='q-z']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'm-p':
                if (e.which == 38) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("a[id='Mafla']").focus();
                }
                break;
            }
        }

        //q-z

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'q-z':
                if (e.which == 37) {
                    $("input[id='m-p']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'q-z':
                if (e.which == 38) {
                    $("button[tabindex='15']").focus();
                } else {
                    $("a[id='Reuniones']").focus();
                }
                break;
            }
        }
        //Decanato

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Decanato':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Decanato':
                if (e.which == 38) {
                    $("input[id='d-l']").focus();
                } else {
                    $("a[id='Hallo']").focus();
                }
                break;
            }
        }

        //Hallo

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Hallo':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Hallo':
                if (e.which == 38) {
                    $("a[id='Decanato']").focus();
                } else {
                    $("a[id='Hernández']").focus();
                }
                break;
            }
        }
        //Hernández

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Hernández':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Hernández':
                if (e.which == 38) {
                    $("a[id='Hallo']").focus();
                } else {
                    $("a[id='Imagen']").focus();
                }
                break;
            }
        }
        //Imagen

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Imagen':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Imagen':
                if (e.which == 38) {
                    $("a[id='Hernández']").focus();
                } else {
                    $("a[id='Intriago']").focus();
                }
                break;
            }
        }
        //Intriago

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Intriago':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Intriago':
                if (e.which == 38) {
                    $("a[id='Imagen']").focus();
                } else {
                    $("a[id='Larco']").focus();
                }
                break;
            }
        }
        //Larco

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Larco':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Larco':
                if (e.which == 38) {
                    $("a[id='Intriago']").focus();
                } else {
                    $("button[tabindex='19']").focus();
                }
                break;
            }
        }
        //Mafla

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Mafla':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Mafla':
                if (e.which == 38) {
                    $("input[id='m-p']").focus();
                } else {
                    $("a[id='Mena']").focus();
                }
                break;
            }
        }
        //Mena

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Mena':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Mena':
                if (e.which == 38) {
                    $("a[id='Mafla']").focus();
                } else {
                    $("a[id='Montenegro']").focus();
                }
                break;
            }
        }

        //Montenegro

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Montenegro':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Montenegro':
                if (e.which == 38) {
                    $("a[id='Mena']").focus();
                } else {
                    $("a[id='Navarrete']").focus();
                }
                break;
            }
        }


        //Navarrete

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Navarrete':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Navarrete':
                if (e.which == 38) {
                    $("a[id='Montenegro']").focus();
                } else {
                    $("a[id='Palán']").focus();
                }
                break;
            }
        }


        //Palán

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Palán':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Palán':
                if (e.which == 38) {
                    $("a[id='Navarrete']").focus();
                } else {
                    $("a[id='Paz']").focus();
                }
                break;
            }
        }


        //Paz

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Paz':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Paz':
                if (e.which == 38) {
                    $("a[id='Palán']").focus();
                } else {
                    $("a[id='Pazmiño']").focus();
                }
                break;
            }
        }


        //Pazmiño

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Pazmiño':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Pazmiño':
                if (e.which == 38) {
                    $("a[id='Paz']").focus();
                } else {
                    $("a[id='Perez']").focus();
                }
                break;
            }
        }


        //Perez

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Perez':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Perez':
                if (e.which == 38) {
                    $("a[id='Pazmiño']").focus();
                } else {
                    $("a[id='Profesor']").focus();
                }
                break;
            }
        }


        //Profesor

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Profesor':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Profesor':
                if (e.which == 38) {
                    $("a[id='Perez']").focus();
                } else {
                    $("a[id='Investigación']").focus();
                }
                break;
            }
        }


        //Investigación

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Investigación':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Investigación':
                if (e.which == 38) {
                    $("a[id='Profesor']").focus();
                } else {
                    $("a[id='Investigación2']").focus();
                }
                break;
            }
        }


        //Investigación2

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Investigación2':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Investigación2':
                if (e.which == 38) {
                    $("a[id='Investigación']").focus();
                } else {
                    $("button[tabindex='19']").focus();
                }
                break;
            }
        }

        //Reuniones

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Reuniones':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Reuniones':
                if (e.which == 38) {
                    $("input[id='q-z']").focus();
                } else {
                    $("a[id='Salvador']").focus();
                }
                break;
            }
        }

        //Salvador

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Salvador':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Salvador':
                if (e.which == 38) {
                    $("a[id='Reuniones']").focus();
                } else {
                    $("a[id='Sánchez']").focus();
                }
                break;
            }
        }
        //Sánchez

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Sánchez':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Sánchez':
                if (e.which == 38) {
                    $("a[id='Salvador']").focus();
                } else {
                    $("a[id='Santorum']").focus();
                }
                break;
            }
        }


        //Santorum

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Santorum':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Santorum':
                if (e.which == 38) {
                    $("a[id='Sánchez']").focus();
                } else {
                    $("a[id='SecretaríaDecanato']").focus();
                }
                break;
            }
        }


        //SecretaríaDecanato

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'SecretaríaDecanato':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'SecretaríaDecanato':
                if (e.which == 38) {
                    $("a[id='Santorum']").focus();
                } else {
                    $("a[id='SecretaríaDoctorado']").focus();
                }
                break;
            }
        }

        //SecretaríaDoctorado

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'SecretaríaDoctorado':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'SecretaríaDoctorado':
                if (e.which == 38) {
                    $("a[id='SecretaríaDecanato']").focus();
                } else {
                    $("a[id='SecretaríaGeneral']").focus();
                }
                break;
            }
        }

        //SecretaríaGeneral

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'SecretaríaGeneral':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'SecretaríaGeneral':
                if (e.which == 38) {
                    $("a[id='SecretaríaDoctorado']").focus();
                } else {
                    $("a[id='Subdecanato']").focus();
                }
                break;
            }
        }

        //Subdecanato

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Subdecanato':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Subdecanato':
                if (e.which == 38) {
                    $("a[id='SecretaríaGeneral']").focus();
                } else {
                    $("a[id='Torres']").focus();
                }
                break;
            }
        }


        //Torres

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Torres':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Torres':
                if (e.which == 38) {
                    $("a[id='Subdecanato']").focus();
                } else {
                    $("a[id='Zambrano']").focus();
                }
                break;
            }
        }


        //Zambrano

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Zambrano':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Zambrano':
                if (e.which == 38) {
                    $("a[id='Torres']").focus();
                } else {
                    $("button[tabindex='19']").focus();
                }
                break;
            }
        }
        //baño mujeres ruta

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'BañoMujeresruta':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'BañoMujeresruta':
                if (e.which == 38) {
                    $("button[tabindex='19']").focus();
                } else {
                    $("a[id='Decanatoruta']").focus();
                }
                break;
            }
        }

        //Decanatoruta

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Decanatoruta':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Decanatoruta':
                if (e.which == 38) {
                    $("a[id='BañoMujeresruta']").focus();
                } else {
                    $("a[id='Investigacionruta']").focus();
                }
                break;
            }
        }

        //Investigacionruta

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Investigacionruta':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Investigacionruta':
                if (e.which == 38) {
                    $("a[id='Decanatoruta']").focus();
                } else {
                    $("a[id='Profesorruta']").focus();
                }
                break;
            }
        }

        //Profesorruta

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'Profesorruta':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'Profesorruta':
                if (e.which == 38) {
                    $("a[id='Investigacionruta']").focus();
                } else {
                    $("path[tabindex='33']").focus();
                }
                break;
            }
        }

        //Link contenido principal

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'salto':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'salto':
                if (e.which == 38) {
                    $("a[id='']").focus();
                } else {
                    $("h1[tabindex='0']").focus();
                }
                break;
            }
        }

        //titulo principal
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '0':
                if (e.which == 37) {
                    $("input[id='']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '0':
                if (e.which == 38) {
                    $("a[id='salto']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        //boton ir a mapa
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '161':
                if (e.which == 37) {
                    $("rect[tabindex='51']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '161':
                if (e.which == 38) {
                    $("div[tabindex='150']").focus();
                } else {
                    $("button[tabindex='162']").focus();
                }
                break;
            }
        }

        //boton ir a menu principal
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '162':
                if (e.which == 37) {
                    $("rect[tabindex='51']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '162':
                if (e.which == 38) {
                    $("button[tabindex='161']").focus();
                } else {
                    $("button[tabindex='163']").focus();
                }
                break;
            }
        }

        //boton ir a mapa
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '163':
                if (e.which == 37) {
                    $("rect[tabindex='51']").focus();
                } else {
                    $("path[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '163':
                if (e.which == 38) {
                    $("button[tabindex='161']").focus();
                } else {
                    $("button[tabindex='']").focus();
                }
                break;
            }
        }

        //boton de ayuda

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'botondeayuda':
                if (e.which == 37) {
                    $("rect[tabindex='']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'botondeayuda':
                if (e.which == 38) {
                    $("button[id='botondescripcion']").focus();
                } else {
                    $("button[tabindex='15']").focus();
                }
                break;
            }
        }

        //boton indicaciones

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'botonindicaciones':
                if (e.which == 37) {
                    $("button[id='botondescripcion']").focus();
                } else {
                    $("button[id='botonnavegacion']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'botonindicaciones':
                if (e.which == 38) {
                    $("button[id='']").focus();
                } else {
                    $("div[tabindex='171']").focus();
                }
                break;
            }
        }

        //boton descripcion

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'botondescripcion':
                if (e.which == 37) {
                    $("button[id='']").focus();
                } else {
                    $("button[id='botonindicaciones']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'botondescripcion':
                if (e.which == 38) {
                    $("button[id='']").focus();
                } else {
                    $("div[tabindex='170']").focus();
                }
                break;
            }
        }


        //boton simulacion

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'botonsimulacion':
                if (e.which == 37) {
                    $("button[id='botonnavegacion']").focus();
                } else {
                    $("button[tabindex='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'botonsimulacion':
                if (e.which == 38) {
                    $("button[id='']").focus();
                } else {
                    $("div[tabindex='173']").focus();
                }
                break;
            }
        }

        //boton navegacion

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'botonnavegacion':
                if (e.which == 37) {
                    $("button[id='botonindicaciones']").focus();
                } else {
                    $("button[id ='botonsimulacion']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'botonnavegacion':
                if (e.which == 38) {
                    $("button[id='']").focus();
                } else {
                    $("div[tabindex='172']").focus();
                }
                break;
            }
        }

        //div descripcion

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '170':
                if (e.which == 37) {
                    $("button[id='']").focus();
                } else {
                    $("button[id ='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '170':
                if (e.which == 38) {
                    $("button[id='botondescripcion']").focus();
                } else {
                    $("button[id='botondeayuda']").focus();
                }
                break;
            }
        }
        //div indicaciones

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '171':
                if (e.which == 37) {
                    $("button[id='']").focus();
                } else {
                    $("button[id ='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '171':
                if (e.which == 38) {
                    $("button[id='botonindicaciones']").focus();
                } else {
                    $("button[id='botondeayuda']").focus();
                }
                break;
            }
        }

        //div navegacion

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '172':
                if (e.which == 37) {
                    $("button[id='']").focus();
                } else {
                    $("button[id ='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '172':
                if (e.which == 38) {
                    $("button[id='botonnavegacion']").focus();
                } else {
                    $("button[id='botondeayuda']").focus();
                }
                break;
            }
        }


        //div simulacion

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '173':
                if (e.which == 37) {
                    $("button[id='']").focus();
                } else {
                    $("button[id ='']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '173':
                if (e.which == 38) {
                    $("button[id='botonsimulacion']").focus();
                } else {
                    $("button[id='botondeayuda']").focus();
                }
                break;
            }
        }
        //boton radio navegacion

        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("id")) {
            case 'radionavegacion':
                if (e.which == 37) {
                    $("select[tabindex='6']").focus();
                } else {
                    $("a[tabindex ='7']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("id")) {
            case 'radiosimulacion':
                if (e.which == 38) {
                    $("button[id='']").focus();
                } else {
                    $("button[tabindex='1']").focus();
                }
                break;
            }
        }




    });

    //Barra de accesibilidad

    $("#tamanioletra").change(function () {
        var nuevotamanio = $("#tamanioletra").val();
        tamanioletra(nuevotamanio);
    });

    $("#espaciado2").change(function () {
        var nuevoespaciado = $("#espaciado2").val();
        espaciadoletra(nuevoespaciado);
    });

    $("#tipoletra").change(function () {
        var nuevotipoletra = $("#tipoletra").val();
        tipoletra(nuevotipoletra);
    });

    $("#Saturation").change(function () {
        var nuevasaturacion = $("#Saturation").val();
        saturate(nuevasaturacion);
    });

    $("#Grayscale").change(function () {
        var nuevogris = $("#Grayscale").val();
        greyscale(nuevogris);
    });

    $("#Sepia").change(function () {
        var nuevosepia = $("#Sepia").val();
        sepia(nuevosepia);
    });

    $("#Hue").change(function () {
        var nuevohue = $("#Hue").val();
        hue(nuevohue);
    });

    $("#Invert").change(function () {
        var nuevoinvert = $("#Invert").val();
        invert(nuevoinvert);
    });

    $("#Opacity").change(function () {
        var nuevoopacity = $("#Opacity").val();
        opacity(nuevoopacity);
    });

    $("#Brightness").change(function () {
        var nuevobrightness = $("#Brightness").val();
        brightness(nuevobrightness);
    });

    $("#Contrast").change(function () {
        var nuevocontrast = $("#Contrast").val();
        contrast(nuevocontrast);
    });

    $('#modo input').on('change', function () {
        switch (($('input[name=radiomenu]:checked', '#modo').val())) {
        case 'simulacion':
            $("button[tabindex='15']").prop('disabled', true);
            $("button[tabindex='19']").prop('disabled', false);

            break;
        case 'navegacion':
            $("button[tabindex='19']").prop('disabled', true);
            $("button[tabindex='15']").prop('disabled', false);


        }


    });

});

//Funcion salir de tab
$(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        $("h1[tabindex='0']").focus();
    }
});



//funcion de keypress
function tab() {
    var e = jQuery.Event("keypress");
    e.which = 13; //choose the one you want
    e.keyCode = 13;
    $("#theInputToTest").trigger(e);
}

//funciones barra de accesibilidad
function pulsar(parametro) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "estilo",
            valorcookie: parametro
        },
        function (data) {
            $("#estilo").attr("href", "/styles/css/accesibilidad/" + parametro);
        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });
}



function tamanioletra(nuevotamanio) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "tamanioletra",
            valorcookie: nuevotamanio
        },
        function (data) {
            var tamaniofinal = 14 * nuevotamanio;
            $("body").css("font-size", tamaniofinal + "px");
            document.getElementById("letra").value = nuevotamanio;
        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });

}

function espaciadoletra(nuevoespaciado) {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "espaciadoletra",
            valorcookie: nuevoespaciado
        },
        function (data) {
            var espaciadoletra = 1.42857143 * nuevoespaciado;
            $("body").css("line-height", espaciadoletra);
            document.getElementById("espaciado").value = nuevoespaciado;
        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });

}

function tipoletra(nuevotipoletra) {
    //console.log(nuevotipoletra);
    //nuevotipoletra = "";
    //var tipoletra = "buttonrial";
    //console.log(nuevotipoletra);
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "tipoletra",
            valorcookie: nuevotipoletra
        },
        function (data) {
            $("body").css("font-family", nuevotipoletra);
        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });

}

function saturate(nuevasaturacion) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "saturate",
            valorcookie: nuevasaturacion
        },
        function (data) {
            var satS = nuevasaturacion;
            var satG = "saturate(" + satS + ")";
            document.body.style.webkitFilter = satG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });
}

function greyscale(nuevogris) {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "grises",
            valorcookie: nuevogris
        },
        function (data) {
            var greyS = nuevogris;
            var setG = "grayscale(" + greyS + ")";
            document.body.style.webkitFilter = setG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });
}

function sepia(nuevosepia) {


    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "sepia",
            valorcookie: nuevosepia
        },
        function (data) {
            var sepS = nuevosepia;
            var sepG = "sepia(" + sepS + ")";
            document.body.style.webkitFilter = sepG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });

}



function hue(nuevohue) {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "tono",
            valorcookie: nuevohue
        },
        function (data) {
            var hueS = nuevohue;
            var hueG = "hue-rotate(" + hueS + "deg)";
            document.body.style.webkitFilter = hueG;
            //document.getElementById("greyval").textContent = setG;
        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });

}

function invert(nuevoinvert) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "invertido",
            valorcookie: nuevoinvert
        },
        function (data) {
            var invS = nuevoinvert;
            var invG = "invert(" + invS + ")";
            document.body.style.webkitFilter = invG;
            //document.getElementById("greyval").textContent = setG;
        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });

}

function opacity(nuevoopacity) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "opacidad",
            valorcookie: nuevoopacity
        },
        function (data) {
            var opaS = nuevoopacity;
            var opaG = "opacity(" + opaS + ")";
            document.body.style.webkitFilter = opaG;
            //document.getElementById("greyval").textContent = setG;
        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });


}


function brightness(nuevobrightness) {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "brillo",
            valorcookie: nuevobrightness
        },
        function (data) {
            var briS = nuevobrightness;
            var briG = "brightness(" + briS + ")";
            document.body.style.webkitFilter = briG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });

}

function contrast(nuevocontrast) {


    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "contraste",
            valorcookie: nuevocontrast
        },
        function (data) {
            var conS = nuevocontrast;
            var conG = "contrast(" + conS + ")";
            document.body.style.webkitFilter = conG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });

}

function patron(mapa) {
    var seleccion = $('#plano').find(".svgSeleccionado").attr("tabindex");
    if (!seleccion) {
        seleccion = 0;
    }

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "mapaplano",
            valorcookie: mapa
        },
        function (data) {
            renderizarMapa(mapa, seleccion);
        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    });


}

//FUnciones restart

function restart() {
    contrast(1);
    brightness(1);
    opacity(1);
    invert(0);
    hue(0);
    sepia(0);
    greyscale(0);
    saturate(1);
    $("#Contrast").val(2.5);
    $("#Brightness").val(1.1);
    $("#Opacity").val(0.6);
    $("#Invert").val(0.5);
    $("#Hue").val(180);
    $("#Sepia").val(0.5);
    $("#Grayscale").val(0.5);
    $("#Saturation").val(6);
    patron('mapaplano');
}

function reiniciar() {
    pulsar('estilo.css');
    tamanioletra(1);
    espaciadoletra(1);
    tipoletra('Arial');
    $("#tamanioletra").val(1);
    $("#espaciado2").val(1);
    $("#radionavegacion").prop("checked", true);
    $("button[tabindex='19']").prop('disabled', true);
    $("button[tabindex='15']").prop('disabled', false);
}
//Inicio de cookies
function cookiesinicio() {
    $.post(
        '/Mapa/cookieRead',
        function (data) {

            pulsar(data.estilo);
            tipoletra(data.tipoLetra);
            espaciadoletra(data.espaciadoLetra);
            tamanioletra(data.tamanioLetra);
            //console.log(data.saturacion);

            contrast(data.contraste);
            $("#tipoletra").val(data.tipoLetra);
            $("#espaciado2").val(data.espaciadoLetra);
            $("#tamanioletra").val(data.tamanioLetra);
            $("#Saturation").val(data.saturacion);
            $("#Contrast").val(data.constraste);
            $("#Brightness").val(data.brillo);
            $("#Opacity").val(data.opacidad);
            $("#Invert").val(data.invertido);
            $("#Hue").val(data.tono);
            $("#Sepia").val(data.sepia);
            $("#Grayscale").val(data.grises);
            saturate(data.saturacion);
            //brightness(data.brillo);
            greyscale(data.grises);
            sepia(data.sepia);
            hue(data.tono);
            invert(data.invertido);
            opacity(data.opacidad);




        }).fail(function (res) {
        console.log("Error: en ajax");
    });
}

//Cargar Informacion de oficina en divs
function cargarInformacionOficina(idOficina, mapa) {
    $.post(
        '/Mapa/informacionOficina', {
            idOficina: idOficina
        },
        function (data) {
            $('#informacion1').html(data.informacionPrincipal);
            $('#informacion2').html(data.cargaHoraria);
            $('#informacion3').html(data.informacionProfesor);
        }
    ).fail(function (res) {
        console.log("Error: en ajax");
    }).success(function () {
        renderizarMapa("", idOficina);
        $("div[tabindex='150']").focus();
        $("button[tabindex='161']").attr("lastelement", "" + idOficina);
    });
}

//Renderizar mapa
function renderizarMapa(mapa, idOficina) {
    $.post(
        '/Mapa/tipoPlano', {
            mapa: mapa,
            idOficina: idOficina
        },
        function (data) {

            $('#contenedorPlanoOficinas').html(data);
            var zoomTiger = svgPanZoom('#plano', {
                zoomEnabled: true,
                controlIconsEnabled: true,
                fit: true,
                center: true,
            });
        }
    ).fail(function (res) {
        console.log("Error: en ajax plano");
    });
}


function mostrarRuta(tabindex, idRuta) {
    $.post(
        '/Mapa/coordenadas', {
            idRuta: idRuta
        },
        function (data) {
            //renderiar mapa
            var datauser = data;
            renderizarMapa(datauser['mapa'], tabindex);

            var aux = 1;
            var total = Object.keys(datauser['user']).length;

            $.each(datauser['user'], function (i, item) {

                setTimeout(function () {
                    if (aux === total) {
                        d3.select(".currentLayer").append("circle").attr("cx", item["coordenadax"]).attr("cy", item["coordenaday"]).attr("r", 4).style("fill", "yellow");
                    } else {
                        d3.select(".currentLayer").append("circle").attr("cx", item["coordenadax"]).attr("cy", item["coordenaday"]).attr("r", 4).style("fill", "red");
                    }
                    aux++;
                }, 1500 * i);
            });
        }).fail(function (res) {
        console.log("Error: en ajax plano");
    });
}

function playaudio(audio1) {
    var audio = document.getElementById(audio1);
    audio.play();

}

function ultimoelemento() {
    var ultimoelemento = $("button[tabindex='161']").attr("lastelement");

    if (ultimoelemento > 0) {
        var elemento = $("[tabindex='" + ultimoelemento + "']");
        elemento.focus();
    } else {
        var informacion = $("[tabindex='29']");
        informacion.focus()
    }
}

function menuprincipal() {
    $("button[tabindex='15']").focus();
}

function exit() {
    $("h1[tabindex='0']").focus();
}

function menuayuda() {
    $("div[tabindex='170']").focus();
}

function menuayuda2() {
    $("div[tabindex='171']").focus();
}

function menuayuda3() {
    $("div[tabindex='172']").focus();
}

function menuayuda4() {
    $("div[tabindex='173']").focus();
}