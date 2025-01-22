// Linea 1

const pinarDeChamartin = {
  lat: 40.48049736537236,
  long: -3.666733428122527,
  lines: [1, 4],
  edges: [bambu, manoteras],
  name: "Pinar de Chamartín",
};

const bambu = {
  lat: 40.47689815296868,
  long: -3.676726683828927,
  lines: [1],
  edges: [pinarDeChamartin, chamartin],
  name: "Bambú",
};

const chamartin = {
  lat: 40.47219295273449,
  long: -3.6836850067537408,
  lines: [1, 10],
  edges: [plazaDeCastilla, bambu, begona],
  name: "Chamartín",
};

const plazaDeCastilla = {
  lat: 40.46685143294606,
  long: -3.6884795057233726,
  lines: [1, 9, 10],
  edges: [chamartin, valdeacederas, ventilla, duqueDePastrana, cuzco],
  name: "Plaza de Castilla",
};

const valdeacederas = {
  lat: 40.46458557527384,
  long: -3.6945571478315617,
  lines: [1],
  edges: [plazaDeCastilla, tetuan],
  name: "Valdeacederas",
};

const tetuan = {
  lat: 40.46123992730214,
  long: -3.697895633525126,
  lines: [1],
  edges: [valdeacederas, estrecho],
  name: "Tetuán",
};

const estrecho = {
  lat: 40.454445341116546,
  long: -3.7038271810813574,
  lines: [1],
  edges: [tetuan, alvarado],
  name: "Estrecho",
};

const alvarado = {
  lat: 40.45025263871121,
  long: -3.7044568789842454,
  lines: [1],
  edges: [estrecho, cuatroCaminos],
  name: "Alvarado",
};

const cuatroCaminos = {
  lat: 40.44698813926112,
  long: -3.7039846056202093,
  lines: [1, 4, 6],
  edges: [alvarado, riosRosas, canal, nuevosMinisterios, guzmanElBueno],
  name: "Cuatro Caminos",
};

const riosRosas = {
  lat: 40.44169434326654,
  long: -3.700901088154907,
  lines: [1],
  edges: [cuatroCaminos, iglesia],
  name: "Ríos Rosas",
};

const iglesia = {
  lat: 40.43538508919413,
  long: -3.697397411209908,
  lines: [1],
  edges: [riosRosas, bilbao],
  name: "Iglesia",
};

const bilbao = {
  lat: 40.429509219211845,
  long: -3.70226708653278,
  lines: [1, 4],
  edges: [iglesia, tribunal, sanBernardo, alonsoMartinez],
  name: "Bilbao",
};

const tribunal = {
  lat: 40.426164402933864,
  long: -3.7012198720570364,
  lines: [1, 10],
  edges: [bilbao, granVia, alonsoMartinez, plazaDeEspana],
  name: "Tribunal",
};

const granVia = {
  lat: 40.419883424160226,
  long: -3.701625430255096,
  lines: [1, 5],
  edges: [tribunal, sol, chueca, callao],
  name: "Gran Vía",
};

const sol = {
  lat: 40.41718266614042,
  long: -3.703206505912717,
  lines: [1, 2, 3],
  edges: [granVia, tirsoDeMolina, sevilla, opera, lavapies, callao],
  name: "Sol",
};

const tirsoDeMolina = {
  lat: 40.41236299045606,
  long: -3.703887111258177,
  lines: [1],
  edges: [sol, antonMartin],
  name: "Tirso de Molina",
};

const antonMartin = {
  lat: 40.41247108851637,
  long: -3.699635803505414,
  lines: [1],
  edges: [tirsoDeMolina, estacionDelArte],
  name: "Antón Martín",
};

const estacionDelArte = {
  lat: 40.40903295135812,
  long: -3.691454322130659,
  lines: [1],
  edges: [antonMartin, atocha],
  name: "Estación del Arte",
};

const atocha = {
  lat: 40.4051657580651,
  long: -3.6880658414714054,
  lines: [1],
  edges: [estacionDelArte, menendezPelayo],
  name: "Atocha",
};

const menendezPelayo = {
  lat: 40.40451680910258,
  long: -3.6807882300400885,
  lines: [1],
  edges: [atocha, pacifico],
  name: "Menéndez Pelayo",
};

const pacifico = {
  lat: 40.40173458990905,
  long: -3.67525304188166,
  lines: [1, 6],
  edges: [menendezPelayo, puenteDeVallecas, mendezAlvaro, condeDeCasal],
  name: "Pacífico",
};

const puenteDeVallecas = {
  lat: 40.398576631774134,
  long: -3.669736121595171,
  lines: [1],
  edges: [pacifico, nuevaNumancia],
  name: "Puente de Vallecas",
};

const nuevaNumancia = {
  lat: 40.3957941670959,
  long: -3.6658998526406434,
  lines: [1],
  edges: [puenteDeVallecas, portazgo],
  name: "Nueva Numancia",
};

const portazgo = {
  lat: 40.39292810824377,
  long: -3.6591407120943438,
  lines: [1],
  edges: [nuevaNumancia, buenosAires],
  name: "Portazgo",
};

const buenosAires = {
  lat: 40.391564600515146,
  long: -3.6554140507456077,
  lines: [1],
  edges: [portazgo, altoDeArenal],
  name: "Buenos Aires",
};

const altoDeArenal = {
  lat: 40.38989090160141,
  long: -3.646215055618432,
  lines: [1],
  edges: [buenosAires, miguelHernandez],
  name: "Alto de Arenal",
};

const miguelHernandez = {
  lat: 40.38740463377381,
  long: -3.6392842788848676,
  lines: [1],
  edges: [altoDeArenal, sierraDeGuadalupe],
  name: "Miguel Hernandez",
};

const sierraDeGuadalupe = {
  lat: 40.382503366543794,
  long: -3.6252283466812516,
  lines: [1],
  edges: [miguelHernandez, villaDeVallecas],
  name: "Sierra de Guadalupe",
};

const villaDeVallecas = {
  lat: 40.379735277471724,
  long: -3.621726154925654,
  lines: [1],
  edges: [sierraDeGuadalupe, congosto],
  name: "Villa de Vallecas",
};

const congosto = {
  lat: 40.372214479829836,
  long: -3.618992294160439,
  lines: [1],
  edges: [villaDeVallecas, laGavia],
  name: "Congosto",
};

const laGavia = {
  lat: 40.36929271283607,
  long: -3.612917048288414,
  lines: [1],
  edges: [congosto, lasSuertes],
  name: "La Gavia",
};

const lasSuertes = {
  lat: 40.36317394875008,
  long: -3.6001400465089017,
  lines: [1],
  edges: [laGavia, valdecarros],
  name: "Las Suertes",
};

const valdecarros = {
  lat: 40.360034792782095,
  long: -3.5934762611520554,
  lines: [1],
  edges: [lasSuertes],
  name: "Valdecarros",
};

// Linea 2

const lasRosas = {
  lat: 40.424226611036026,
  long: -3.600801478897012,
  lines: [2],
  edges: [avenidaDeGuadalajara],
  name: "Las Rosas",
};

const avenidaDeGuadalajara = {
  lat: 40.42237354712535,
  long: -3.6131624443051567,
  lines: [2],
  edges: [lasRosas, alsacia],
  name: "Avenida de Guadalajara",
};

const alsacia = {
  lat: 40.418783090522325,
  long: -3.624610600138953,
  lines: [2],
  edges: [avenidaDeGuadalajara, laAlmudena],
  name: "Alsacia",
};

