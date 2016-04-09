module.exports = {

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
        var mapapatron = (req.cookies.mapapatron) ? req.cookies.mapapatron : 'original';



        return res.redirect('/Mapa/plano');
    },

    main: function (req, res) {
        res.view();
    },

    plano: function (req, res) {
        var menuIdOficina = req.param("id");
        var idOficinaSvg = menuIdOficina;
        var tituloOficina = "";
        var descripcionOficina = "";

        switch (menuIdOficina) {
        case '10':
            tituloOficina = "Denys";
            descripcionOficina = "Province of Azuay is a province of Ecuador, created on 25 June 1824. It encompasses an area of 8,309.58 square kilometres (3,208.35 sq mi). Its capital is Cuenca. It is located in the south center of Ecuador in the highlands. Its mountains reach 4,500 m (14,800 ft) above sea level in the national park of El Cajas. Azuay is located on the Panamerican Highway. Cuenca is connected by national flights from Quito and Guayaquil. It has the largest hydroelectric plant of the country, situated on the river Paute.";
            break;
        case '9':
            tituloOficina = "Sandra";
            descripcionOficina = "Bolívar is a province in Ecuador. The capital is Guaranda. Much of the province has a cool, 'sierra' climate, but the part in the lower foothills has a warm, tropical climate. The province is divided into 7 cantons, Caluma, Chillanes, Chimbo, Echeandia, Guaranda, Las Naves and San Miguel.";
            break;

        default:


            break;
        }

        res.view({
            tituloOficinaVista: tituloOficina,
            descripcionOficinaVista: descripcionOficina,
            idOficinaSvgVista: idOficinaSvg
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
        case 'mapapatron':
            res.cookie('mapapatron', valorcookie);
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
        var mapapatron = (req.cookies.mapapatron) ? req.cookies.mapapatron : 'original';
        console.log("aqui");

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
            grises: grises,
            mapapatron: mapapatron

        });
    },

    //mapa Original desde jquery
    mapaOriginal: function (req, res) {

        var mapa = '';

        var variableswitch = req.param("mapa");

        console.log(variableswitch);

        switch (variableswitch) {
        case 'capitales':
            mapa = 'mapacapitales.ejs';
            break;
        case 'provincias':
            mapa = 'mapaProvincias.ejs';
            break;
        case 'ferrea':
            mapa = 'mapaFerroviario.ejs';
            break;
        default:
            break;
        }


        var id = req.param("seleccion");;

        var vista = 'Mapa/' + mapa;

        console.log(vista);

        res.view(vista, {
            idFerreaSvgVista: id,
            idProvinciaSvgVista: id,
            idCapitalesSvgVista: id,
            layout: null
        });

    }

};