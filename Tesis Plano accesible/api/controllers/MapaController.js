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
            cargaHoraria = "Aqui se puede solicitar información sobre algún docente.";
            informacionProfesor = "Arriba:Menú accesibilidad.</br> Abajo:Baño de mujeres.</br>Derecha:Area de profesores.</br>Izquierda:Imágen sistemas.</br>";
            break;
        case '30':
            informacionPrincipal = "Imagen Sistemas";
            cargaHoraria = "Imagen Sistemas se encarga de promover la imagen de la Facultad de Ingeniería de Sistemas a través de la realización de diferentes actividades internas. Coordinación para participación de la FIS en jornadas y concursos organizados por otras universidades e instituciones. Organización de cursos, conferencias y casas abiertas de la FIS. Soporte y mantenimiento a escuelas y colegios. Gestión de carteleras y publicidad gráfica de la imagen de la FIS.";
            informacionProfesor = "Arriba:Menú accesibilidad.</br> Abajo:Secretaría de decanato.</br>Derecha:Información principal.</br>Izquierda:Sala de reuniones.</br>";
            break;
        case '31':
            informacionPrincipal = "Sala de reuniones";
            cargaHoraria = "Oficina donde se reune el consejo de facultad a designar la carga academica a los profesores, asignar planes de tesis, toma desiciones facultad y en beneficio de los estudiantes";
            informacionProfesor = "Arriba:Menú accesibilidad.</br> Abajo:Secretaría de decanato.</br>Derecha:Imágen sistemas.</br>Izquierda:Subdecanato.</br>";
            break;
        case '33':
            informacionPrincipal = "Subdecanato";
            cargaHoraria = "Es la segunda autoridad ejecutiva de la Facultad. Sus funciones son, Colaborar con el Decano en el cumplimiento de sus funciones y en el ejercicio de sus atribuciones,Coordinar la revisión curricular de las carreras de la Facultad. La subdecana es la Dra. Jenny Torres.";
            informacionProfesor = "Arriba:Menú accesibilidad.</br> Abajo:Baño del rectorado.</br>Derecha:Sala de reuniones.</br>Izquierda:Botón oficinas de docentes.</br>";
            break;
        case '35':
            informacionPrincipal = "Baño decanato";
            cargaHoraria = "";
            informacionProfesor = "Arriba:Subdecanato.</br> Abajo:Decanato.</br>Derecha:Secretaría de decanato.</br>Izquierda:Botón oficinas de docentes.</br>";
            break;
        case '37':
            informacionPrincipal = "Decanato";
            cargaHoraria = "Es la primera autoridad ejecutiva de la Facultad. Ejerce su representación y tiene a su cargo la planificación, ejecución, control y evaluación de los procesos de docencia, investigación y proyección social de la Facultad.La decana es la Dra. Myriam Hernandez.";
            informacionProfesor = "Arriba:Baño rectorado.</br> Abajo:Almacén decanato.</br>Derecha:Cocina.</br>Izquierda:Botón oficinas de docentes.</br>";
            break;
        case '39':
            informacionPrincipal = "Secretaría decanato";
            cargaHoraria = "Se encarga de gestionar toda la información proveniente de decanato, agendar reuniones, enviar correos a los estudiantes, etc.";
            informacionProfesor = "Arriba:Sala de reuniones.</br> Abajo:Almacén decanato.</br>Derecha:Secretaría de doctorado.</br>Izquierda:Decanato.</br>";
            break;
        case '41':
            informacionPrincipal = "Almacén decanato";
            cargaHoraria = "Aqui de almacenan archivos correspondientes al rectorado.";
            informacionProfesor = "Arriba:Secretaría de decanato.</br> Abajo:Oficina de Marco Santórum.</br>Derecha:Cocina.</br>Izquierda:Oficinas de docentes.</br>";
            break;
        case '43':
            informacionPrincipal = "Cocina";
            cargaHoraria = "Aqui se preparan los alimentos y aperitivos para los docentes.";
            informacionProfesor = "Arriba:Secretaría de doctorado.</br> Abajo:Oficina de Rodrigo Chancusig.</br>Derecha:Secretaría general.</br>Izquierda:Almacén de decanato.</br>";
            break;
        case '45':
            informacionPrincipal = "Secretaría general";
            cargaHoraria = "Aqui se procesan todos los trámites correspondientes a los estudiantes y las materias.";
            informacionProfesor = "Arriba:Imágen Sistemas</br> Abajo:Oficina de Bolivar Palán</br>Derecha:Area de profesores.</br>Izquierda:Secretaría de doctorado.</br>";
            break;
        case '47':
            informacionPrincipal = "Secretaría doctorado";
            cargaHoraria = "Se encarga de gestionar los trámites de postgrados, carga horaria, profesores de postgrados, matriculación y envío de correos.";
            informacionProfesor = "Arriba:Imágen Sistemas</br> Abajo:Cocina</br>Derecha:Secretaría general.</br>Izquierda:Secretaría de decanato.</br>";
            break;
        case '49':
            informacionPrincipal = "Area profesores";
            cargaHoraria = "Aqui está en construcción nuvas oficinas para docentes. Anteriormente era la biblioteca de sistemas.";
            informacionProfesor = "Arriba:Menu accesibilidad.</br> Abajo:Proyecto de investigación.</br>Derecha:Area profesores.</br>Izquierda:Información.</br>";
            break;
        case '51':
            informacionPrincipal = "Area profesores";
            cargaHoraria = "Aqui está en construcción nuvas oficinas para docentes. Anteriormente era la biblioteca de sistemas.";
            informacionProfesor = "Arriba:Menu accesibilidad.</br> Abajo:Oficina de Mayra Carrión.</br>Derecha:Panel de información.</br>Izquierda:Area profesores.</br>";
            break;
        case '53':
            informacionPrincipal = "Bolivar Palán";
            cargaHoraria = "Diseño de Procesos organizacionales, Gestion de TICs y unidades informáticas, Ingeniería de software</br>Blog:http://bolivarpalan.blog.epn.edu.ec/";
            informacionProfesor = "Arriba:Secretaría General.</br> Abajo:Oficina de María Perez.</br>Derecha:Proyecto de investigación.</br>Izquierda:Rodrigo Chancusig.</br>";
            break;
        case '55':
            informacionPrincipal = "Rodrigo Chancusig";
            cargaHoraria = "Redes de Computadoras, Auditoría de sistemas";
            informacionProfesor = "Arriba:Cocina.</br> Abajo:Oficina de Marco Benalcazar.</br>Derecha:Oficina de Bolivar Palán.</br>Izquierda:Oficina de Luis Salvador.</br>";
            break;
        case '57':
            informacionPrincipal = "Luis Salvador";
            cargaHoraria = "Programacióm, Aplicaciones Web.";
            informacionProfesor = "Arriba:Almacén Decanato.</br> Abajo:Oficina de Tania Calle.</br>Derecha:Rodrigo Chancusig.</br>Izquierda:Oficina de Marco Santorum.</br>";
            break;
        case '59':
            informacionPrincipal = "Marco Santorum";
            cargaHoraria = "Diseño de procesos organizacionales";
            informacionProfesor = "Arriba:Almacén decanato.</br> Abajo:Oficina de Myriam Hernández.</br>Derecha:Oficina de Luis Salvador.</br>Izquierda:Botón oficinas de docentes.</br>";
            break;
        case '61':
            informacionPrincipal = "Myriam Hernández";
            cargaHoraria = "Gestión de proyectos.</br>Blog: http://myriamhernandez.blog.epn.edu.ec/";
            informacionProfesor = "Arriba:Oficina de Marco Santorum</br> Abajo:Oficina de Henry Paz.</br>Derecha:Oficina de Marco Santorum.</br>Izquierda:Botón oficinas de docentes.</br>";
            break;
        case '63':
            informacionPrincipal = "Henry Paz";
            cargaHoraria = "Arquitectura de Computadores, Inteligencia Artificial";
            informacionProfesor = "Arriba:Oficina de Myriam Hernández</br> Abajo:Oficina de Andrés Larco.</br>Derecha:Oficina de Marco Benalcazar.</br>Izquierda:Botón oficinas de docentes.</br>";
            break;
        case '65':
            informacionPrincipal = "Andrés Larco";
            cargaHoraria = "Calidad de Software, Arquitectura de Computadores.</br>Blog:http://andreslarco.blog.epn.edu.ec/";
            informacionProfesor = "Arriba:Oficina de Henry Paz.</br> Abajo:Oficina de Profesor Visitante.</br>Derecha:Oficina de Tania Calle.</br>Izquierda:Botón oficinas de docentes.</br>";
            break;
        case '67':
            informacionPrincipal = "Profesor Visitante";
            cargaHoraria = "El profesor visitante es GUstavo Samaniego. Da la materia de Redes de Computadores.";
            informacionProfesor = "Arriba:Oficina de Andrés Larco.</br> Abajo:No hay información.</br>Derecha:Oficina de Enrique Mafla.</br>Izquierda:Botón oficinas de docentes.</br>";
            break;
        case '69':
            informacionPrincipal = "Enrique Mafla";
            cargaHoraria = "Administración de Sistemas Operativos y Redes, Computación distribuida, Tecnologías de Seguridad</br>Blog:http://sgotiweb.epn.edu.ec/~emafla/";
            informacionProfesor = "Arriba:Oficina de Tania Calle.</br> Abajo:No hay información.</br>Derecha:Baño de Hombres.</br>Izquierda:Oficina de Profesor Visitante.</br>";
            break;
            //Tania calle
        case '71':
            informacionPrincipal = "Tania Calle";
            cargaHoraria = "Algoritmos Numéricos, Tecnologías web con JavaScript</br>Blog:http://taniacalle.blog.epn.edu.ec/";
            informacionProfesor = "Arriba:Oficina de Marco Benalcazar.</br> Abajo:Oficina de Enrique Mafla.</br>Derecha:Baño de Hombres.</br>Izquierda:Oficina de Andrés Larco.</br>";
            break;
            //Marco Benalcazar      
        case '73':
            informacionPrincipal = "Marco Benalcazar ";
            cargaHoraria = "Matemáticas Discretas";
            informacionProfesor = "Arriba:Rodrigo Chancusig.</br> Abajo:Oficina de Tania Calle.</br>Derecha:Oficina de María Perez.</br>Izquierda:Andrés Larco.</br>";
            break;
        case '74':
            informacionPrincipal = "Consejería";
            cargaHoraria = "Aqui se almacenan implementos de limpieza";
            informacionProfesor = "Arriba:Oficina de Marco Benalcazar.</br> Abajo:Baño de hombres.</br>Derecha:Proyecto de Investigación.</br>Izquierda:Oficina de Henry Paz.</br>";
            break;
        case '75':
            informacionPrincipal = "María Perez";
            cargaHoraria = "Algoritmos";
            informacionProfesor = "Arriba:Bolivar Palán.</br> Abajo:Conserjería2.</br>Derecha:Conserjería1.</br>Izquierda:Oficina de Marco Benalcazar.</br>";
            break;
        case '77':
            informacionPrincipal = "Baño de hombres";
            cargaHoraria = "";
            informacionProfesor = "Arriba:Conserjería.</br> Abajo:no hay información.</br>Derecha:Baño de mujeres.</br>Izquierda:Oficina de Tania Calle.</br>";
            break;
        case '79':
            informacionPrincipal = "Baño de mujeres";
            cargaHoraria = "";
            informacionProfesor = "Arriba:Información.</br> Abajo:no hay información.</br>Derecha:Oficina de Raúl Cordova.</br>Izquierda:Baño de Hombres.</br>";
            break;
        case '83':
            informacionPrincipal = "Proyecto de Investigación";
            cargaHoraria = "Aqui se desarrollan proyectos de software a cargo de los ingenieros que elaboran investigación en la facultad.";
            informacionProfesor = "Arriba:Area de profesores.</br> Abajo:Conserjería.</br>Derecha:Oficina de Tania Pazmiño y Andrés Cevallos.</br>Izquierda:Oficina de Bolivar Palán.</br>";
            break;
            //Andrés Cevallos
        case '85':
            informacionPrincipal = "Andrés Cevallos y Tania Pazmiño";
            cargaHoraria = "Trigonometría, Fundamentos de Contabilidad";
            informacionProfesor = "Arriba:Area de profesores.</br> Abajo:Proyecto de investigación2.</br>Derecha:Bodega.</br>Izquierda:Proyecto de investigación.</br>";
            break;
        case '87':
            informacionPrincipal = "Archivo";
            cargaHoraria = "Aqui se almacenan archivos y documentos sobre el decanato.";
            informacionProfesor = "Arriba:Proyecto de Investigación.</br> Abajo:Oficina de María Hallo.</br>Derecha:Oficina de Tania Pazmiño y Andrés Cevallos.</br>Izquierda:Conserjería.</br>";
            break;
        case '89':
            informacionPrincipal = "Conserjería";
            cargaHoraria = "Aqui se almacenan implementos de limpieza.";
            informacionProfesor = "Arriba:Proyecto de Investigación.</br> Abajo:Oficina de Raul Cordova.</br>Derecha:Archivo.</br>Izquierda:Oficina de María Perez.</br>";
            break;
        case '91':
            informacionPrincipal = "Proyecto de Investigación";
            cargaHoraria = "Aqui se desarrollan proyectos de software a cargo de los ingenieros que elaboran investigación en la facultad.";
            informacionProfesor = "Arriba:Oficina de Tania Pazmiño y Andrés Cevallos.</br> Abajo:Oficina de María Hallo.</br>Derecha:Oficina de Patricio Zambrano y Carlos Archundia.</br>Izquierda:Conserjería.</br>";
            break;
        case '93':
            informacionPrincipal = "Carlos Archundia y Patricio Zambrano";
            cargaHoraria = "Estructura de datos, OCJP, Certificacion Profesional, Redes de Computadoras";
            informacionProfesor = "Arriba:Profesor.</br> Abajo:Oficina de Rosa Navarrete.</br>Derecha:Oficina de Carlos Montenegro.</br>Izquierda:Proyecto de Investigación.</br>";
            break;
        case '95':
            informacionPrincipal = "Profesor";
            cargaHoraria = "Proyecto de investigación.";
            informacionProfesor = "Arriba:Jhonathan Barriga.</br> Abajo:Oficina de Patricio Zambrano y Carlos Archundia.</br>Derecha:Oficina de Jenny Torres.</br>Izquierda:Oficina de Tania Pazmiño y Andrés Cevallos.</br>";
            break;
            //Jhonathan barriga
        case '97':
            informacionPrincipal = "Jhonathan Barriga";
            cargaHoraria = "Redes de Computadoras";
            informacionProfesor = "Arriba:Bodega.</br> Abajo:Profesor.</br>Derecha:Oficina de Sandra Sanchez.</br>Izquierda:Oficina de Tania Pazmiño y Andrés Cevallos.</br>";
            break;
        case '99':
            informacionPrincipal = "Bodega";
            cargaHoraria = "Aqui se almacenan objetos que ya no se utilizan.";
            informacionProfesor = "Arriba:Area de Profesores.</br> Abajo:Oficina de Jhonathan Barriga.</br>Derecha:Oficina de Mayra Carrión.</br>Izquierda:Oficina de Tania Pazmiño y Andrés Cevallos.</br>";
            break;
            //Mayra Carrion
        case '101':
            informacionPrincipal = "Mayra Carrion";
            cargaHoraria = "Algoritmos, Estructura de Datos";
            informacionProfesor = "Arriba:Area de Profesores.</br> Abajo:Oficina de Sandra Sanchez.</br>Derecha:Bloque de información.</br>Izquierda:Bodega.</br>";
            break;
        case '103':
            informacionPrincipal = "Sandra Sanchez";
            cargaHoraria = "Calidad de Software, Ingeniería de Software</br>Blog:http://sandrasanchez.blog.epn.edu.ec/ ";
            informacionProfesor = "Arriba:Oficina de Mayra Carrión.</br> Abajo:Oficina de Jenny Torres.</br>Derecha:Bloque de información.</br>Izquierda:oficina de Jhonathan Barriga.</br>";
            break;
        case '105':
            informacionPrincipal = "Jenny Torres";
            cargaHoraria = "Gestion de Seguridad Informática";
            informacionProfesor = "Arriba:Oficina de Sandra Sanchez.</br> Abajo:Oficina de Carlos Montenegro.</br>Derecha:Bloque de información.</br>Izquierda:Profesor.</br>";
            break;
        case '107':
            informacionPrincipal = "Carlos Montenegro";
            cargaHoraria = "Inteligencia Artificial. </br>Blog:http://carlosmontenegro.blog.epn.edu.ec/";
            informacionProfesor = "Arriba:Oficina de Jenny Torres.</br> Abajo:Oficina de Ivan Carrera, Elisa Mena y Monserratte Intriago.</br>Derecha:Bloque de información.</br>Izquierda:Oficina de Patricio Zambrano y Carlos Archundia.</br>";
            break;
        case '109':
            informacionPrincipal = "Monserratte Intriago, Ivan Carrera y Elisa Mena";
            cargaHoraria = "Bases de Datos, Programación I";
            informacionProfesor = "Arriba:Oficina de Carlos Montenegro.</br> Abajo:No hay información.</br>Derecha:Bloque de información.</br>Izquierda:Oficina de Rosa Navarrete.</br>";
            break;
        case '111':
            informacionPrincipal = "Rosa Navarrete";
            cargaHoraria = "Legislación Informática.</br>Blog:http://rosanavarrete.blog.epn.edu.ec/";
            informacionProfesor = "Arriba:Oficina de Patricio Zambrano y Carlos Archundia.</br> Abajo:No hay información.</br>Derecha:Oficina de Monserratte Intriago, Ivan Carrera y Elisa Mena.</br>Izquierda:Oficina de Maria Hallo.</br>";
            break;
        case '113':
            //Maria Hallo
            informacionPrincipal = "Maria Hallo";
            cargaHoraria = "Bases de Datos, Inteligencia de Negocios.</br>Blog:http://mariahallo.blog.epn.edu.ec/";
            informacionProfesor = "Arriba:Proyecto de Investigación.</br> Abajo:No hay información.</br>Derecha:Oficina de Rosa Navarrete.</br>Izquierda:Oficina de Raul Cordova.</br>";
            break;
            //Raul Cordova
        case '115':
            informacionPrincipal = "Raul Cordova";
            cargaHoraria = "Aplicaciones en Ambientes propietarios, Ingeniería de Software I.</br>Blog:http://raulcordova.blog.epn.edu.ec/";
            informacionProfesor = "Arriba:Conserjería.</br> Abajo:No hay información.</br>Derecha:Oficina de María Hallo.</br>Izquierda:Baño de mujeres.</br>";
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