const laAlmudena = {
  lat: 40.42356067211956,
  long: -3.640508703686634,
  lines: [2],
  edges: [alsacia, laElipa],
  name: "La Almudena",
};

const laElipa = {
  lat: 40.42648496365145,
  long: -3.651386353148477,
  lines: [2],
  edges: [laAlmudena, ventas],
  name: "La Elipa",
};

const ventas = {
  lat: 40.43105934292208,
  long: -3.6636332177135538,
  lines: [2, 5],
  edges: [laElipa, manuelBecerra, elCarmen, diegoDeLeon],
  name: "Ventas",
};

const manuelBecerra = {
  lat: 40.42775887266891,
  long: -3.672266876766128,
  lines: [2, 6],
  edges: [ventas, goya, odonnell, diegoDeLeon],
  name: "Manuel Becerra",
};

const goya = {
  lat: 40.42466091547799,
  long: -3.674891205041604,
  lines: [2, 4],
  edges: [manuelBecerra, principeDeVergara, velazquez, lista],
  name: "Goya",
};

const principeDeVergara = {
  lat: 40.42377567589764,
  long: -3.678244979170257,
  lines: [2, 9],
  edges: [goya, retiro, nunezDeBalboa, Ibiza],
  name: "Príncipe de Vergara",
};

const retiro = {
  lat: 40.42126002859873,
  long: -3.684510619231018,
  lines: [2],
  edges: [principeDeVergara, bancoDeEspana],
  name: "Retiro",
};

const bancoDeEspana = {
  lat: 40.41965911309961,
  long: -3.69347992633552,
  lines: [2],
  edges: [retiro, sevilla],
  name: "Banco de España",
};

const sevilla = {
  lat: 40.41786212181181,
  long: -3.698844344195753,
  lines: [2],
  edges: [bancoDeEspana, sol],
  name: "Sevilla",
};

const opera = {
  lat: 40.41835221503397,
  long: -3.708586127511464,
  lines: [2, 5, 13],
  edges: [sol, santoDomingo, callao, laLatina, principePio],
  name: "Ópera",
};

const santoDomingo = {
  lat: 40.42201024391963,
  long: -3.7063004936253123,
  lines: [2],
  edges: [opera, noviciado],
  name: "Santo Domingo",
};

const noviciado = {
  lat: 40.4247785833365,
  long: -3.7080526881442073,
  lines: [2, 3, 10],
  edges: [
    santoDomingo,
    sanBernardo,
    callao,
    venturaRodriguez,
    tribunal,
    principePio,
  ],
  name: "Noviciado / Plaza de España",
};

const sanBernardo = {
  lat: 40.42979581024937,
  long: -3.7052670785846282,
  lines: [2, 4],
  edges: [noviciado, quevedo, arguelles, bilbao],
  name: "San Bernardo",
};

const quevedo = {
  lat: 40.43320352447881,
  long: -3.7056152797588413,
  lines: [2],
  edges: [sanBernardo, canal],
  name: "Quevedo",
};

const canal = {
  lat: 40.43827691239186,
  long: -3.7049188773577444,
  lines: [2, 7],
  edges: [quevedo, cuatroCaminos, alonsoCano, islasFilipinas],
  name: "Canal",
};

//
const villaverdeAlto = {
  lat: 40.34157696493295,
  long: -3.7118549354131285,
  lines: [3],
  edges: [sanCristobal],
  name: "Villaverde Alto",
};

const sanCristobal = {
  lat: 40.34166643542084,
  long: -3.6912072676024468,
  lines: [3],
  edges: [villaverdeAlto, villaverdeBajoCruce],
  name: "San Cristobal",
};

const villaverdeBajoCruce = {
  lat: 40.351042040301834,
  long: -3.691778243371878,
  lines: [3],
  edges: [sanCristobal, ciudadDeLosAngeles],
  name: "Villaverde Bajo-Cruce",
};

const ciudadDeLosAngeles = {
  lat: 40.3597995620305,
  long: -3.6948929952957545,
  lines: [3],
  edges: [villaverdeBajoCruce, sanFerminOrcasur],
  name: "Ciudad de Los Angeles",
};

const sanFerminOrcasur = {
  lat: 40.36980560138429,
  long: -3.6948872160351183,
  lines: [3],
  edges: [ciudadDeLosAngeles, hospital12deOctubre],
  name: "San Fermín-Orcasur",
};

const hospital12deOctubre = {
  lat: 40.37537318189435,
  long: -3.6968264075946204,
  lines: [3],
  edges: [sanFerminOrcasur, almendrales],
  name: "Hospital 12 de Octubre",
};

const almendrales = {
  lat: 40.383887315106875,
  long: -3.6989814500418494,
  lines: [3],
  edges: [hospital12deOctubre, legazpi],
  name: "Almendrales",
};

const legazpi = {
  lat: 40.391169527433696,
  long: -3.6959028601620707,
  lines: [3, 6],
  edges: [almendrales, delicias, usera, arganzuelaPlanetario],
  name: "Legazpi",
};

const delicias = {
  lat: 40.39977949950838,
  long: -3.694774043808453,
  lines: [3],
  edges: [legazpi, palosDeLaFrontera],
  name: "Delicias",
};

const palosDeLaFrontera = {
  lat: 40.40295748631128,
  long: -3.6950305929471727,
  lines: [3],
  edges: [delicias, embajadores],
  name: "Palos de la Frontera",
};

const embajadores = {
  lat: 40.40468968643914,
  long: -3.703223062802927,
  lines: [3, 5],
  edges: [palosDeLaFrontera, lavapies, puertaDeToledo, piramides],
  name: "Embajadores / Acacias",
};

const lavapies = {
  lat: 40.4084465813102,
  long: -3.701215529310202,
  lines: [3],
  edges: [embajadores, sol],
  name: "Lavapiés",
};

const callao = {
  lat: 40.420274936011005,
  long: -3.7062224525949627,
  lines: [3, 5],
  edges: [sol, plazaDeEspana, granVia, opera],
  name: "Callao",
};

const plazaDeEspana = {
  lat: 40.42364729870026,
  long: -3.711322963186548,
  lines: [2, 3, 10],
  edges: [
    santoDomingo,
    sanBernardo,
    callao,
    venturaRodriguez,
    tribunal,
    principePio,
  ],
  name: "Noviciado / Plaza de España",
};

const venturaRodriguez = {
  lat: 40.42704323961471,
  long: -3.714270964781492,
  lines: [3],
  edges: [plazaDeEspana, arguelles],
  name: "Ventura Rodriguez",
};

const arguelles = {
  lat: 40.43072280543736,
  long: -3.7157988549626175,
  lines: [3, 4, 6],
  edges: [venturaRodriguez, moncloa, sanBernardo, principePio],
  name: "Argüelles",
};

const moncloa = {
  lat: 40.434503876540155,
  long: -3.719393014988317,
  lines: [3, 6],
  edges: [arguelles, ciudadUniversitaria],
  name: "Moncloa",
};

// Linea 4

const alonsoMartinez = {
  lat: 40.427898410000076,
  long: -3.6954946512626874,
  lines: [4, 5, 10],
  edges: [bilbao, colon, rubenDario, chueca, gregorioMaranon, tribunal],
  name: "Alonso Martínez",
};

const colon = {
  lat: 40.42543192087801,
  long: -3.6914498800743325,
  lines: [4],
  edges: [alonsoMartinez, serrano],
  name: "Colón",
};

const serrano = {
  lat: 40.4253747495098,
  long: -3.6871368879929665,
  lines: [4],
  edges: [colon, velazquez],
  name: "Serrano",
};

