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
            informacionPrincipal = "Imagen Sistemas";
            cargaHoraria = "Imagen Sistemas se encarga de promover la imagen de la Facultad de Ingeniería de Sistemas a través de la realización de diferentes actividades internas";
            informacionProfesor = "Coordinación para participación de la FIS en jornadas y concursos organizados por otras universidades e instituciones. Organización de cursos, conferencias y casas abiertas de la FIS. Soporte y mantenimiento a escuelas y colegios. Gestión de carteleras y publicidad gráfica de la imagen de la FIS.";
            break;
        case '31':
            informacionPrincipal = "Sala de reuniones";
            cargaHoraria = "31";
            informacionProfesor = "31";
            break;
        case '33':
            informacionPrincipal = "Subdecanato";
            cargaHoraria = "Es la segunda autoridad ejecutiva de la Facultad. Sus funciones son, Colaborar con el Decano en el cumplimiento de sus funciones y en el ejercicio de sus atribuciones,Coordinar la revisión curricular de las carreras de la Facultad";
            informacionProfesor = "La subdecana es la Dra. Jenny Torres";
            break;
        case '35':
            informacionPrincipal = "Baño decanato";
            cargaHoraria = "";
            informacionProfesor = "";
            break;
        case '37':
            informacionPrincipal = "Decanato";
            cargaHoraria = "Es la primera autoridad ejecutiva de la Facultad. Ejerce su representación y tiene a su cargo la planificación, ejecución, control y evaluación de los procesos de docencia, investigación y proyección social de la Facultad.";
            informacionProfesor = "La decana es la Dra. Myriam Hernandez";
            break;
        case '39':
            informacionPrincipal = "Secretaría decanato";
            cargaHoraria = "39";
            informacionProfesor = "39";
            break;
        case '41':
            informacionPrincipal = "Almacén decanato";
            cargaHoraria = "41";
            informacionProfesor = "41";
            break;
        case '43':
            informacionPrincipal = "Cocina";
            cargaHoraria = "43";
            informacionProfesor = "43";
            break;
        case '45':
            informacionPrincipal = "Secretaría general";
            cargaHoraria = "45";
            informacionProfesor = "45";
            break;
        case '47':
            informacionPrincipal = "Secretaría doctorado";
            cargaHoraria = "";
            informacionProfesor = "Responsable: Lcda. Susana Aguilar";
            break;
        case '49':
            informacionPrincipal = "Area profesores";
            cargaHoraria = "49";
            informacionProfesor = "Anteriormente era la biblioteca de sistemas";
            break;
        case '51':
            informacionPrincipal = "Area profesores";
            cargaHoraria = "51";
            informacionProfesor = "Anteriormente era la biblioteca de sistemas";
            break;
        case '53':
            informacionPrincipal = "Bolivar Palán";
            cargaHoraria = "Diseño de Procesos organizacionales, Gestion de TICs y unidades informáticas, Ingeniería de software";
            informacionProfesor = "http://bolivarpalan.blog.epn.edu.ec/";
            break;
        case '55':
            informacionPrincipal = "Rodrigo Chancusig";
            cargaHoraria = "55";
            informacionProfesor = "55";
            break;
        case '57':
            informacionPrincipal = "Luis Salvador";
            cargaHoraria = "57";
            informacionProfesor = "57";
            break;
        case '59':
            informacionPrincipal = "Marco Santorum";
            cargaHoraria = "Diseño de procesos organizacionales";
            informacionProfesor = "59";
            break;
        case '61':
            informacionPrincipal = "Myriam Hernández";
            cargaHoraria = "Gestión de proyectos";
            informacionProfesor = "http://myriamhernandez.blog.epn.edu.ec/";
            break;
        case '63':
            informacionPrincipal = "Henry Paz";
            cargaHoraria = "Arquitectura de Computadores, Inteligencia Artificial";
            informacionProfesor = "63";
            break;
        case '65':
            informacionPrincipal = "Andrés Larco";
            cargaHoraria = "Calidad de Software, Arquitectura de Computadores";
            informacionProfesor = "http://andreslarco.blog.epn.edu.ec/";
            break;
        case '67':
            informacionPrincipal = "Gustavo Samaniego";
            cargaHoraria = "67";
            informacionProfesor = "67";
            break;
        case '69':
            informacionPrincipal = "Enrique Mafla";
            cargaHoraria = "Administración de Sistemas Operativos y Redes, Computación distribuida, Tecnologías de Seguridad";
            informacionProfesor = "http://sgotiweb.epn.edu.ec/~emafla/";
            break;
            //Tania calle
        case '71':
            informacionPrincipal = "Tania Calle";
            cargaHoraria = "Algoritmos Numéricos, Tecnologías web con JavaScript";
            informacionProfesor = "http://taniacalle.blog.epn.edu.ec/";
            break;
            //Marco Benalcazar      
        case '73':
            informacionPrincipal = "Marco Benalcazar ";
            cargaHoraria = "Matemáticas Discretas";
            informacionProfesor = "73";
            break;
        case '74':
            informacionPrincipal = "Consejería";
            cargaHoraria = "";
            informacionProfesor = "Aqui se almacenan implementos de limpieza";
            break;
        case '75':
            informacionPrincipal = "María Perez";
            cargaHoraria = "Algoritmos";
            informacionProfesor = "75";
            break;
        case '77':
            informacionPrincipal = "Baño de hombres";
            cargaHoraria = "77";
            informacionProfesor = "77";
            break;
        case '79':
            informacionPrincipal = "Baño de mujeres";
            cargaHoraria = "79";
            informacionProfesor = "79";
            break;
        case '81':
            informacionPrincipal = "81";
            cargaHoraria = "81";
            informacionProfesor = "81";
            break;
        case '83':
            informacionPrincipal = "Proyecto de Investigación";
            cargaHoraria = "83";
            informacionProfesor = "83";
            break;
            //Andrés Cevallos
        case '85':
            informacionPrincipal = "Andrés Cevallos y Tania Pazmiño";
            cargaHoraria = "Trigonometría, Fundamentos de Contabilidad";
            informacionProfesor = "85";
            break;
        case '87':
            informacionPrincipal = "Archivo";
            cargaHoraria = "";
            informacionProfesor = "Aqui se almacenan archivos y documentos sobre el decanato.";
            break;
        case '89':
            informacionPrincipal = "Conserjería";
            cargaHoraria = "";
            informacionProfesor = "Aqui se almacenan implementos de limpieza";
            break;
        case '91':
            informacionPrincipal = "Proyecto de Investigación";
            cargaHoraria = "91";
            informacionProfesor = "91";
            break;
        case '93':
            informacionPrincipal = "Carlos Archundia y Patricio Zambrano";
            cargaHoraria = "Estructura de datos, OCJP, Certificacion Profesional, Redes de Computadoras";
            informacionProfesor = "93";
            break;
        case '95':
            informacionPrincipal = "Profesor";
            cargaHoraria = "95";
            informacionProfesor = "95";
            break;
            //Jhonathan barriga
        case '97':
            informacionPrincipal = "Jhonathan barriga";
            cargaHoraria = "Redes de Computadoras";
            informacionProfesor = "97";
            break;
        case '99':
            informacionPrincipal = "Bodega";
            cargaHoraria = "";
            informacionProfesor = "Aqui se almacenan objetos que ya no se utilizan";
            break;
            //Mayra Carrion
        case '101':
            informacionPrincipal = "Mayra Carrion";
            cargaHoraria = "Algoritmos, Estructura de Datos";
            informacionProfesor = "101";
            break;
        case '103':
            informacionPrincipal = "Sandra Sanchez";
            cargaHoraria = "Calidad de Software, Ingeniería de Software";
            informacionProfesor = "http://sandrasanchez.blog.epn.edu.ec/";
            break;
        case '105':
            informacionPrincipal = "Jenny Torres";
            cargaHoraria = "Gestion de Seguridad Informática";
            informacionProfesor = "105";
            break;
        case '107':
            informacionPrincipal = "Carlos Montenegro";
            cargaHoraria = "107";
            informacionProfesor = "http://carlosmontenegro.blog.epn.edu.ec/";
            break;
        case '109':
            informacionPrincipal = "Monserratte Intriago, Ivan Carrera y Elisa Mena";
            cargaHoraria = "Bases de Datos, Programación I";
            informacionProfesor = "109";
            break;
        case '111':
            informacionPrincipal = "Rosa Navarrete";
            cargaHoraria = "Legislación Informática";
            informacionProfesor = "http://rosanavarrete.blog.epn.edu.ec/";
            break;
        case '113':
            //Maria Hallo
            informacionPrincipal = "Maria Hallo";
            cargaHoraria = "Bases de Datos, Inteligencia de Negocios";
            informacionProfesor = "http://mariahallo.blog.epn.edu.ec/";
            break;
            //Raul Cordova
        case '115':
            informacionPrincipal = "Raul Cordova";
            cargaHoraria = "Aplicaciones en Ambientes propietarios, Ingeniería de Software I";
            informacionProfesor = "http://raulcordova.blog.epn.edu.ec/";
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
    },

    cookieMapa: function (req, res) {
        if (req.wantsJSON) {
            res.json({
                mapa: req.cookies.mapaplano
            });
        }
    }
};