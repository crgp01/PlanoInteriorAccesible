$(document).ready(function () {


    //lamada de funcion cookies
    cookiesinicio();

    //Declaracion Stycky Bar
    var stickyNavTop = $('#styckybar').offset().top;

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
    });

    //declaracion back on top

    jQuery('.back-to-top').click(function (event) {

        event.preventDefault();

        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);

        return false;

    });


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
            var focused = $(':focus').parent();
            focused.trigger("click");
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
                    $("button[tabindex = '150']").focus();
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
                    $("button[tabindex='150']").focus();
                }
                break;
            }
        }

        if (e.which == 38 || e.which == 40) {
            switch (focused.attr("tabindex")) {
            case '101':
                if (e.which == 38) {
                    $("path[tabindex='51']").focus();
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
                    $("button[tabindex='150']").focus();
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
                    $("button[tabindex='150']").focus();
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
                    $("button[tabindex='150']").focus();
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
                    $("button[tabindex='150']").focus();
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
                    $("button[tabindex='19']").focus();
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
                    $("path[tabindex='29']").focus();
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
                    $("button[tabindex='154']").focus();
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

        //boton accesibilidad 1
        if (e.which == 37 || e.which == 39) {
            switch (focused.attr("tabindex")) {
            case '1':
                if (e.which == 37) {
                    $("rect[tabindex='']").focus();
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
                    $("button[tabindex='']").focus();
                } else {
                    $("button[tabindex='15']").focus();
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

            /*var svg = document.getElementById("plano");

            function drawposition(coordenadax, coordenaday, svg, colortono) {
                var shape = this.id;
                var svg = $('#plano').svg('get');
                x = parseInt(coordenadax);
                y = parseInt(coordenaday);
                svg.circle(x, y, 5, {
                    fill: colortono,
                    stroke: colortono,
                    strokeWidth: 3,
                    id: 'circle'
                });

            }

            //dibujar coordenadas recibidas
            var aux = 1;
            var total = Object.keys(datauser['user']).length;
            var svg = document.getElementById("plano");

            $.each(datauser['user'], function (i, item) {

                setTimeout(function () {
                    if (aux === total) {
                        drawposition(item["coordenadax"], item["coordenaday"], svg, "yellow");
                    } else {
                        drawposition(item["coordenadax"], item["coordenaday"], svg, "red");
                    }
                    aux++;
                }, 1000 * i);
            });*/

            var aux = 1;
            var total = Object.keys(datauser['user']).length;
            var svgNS = "http://www.w3.org/2000/svg";

            $.each(datauser['user'], function (i, item) {

                setTimeout(function () {
                    if (aux === total) {
                        var myCircle = document.createElementNS(svgNS, "circle"); //to create a circle, for rectangle use rectangle
                        myCircle.setAttributeNS(null, "id", "mycircle");
                        myCircle.setAttributeNS(null, "cx", item["coordenadax"]);
                        myCircle.setAttributeNS(null, "cy", item["coordenaday"]);
                        myCircle.setAttributeNS(null, "r", 3);
                        myCircle.setAttributeNS(null, "fill", "yellow");
                        myCircle.setAttributeNS(null, "stroke", "none");

                        document.getElementById("plano").appendChild(myCircle);
                    } else {
                        var myCircle = document.createElementNS(svgNS, "circle"); //to create a circle, for rectangle use rectangle
                        myCircle.setAttributeNS(null, "id", "mycircle");
                        myCircle.setAttributeNS(null, "cx", item["coordenadax"]); //item["coordenadax"]);
                        myCircle.setAttributeNS(null, "cy", item["coordenaday"]); //item["coordenadax"]);
                        myCircle.setAttributeNS(null, "r", 3);
                        myCircle.setAttributeNS(null, "fill", "red");
                        myCircle.setAttributeNS(null, "stroke", "none");

                        document.getElementById("plano").appendChild(myCircle);
                    }
                    console.log(item);
                    aux++;
                }, 800 * i);
            });
        }).fail(function (res) {
        console.log("Error: en ajax plano");
    });
}