const velazquez = {
  lat: 40.425186900444324,
  long: -3.683360337666426,
  lines: [4],
  edges: [serrano, goya],
  name: "Velázquez",
};

const lista = {
  lat: 40.42914795439827,
  long: -3.6757535929337624,
  lines: [4],
  edges: [goya, diegoDeLeon],
  name: "Lista",
};

const diegoDeLeon = {
  lat: 40.43462279287774,
  long: -3.6756630979616842,
  lines: [4, 5, 6],
  edges: [lista, avenidaDeAmerica, ventas, nunezDeBalboa, manuelBecerra],
  name: "Diego de León",
};

const avenidaDeAmerica = {
  lat: 40.43829786157724,
  long: -3.6772532151702126,
  lines: [4, 6, 7, 9],
  edges: [
    diegoDeLeon,
    prosperidad,
    republicaArgentina,
    cartagena,
    gregorioMaranon,
    cruzDelRayo,
    nunezDeBalboa,
  ],
  name: "Avenida de América",
};

const prosperidad = {
  lat: 40.4441206249458,
  long: -3.675720061061254,
  lines: [4],
  edges: [avenidaDeAmerica, alfonsoXIII],
  name: "Prosperidad",
};

const alfonsoXIII = {
  lat: 40.44822067290521,
  long: -3.668327390075695,
  lines: [4],
  edges: [prosperidad, avenidaDeLaPaz],
  name: "Alfonso XIII",
};

const avenidaDeLaPaz = {
  lat: 40.4533804796333,
  long: -3.6613965619764652,
  lines: [4],
  edges: [alfonsoXIII, arturoSoria],
  name: "Avenida de la Paz",
};

const arturoSoria = {
  lat: 40.45592757993377,
  long: -3.6578131307210393,
  lines: [4],
  edges: [avenidaDeLaPaz, esperanza],
  name: "Arturo Soria",
};

const esperanza = {
  lat: 40.459486827566316,
  long: -3.6470199217278525,
  lines: [4],
  edges: [arturoSoria, canillas],
  name: "Esperanza",
};

const canillas = {
  lat: 40.46443354204033,
  long: -3.6358833898885248,
  lines: [4],
  edges: [esperanza, marDeCristal],
  name: "Canillas",
};

const marDeCristal = {
  lat: 40.4694778361166,
  long: -3.6376214612128437,
  lines: [4, 8],
  edges: [canillas, sanLorenzo, pinarDelRey, feriaDeMadrid],
  name: "Mar de Cristal",
};

const sanLorenzo = {
  lat: 40.47432587822357,
  long: -3.6405826199368,
  lines: [4],
  edges: [marDeCristal, parqueDeSantaMaria],
  name: "San Lorenzo",
};

const parqueDeSantaMaria = {
  lat: 40.477247593121064,
  long: -3.645882665054671,
  lines: [4],
  edges: [sanLorenzo, hortaleza],
  name: "Parque de Santa María",
};

const hortaleza = {
  lat: 40.47516910507403,
  long: -3.653356099221605,
  lines: [4],
  edges: [parqueDeSantaMaria, manoteras],
  name: "Hortaleza",
};

const manoteras = {
  lat: 40.47655761229688,
  long: -3.663116140261856,
  lines: [4],
  edges: [hortaleza, pinarDeChamartin],
  name: "Manoteras",
};

// Linea 5

const alamedaDeOsuna = {
  lat: 40.45780158612176,
  long: -3.588017457032416,
  lines: [5],
  edges: [elCapricho],
  name: "Alameda de Osuna",
};

const elCapricho = {
  lat: 40.453377481917464,
  long: -3.595605525872296,
  lines: [5],
  edges: [alamedaDeOsuna, canillejas],
  name: "El Capricho",
};

const canillejas = {
  lat: 40.44930929848327,
  long: -3.6093281050168033,
  lines: [5],
  edges: [elCapricho, torreArias],
  name: "Canillejas",
};

const torreArias = {
  lat: 40.44363919852365,
  long: -3.6166671694238586,
  lines: [5],
  edges: [canillejas, suanzes],
  name: "Torre Arias",
};

const suanzes = {
  lat: 40.440894575096884,
  long: -3.6276098659606713,
  lines: [5],
  edges: [torreArias, ciudadLineal],
  name: "Suanzes",
};

const ciudadLineal = {
  lat: 40.437840377113396,
  long: -3.638517206613873,
  lines: [5],
  edges: [suanzes, puebloNuevo],
  name: "Ciudad Lineal",
};

const puebloNuevo = {
  lat: 40.435593367522465,
  long: -3.643608477504308,
  lines: [5, 7],
  edges: [ciudadLineal, quintana, ascao, barrioDeLaConcepcion],
  name: "Pueblo Nuevo",
};

const quintana = {
  lat: 40.43357619158819,
  long: -3.646692463517938,
  lines: [5],
  edges: [puebloNuevo, elCarmen],
  name: "Quintana",
};

const elCarmen = {
  lat: 40.43186476607949,
  long: -3.6566229852588914,
  lines: [5],
  edges: [quintana, ventas],
  name: "El Carmen",
};

const nunezDeBalboa = {
  lat: 40.43278769606949,
  long: -3.68398149676216,
  lines: [5],
  edges: [diegoDeLeon, rubenDario],
  name: "Nuñez de Balboa",
};

const rubenDario = {
  lat: 40.43318675129849,
  long: -3.6896472135356944,
  lines: [5],
  edges: [nunezDeBalboa, alonsoMartinez],
  name: "Rubén Darío",
};

const chueca = {
  lat: 40.42264228661484,
  long: -3.6981355257855095,
  lines: [5],
  edges: [alonsoMartinez, granVia],
  name: "Chueca",
};

const laLatina = {
  lat: 40.41141549329365,
  long: -3.708241149415657,
  lines: [5],
  edges: [opera, puertaDeToledo],
  name: "La Latina",
};

const puertaDeToledo = {
  lat: 40.40680069908103,
  long: -3.7103857192123533,
  lines: [5],
  edges: [laLatina, acacias],
  name: "Puerta de Toledo",
};

const acacias = {
  lat: 40.40372963012126,
  long: -3.707143731303211,
  lines: [3, 5],
  edges: [palosDeLaFrontera, lavapies, puertaDeToledo, piramides],
  name: "Embajadores / Acacias",
};

const piramedes = {
  lat: 40.40251498859207,
  long: -3.7122790401821546,
  lines: [5],
  edges: [acacias, marquesDeVadillo],
  name: "Pirámedes",
};

const marquesDeVadillo = {
  lat: 40.397497554264866,
  long: -3.7157475669085125,
  lines: [5],
  edges: [piramedes, urgel],
  name: "Marqués de Vadillo",
};

const urgel = {
  lat: 40.39302359608587,
  long: -3.7249159089096966,
  lines: [5],
  edges: [marquesDeVadillo, oporto],
  name: "Urgel",
};

const oporto = {
  lat: 40.38847032241529,
  long: -3.7310238143364813,
  lines: [5, 6],
  edges: [urgel, vistaAlegre, carpetana, opanel],
  name: "Oporto",
};

const vistaAlegre = {
  lat: 40.388648113280524,
  long: -3.7404774512077097,
  lines: [5],
  edges: [oporto, carabanchel],
  name: "Vista Alegre",
};

const carabanchel = {
  lat: 40.387818418554076,
  long: -3.745353401167654,
  lines: [5],
  edges: [vistaAlegre, eugeniaDeMontijo],
  name: "Carabanchel",
};

const eugeniaDeMontijo = {
  lat: 40.384687216687595,
  long: -3.7512797552461685,
  lines: [5],
  edges: [carabanchel, aluche],
  name: "Eugenia de Montijo",
};

