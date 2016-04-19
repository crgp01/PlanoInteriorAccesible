module.exports = {


    //controlador index redirecciona a plano
    index: function (req, res) {
        var estilo = (req.cookies.estilo) ? req.cookies.estilo : 'estilo.css';
        var tamanioLetra = (req.cookies.tamanioletra) ? req.cookies.tamanioletra : 1;

        var espaciadoLetra = (req.cookies.espaciadoletra) ? req.cookies.espaciadoletra : 1;

        var saturacion = (req.cookies.saturate) ? req.cookies.saturate : 1;

        var contraste = (req.cookies.contraste) ? req.cookies.contraste : 1;
        var brillo = (req.cookies.brillo) ? req.cookies.brillo : 1;
        var opacidad = (req.cookies.opacidad) ? req.cookies.opacidad : 1;
        var invertido = (req.cookies.invertido) ? req.cookies.invertido : 0;
        var tono = (req.cookies.tono) ? req.cookies.tono : 0;
        var sepia = (req.cookies.sepia) ? req.cookies.sepia : 0;
        var grises = (req.cookies.grises) ? req.cookies.grises : 0;
        var mapaplano = (req.cookies.mapaplano) ? req.cookies.mapaplano : res.cookie('mapaplano', 'mapaplano');


        return res.redirect('/Mapa/plano');
    },

    //retorna la pagina inicial
    plano: function (req, res) {
        var informacionPrincipalMapaController = "";
        var cargaHorariaMapaController = "";
        var informacionProfesorMapaController = "";
        var mapacookieMapaController = req.cookies.mapaplano;

        res.view({
            idOficina: 0,
            mapacookie: mapacookieMapaController
        });
    },

    //Controlador para retornar la informacion de cada oficina
    informacionOficina: function (req, res) {
        var idOficina = req.param("idOficina");
        var informacionPrincipal = "";
        var cargaHoraria = "";
        var informacionProfesor = "";

        switch (idOficina) {
        case '29':
            informacionPrincipal = "Información";
            cargaHoraria = "Información";
            informacionProfesor = "Información";
            break;
        case '30':
            informacionPrincipal = "30";
            cargaHoraria = "30";
            informacionProfesor = "30";
            break;
        case '31':
            informacionPrincipal = "31";
            cargaHoraria = "31";
            informacionProfesor = "31";
            break;
        case '33':
            informacionPrincipal = "33";
            cargaHoraria = "33";
            informacionProfesor = "33";
            break;
        case '34':
            informacionPrincipal = "34";
            cargaHoraria = "34";
            informacionProfesor = "34";
            break;
        case '35':
            informacionPrincipal = "35";
            cargaHoraria = "35";
            informacionProfesor = "35";
            break;
        case '37':
            informacionPrincipal = "37";
            cargaHoraria = "37";
            informacionProfesor = "37";
            break;
        case '39':
            informacionPrincipal = "39";
            cargaHoraria = "39";
            informacionProfesor = "39";
            break;
        case '41':
            informacionPrincipal = "41";
            cargaHoraria = "41";
            informacionProfesor = "41";
            break;
        case '43':
            informacionPrincipal = "43";
            cargaHoraria = "43";
            informacionProfesor = "43";
            break;
        case '45':
            informacionPrincipal = "45";
            cargaHoraria = "45";
            informacionProfesor = "45";
            break;
        case '47':
            informacionPrincipal = "47";
            cargaHoraria = "47";
            informacionProfesor = "47";
            break;
        case '49':
            informacionPrincipal = "49";
            cargaHoraria = "49";
            informacionProfesor = "49";
            break;
        case '51':
            informacionPrincipal = "51";
            cargaHoraria = "51";
            informacionProfesor = "51";
            break;
        case '53':
            informacionPrincipal = "53";
            cargaHoraria = "53";
            informacionProfesor = "53";
            break;
        case '55':
            informacionPrincipal = "55";
            cargaHoraria = "55";
            informacionProfesor = "55";
            break;
        case '57':
            informacionPrincipal = "57";
            cargaHoraria = "57";
            informacionProfesor = "57";
            break;
        case '59':
            informacionPrincipal = "59";
            cargaHoraria = "59";
            informacionProfesor = "59";
            break;
        case '61':
            informacionPrincipal = "61";
            cargaHoraria = "61";
            informacionProfesor = "61";
            break;
        case '63':
            informacionPrincipal = "63";
            cargaHoraria = "63";
            informacionProfesor = "63";
            break;
        case '65':
            informacionPrincipal = "65";
            cargaHoraria = "65";
            informacionProfesor = "65";
            break;
        case '67':
            informacionPrincipal = "67";
            cargaHoraria = "67";
            informacionProfesor = "67";
            break;
        case '69':
            informacionPrincipal = "69";
            cargaHoraria = "69";
            informacionProfesor = "69";
            break;
        case '71':
            informacionPrincipal = "71";
            cargaHoraria = "71";
            informacionProfesor = "71";
            break;
        case '73':
            informacionPrincipal = "73";
            cargaHoraria = "73";
            informacionProfesor = "73";
            break;
        case '74':
            informacionPrincipal = "74";
            cargaHoraria = "74";
            informacionProfesor = "74";
            break;
        case '75':
            informacionPrincipal = "75";
            cargaHoraria = "75";
            informacionProfesor = "75";
            break;
        case '77':
            informacionPrincipal = "77";
            cargaHoraria = "77";
            informacionProfesor = "77";
            break;
        case '79':
            informacionPrincipal = "79";
            cargaHoraria = "79";
            informacionProfesor = "79";
            break;
        case '81':
            informacionPrincipal = "81";
            cargaHoraria = "81";
            informacionProfesor = "81";
            break;
        case '83':
            informacionPrincipal = "83";
            cargaHoraria = "83";
            informacionProfesor = "83";
            break;
        case '85':
            informacionPrincipal = "85";
            cargaHoraria = "85";
            informacionProfesor = "85";
            break;
        case '87':
            informacionPrincipal = "87";
            cargaHoraria = "87";
            informacionProfesor = "87";
            break;
        case '89':
            informacionPrincipal = "89";
            cargaHoraria = "89";
            informacionProfesor = "89";
            break;
        case '91':
            informacionPrincipal = "91";
            cargaHoraria = "91";
            informacionProfesor = "91";
            break;
        case '93':
            informacionPrincipal = "93";
            cargaHoraria = "93";
            informacionProfesor = "93";
            break;
        case '95':
            informacionPrincipal = "95";
            cargaHoraria = "95";
            informacionProfesor = "95";
            break;
        case '97':
            informacionPrincipal = "97";
            cargaHoraria = "97";
            informacionProfesor = "97";
            break;
        case '99':
            informacionPrincipal = "99";
            cargaHoraria = "99";
            informacionProfesor = "99";
            break;
        case '101':
            informacionPrincipal = "101";
            cargaHoraria = "101";
            informacionProfesor = "101";
            break;
        case '103':
            informacionPrincipal = "103";
            cargaHoraria = "103";
            informacionProfesor = "103";
            break;
        case '105':
            informacionPrincipal = "105";
            cargaHoraria = "105";
            informacionProfesor = "105";
            break;
        case '107':
            informacionPrincipal = "107";
            cargaHoraria = "107";
            informacionProfesor = "107";
            break;
        case '109':
            informacionPrincipal = "109";
            cargaHoraria = "109";
            informacionProfesor = "109";
            break;
        case '111':
            informacionPrincipal = "111";
            cargaHoraria = "111";
            informacionProfesor = "111";
            break;
        case '113':
            informacionPrincipal = "113";
            cargaHoraria = "113";
            informacionProfesor = "113";
            break;
        case '115':
            informacionPrincipal = "115";
            cargaHoraria = "115";
            informacionProfesor = "115";
            break;

        }



        res.json({
            informacionPrincipal: informacionPrincipal,
            cargaHoraria: cargaHoraria,
            informacionProfesor: informacionProfesor
        });
    },

    //Controlador para retornar plano correspondiente
    tipoPlano: function (req, res) {


        var mapaplano = req.cookies.mapaplano;
        var mapa = "Mapa/" + mapaplano + ".ejs";
        var idOficina = req.param("idOficina");

        console.log(mapa);

        res.view(mapa, {
            idOficina: idOficina,
            layout: null
        });
    },

    //Codigo pegado de original
    coordenadas: function (req, res) {
        if (req.wantsJSON) {
            var idRuta = req.param("idRuta");
            Coordenadas.find().where({
                owner: idRuta
            }).exec(function (err, response) {
                res.json({
                    user: response
                })
            });
        }
    },

    mapa: function (req, res) {
        res.view('Mapa/plano', {
            idsvgplanovista: req.param("idsvgplano"),
            layout: ""
        })
    },

    //Mapas Originales


    //Seteo de Cookies
    cookieStart: function (req, res) {
        var tipocookie = req.param("tipocookie");
        var valorcookie = req.param("valorcookie");

        switch (tipocookie) {
        case 'estilo':
            res.cookie('estilo', valorcookie);
            break;
        case 'tipoletra':
            res.cookie('tipoletra', valorcookie);
            break;
        case 'tamanioletra':
            res.cookie('tamanioletra', valorcookie);
            break;
        case 'espaciadoletra':
            res.cookie('espaciadoletra', valorcookie);
            break;
        case 'saturate':
            res.cookie('saturate', valorcookie);
            break;
        case 'grises':
            res.cookie('grises', valorcookie);
            break;
        case 'sepia':
            res.cookie('sepia', valorcookie);
            break;
        case 'tono':
            res.cookie('tono', valorcookie);
            break;
        case 'contraste':
            res.cookie('contraste', valorcookie);
            break;
        case 'brillo':
            res.cookie('brillo', valorcookie);
            break;
        case 'opacidad':
            res.cookie('opacidad', valorcookie);
            break;
        case 'invertido':
            res.cookie('invertido', valorcookie);
            break;
        case 'mapaplano':
            res.cookie('mapaplano', valorcookie);
            break;


        default:
            break;
        }

        res.json({
            ok: "ok"
        });
    },

    //Lectura De Cookies
    cookieRead: function (req, res) {

        var estilo = (req.cookies.estilo) ? req.cookies.estilo : 'estilo.css';

        var tipoLetra = (req.cookies.tipoletra) ? req.cookies.tipoletra : 'Arial';

        var tamanioLetra = (req.cookies.tamanioletra) ? req.cookies.tamanioletra : 1;

        var espaciadoLetra = (req.cookies.espaciadoletra) ? req.cookies.espaciadoletra : 1;

        var saturacion = (req.cookies.saturate) ? req.cookies.saturate : 1;

        var contraste = (req.cookies.contraste) ? req.cookies.contraste : 1;
        var brillo = (req.cookies.brillo) ? req.cookies.brillo : 1;
        var opacidad = (req.cookies.opacidad) ? req.cookies.opacidad : 1;
        var invertido = (req.cookies.invertido) ? req.cookies.invertido : 0;
        var tono = (req.cookies.tono) ? req.cookies.tono : 0;
        var sepia = (req.cookies.sepia) ? req.cookies.sepia : 0;
        var grises = (req.cookies.grises) ? req.cookies.grises : 0;

        res.json({
            estilo: estilo,
            tipoLetra: tipoLetra,
            tamanioLetra: tamanioLetra,
            espaciadoLetra: espaciadoLetra,
            saturacion: saturacion,
            contraste: contraste,
            brillo: brillo,
            opacidad: opacidad,
            invertido: invertido,
            tono: tono,
            sepia: sepia,
            grises: grises
        });
    },

    coordenadas: function (req, res) {
        if (req.wantsJSON) {
            var idRuta = req.param("idRuta");
            Coordenadas.find().where({
                owner: idRuta
            }).exec(function (err, response) {
                res.json({
                    user: response,
                    mapa: req.cookies.mapaplano
                })
            });
        }
    }
};