const aluche = {
  lat: 40.38567499322186,
  long: -3.761239142321913,
  lines: [5],
  edges: [eugeniaDeMontijo, empalme],
  name: "Aluche",
};

const empalme = {
  lat: 40.390840828674534,
  long: -3.7665041308630385,
  lines: [5],
  edges: [aluche, campamento],
  name: "Empalme",
};

const campamento = {
  lat: 40.39458408322918,
  long: -3.768734618563986,
  lines: [5],
  edges: [empalme, casaDeCampo],
  name: "Campamento",
};

const casaDeCampo = {
  lat: 40.40318586646646,
  long: -3.7617967643248202,
  lines: [5, 10],
  edges: [campamento, batan, coloniaJardin],
  name: "Casa de Campo",
};

// Linea 6
const laguna = {
  lat: 40.39920804089135,
  long: -3.7438293666073954,
  lines: [6],
  edges: [carpetana, lucero],
  name: "Laguna",
};

const carpetana = {
  lat: 40.39277002430141,
  long: -3.741659530507246,
  lines: [6],
  edges: [laguna, oporto],
  name: "Carpetana",
};

const opanel = {
  lat: 40.386152064852965,
  long: -3.7238134745409734,
  lines: [6],
  edges: [oporto, plazaEliptica],
  name: "Opañel",
};

const plazaEliptica = {
  lat: 40.38446530816853,
  long: -3.71928947497992,
  lines: [6, 11],
  edges: [opanel, usera, abrantes],
  name: "Plaza Elíptica",
};

const usera = {
  lat: 40.387082841671855,
  long: -3.7068449326330994,
  lines: [6],
  edges: [plazaEliptica, legazpi],
  name: "Usera",
};

const arganzuelaPlanetario = {
  lat: 40.39331263698368,
  long: -3.68911764546199,
  lines: [6],
  edges: [usera, mendezAlvaro],
  name: "Arganzuela-Planetario",
};

const mendezAlvaro = {
  lat: 40.395616809624904,
  long: -3.6790958983674438,
  lines: [6],
  edges: [arganzuelaPlanetario, pacifico],
  name: "Méndez Álvaro",
};

const condeDeCasal = {
  lat: 40.40710049399163,
  long: -3.671311711136777,
  lines: [6],
  edges: [pacifico, sainzDeBaranda],
  name: "Conde de Casal",
};

const sainzDeBaranda = {
  lat: 40.41477918986336,
  long: -3.6708705021436265,
  lines: [6, 9],
  edges: [condeDeCasal, odonnell, ibiza, estrella],
  name: "Sainz de Baranda",
};

const odonnell = {
  lat: 40.42239702992558,
  long: -3.6697832370923855,
  lines: [6],
  edges: [sainzDeBaranda, manuelBecerra],
  name: "O'Donenll",
};

const republicaArgentina = {
  lat: 40.44371551203646,
  long: -3.6851297050848206,
  lines: [6],
  edges: [avenidaDeAmerica, nuevosMinisterios],
  name: "República Argentina",
};

const nuevosMinisterios = {
  lat: 40.44659355845692,
  long: -3.6938120676626984,
  lines: [6, 8, 10],
  edges: [
    republicaArgentina,
    cuatroCaminos,
    colombia,
    santiagoBernabeu,
    gregorioMaranon,
  ],
  name: "Nuevos Ministerios",
};

const guzmanElBueno = {
  lat: 40.44653360040284,
  long: -3.712327088050442,
  lines: [6, 7],
  edges: [cuatroCaminos, vicenteAleixandre, islasFilipinas, francosRodriguez],
  name: "Guzmán el Bueno",
};

const vicenteAleixandre = {
  lat: 40.44680940696806,
  long: -3.719843398316318,
  lines: [6],
  edges: [guzmanElBueno, ciudadUniversitaria],
  name: "Vicente Aleixandre",
};

const ciudadUniversitaria = {
  lat: 40.443583598656645,
  long: -3.727501525713917,
  lines: [6],
  edges: [vicenteAleixandre, moncloa],
  name: "Ciudad Universitaria",
};

const principePio = {
  lat: 40.42098701853868,
  long: -3.7199886590318756,
  lines: [6, 10, 13],
  edges: [arguelles, puertaDelAngel, plazaDeEspana, lago, opera],
  name: "Príncipe Pío",
};

const puertaDelAngel = {
  lat: 40.41421422647763,
  long: -3.728471344413345,
  lines: [6],
  edges: [principePio, altoDeExtremadura],
  name: "Puerta del Ángel",
};

const altoDeExtremadura = {
  lat: 40.409819605263856,
  long: -3.7403603060892574,
  lines: [6],
  edges: [puertaDelAngel, lucero],
  name: "Alto de Extremadura",
};

const lucero = {
  lat: 40.404739859191444,
  long: -3.746161259459823,
  lines: [6],
  edges: [altoDeExtremadura, laguna],
  name: "Lucero",
};

// Linea 7

const hospitalDeHenares = {
  lat: 40.4179059813681,
  long: -3.5329948676912686,
  lines: [7],
  edges: [henares],
  name: "Hospital de Henares",
};

const henares = {
  lat: 40.41776760124066,
  long: -3.5274695952639523,
  lines: [7],
  edges: [hospitalDeHenares, jarama],
  name: "Henares",
};

const jarama = {
  lat: 40.42291532846304,
  long: -3.525650728860471,
  lines: [7],
  edges: [henares, sanFernando],
  name: "Jarama",
};

const sanFernando = {
  lat: 40.42442226462559,
  long: -3.535933941875459,
  lines: [7],
  edges: [jarama, laRambla],
  name: "San Fernando",
};

const laRambla = {
  lat: 40.4251716305573,
  long: -3.548245940087711,
  lines: [7],
  edges: [sanFernando, cosladaCentral],
  name: "La Rambla",
};

const cosladaCentral = {
  lat: 40.42320514297449,
  long: -3.560610514798939,
  lines: [7],
  edges: [laRambla, barrioDelPuerto],
  name: "Coslada Central",
};

const barrioDelPuerto = {
  lat: 40.422474496591875,
  long: -3.569554666094362,
  lines: [7],
  edges: [cosladaCentral, estadioMetropolitano],
  name: "Barrio del Puerto",
};

const estadioMetropolitano = {
  lat: 40.433396072386955,
  long: -3.601223184846861,
  lines: [7],
  edges: [barrioDelPuerto, lasMusas],
  name: "Estadio Metropolitano",
};

const lasMusas = {
  lat: 40.43265290118605,
  long: -3.607938963235132,
  lines: [7],
  edges: [estadioMetropolitano, sanBlas],
  name: "Las Musas",
};

const sanBlas = {
  lat: 40.42796078019834,
  long: -3.616378540077953,
  lines: [7],
  edges: [lasMusas, simancas],
  name: "San Blas",
};

const simancas = {
  lat: 40.42785817916719,
  long: -3.6263125995028775,
  lines: [7],
  edges: [sanBlas, garciaNoblejas],
  name: "Simancas",
};

const garciaNoblejas = {
  lat: 40.42908203238928,
  long: -3.6312722968282984,
  lines: [7],
  edges: [simancas, ascao],
  name: "García Noblejas",
};

const ascao = {
  lat: 40.43017977269128,
  long: -3.6414450353740806,
  lines: [7],
  edges: [garciaNoblejas, puebloNuevo],
  name: "Acscao",
};

const barrioDeLaConcepcion = {
  lat: 40.43897425478377,
  long: -3.6513405901275675,
  lines: [7],
  edges: [puebloNuevo, parqueDeLasAvenidas],
  name: "Barrio de la Concepción",
};

const parqueDeLasAvenidas = {
  lat: 40.43945391011527,
  long: -3.6637770825521496,
  lines: [7],
  edges: [barrioDeLaConcepcion, cartagena],
  name: "Parque de las Avenidas",
};

const cartagena = {
  lat: 40.43927598873854,
  long: -3.6724421320116383,
  lines: [7],
  edges: [parqueDeLasAvenidas, avenidaDeAmerica],
  name: "Cartagena",
};

const gregorioMaranon = {
  lat: 40.4380927785094,
  long: -3.6918975206064792,
  lines: [7, 10],
  edges: [avenidaDeAmerica, alonsoCano, nuevosMinisterios, alonsoMartinez],
  name: "Gregorio Marañón",
};

const alonsoCano = {
  lat: 40.438229105715884,
  long: -3.7048195430693203,
  lines: [7],
  edges: [gregorioMaranon, canal],
  name: "Alonso Cano",
};

const islasFilipinas = {
  lat: 40.439134700913534,
  long: -3.7143127515618457,
  lines: [7],
  edges: [canal, guzmanElBueno],
  name: "Islas Filipinas",
};

const francosRodriguez = {
  lat: 40.45651392221677,
  long: -3.7132508428100275,
  lines: [7],
  edges: [guzmanElBueno, valdezarza],
  name: "Francos Rodríguez",
};

const valdezarza = {
  lat: 40.46467135659308,
  long: -3.7167436271532397,
  lines: [7],
  edges: [francosRodriguez, antonioMachado],
  name: "Valdezarza",
};

const antonioMachado = {
  lat: 40.469959547595835,
  long: -3.7186278293684945,
  lines: [7],
  edges: [valdezarza, penagrande],
  name: "Antonio Machado",
};

const penagrande = {
  lat: 40.475898830653804,
  long: -3.71663121912141,
  lines: [7],
  edges: [antonioMachado, avenidaDeLaIlustracion],
  name: "Peñagrande",
};

const avenidaDeLaIlustracion = {
  lat: 40.480105941909066,
  long: -3.7196282068200293,
  lines: [7],
  edges: [penagrande, lacoma],
  name: "Avanida de la Ilustración",
};

const lacoma = {
  lat: 40.4848577912663,
  long: -3.72354532818288,
  lines: [7],
  edges: [avenidaDeLaIlustracion, arroyofresno],
  name: "Lacoma",
};

const arroyofresno = {
  lat: 40.49086563242766,
  long: -3.7266744552073057,
  lines: [7],
  edges: [lacoma, pitis],
  name: "Arroyofresno",
};

const pitis = {
  lat: 40.49540860116347,
  long: -3.7266306911750293,
  lines: [7],
  edges: [arroyofresno],
  name: "Pitis",
};

const colombia = {
  lat: 40.45748814267888,
  long: -3.676657192661387,
  lines: [8, 9],
  edges: [nuevosMinisterios, pinarDelRey, duqueDePastrana, conchaEspina],
  name: "Colombia",
};

const pinarDelRey = {
  lat: 40.468039974220545,
  long: -3.6476784666030384,
  lines: [8],
  edges: [colombia, marDeCristal],
  name: "Pinar del Rey",
};

const feriaDeMadrid = {
  lat: 40.46401335967577,
  long: -3.6169790119212184,
  lines: [8],
  edges: [marDeCristal, aeropuertoT1T2T3],
  name: "Feria de Madrid",
};

const aeropuertoT1T2T3 = {
  lat: 40.46814388193424,
  long: -3.5727782620198623,
  lines: [8],
  edges: [feriaDeMadrid, barajas],
  name: "Aeropuerto T1-T2-T3",
};

const barajas = {
  lat: 40.47579755878603,
  long: -3.5835126876175694,
  lines: [8],
  edges: [aeropuertoT1T2T3, aeropuertoT4],
  name: "Barajas",
};

const aeropuertoT4 = {
  lat: 40.49128303925498,
  long: -3.5945838019230965,
  lines: [8],
  edges: [barajas],
  name: "Aeropuerto T4",
};

//
const pacoDeLucia = {
  lat: 40.499825374941366,
  long: -3.7080929518006926,
  lines: [9],
  edges: [mirasierra],
  name: "Paco de Lucía",
};

const mirasierra = {
  lat: 40.4909648845967,
  long: -3.7173841237848766,
  lines: [9],
  edges: [pacoDeLucia, herreraOria],
  name: "Mirasierra",
};

const herreraOria = {
  lat: 40.48463291504563,
  long: -3.708758139583486,
  lines: [9],
  edges: [mirasierra, barrioDelPilar],
  name: "Herrera Oria",
};

const barrioDelPilar = {
  lat: 40.47626008981339,
  long: -3.7047884701993956,
  lines: [9],
  edges: [herreraOria, ventilla],
  name: "Barrio del Pilar",
};

const ventilla = {
  lat: 40.46961657917464,
  long: -3.6950037718907587,
  lines: [9],
  edges: [barrioDelPilar, plazaDeCastilla],
  name: "Ventilla",
};

const duqueDePastrana = {
  lat: 40.46760870577372,
  long: -3.6818716764738153,
  lines: [9],
  edges: [plazaDeCastilla, pioXII],
  name: "Duque de Pastrana",
};

const pioXII = {
  lat: 40.46251409419988,
  long: -3.6766669521064124,
  lines: [9],
  edges: [duqueDePastrana, colombia],
  name: "Pío XIII",
};

const conchaEspina = {
  lat: 40.45048459991799,
  long: -3.6790580178767973,
  lines: [9],
  edges: [colombia, cruzDelRayo],
  name: "Concha Espina",
};

const cruzDelRayo = {
  lat: 40.444319667901425,
  long: -3.678915267695397,
  lines: [9],
  edges: [conchaEspina, avenidaDeAmerica],
  name: "Cruz del Rayo",
};

const ibiza = {
  lat: 40.4182955742016,
  long: -3.6776690581866416,
  lines: [9],
  edges: [principeDeVergara, sainzDeBaranda],
  name: "Ibiza",
};

const estrella = {
  lat: 40.411502719082364,
  long: -3.6613241605554996,
  lines: [9],
  edges: [sainzDeBaranda, vinateros],
  name: "Estrella",
};

const vinateros = {
  lat: 40.41021198977017,
  long: -3.6512662826413433,
  lines: [9],
  edges: [estrella, artilleros],
  name: "Vinateros",
};

const artilleros = {
  lat: 40.405239862392015,
  long: -3.642472139151465,
  lines: [9],
  edges: [vinateros, pavones],
  name: "Artilleros",
};

const pavones = {
  lat: 40.40060134708578,
  long: -3.6358732902136675,
  lines: [9],
  edges: [artilleros, valdebernardo],
  name: "Pavones",
};

const valdebernardo = {
  lat: 40.399859810310964,
  long: -3.6218737731777684,
  lines: [9],
  edges: [pavones, vicalvaro],
  name: "Valdebernardo",
};

const vicalvaro = {
  lat: 40.40423874498485,
  long: -3.609855966100855,
  lines: [9],
  edges: [valdebernardo, sanCipriano],
  name: "Vicálvaro",
};

const sanCipriano = {
  lat: 40.40408740481849,
  long: -3.602909716878376,
  lines: [9],
  edges: [vicalvaro, puertaDeArganda],
  name: "San Cipriano",
};

const puertaDeArganda = {
  lat: 40.401597355607805,
  long: -3.5950436248212094,
  lines: [9],
  edges: [sanCipriano, rivasUrbanizaciones],
  name: "Puerta de Arganda",
};

const rivasUrbanizaciones = {
  lat: 40.367351769669064,
  long: -3.546605405780413,
  lines: [9],
  edges: [puertaDeArganda, rivasFutura],
  name: "Rivas Urbanizaciones",
};

const rivasFutura = {
  lat: 40.341713433967236,
  long: -3.52690293951884,
  lines: [9],
  edges: [rivasUrbanizaciones, rivasVaciamadrid],
  name: "Rivas Futura",
};

const rivasVaciamadrid = {
  lat: 40.3281751767282,
  long: -3.5184901363895524,
  lines: [9],
  edges: [rivasFutura, laPoveda],
  name: "Rivas Vaciamadrid",
};

const laPoveda = {
  lat: 40.31891059381465,
  long: -3.4801651450895275,
  lines: [9],
  edges: [rivasVaciamadrid, argandaDelRey],
  name: "La Poveda",
};

const argandaDelRey = {
  lat: 40.303650415091234,
  long: -3.449403178096834,
  lines: [9],
  edges: [laPoveda],
  name: "Arganda del Rey",
};

// Linea 10

const hospitalInfantaSofia = {
  lat: 40.560110329013575,
  long: -3.610162732753923,
  lines: [10],
  edges: [reyesCatolicos],
  name: "Hospital Infanta Sofía",
};

const reyesCatolicos = {
  lat: 40.5503527288015,
  long: -3.624223004031726,
  lines: [10],
  edges: [hospitalInfantaSofia, baunatal],
  name: "Reyes Católicos",
};

const baunatal = {
  lat: 40.55428797584786,
  long: -3.6359568927658854,
  lines: [10],
  edges: [reyesCatolicos, manuelDeFalla],
  name: "Baunatal",
};

const manuelDeFalla = {
  lat: 40.550665860343024,
  long: -3.647756936397305,
  lines: [10],
  edges: [baunatal, marquesDeLaValdavia],
  name: "Manuel de Falla",
};

const marquesDeLaValdavia = {
  lat: 40.54107074526154,
  long: -3.6386590769730227,
  lines: [10],
  edges: [manuelDeFalla, laMoraleja],
  name: "Marqués de la Valdavia",
};

const laMoraleja = {
  lat: 40.53190558802484,
  long: -3.6366727996800705,
  lines: [10],
  edges: [marquesDeLaValdavia, laGranja],
  name: "La Moraleja",
};

const laGranja = {
  lat: 40.52763196999366,
  long: -3.657700339172358,
  lines: [10],
  edges: [laMoraleja, rondaDeLaComunicacion],
  name: "La Granja",
};

const rondaDeLaComunicacion = {
  lat: 40.51574788523366,
  long: -3.6645868824021877,
  lines: [10],
  edges: [laGranja, lasTablas],
  name: "Ronda de La Comunicación",
};

const lasTablas = {
  lat: 40.508234293515294,
  long: -3.670168606991995,
  lines: [10],
  edges: [rondaDeLaComunicacion, montecarmelo],
  name: "Las Tablas",
};

const montecarmelo = {
  lat: 40.505276389563086,
  long: -3.6967240839489315,
  lines: [10],
  edges: [lasTablas, tresOlivos],
  name: "Montecarmelo",
};

const tresOlivos = {
  lat: 40.50048100101604,
  long: -3.6955884087194493,
  lines: [10],
  edges: [montecarmelo, fuencarral],
  name: "Tres Olivos",
};

const fuencarral = {
  lat: 40.49507200148446,
  long: -3.6941834710040604,
  lines: [10],
  edges: [tresOlivos, begona],
  name: "Fuencarral",
};

const begona = {
  lat: 40.48042983236294,
  long: -3.686525042430225,
  lines: [10],
  edges: [fuencarral, chamartin],
  name: "Begoña",
};

const cuzco = {
  lat: 40.4583410809721,
  long: -3.6909101704938823,
  lines: [10],
  edges: [plazaDeCastilla, santiagoBernabeu],
  name: "Cuzco",
};

const santiagoBernabeu = {
  lat: 40.45209998745305,
  long: -3.690094161806205,
  lines: [10],
  edges: [cuzco, nuevosMinisterios],
  name: "Santiago Bernabeú",
};

const lago = {
  lat: 40.41668380794701,
  long: -3.7349151046922238,
  lines: [10],
  edges: [principePio, batan],
  name: "Lago",
};

const batan = {
  lat: 40.407639387815244,
  long: -3.753571142027108,
  lines: [10],
  edges: [lago, casaDeCampo],
  name: "Batán",
};

const coloniaJardin = {
  lat: 40.397212808344996,
  long: -3.775044331845643,
  lines: [10],
  edges: [casaDeCampo, aviacionEspanola],
  name: "Colonia Jardín",
};

const aviacionEspanola = {
  lat: 40.38378312207911,
  long: -3.785194841015032,
  lines: [10],
  edges: [coloniaJardin, cuatroVientos],
  name: "Aviación Española",
};

const cuatroVientos = {
  lat: 40.37787473167457,
  long: -3.7925022099532435,
  lines: [10],
  edges: [aviacionEspanola, joaquinVilumbrales],
  name: "Cuatro Vientos",
};

const joaquinVilumbrales = {
  lat: 40.34974034029154,
  long: -3.8095765570155797,
  lines: [10],
  edges: [cuatroVientos, puertaDelSur],
  name: "Joaquin Vilumbrales",
};

const puertaDelSur = {
  lat: 40.34536863369864,
  long: -3.812993313042291,
  lines: [10, 12],
  edges: [joaquinVilumbrales, parqueDeLisboa, sanNicasio],
  name: "Puerta del Sur",
};

// Línea 11

const abrantes = {
  lat: 40.38101682028277,
  long: -3.7266040721309106,
  lines: [11],
  edges: [plazaEliptica, panBendito],
  name: "Abrantes",
};

const panBendito = {
  lat: 40.375968527054745,
  long: -3.735630092306251,
  lines: [11],
  edges: [abrantes, sanFrancisco],
  name: "Pan Bendito",
};

const sanFrancisco = {
  lat: 40.37381688313462,
  long: -3.740836953502392,
  lines: [11],
  edges: [panBendito, carabanchelAlto],
  name: "San Francisco",
};

const carabanchelAlto = {
  lat: 40.37189641963218,
  long: -3.751469241468814,
  lines: [11],
  edges: [sanFrancisco, laPeseta],
  name: "Carabanchel Alto",
};

const laPeseta = {
  lat: 40.363185835142424,
  long: -3.7585748055067283,
  lines: [11],
  edges: [carabanchelAlto, laFortuna],
  name: "La Peseta",
};

const laFortuna = {
  lat: 40.35813368947538,
  long: -3.776571223036998,
  lines: [11],
  edges: [laPeseta],
  name: "La Fortuna",
};

// Linea 12

const parqueDeLisboa = {
  lat: 40.349656673411616,
  long: -3.822716500031455,
  lines: [12],
  edges: [puertaDelSur, alcorconCentral],
  name: "Parque de Lisboa",
};

const alcorconCentral = {
  lat: 40.35026944159127,
  long: -3.832700095755241,
  lines: [12],
  edges: [parqueDeLisboa, parqueOeste],
  name: "Alcorcón Central",
};

const parqueOeste = {
  lat: 40.345979947183295,
  long: -3.849875454411215,
  lines: [12],
  edges: [alcorconCentral, universidadReyJuanCarlos],
  name: "Parque Oeste",
};

const universidadReyJuanCarlos = {
  lat: 40.334674224484,
  long: -3.872801530092762,
  lines: [12],
  edges: [parqueOeste, mostolesCentral],
  name: "Universidad Rey Juan Carlos",
};

const mostolesCentral = {
  lat: 40.32861922039742,
  long: -3.8648011530781274,
  lines: [12],
  edges: [universidadReyJuanCarlos, pradillo],
  name: "Móstoles Central",
};

const pradillo = {
  lat: 40.32164434985196,
  long: -3.8651073876242226,
  lines: [12],
  edges: [mostolesCentral, hospitalDeMostoles],
  name: "Pradillo",
};

const hospitalDeMostoles = {
  lat: 40.31634705240296,
  long: -3.87584473565684,
  lines: [12],
  edges: [pradillo, manuelaMalasana],
  name: "Hospital de Móstoles",
};

const manuelaMalasana = {
  lat: 40.30900257875122,
  long: -3.865452424826645,
  lines: [12],
  edges: [hospitalDeMostoles, loranca],
  name: "Manuela Malasaña",
};

const loranca = {
  lat: 40.29652247381484,
  long: -3.838637764178445,
  lines: [12],
  edges: [manuelaMalasana, hospitalDeFuenlabrada],
  name: "Loranca",
};

const hospitalDeFuenlabrada = {
  lat: 40.28583592051701,
  long: -3.8193067096176763,
  lines: [12],
  edges: [loranca, parqueEuropa],
  name: "Hospital de Fuenlabrada",
};

const parqueEuropa = {
  lat: 40.285187511819245,
  long: -3.80567403241881,
  lines: [12],
  edges: [hospitalDeFuenlabrada, fuenlabradaCentral],
  name: "Parque Europa",
};

const fuenlabradaCentral = {
  lat: 40.28265261663439,
  long: -3.799816254313558,
  lines: [12],
  edges: [parqueEuropa, parqueDeLosEstados],
  name: "Fuenlabrada Central",
};

const parqueDeLosEstados = {
  lat: 40.28653199684358,
  long: -3.7870287586446385,
  lines: [12],
  edges: [fuenlabradaCentral, parqueDeLosEstados],
  name: "Parque de los Estados",
};

const arroyoCulebro = {
  lat: 40.28903413897547,
  long: -3.7595453039475544,
  lines: [12],
  edges: [parqueDeLosEstados, conservatorio],
  name: "Arroyo Culebro",
};

const conservatorio = {
  lat: 40.29358060460064,
  long: -3.747981943166903,
  lines: [12],
  edges: [arroyoCulebro, alonsoDeMendoza],
  name: "Conservatorio",
};

const alonsoDeMendoza = {
  lat: 40.30073309139775,
  long: -3.7397167233982254,
  lines: [12],
  edges: [getafeCentral, conservatorio],
  name: "Alonso De Mendoza",
};

const getafeCentral = {
  lat: 40.30970293670267,
  long: -3.7367762124897723,
  lines: [12],
  edges: [alonsoDeMendoza, juanDeLaCierva],
  name: "Juan de La Cierva",
};

const juanDeLaCierva = {
  lat: 40.31161190543185,
  long: -3.72616653114579,
  lines: [12],
  edges: [getafeCentral, elCasar],
  name: "Juan de La Cierva",
};

const elCasar = {
  lat: 40.31844646903861,
  long: -3.711085383789591,
  lines: [12],
  edges: [juanDeLaCierva, losEspartales],
  name: "El Casar",
};

const losEspartales = {
  lat: 40.32429365180987,
  long: -3.7205029660628655,
  lines: [12],
  edges: [elCasar, elBercial],
  name: "Los Espartales",
};

const elBercial = {
  lat: 40.32923155161688,
  long: -3.728132399751428,
  lines: [12],
  edges: [losEspartales, elCarrascal],
  name: "El Bercial",
};

const elCarrascal = {
  lat: 40.33659228986702,
  long: -3.7418812748821435,
  lines: [12],
  edges: [elBercial, julianBesteiro],
  name: "El Carrascal",
};

const julianBesteiro = {
  lat: 40.334521489754074,
  long: -3.753683868454276,
  lines: [12],
  edges: [elCarrascal, casaDelReloj],
  name: "Julian Besteiro",
};

const casaDelReloj = {
  lat: 40.32702346148158,
  long: -3.758546651012411,
  lines: [12],
  edges: [julianBesteiro, hospitalSeveroOchoa],
  name: "Casa del Reloj",
};

const hospitalSeveroOchoa = {
  lat: 40.32176863152142,
  long: -3.7692656691228903,
  lines: [12],
  edges: [casaDelReloj, leganesCentral],
  name: "Hospital Severo Ochoa",
};

const leganesCentral = {
  lat: 40.32858715066292,
  long: -3.7721185456851845,
  lines: [12],
  edges: [sanNicasio, hospitalSeveroOchoa],
  name: "Leganés Central",
};

const sanNicasio = {
  lat: 40.336152098776516,
  long: -3.7771242064288706,
  lines: [12],
  edges: [leganesCentral, puertaDelSur],
  name: "San Nicasio",
};

// Edges
pinarDeChamartin.edges = [bambu, manoteras];
bambu.edges = [pinarDeChamartin, chamartin];
chamartin.edges = [plazaDeCastilla, bambu, begona];
plazaDeCastilla.edges = [
  chamartin,
  valdeacederas,
  ventilla,
  duqueDePastrana,
  cuzco,
];
valdeacederas.edges = [plazaDeCastilla, tetuan];
tetuan.edges = [valdeacederas, estrecho];
estrecho.edges = [tetuan, alvarado];
alvarado.edges = [estrecho, cuatroCaminos];
cuatroCaminos.edges = [
  alvarado,
  riosRosas,
  canal,
  nuevosMinisterios,
  guzmanElBueno,
];
riosRosas.edges = [cuatroCaminos, iglesia];
iglesia.edges = [riosRosas, bilbao];
bilbao.edges = [iglesia, tribunal, sanBernardo, alonsoMartinez];
tribunal.edges = [bilbao, granVia, alonsoMartinez, plazaDeEspana];
granVia.edges = [tribunal, sol, chueca, callao];
sol.edges = [granVia, tirsoDeMolina, sevilla, opera, lavapies, callao];
tirsoDeMolina.edges = [sol, antonMartin];
antonMartin.edges = [tirsoDeMolina, estacionDelArte];
estacionDelArte.edges = [antonMartin, atocha];
atocha.edges = [estacionDelArte, menendezPelayo];
menendezPelayo.edges = [atocha, pacifico];
pacifico.edges = [menendezPelayo, puenteDeVallecas, mendezAlvaro, condeDeCasal];
puenteDeVallecas.edges = [pacifico, nuevaNumancia];
nuevaNumancia.edges = [puenteDeVallecas, portazgo];
portazgo.edges = [nuevaNumancia, buenosAires];
buenosAires.edges = [portazgo, altoDeArenal];
altoDeArenal.edges = [buenosAires, miguelHernandez];
miguelHernandez.edges = [altoDeArenal, sierraDeGuadalupe];
sierraDeGuadalupe.edges = [miguelHernandez, villaDeVallecas];
villaDeVallecas.edges = [sierraDeGuadalupe, congosto];
congosto.edges = [villaDeVallecas, laGavia];
laGavia.edges = [congosto, lasSuertes];
lasSuertes.edges = [laGavia, valdecarros];
valdecarros.edges = [lasSuertes];

// Lineas

const linea1 = {
  stops: [
    pinarDeChamartin,
    bambu,
    chamartin,
    plazaDeCastilla,
    valdeacederas,
    tetuan,
    estrecho,
    alvarado,
    cuatroCaminos,
    riosRosas,
    iglesia,
    bilbao,
    tribunal,
    granVia,
    sol,
    tirsoDeMolina,
    antonMartin,
    estacionDelArte,
    atocha,
    menendezPelayo,
    pacifico,
    puenteDeVallecas,
    nuevaNumancia,
    portazgo,
    buenosAires,
    altoDeArenal,
    miguelHernandez,
    sierraDeGuadalupe,
    villaDeVallecas,
    congosto,
    laGavia,
    lasSuertes,
    valdecarros,
  ],
  color: "#67c0dd",
};

const linea2 = {
  stops: [
    lasRosas,
    avenidaDeGuadalajara,
    alsacia,
    laAlmudena,
    laElipa,
    ventas,
    manuelBecerra,
    goya,
    principeDeVergara,
    retiro,
    bancoDeEspana,
    sevilla,
    sol,
    opera,
    santoDomingo,
    noviciado,
    sanBernardo,
    quevedo,
    canal,
    cuatroCaminos,
  ],
  color: "#e0292f",
};

const linea3 = {
  stops: [
    villaverdeAlto,
    sanCristobal,
    villaverdeBajoCruce,
    ciudadDeLosAngeles,
    sanFerminOrcasur,
    hospital12deOctubre,
    almendrales,
    legazpi,
    delicias,
    palosDeLaFrontera,
    embajadores,
    lavapies,
    sol,
    callao,
    plazaDeEspana,
    venturaRodriguez,
    arguelles,
    moncloa,
  ],
  color: "#fdd700",
};

const linea4 = {
  stops: [
    arguelles,
    sanBernardo,
    bilbao,
    alonsoMartinez,
    colon,
    serrano,
    velazquez,
    goya,
    lista,
    diegoDeLeon,
    avenidaDeAmerica,
    prosperidad,
    alfonsoXIII,
    avenidaDeLaPaz,
    arturoSoria,
    esperanza,
    canillas,
    marDeCristal,
    sanLorenzo,
    parqueDeSantaMaria,
    hortaleza,
    manoteras,
    pinarDeChamartin,
  ],
  color: "#cf7700",
};

const linea5 = {
  stops: [
    alamedaDeOsuna,
    elCapricho,
    canillas,
    torreArias,
    suanzes,
    ciudadLineal,
    puebloNuevo,
    quintana,
    elCarmen,
    ventas,
    diegoDeLeon,
    nunezDeBalboa,
    rubenDario,
    alonsoMartinez,
    chueca,
    granVia,
    callao,
    opera,
    laLatina,
    puertaDeToledo,
    acacias,
    piramedes,
    marquesDeVadillo,
    urgel,
    oporto,
    vistaAlegre,
    carabanchel,
    eugeniaDeMontijo,
    aluche,
    empalme,
    campamento,
    casaDeCampo,
  ],
  color: "#98be13",
};

const linea6 = {
  stops: [
    laguna,
    carpetana,
    oporto,
    opanel,
    plazaEliptica,
    usera,
    legazpi,
    arganzuelaPlanetario,
    mendezAlvaro,
    pacifico,
    condeDeCasal,
    sainzDeBaranda,
    odonnell,
    manuelBecerra,
    diegoDeLeon,
    avenidaDeAmerica,
    republicaArgentina,
    nuevosMinisterios,
    cuatroCaminos,
    guzmanElBueno,
    vicenteAleixandre,
    ciudadUniversitaria,
    moncloa,
    arguelles,
    principePio,
    puertaDelAngel,
    altoDeExtremadura,
    lucero,
  ],
  color: "#c0bab0",
};

const linea7 = {
  stops: [
    hospitalDeHenares,
    henares,
    jarama,
    sanFernando,
    laRambla,
    cosladaCentral,
    barrioDelPuerto,
    estadioMetropolitano,
    lasMusas,
    sanBlas,
    simancas,
    garciaNoblejas,
    ascao,
    puebloNuevo,
    barrioDeLaConcepcion,
    parqueDeLasAvenidas,
    cartagena,
    avenidaDeAmerica,
    gregorioMaranon,
    alonsoCano,
    canal,
    islasFilipinas,
    guzmanElBueno,
    francosRodriguez,
    valdezarza,
    antonioMachado,
    penagrande,
    avenidaDeLaIlustracion,
    lacoma,
    arroyofresno,
    pitis,
  ],
  color: "#f19c0c",
};

const linea8 = {
  stops: [
    nuevosMinisterios,
    colombia,
    pinarDelRey,
    marDeCristal,
    feriaDeMadrid,
    aeropuertoT1T2T3,
    barajas,
    aeropuertoT4,
  ],
  color: "#eba6c9",
};

const linea9 = {
  stops: [
    pacoDeLucia,
    mirasierra,
    herreraOria,
    barrioDelPilar,
    ventilla,
    plazaDeCastilla,
    duqueDePastrana,
    pioXII,
    colombia,
    conchaEspina,
    cruzDelRayo,
    avenidaDeAmerica,
    nunezDeBalboa,
    principeDeVergara,
    ibiza,
    sainzDeBaranda,
    estrella,
    vinateros,
    artilleros,
    pavones,
    valdebernardo,
    vicalvaro,
    sanCipriano,
    puertaDeArganda,
    rivasUrbanizaciones,
    rivasFutura,
    rivasVaciamadrid,
    laPoveda,
    argandaDelRey,
  ],
  color: "#9e2f8a",
};

const linea10 = {
  stops: [
    hospitalInfantaSofia,
    reyesCatolicos,
    baunatal,
    manuelDeFalla,
    marquesDeLaValdavia,
    laMoraleja,
    laGranja,
    rondaDeLaComunicacion,
    lasTablas,
    montecarmelo,
    tresOlivos,
    fuencarral,
    begona,
    chamartin,
    plazaDeCastilla,
    cuzco,
    santiagoBernabeu,
    nuevosMinisterios,
    gregorioMaranon,
    alonsoMartinez,
    tribunal,
    principePio,
    lago,
    batan,
    casaDeCampo,
    coloniaJardin,
    aviacionEspanola,
    cuatroVientos,
    joaquinVilumbrales,
    puertaDelSur,
  ],
  color: "#005fa9",
};

const linea11 = {
  stops: [
    plazaEliptica,
    abrantes,
    panBendito,
    sanFrancisco,
    carabanchelAlto,
    laPeseta,
    laFortuna,
  ],
  color: "#009739",
};

const linea12 = {
  stops: [
    puertaDelSur,
    parqueDeLisboa,
    alcorconCentral,
    parqueOeste,
    universidadReyJuanCarlos,
    mostolesCentral,
    pradillo,
    hospitalDeMostoles,
    manuelaMalasana,
    loranca,
    hospitalDeFuenlabrada,
    parqueEuropa,
    fuenlabradaCentral,
    parqueDeLosEstados,
    arroyoCulebro,
    conservatorio,
    alonsoDeMendoza,
    getafeCentral,
    juanDeLaCierva,
    elCasar,
    losEspartales,
    elBercial,
    elCarrascal,
    julianBesteiro,
    casaDelReloj,
    hospitalSeveroOchoa,
    leganesCentral,
    sanNicasio,
  ],
  color: "#b9ab1f",
};

const linea13 = {
  stops: [opera, principePio],
  color: "#333b62",
};

const lineas = [
  linea1,
  linea2,
  linea3,
  linea4,
  linea5,
  linea6,
  linea7,
  linea8,
  linea9,
  linea10,
  linea11,
  linea12,
  linea13,
];
