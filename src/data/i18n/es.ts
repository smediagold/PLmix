import type { ContentOverlay } from './types';

export const es: ContentOverlay = {
  groups: {
    construction: 'Construcción',
    agriculture: 'Agricultura',
    industrial: 'Industrial',
    engine: 'Motores',
  },

  lines: {
    'mini-concrete-mixers': {
      name: "Hormigonera Mini",
      tagline: "Hormigoneras de tambor de 250 L, 140–150 kg, tan ligeras que una persona las empuja. Motor eléctrico, a gasolina o diésel.",
      intro: "Una hormigonera mini es una mezcladora de tambor pequeña y portátil para trabajos que necesitan concreto o mortero en lotes pequeños: reparaciones, zapatas, andadores, albañilería y azulejo. Las nuestras tienen 250 litros, pesan 140–150 kg y pasan por un portón estándar, con el mismo acero de tambor de 2–2.5 mm que nuestras hormigoneras grandes.",
      facts: [{ label: "Capacidad del tambor", value: "250 L" }, { label: "Peso", value: "140 – 150 kg" }, { label: "Motor", value: "Eléctrico, gasolina o diésel" }, { label: "Ruedas", value: "2 o 4" }],
      photos: ["Sala de exhibición, hormigoneras en cuatro colores", "Nave de ensamble", "Tambores listos para un contenedor FCL"],
    },
    'concrete-mixers': {
      name: 'Hormigoneras',
      tagline: 'Hormigoneras de tambor de 250 a 500 litros, hechas con su color, motor y logo.',
      intro:
        'Nuestra máquina más conocida y con la que empiezan la mayoría de nuestros socios. Cada hormigonera se suelda, se pinta y se prueba en marcha en nuestra fábrica, y se envía con el motor que usted elija: eléctrico, a gasolina o diésel.',
      facts: [
        { label: 'Capacidad del tambor', value: '250 – 500 L' },
        { label: 'Motor', value: 'Eléctrico, gasolina o diésel' },
        { label: 'Ruedas', value: '2, 3 o 4, macizas o neumáticas' },
        { label: 'Acero del tambor', value: '2 – 3 mm' },
      ],
      photos: [
        'Sala de exhibición, hormigoneras en cuatro colores',
        'Nave de ensamblaje',
        'Tambores listos para una carga FCL',
        'Contenedor cargado para exportación',
        'Hormigonera de 385 L',
        'Hormigonera de 500 L',
      ],
      banner: [
        'Nuestra sala de exhibición, hormigoneras en cuatro colores',
        'Lista para trabajar, motor a gasolina',
      ],
    },
    'stirrup-bending-machines': {
      name: 'Dobladoras de Estribos',
      tagline: 'Alimente, doble y corte varilla de 6–10 mm en estribos terminados desde una pantalla táctil.',
      intro:
        'Dos versiones de una misma máquina automática. El modelo con motor normal produce 14–15 estribos por minuto; el modelo servo con control PLC llega a estribos de hasta 1,200 mm y se detiene solo cuando se acaba el acero.',
      facts: [
        { label: 'Diámetro del acero', value: '6 – 10 mm, liso o corrugado' },
        { label: 'Producción', value: '14 – 15 estribos/min' },
        { label: 'Tamaño del estribo', value: 'Hasta 1,200 mm' },
        { label: 'Alimentación', value: '220V monofásico' },
      ],
      photos: [
        'Rodillos de alimentación',
        'Cabezal de doblado',
        'Modelo servo, panel de control',
        'Modelo servo, vista lateral',
        'Modelo servo, vista trasera',
      ],
    },
    'rice-transplanters': {
      name: 'Trasplantadoras de Arroz',
      tagline: 'De cuatro a seis surcos a la vez, hasta 1,200 m² por hora, tan ligeras que las maneja una sola persona.',
      intro:
        'Modelos autopropulsados con tracción eléctrica o a gasolina, y un modelo de tiro manual con garra asistida eléctricamente para parcelas pequeñas y en terrazas. Todos pesan 65 kg o menos y siembran a 20 o 24 cm entre surcos.',
      facts: [
        { label: 'Surcos', value: '4, 5 o 6' },
        { label: 'Rendimiento', value: '360 – 1,200 m²/h' },
        { label: 'Distancia entre surcos', value: '20 o 24 cm' },
        { label: 'Peso', value: '35 – 65 kg' },
      ],
      photos: [
        'PLSP-06, seis surcos',
        'Bandeja de plántulas',
        'PLSP-05, cinco surcos',
        'Garras de siembra',
        'PLSP-04, cuatro surcos',
      ],
      banner: [
        'Trasplante con una máquina Phu Long',
        'Trasplantadoras listas para entrega',
      ],
    },
    'paddy-threshers': {
      name: 'Trilladoras de Arroz',
      tagline: 'De 500 a 2,700 kg de arroz en cáscara por hora, con al menos el 98% del grano trillado.',
      intro:
        'Tres tamaños con un mismo diseño de tambor a 900 RPM: la PL800 de 75 kg para una sola finca, la PL1200 para explotaciones medianas y la PL2000 para cooperativas y contratistas de cosecha.',
      facts: [
        { label: 'Rendimiento', value: '500 – 2,700 kg/h' },
        { label: 'Tasa de trillado', value: '98% o más' },
        { label: 'Velocidad del tambor', value: '900 RPM' },
        { label: 'Peso', value: '75 – 490 kg' },
      ],
      photos: ['Trilladoras en nuestro almacén', 'Tambor de trillado', 'PL1200'],
      banner: [
        'Día de cosecha con una trilladora Phu Long',
        'Trilladoras listas para entrega',
      ],
    },
    'industrial-fans': {
      name: 'Ventiladores Industriales',
      tagline: 'Ventiladores centrífugos, axiales, portátiles y de pared que mueven hasta 90,000 m³ de aire por hora.',
      intro:
        'Seis familias de ventiladores para ventilación, extracción de humo, tiro forzado y enfriamiento. Las carcasas se rolan y sueldan en acero SS400 o inoxidable SUS 304, los rodetes se balancean en fábrica y cada ventilador puede fabricarse con transmisión directa o por banda.',
      facts: [
        { label: 'Caudal de aire', value: 'Hasta 90,075 m³/h' },
        { label: 'Presión de aire', value: 'Hasta 15,034 Pa' },
        { label: 'Potencia', value: '180 W – 410 kW' },
        { label: 'Material', value: 'Acero SS400 o SUS 304' },
      ],
      photos: [
        'Ventilador axial PLAX 204',
        'Lote de PLCF 121, listo para envío',
        'Ventilador axial tipo caja',
        'Ventilador portátil PLPF',
        'PLCF 101 en tarimas',
        'Ventiladores axiales de ducto',
      ],
      banner: [
        'Ventilador axial PLAX 204 en nuestro taller',
        'Ventiladores centrífugos listos para envío',
      ],
    },
    wheelbarrows: {
      name: 'Carretillas',
      tagline: 'Bateas de 70 a 120 litros en acero o plástico PP, con rueda maciza o neumática.',
      intro:
        'Siete carretillas para obras, fincas y ferreterías, desde la económica de 80 L hasta el modelo de 120 L con llanta grande. Chasis galvanizado o con pintura en polvo, embaladas desarmadas para la carga en contenedor.',
      facts: [
        { label: 'Capacidad', value: '70 – 120 L' },
        { label: 'Batea', value: 'Acero o plástico PP' },
        { label: 'Chasis', value: 'Galvanizado o con pintura en polvo' },
      ],
      photos: ['80 L, llanta grande', '90 L, batea de PP', 'Piezas'],
    },
    engines: {
      name: 'Motores',
      tagline: 'Motores eléctricos, motores a gasolina GP160/GP200 y diésel CAOFONG para nuestras máquinas.',
      intro:
        'Los mismos motores que montamos en nuestras hormigoneras y máquinas agrícolas, a la venta por separado como repuesto o para su línea de ensamblaje.',
      facts: [
        { label: 'Eléctrico', value: '2.2 – 5.5 kW, 220V' },
        { label: 'Gasolina', value: 'GP160 / GP200, 5.5 – 6.5 Hp' },
        { label: 'Diésel', value: 'CAOFONG, 8 – 12 Hp' },
      ],
      photos: ['Motor a gasolina', 'Motor eléctrico', 'GP200'],
    },
    'vikyno-diesel-engines': {
      name: 'Motores Diésel Vikyno',
      tagline: 'Motores diésel Vikyno fabricados en Vietnam, de 7 a 36.5 Hp, enfriados por aire o por agua.',
      intro:
        'Motores RV monocilíndricos para bombas, generadores y maquinaria agrícola, los RV325NA y RV365NB para equipo pesado, y la serie EV con arranque eléctrico.',
      facts: [
        { label: 'Potencia', value: '7 – 36.5 Hp' },
        { label: 'Modelos', value: 'RV70 a RV365NB, EV2400, EV2600' },
        { label: 'Enfriamiento', value: 'Aire o agua' },
      ],
      photos: ['RV165-2', 'RV325NA', 'EV2400'],
    },
  },

  seo: {
    'industrial-fans': {
      title: "Ventiladores Industriales de Vietnam | Phu Long",
      description: "Ventiladores industriales fabricados en Vietnam: centrífugos hasta 15,034 Pa, axiales hasta 90,075 m³/h, ventiladores portátiles y extractores de pared.",
      aboutTitle: "Ventiladores industriales de una fábrica en Vietnam",
      about: ["Phu Long fabrica ventiladores industriales en Vietnam para ventilación, extracción de humo, tiro forzado y enfriamiento. La gama incluye ventiladores centrífugos (álabes curvados hacia adelante, álabes planos de trabajo pesado y alta presión), ventiladores axiales, ventiladores portátiles grandes y extractores cuadrados de pared.", "Las carcasas se rolan y sueldan en acero SS400 o acero inoxidable SUS 304, y cada rodete se balancea en nuestra planta antes del envío. Los centrífugos y axiales trabajan a 380 V trifásico con transmisión directa o por banda, de 180 W a 410 kW, para ajustarse al caudal y la presión de su sistema de ductos."],
      faqTitle: "Preguntas frecuentes sobre ventiladores industriales",
      guideLabel: "Leer: ¿ventilador centrífugo o axial?",
      faq: [
        { q: "¿Qué ventiladores industriales fabrican?", a: "Ventiladores centrífugos PLCF 101, 121 y 152, ventilador axial PLAX 204, ventilador portátil PLPF con aspas de 1.5–2 m y extractor cuadrado de pared PLQF." },
        { q: "¿Ventilador centrífugo o axial?", a: "Elija un axial para mover grandes volúmenes de aire con poca resistencia, hasta 90,075 m³/h a 877 Pa. Elija un centrífugo cuando el aire debe pasar por ductos, filtros o campanas, con presión de hasta 15,034 Pa en el PLCF 152." },
        { q: "¿Carcasa de acero o de inoxidable?", a: "El acero SS400 sirve para ventilación general y aire seco. El inoxidable SUS 304 resiste la corrosión en cocinas, zonas húmedas, vapores químicos y procesamiento de alimentos." },
        { q: "¿Qué alimentación eléctrica usan?", a: "Los centrífugos, axiales y extractores de pared usan 380 V trifásico. El portátil PLPF usa 220 V monofásico, 450–550 W." },
        { q: "¿Fabrican ventiladores a la medida?", a: "Sí. Indíquenos caudal, presión, alimentación e instalación; seleccionamos el ventilador, el tipo de transmisión y cotizamos FOB o CIF desde Vietnam." },
      ],
    },
    'paddy-threshers': {
      title: "Trilladora de Arroz de Vietnam – 500 a 2,700 kg/h | Phu Long",
      description: "Trilladoras de arroz fabricadas en Vietnam: PL800, PL1200 y PL2000, de 500 a 2,700 kg/h, 98% o más de grano trillado. Exportación FOB/CIF, desde 1 unidad.",
      aboutTitle: "Trilladoras de arroz de Vietnam",
      about: ["Phu Long fabrica trilladoras de arroz (desgranadoras de arroz en cáscara) en su propia planta en Vietnam, uno de los mayores productores de arroz del mundo. Cada máquina separa el grano de la paja en una sola pasada, con 98% o más del arroz trillado.", "Tres tamaños comparten un mismo tambor que gira a 900 RPM: la PL800 de 75 kg produce 500–600 kg/h para una parcela, la PL1200 de 290 kg produce 1,800–1,900 kg/h para fincas medianas y la PL2000 de 490 kg produce 2,500–2,700 kg/h para cooperativas y servicios de trilla."],
      faqTitle: "Preguntas frecuentes sobre la trilladora de arroz",
      guideLabel: "Leer: cómo elegir la capacidad de la trilladora",
      faq: [
        { q: "¿Qué trilladora de arroz me conviene?", a: "Según su cosecha: la PL800 (500–600 kg/h) para parcelas pequeñas y lejanas, la PL1200 (1,800–1,900 kg/h) para fincas medianas y la PL2000 (2,500–2,700 kg/h) para cooperativas y trilla por contrato." },
        { q: "¿Qué porcentaje del grano se trilla?", a: "Los tres modelos trillan 98% o más del arroz, con el tambor a 900 RPM." },
        { q: "¿Cuánto pesan y miden?", a: "PL800: 75 kg, 1000 × 700 × 1000 mm. PL1200: 290 kg, 1700 × 1100 × 1500 mm. PL2000: 490 kg, 2700 × 1100 × 1650 mm." },
        { q: "¿Sirve para otros cultivos además del arroz?", a: "Las trilladoras están diseñadas y probadas para arroz. Indíquenos su cultivo y le diremos si algún modelo es adecuado." },
        { q: "¿Cuál es el pedido mínimo?", a: "Puede pedir una sola máquina. Enviamos en LCL o FCL con términos FOB o CIF desde Vietnam." },
      ],
    },
    'wheelbarrows': {
      title: "Fabricante de Carretillas en Vietnam – 70 a 120 L | Phu Long",
      description: "Carretillas fabricadas en Vietnam: bateas de 70, 80, 90 y 120 L de acero o plástico PP, llanta maciza o neumática, chasis galvanizado o con pintura en polvo. OEM.",
      aboutTitle: "Carretillas de una fábrica en Vietnam",
      about: ["Phu Long es un fabricante de carretillas en Vietnam. Hacemos siete carretillas para obra y jardín en nuestra propia planta, desde el modelo económico de 80 L hasta el de 120 L para trabajo pesado con llanta neumática grande, y las surtimos a importadores, distribuidores de ferretería y constructoras en el extranjero.", "Las bateas son de acero de 70, 80 y 120 L o de plástico PP de 90 L. Los chasis son galvanizados o con pintura en polvo, y cada modelo lleva llanta maciza o neumática. Cada carretilla se empaca desarmada para que quepan más unidades por contenedor, y puede fabricarse en su color y con su logo."],
      faqTitle: "Preguntas frecuentes sobre carretillas",
      guideLabel: "Leer la guía de compra de carretillas",
      faq: [
        { q: "¿Qué tamaños de carretilla fabrican?", a: "70 L, 80 L, 90 L y 120 L. La de 80 L viene en tres estilos (económica, estilo chino y llanta grande) y la de 120 L con llanta neumática grande o chica." },
        { q: "¿Batea de acero o de plástico?", a: "La batea de acero es la opción clásica para concreto, grava y trabajo rudo de obra. La de plástico PP no se oxida, es más ligera y conviene para jardín, campo y materiales húmedos o químicos." },
        { q: "¿Llanta maciza o neumática?", a: "La llanta neumática rueda más fácil en terreno blando o disparejo y amortigua golpes. La maciza nunca se poncha y no requiere mantenimiento, ideal en obras con varilla y escombro." },
        { q: "¿Cuál es el pedido mínimo?", a: "20 unidades por modelo. Puede combinar modelos en un contenedor; enviamos LCL o FCL en términos FOB o CIF desde Vietnam." },
        { q: "¿Pueden fabricar carretillas con nuestra marca?", a: "Sí. Pintamos la batea y el chasis en sus colores y aplicamos su logo, para que las carretillas lleguen listas para venta." },
      ],
    },
    'mini-concrete-mixers': {
      title: "Hormigonera Mini 250L Fabricada en Vietnam | Phu Long",
      description: "Hormigonera mini de fábrica en Vietnam: tambor de 250 L, 140–150 kg, 2 o 4 ruedas, motor eléctrico, a gasolina o diésel. Color y logo OEM, exportación FOB/CIF.",
      aboutTitle: "¿Qué es una hormigonera mini?",
      about: ["Una hormigonera mini (mezcladora o revolvedora pequeña) es una máquina de tambor compacta y portátil que convierte cemento, arena, grava y agua en concreto o mortero en lotes pequeños. Es la medida justa para reparaciones, postes de cerca, zapatas, andadores, albañilería, aplanados y azulejo, donde una hormigonera grande pesa demasiado y mezclar a mano es muy lento.", "Phu Long fabrica sus hormigoneras mini en su propia planta en Vietnam. Cada hormigonera de 250 L pesa 140–150 kg, mide 1700 × 860 × 1300 mm y usa llantas macizas 4.00-8, con 2 ruedas para empujarla fácil o 4 ruedas para más estabilidad. Elija motor eléctrico para obra en interiores y en la ciudad, o motor a gasolina o diésel para obras sin corriente, en su color y con su logo."],
      faqTitle: "Preguntas frecuentes sobre la hormigonera mini",
      guideLabel: "Leer: cómo elegir una hormigonera",
      faq: [
        { q: "¿Qué tamaño tiene una hormigonera mini?", a: "Nuestra hormigonera mini tiene un tambor de 250 L y mide 1700 × 860 × 1300 mm. Pesa 140 kg con 2 ruedas o 150 kg con 4 ruedas." },
        { q: "¿Para qué se usa una hormigonera mini?", a: "Para lotes pequeños de concreto o mortero en reparaciones, zapatas, postes, andadores, albañilería, aplanados y azulejo, en obras donde una hormigonera grande no cabe o quedaría ociosa." },
        { q: "Eléctrico, gasolina o diésel: ¿qué motor conviene?", a: "El eléctrico (2.2–5.5 kW) es silencioso y limpio para interiores y ciudad. El de gasolina (GP160/GP200) sirve donde no hay corriente. El diésel es para jornadas largas y obras alejadas." },
        { q: "¿Hormigonera mini o de un bulto?", a: "Elija la mini de 250 L cuando lo más importante es moverla fácil. Si vacía más concreto al día, nuestros modelos de 350 L y 385 L mezclan un bulto completo de cemento de 50 kg por lote." },
        { q: "¿Puedo pedir hormigoneras mini con mi marca?", a: "Sí. Pintamos la hormigonera en su color y aplicamos su logo y calcomanías. El pedido mínimo es de 5 unidades por modelo, con envío LCL o FCL en términos FOB o CIF." },
      ],
    },
    'stirrup-bending-machines': {
      title: "Dobladora de Estribos Automática de Vietnam | Phu Long",
      description: "Dobladoras de estribos automáticas fabricadas en Vietnam: alimentan, enderezan, doblan y cortan varilla de 6–10 mm. Modelo estándar y servo PLC, 220 V, FOB/CIF.",
      aboutTitle: "Dobladoras de estribos automáticas de Vietnam",
      about: ["Phu Long fabrica dobladoras de estribos automáticas en su propia planta en Vietnam. Una sola máquina alimenta la varilla desde el rollo, la endereza, dobla cada esquina al ángulo programado y corta el estribo terminado, así un operador sustituye a una cuadrilla de dobladores manuales.", "Ambos modelos trabajan varilla lisa y corrugada de 6 a 10 mm con corriente monofásica de 220 V. El modelo de motor estándar hace 14–15 estribos por minuto (14 × 14 cm) en medidas de hasta 110 cm. El modelo servo con PLC y pantalla táctil HMI dobla con más precisión, llega a estribos de 1,200 mm, produce 2.5–5 toneladas al día y se detiene solo cuando se acaba el acero."],
      faqTitle: "Preguntas frecuentes sobre la dobladora de estribos",
      guideLabel: "Leer: motor estándar o servo PLC",
      faq: [
        { q: "¿Qué hace una dobladora de estribos automática?", a: "Alimenta la varilla, la endereza, la dobla con la forma que usted programa en la pantalla táctil y la corta, en un solo ciclo continuo. Hace estribos cuadrados, rectangulares, triangulares, hexagonales, en C, espirales y a medida." },
        { q: "¿Qué diámetros de varilla puede doblar?", a: "Varilla lisa y corrugada de 6 a 10 mm en ambos modelos. El estribo más pequeño mide unos 7 cm en el modelo estándar y 55 mm en el modelo servo." },
        { q: "¿Motor estándar o servo: cuál elijo?", a: "Elija el motor estándar para alta producción de estribos comunes de hasta 110 cm. Elija el servo PLC si necesita más precisión, estribos grandes de hasta 1,200 mm y paro automático cuando se acaba la varilla." },
        { q: "¿Qué alimentación eléctrica necesita?", a: "220 V monofásico de serie, por lo que funciona con la mayoría de generadores de obra y talleres. Bajo pedido hay versión trifásica del modelo estándar." },
        { q: "¿Cuántos operadores necesita?", a: "Uno. El operador coloca el rollo, elige la forma en la pantalla y recoge los estribos terminados. La mayoría de los compradores recupera la inversión con el ahorro de mano de obra y de acero." },
        { q: "¿Cuál es el pedido mínimo y cómo se envía?", a: "Puede pedir una sola máquina. Cada una pesa 250–270 kg y mide 2200 × 950 × 1280 mm; enviamos en LCL o FCL con términos FOB o CIF desde Vietnam." },
      ],
    },
    'concrete-mixers': {
      title: 'Hormigoneras y Revolvedoras de Vietnam | Phu Long',
      description:
        'Hormigoneras fabricadas en Vietnam: mini de 250 L y de 1 saco de 350 L hasta 500 L, eléctricas, a gasolina o diésel, con su color y logo. FOB/CIF.',
      aboutTitle: 'Hormigoneras y mezcladoras de concreto desde Vietnam',
      about: [
        'Phu Long es un fabricante de hormigoneras en Vietnam. Producimos hormigoneras de tambor, también conocidas como mezcladoras o revolvedoras de concreto, de 250 a 500 litros en nuestra propia fábrica en Giao Thuy, Ninh Binh, y las enviamos a importadores, distribuidores y contratistas en 20 países.',
        'Para obras estrechas y reparaciones pequeñas, nuestra mini hormigonera de 250 L pesa 140–150 kg y se mueve fácilmente a mano. Para obras pequeñas y medianas, nuestros modelos de 350 L y 385 L son la clásica hormigonera de 1 saco (o revolvedora de un bulto): un saco de cemento de 50 kg con su arena, grava y agua por cada mezcla. Los modelos de 420–500 L dan más concreto por mezcla para trabajos más grandes. Cada hormigonera puede fabricarse con motor eléctrico, a gasolina o diésel, en su color y con su logo.',
      ],
      faqTitle: 'Preguntas frecuentes sobre hormigoneras',
      faq: [
        {
          q: '¿Qué es una hormigonera de 1 saco?',
          a: 'Es una hormigonera de tambor dimensionada para mezclar un saco de cemento de 50 kg por mezcla, junto con la arena, la grava y el agua que corresponden a ese saco. Con una dosificación de obra típica 1:2:4 esto equivale a unos 0,15–0.2 m³ de concreto, que nuestras hormigoneras de 350 L y 385 L procesan en una sola mezcla. La cantidad exacta depende de su diseño de mezcla.',
        },
        {
          q: '¿Fabrican una mini hormigonera?',
          a: 'Sí. Nuestra mini hormigonera de 250 L viene con 2 o 4 ruedas macizas 4.00-8, pesa 140–150 kg y mide 1700 × 860 × 1300 mm, lo bastante compacta para obras estrechas, reparaciones y flotas de alquiler. Funciona con motor eléctrico, a gasolina o diésel, y se puede fabricar un tambor más pequeño desde 200 L a pedido.',
        },
        {
          q: '¿Una hormigonera es lo mismo que una mezcladora de concreto?',
          a: 'Sí. En el uso diario, hormigonera, mezcladora de concreto, revolvedora y trompo son nombres de la misma máquina: un tambor giratorio que mezcla cemento, arena, grava y agua para obtener concreto o mortero. En obra se usa el nombre más común en cada país; "hormigonera" es el nombre comercial habitual.',
        },
        {
          q: '¿Qué tamaños de hormigonera fabrican?',
          a: 'Diez modelos con tambores de 250 L a 500 L, sobre 2, 3 o 4 ruedas con llantas macizas 4.00-8 o neumáticas 5.00-12. El acero del tambor es de 2–3 mm, más grueso a pedido.',
        },
        {
          q: '¿Qué motores pueden usar las hormigoneras?',
          a: 'Motores eléctricos de 2,2 a 5.5 kW a 220 V, motores a gasolina GP160 / GP200 o motores diésel. Usted elige el motor para cada pedido y nosotros lo montamos y probamos en la fábrica.',
        },
        {
          q: '¿Pueden fabricar las hormigoneras en nuestro color y con nuestro logo?',
          a: 'Sí. El color, el logo y las calcomanías, el espesor del tambor, el motor y las llantas pueden definirse en cada pedido (OEM). Se pueden combinar varios colores y modelos en un mismo contenedor.',
        },
        {
          q: '¿Cuál es el pedido mínimo y cómo realizan los envíos?',
          a: 'El pedido mínimo va de 2 a 5 unidades según el modelo. Enviamos desde Vietnam en condiciones FOB o CIF, en contenedor completo (FCL) o consolidado (LCL). Envíenos su puerto y la cantidad para recibir una cotización.',
        },
        {
          q: '¿Por qué comprar hormigoneras en Vietnam?',
          a: 'Usted compra directamente a la fábrica que corta, suelda, pinta, ensambla y prueba cada hormigonera, con más de 20 años de experiencia y compradores en 20 países. Nuestras hormigoneras han sido probadas por SGS Vietnam.',
        },
      ],
      guideLabel: 'Lea la guía de la hormigonera de 1 saco',
    },
  },

  products: {
    'CM-250-2W': {
      name: 'Mini Hormigonera 250 L — 2 Ruedas (Macizas)',
      description:
        'Una mini hormigonera para obras pequeñas y reparaciones. Hormigonera compacta de 250 L con 2 ruedas macizas 4.00-8. Ligera, con solo 140 kg, fácil de maniobrar en obras pequeñas y medianas. Disponible con motor eléctrico, a gasolina o diésel.',
    },
    'CM-250-4W': {
      name: 'Mini Hormigonera 250 L — 4 Ruedas (Macizas)',
      description:
        'Una mini hormigonera para obras pequeñas y reparaciones. Hormigonera de 250 L con 4 ruedas macizas para mayor estabilidad en terreno irregular. Ideal para obras donde la máquina debe quedar firme en su sitio durante el trabajo.',
    },
    'CM-350-2W-S': {
      name: 'Hormigonera 350 L de 1 Saco — 2 Ruedas (Macizas)',
      description:
        'Una hormigonera de 1 saco (revolvedora de un bulto): un saco de cemento de 50 kg por mezcla. Hormigonera de 350 L con 2 ruedas macizas 4.00-8. Llantas sin mantenimiento que nunca se ponchan. Muy popular en mercados con pocos talleres de reparación de llantas.',
    },
    'CM-350-2W-P': {
      name: 'Hormigonera 350 L de 1 Saco — 2 Ruedas (Neumáticas 5.00-12)',
      description:
        'Una hormigonera de 1 saco (revolvedora de un bulto): un saco de cemento de 50 kg por mezcla. Hormigonera robusta de 350 L con llantas neumáticas grandes 5.00-12 para moverla fácilmente sobre terreno difícil. Nuestro modelo de exportación más vendido, versátil para la mayoría de los mercados de construcción.',
    },
    'CM-350-4W-S': {
      name: 'Hormigonera 350 L de 1 Saco — 4 Ruedas (Macizas)',
      description:
        'Una hormigonera de 1 saco (revolvedora de un bulto): un saco de cemento de 50 kg por mezcla. Hormigonera de 350 L con 4 ruedas macizas. Máxima estabilidad para instalaciones permanentes o semipermanentes en obra.',
    },
    'CM-350-4W-P': {
      name: 'Hormigonera 350 L de 1 Saco — 4 Ruedas (Neumáticas 5.00-10)',
      description:
        'Una hormigonera de 1 saco (revolvedora de un bulto): un saco de cemento de 50 kg por mezcla. Hormigonera de 350 L con 4 llantas neumáticas grandes 5.00-10: combina máxima estabilidad con un traslado cómodo sobre superficies irregulares.',
    },
    'CM-385': {
      name: 'Hormigonera 385 L de 1 Saco — 2 Ruedas (Macizas)',
      description:
        'Una hormigonera de 1 saco (revolvedora de un bulto): un saco de cemento de 50 kg por mezcla. Hormigonera de 385 L, de tamaño medio-grande, con 2 ruedas macizas. Cubre el espacio entre los modelos de 350 L y 420 L, ideal para obras medianas y grandes que necesitan más producción que una 350 L estándar.',
    },
    'CM-420': {
      name: 'Hormigonera 420 L — 2 Ruedas (Macizas)',
      description:
        'Hormigonera de gran capacidad de 420 L con 2 ruedas macizas. Tambor más grueso (2.5 mm/3 mm) para una vida útil más larga bajo uso diario intenso.',
    },
    'CM-450': {
      name: 'Hormigonera 450 L — 3 Ruedas (Macizas)',
      description:
        'Hormigonera de 450 L con una configuración única de 3 ruedas: equilibra estabilidad y maniobrabilidad en obras de gran escala. Tambor reforzado para uso continuo intenso.',
    },
    'CM-500': {
      name: 'Hormigonera 500 L — 4 Ruedas (Neumáticas 5.00-12)',
      description:
        'Nuestra hormigonera de mayor capacidad, 500 L, con 4 llantas neumáticas grandes 5.00-12. Hecha para proyectos de construcción exigentes y de gran escala con la máxima producción diaria.',
    },
    'WB-70L': {
      name: 'Carretilla 70 L — Batea de Acero',
      description:
        'Carretilla clásica de una rueda con batea de acero de 70 L. El tamaño de exportación más vendido: el punto justo entre capacidad, peso y precio para la mayoría de los mercados de construcción.',
    },
    'WB-80L-BIG': {
      name: 'Carretilla 80 L — Llanta Neumática Grande',
      description:
        'Carretilla con batea de acero de 80 L y llanta neumática grande para un traslado cómodo sobre terreno áspero e irregular. Chasis con pintura en polvo.',
    },
    'WB-80L-ECO': {
      name: 'Carretilla 80 L — Económica',
      description:
        'Carretilla económica de 80 L con una excelente relación calidad-precio para mercados sensibles al precio. Batea de acero estándar, chasis pintado.',
    },
    'WB-80L-CN': {
      name: 'Carretilla 80 L — Estilo Chino',
      description:
        'Carretilla de 80 L con diseño de estilo chino, popular en mercados del Sudeste Asiático y África acostumbrados a esta forma. Batea de acero, chasis pintado.',
    },
    'WB-90L-PP': {
      name: 'Carretilla 90 L — Batea de Plástico (PP)',
      description:
        'Carretilla de 90 L con batea de plástico PP, resistente a la corrosión del cemento, la cal y los fertilizantes. Ideal para mercados húmedos y costeros.',
    },
    'WB-120L-BIG': {
      name: 'Carretilla 120 L — Llanta Neumática Grande',
      description:
        'Carretilla de alta capacidad de 120 L con llanta neumática grande para transportar la máxima carga. Batea de acero de calibre grueso, chasis con pintura en polvo.',
    },
    'WB-120L-SMALL': {
      name: 'Carretilla 120 L — Llanta Neumática Pequeña',
      description:
        'Carretilla de alta capacidad de 120 L con llanta neumática más pequeña. Ocupa menos espacio que la versión de llanta grande, por lo que es más fácil de almacenar y enviar.',
    },
    'SBM-NORMAL': {
      name: 'Dobladora de Estribos — Motor Normal',
      description:
        'Dobladora automática de estribos con motor normal. Dobla acero liso y corrugado de 6–10 mm en forma de V, rectángulo, triángulo, hexágono, espiral o formas personalizadas. Panel de control con pantalla táctil, producción de 14–15 estribos/min.',
    },
    'SBM-SERVO': {
      name: 'Dobladora de Estribos — Servomotor',
      description:
        "Dobladora de estribos automática de alta precisión con servomotor. Dobla varilla lisa y corrugada de 6–10 mm en estribos de 55 mm hasta 1200 mm, 2.5–5 toneladas al día. Programación PLC con pantalla táctil HMI. Se detiene automáticamente cuando se acaba el acero.",
    },
    'PLSP-06': {
      name: 'Trasplantadora de Arroz PLSP-06 (6 Surcos)',
      description:
        'Trasplantadora de arroz autopropulsada de 6 surcos con motor eléctrico o a gasolina. Alta productividad de 950–1200 m²/h. Distancia entre surcos ajustable de 20/24 cm.',
    },
    'PLSP-05': {
      name: 'Trasplantadora de Arroz PLSP-05 (5 Surcos)',
      description:
        'Trasplantadora de arroz autopropulsada de 5 surcos. Rendimiento de 750–950 m²/h, ideal para fincas de 1–5 ha.',
    },
    'PLSP-04': {
      name: 'Trasplantadora de Arroz PLSP-04 (4 Surcos)',
      description:
        'Trasplantadora de arroz autopropulsada de 4 surcos. Ligera, con solo 50 kg, ideal para parcelas pequeñas. Productividad de 500–800 m²/h.',
    },
    'PLHP-04': {
      name: 'Trasplantadora de Arroz PLHP-04 (4 Surcos, Tiro Manual)',
      description:
        'Trasplantadora de arroz de 4 surcos de tiro manual con asistencia eléctrica. Modelo ligero de entrada para pequeños productores y terrenos de ladera. Productividad de 360–450 m²/h.',
    },
    PL2000: {
      name: 'Trilladora de Arroz PL2000',
      description:
        'Trilladora de arroz de alta capacidad, 2500–2700 kg/h. Tasa de trillado ≥ 98%. Ideal para explotaciones agrícolas de gran escala y servicios de cosecha cooperativos.',
    },
    PL1200: {
      name: 'Trilladora de Arroz PL1200',
      description:
        'Trilladora de arroz de gama media, 1800–1900 kg/h. Eficiente y duradera para explotaciones de escala media.',
    },
    PL800: {
      name: 'Trilladora de Arroz PL800',
      description:
        'Trilladora de arroz compacta y ligera, de solo 75 kg. Ideal para fincas pequeñas y parcelas remotas. Rendimiento de 500–600 kg/h, tasa de trillado ≥ 98%.',
    },
    'PLCF-101': {
      name: 'Ventilador Centrífugo PLCF 101 — Álabes Curvados Hacia Adelante',
      description:
        'Ventilador centrífugo con álabes curvados hacia adelante para alto caudal y presión con bajo ruido. Hecho para ventilación y extracción de olores en hoteles, restaurantes, fábricas y edificios públicos.',
    },
    'PLCF-121': {
      name: 'Ventilador Centrífugo PLCF 121 — Álabes Planos de Servicio Pesado',
      description:
        'Ventilador centrífugo de servicio pesado con álabes planos grandes y carcasa atornillada que se abre para el mantenimiento. Se usa para recirculación de aire y ventilación de humo e incendios en edificios y fábricas.',
    },
    'PLCF-152': {
      name: 'Ventilador Centrífugo PLCF 152 — Alta Presión',
      description:
        'Ventilador centrífugo de alta presión, de alta velocidad y fuerte succión. Tiro forzado para hornos, líneas de vidrio y galvanoplastia y túneles mineros, y transporte neumático de granos, escoria y carbón.',
    },
    'PLAX-204': {
      name: 'Ventilador Axial PLAX 204',
      description:
        'Ventilador axial de alto caudal con bajo ruido y bajo consumo. Suministro de aire fresco, extracción de aire caliente y ventilación en almacenes y obras, y en plantas de refinación de petróleo, caucho, secado y farmacéuticas. Disponible con carcasa de ducto redondo, sobre soporte y tipo caja.',
    },
    PLPF: {
      name: 'Ventilador Portátil PLPF — Aspas de 1.5–2 m',
      description:
        'Ventilador portátil grande sobre ruedas con aspas de aleación de aluminio de 1,500–2,000 mm. Mueve 41,500–80,200 m³/h a una distancia de 5–20 m con 220V monofásico, para almacenes, talleres y obras.',
    },
    PLQF: {
      name: 'Extractor Cuadrado de Pared PLQF',
      description:
        'Extractor cuadrado de montaje en pared con persianas, de 400–1,380 mm. Circulación y extracción de aire para almacenes, fábricas y otros edificios industriales con bajo costo de operación.',
    },
    'ENG-ELEC': {
      name: 'Motor Eléctrico (2.2–5.5 kW)',
      description:
        'Motor eléctrico monofásico para hormigoneras y maquinaria. Potencia de 2.2–5.5 kW a 220V. Ligero, de 17–20 kg.',
    },
    'ENG-GAS': {
      name: 'Motor a Gasolina GP160 / GP200',
      description:
        'Motores a gasolina confiables, modelos GP160 y GP200, para hormigoneras y maquinaria agrícola. 5.5–6.5 Hp.',
    },
    'ENG-DIES': {
      name: 'Motor Diésel CAOFONG (8–12 Hp)',
      description:
        'Motor diésel CAOFONG de servicio pesado, 8–12 Hp. Adecuado para hormigoneras grandes en lugares remotos sin acceso a electricidad.',
    },
    'VIKYNO-RV70': {
      name: 'Motor Diésel Vikyno RV70',
      description:
        'Motor diésel monocilíndrico Vikyno-Vietnam RV70. Compacto y confiable, adecuado para maquinaria pequeña, bombas de agua y generadores.',
    },
    'VIKYNO-RV80': {
      name: 'Motor Diésel Vikyno RV80',
      description:
        'Motor diésel Vikyno-Vietnam RV80. Rendimiento confiable para maquinaria agrícola, hormigoneras y bombas de agua.',
    },
    'VIKYNO-RV125-1': {
      name: 'Motor Diésel Vikyno RV125-1',
      description:
        'Motor diésel Vikyno RV125-1 con polea simple. Potencia de 12.5 Hp, muy usado en equipos agrícolas y de construcción.',
    },
    'VIKYNO-RV125-2': {
      name: 'Motor Diésel Vikyno RV125-2',
      description:
        'Motor diésel Vikyno RV125-2 con polea doble. Potencia de 12.5 Hp. La polea doble permite accionar dos equipos distintos al mismo tiempo.',
    },
    'VIKYNO-RV165-2': {
      name: 'Motor Diésel Vikyno RV165-2',
      description:
        'Motor diésel Vikyno RV165-2 de servicio medio con polea doble. Potencia de 16.5 Hp, adecuado para hormigoneras grandes (420–500 L) y maquinaria agrícola pesada.',
    },
    'VIKYNO-RV325NA': {
      name: 'Motor Diésel Vikyno RV325NA',
      description:
        'Motor diésel Vikyno RV325NA de alta potencia y aspiración natural. 32.5 Hp para equipos industriales y agrícolas pesados.',
    },
    'VIKYNO-RV365NB': {
      name: 'Motor Diésel Vikyno RV365NB',
      description:
        'Motor diésel Vikyno RV365NB de alto rendimiento. 36.5 Hp, adecuado para maquinaria de construcción pesada y aplicaciones industriales de gran escala.',
    },
    'VIKYNO-EV2400': {
      name: 'Motor Diésel Vikyno EV2400',
      description:
        'Motor diésel Vikyno EV2400 con sistema de arranque eléctrico. Arranque cómodo con botón para obras remotas. Adecuado para hormigoneras y maquinaria agrícola.',
    },
    'VIKYNO-EV2600': {
      name: 'Motor Diésel Vikyno EV2600',
      description:
        'Motor diésel Vikyno EV2600 con arranque eléctrico, la variante de mayor potencia de la serie EV. Un caballo de batalla confiable para aplicaciones exigentes.',
    },
  },

  blogCategories: {
    'concrete-mixer': 'Hormigoneras',
    wheelbarrow: 'Carretillas',
    'rice-transplanter': 'Trasplantadoras de arroz',
    'paddy-thresher': 'Trilladoras de arroz',
    'stirrup-bending': 'Doblado de estribos',
    'industrial-fan': 'Ventiladores industriales',
    engine: 'Motores',
    general: 'Guías de compra',
  },

  blog: {
    'how-to-choose-concrete-mixer': {
      title: 'Cómo elegir la hormigonera adecuada para su obra',
      excerpt:
        'Capacidad del tambor, tipo de motor, configuración de ruedas: guía práctica para importadores y jefes de obra que eligen el modelo de hormigonera adecuado.',
      content: `Elegir la hormigonera adecuada depende de tres factores principales: el tamaño del proyecto, el terreno y los motores disponibles en su mercado.

## 1. Capacidad del tambor

La especificación más visible es la capacidad del tambor. Como regla general:
- **250 L** — vivienda y reparaciones pequeñas
- **350 L** — construcción mediana y obras viales
- **450–500 L** — proyectos grandes, con alta demanda de producción diaria

Tenga en cuenta que el volumen real de mezcla es aproximadamente el 60–65% de la capacidad del tambor. Un tambor de 350 L rinde unos 200–220 L de concreto mezclado por mezcla.

## 2. Tipo de motor

Cada uno de los tres tipos de motor se adapta a un uso distinto:

| Motor | Ideal para |
|--------|----------|
| Eléctrico (2.2–5.5 kW, 220V) | Obras fijas con red eléctrica |
| Gasolina (GP160/GP200, 5.5–6.5 Hp) | Obras remotas o semipermanentes |
| Diésel (CAOFONG, 8–12 Hp) | Servicio pesado, sin acceso a electricidad |

Los motores eléctricos son los más baratos de operar, pero requieren alimentación de 220V. La gasolina ofrece el mejor equilibrio entre portabilidad y potencia. El diésel es para entornos exigentes sin electricidad.

## 3. Configuración de ruedas

- **2 ruedas** — más ligera, más fácil de maniobrar en espacios reducidos
- **4 ruedas** — más estable en terreno irregular, preferida para obras en pendiente

Llantas neumáticas o macizas: las neumáticas (5.00-12) absorben mejor los golpes en terreno áspero. Las macizas (4.00-8) no requieren mantenimiento y nunca se ponchan, por eso son populares en mercados con pocos talleres de reparación de llantas.

## 4. Espesor del tambor

En Phu Long usamos 2 mm en el tambor superior y 2.5 mm en el inferior para los modelos de 250–350 L, y 2.5 mm / 3 mm para los de 450–500 L. Un tambor más grueso significa una vida útil más larga, aunque añade peso. Para mercados de exportación con uso intenso, recomendamos especificar la opción más gruesa.

## Resumen

Elija el modelo según la infraestructura eléctrica de su mercado y el tamaño típico de sus proyectos. La mayoría de nuestros clientes de exportación en el Sudeste Asiático y África eligen la versión de 350 L a gasolina: es la más versátil. Para pedidos OEM con color y logo personalizados, cualquier modelo puede configurarse según su especificación.`,
    },
    'concrete-mixer-daily-maintenance-checklist': {
      title: 'Mantenimiento de hormigoneras: lista de control diaria',
      excerpt:
        'Limpieza del tambor, engrase de engranajes, tensión de la banda, llantas y aceite del motor: una lista diaria y semanal para que su hormigonera dure años.',
      content: `Una hormigonera de tambor es una máquina sencilla, y precisamente por eso se descuida. La mayoría de las averías de las que nos enteramos tienen las mismas pocas causas: concreto endurecido en el tambor, engranajes secos, una banda que patina o un motor con poco aceite. Diez minutos al día evitan casi todas.

## Antes de empezar: la revisión de 2 minutos

- **Aceite del motor** — revise el nivel con la varilla, con la hormigonera nivelada. Complete con el grado indicado en el manual del motor. Nunca arranque un motor a gasolina o diésel con poco aceite.
- **Combustible y filtro de aire** — en obras con mucho polvo, el filtro de aire se tapa rápido. Sacúdalo para limpiarlo o reemplácelo cuando se vea oscuro.
- **Motores eléctricos** — revise que el cable, el enchufe y el interruptor no estén dañados. Mantenga el motor seco y nunca lo use con un cable cortado o parchado con cinta.
- **Guardas** — asegúrese de que las guardas de la banda y del engranaje estén colocadas antes de arrancar.
- **Soporte y ruedas** — coloque la hormigonera sobre suelo firme y nivelado y calce las ruedas.

## Durante el trabajo

- **Cargue con el tambor girando** — agregue primero el agua y parte del agregado, luego el cemento y después el resto. Así se reduce la adherencia y el esfuerzo sobre la transmisión.
- **No la sobrecargue** — la mezcla útil está muy por debajo de la capacidad nominal del tambor. Llenarla de más derrama material, fuerza los engranajes y acorta la vida de los rodamientos.
- **Escuche** — golpeteos, ruidos de molienda o un cambio en el sonido del motor son una señal para detenerse y revisar.

## Después del trabajo: limpie el tambor mientras está húmedo

Este es el hábito más importante de todos.

- Enjuague el tambor y las paletas inmediatamente después de la última mezcla, mientras el concreto todavía está blando.
- Agregue unas paladas de grava gruesa con agua y deje girar el tambor unos minutos. La grava raspa el interior. Luego vacíelo y enjuáguelo de nuevo.
- Lave las salpicaduras de concreto de la corona dentada, el chasis y el motor.
- **Nunca golpee el tambor** con un martillo para quitar el concreto endurecido. Las abolladuras hacen que la siguiente mezcla se pegue aún más y pueden agrietar las costuras del tambor.
- Después de limpiarlo, deje la boca del tambor hacia abajo para que escurra el agua y no se oxide.

Nuestros tambores usan acero de 2–3 mm según el modelo, y mantenerlos limpios es la mejor manera de proteger ese espesor con los años.

## Cada semana: engranajes, banda, llantas y tornillos

**Corona dentada y piñón** — el engranaje abierto que hace girar el tambor está expuesto a la arena y al cemento. Retire la grasa vieja y arenosa y aplique grasa nueva en los dientes. La grasa mezclada con arena actúa como pasta abrasiva, así que primero limpie y luego engrase.

**Rodamientos y puntos de giro** — engrase el rodamiento del tambor, el mecanismo de volteo y todas las graseras. Unas pocas bombeadas bastan; el exceso de grasa solo acumula suciedad.

**Tensión de la banda** — presione con firmeza el centro de la banda con el pulgar. Debe ceder un poco, pero no aletear. Una banda floja patina y el tambor pierde velocidad; una banda demasiado tensa desgasta los rodamientos. Reemplace las bandas agrietadas, cristalizadas o deshilachadas.

**Llantas** — las llantas neumáticas deben inflarse a la presión indicada en el costado de la llanta; con poca presión cuesta remolcar la máquina y se desgastan rápido. Las llantas macizas no necesitan aire, pero revise que no tengan grietas ni pedazos faltantes.

**Tornillos y soldaduras** — verifique que estén apretados los tornillos del soporte del motor, del bastidor del tambor y de la palanca de volteo. Busque grietas alrededor de las soldaduras, sobre todo en la barra de tiro y en el eje.

## Servicio del motor

Siga el calendario del fabricante del motor para los cambios de aceite, la bujía (gasolina) y el filtro de combustible (diésel). Cambie el aceite con más frecuencia en condiciones muy calurosas o polvorientas. Lleve una bitácora sencilla con horas y fechas; facilita la garantía y la reventa.

## Almacenamiento

Para un almacenamiento prolongado, limpie bien el tambor, cubra el acero expuesto con una capa ligera de aceite, cubra la máquina y vacíe o estabilice el combustible según el manual del motor.

¿Necesita repuestos como coronas dentadas, piñones, bandas o llantas para sus hormigoneras? Escríbanos por WhatsApp al +84 946 964 669 con su modelo y fotos, o use nuestro formulario de cotización.`,
    },
    'drum-mixer-batch-size-mix-ratios': {
      title: 'Hormigonera: tamaño de mezcla, dosificación y tiempo',
      excerpt:
        'Cuánto concreto produce realmente una hormigonera por mezcla, las dosificaciones de obra más comunes, el orden de carga correcto y cuánto tiempo mezclar.',
      content: `La capacidad de una hormigonera viene impresa en el folleto, pero el concreto que sale en cada mezcla es otra cifra. Entender esa diferencia, y cargar el tambor de la forma correcta, le da un concreto más resistente, menos desperdicio y una máquina que dura más.

## La capacidad del tambor no es el tamaño de la mezcla

La cifra en litros del nombre de una hormigonera, como 350 L, describe el tambor. Una hormigonera de tambor basculante no puede llenarse hasta el borde: el material necesita espacio para caer y voltearse mientras gira el tambor, y la boca no debe derramar al inclinarse.

Como guía práctica, la mezcla útil de concreto es aproximadamente el **60–65% de la capacidad del tambor**. En nuestra gama eso significa más o menos:

- **Tambor de 250 L** → unos 150–160 L por mezcla
- **Tambor de 350 L** → unos 210–225 L por mezcla
- **Tambor de 450 L** → unos 270–290 L por mezcla
- **Tambor de 500 L** → unos 300–325 L por mezcla

Planifique la jornada con esta cifra. Un metro cúbico son 1,000 L, así que una hormigonera de 350 L necesita unas cinco mezclas por metro cúbico.

## Dosificaciones de obra más comunes

En obras pequeñas se suelen usar dosificaciones nominales medidas por volumen, escritas como **cemento : arena : agregado grueso**. Ejemplos típicos en la práctica de obra:

- **1 : 1.5 : 3** — una mezcla más rica, usada con frecuencia en elementos estructurales como losas, vigas y columnas
- **1 : 2 : 4** — una mezcla de uso general para zapatas, pisos y andadores
- **1 : 3 : 6** — una mezcla pobre para plantillas y rellenos masivos

Son reglas prácticas generales, no un diseño. Para cualquier elemento estructural, siga la mezcla especificada por su ingeniero o la norma local, que también fija la relación agua–cemento.

Mida siempre con el mismo recipiente, una cubeta o un cajón medidor, en lugar de contar paladas. Las paladas varían de una persona a otra y del principio al final del día.

## Cuidado con el agua

El agua de más hace que el concreto sea más fácil de colocar, pero más débil y más propenso a agrietarse y contraerse. Agregue el agua poco a poco y deténgase cuando la mezcla tenga la trabajabilidad que necesita. Si el concreto está demasiado seco, agregue un poco cada vez; es fácil añadir agua e imposible quitarla.

Recuerde que la arena húmeda ya trae agua. En un día de lluvia necesitará menos agua en el tambor.

## El orden de carga correcto

Cargue con el tambor ya girando. Una secuencia que funciona bien con hormigoneras de tambor basculante:

- Agregue primero **cerca de la mitad del agua**, para que la superficie del tambor esté húmeda y el cemento no se pegue al fondo.
- Agregue el **agregado grueso**. Raspa el tambor y deshace los grumos.
- Agregue la **arena** y luego el **cemento**.
- Agregue el **agua restante** lentamente hasta que la mezcla se vea bien.

Cargar cemento en un tambor vacío y seco hace que se apelmace en las paletas y en el fondo del tambor, y la mezcla sale dispareja.

## Cuánto tiempo mezclar

Una vez que entra el último material, mezcle hasta que el color y la consistencia sean uniformes: normalmente unos minutos en una hormigonera pequeña. Si es muy poco, quedan vetas de cemento seco o bolsas de arena; mucho más tiempo no es mejor y puede causar segregación y pérdida de trabajabilidad con calor. Mantenga el mismo tiempo de una mezcla a otra para que todas salgan iguales.

## Consejos para una mejor jornada en obra

- Coloque la hormigonera nivelada y cerca del colado para reducir el acarreo.
- Mantenga los sacos de cemento secos y sin contacto con el suelo.
- Descargue por completo entre mezclas; el concreto que queda altera la siguiente mezcla.
- Limpie el tambor en los descansos y al final del día, mientras todavía está húmedo.

## Elegir el tamaño de hormigonera según el trabajo

Si su cuadrilla espera seguido a la hormigonera, suba un tamaño. Si la hormigonera espera a las carretillas, un tambor más grande no ayudará: sume personal o acorte el acarreo. Nuestra gama va de 250 L a 500 L, con motor eléctrico, a gasolina o diésel.

¿Necesita ayuda para elegir el tamaño según sus colados habituales? Envíenos su volumen diario y las condiciones de su obra por WhatsApp al +84 946 964 669 o mediante nuestro formulario de cotización.`,
    },
    'concrete-mixer-tyres-and-wheel-layouts': {
      title: 'Llantas de hormigonera: macizas o neumáticas, 2 a 4 ruedas',
      excerpt:
        'Llantas macizas o neumáticas, dos, tres o cuatro ruedas: cómo el terreno, el traslado de la hormigonera y la reparación local deben guiar su elección.',
      content: `Las ruedas y las llantas parecen un detalle menor en una hormigonera. En la obra deciden qué tan fácil se mueve la máquina, qué tan estable queda mientras mezcla y cada cuánto alguien tiene que parar a reparar una ponchadura. Para los importadores, también deciden en qué mercados se venderá un modelo.

## Llantas macizas

Las llantas macizas son de caucho de lado a lado. En nuestras hormigoneras la medida maciza estándar es **4.00-8**, montada en modelos como CM-250-2W, CM-350-2W-S, CM-385, CM-420 y CM-450.

**Ventajas:**
- Nunca se ponchan: no hay pinchazos por recortes de varilla, clavos o piedras filosas
- Sin revisión de presión, sin cámaras, sin kits de reparación
- Menor costo y fáciles de reemplazar

**Limitaciones:**
- Absorben menos los golpes, por lo que la máquina rebota más en terreno áspero
- Cuesta más empujarlas sobre tierra blanda, lodo o arena
- Transmiten más vibración al chasis durante el traslado

Las llantas macizas son una opción sólida para mercados donde es difícil encontrar reparación de llantas, para obras llenas de escombros filosos y para hormigoneras que permanecen casi siempre en un mismo lugar.

## Llantas neumáticas

Las llantas neumáticas llevan aire, como la de un auto o una carretilla. Nuestras hormigoneras usan llantas neumáticas **5.00-12** en modelos como CM-350-2W-P y CM-500, y **5.00-10** en la CM-350-4W-P.

**Ventajas:**
- Mejor agarre y flotación en terreno blando, lodoso o arenoso
- Rodado más suave, que protege el chasis, los soportes del motor y los rodamientos del tambor cuando la hormigonera se mueve con frecuencia
- El diámetro mayor pasa con más facilidad sobre surcos y bordillos

**Limitaciones:**
- Pueden poncharse en obras llenas de clavos y recortes de acero
- Necesitan revisión periódica de presión: manténgalas a la presión marcada en el costado
- Mayor costo que las llantas macizas

Las llantas neumáticas convienen en obras con terreno áspero o blando y para contratistas que mueven la hormigonera entre frentes de trabajo varias veces al día.

## Dos, tres o cuatro ruedas

**Dos ruedas** — la configuración clásica. La hormigonera descansa sobre dos ruedas y un soporte o patas. Es más ligera, más económica y fácil de inclinar y girar a mano en espacios reducidos, como lotes de vivienda y calles angostas.

**Tres ruedas** — añade una rueda delantera para dirigirla y moverla con más facilidad sin levantar el frente de la máquina. Nuestra CM-450 usa una configuración de tres ruedas.

**Cuatro ruedas** — la plataforma más estable. La máquina queda firme en terreno irregular o en pendiente y es más fácil de mover distancias largas dentro de la obra. Nuestras CM-250-4W, CM-350-4W y CM-500 usan cuatro ruedas.

En toda la gama, las ruedas pueden especificarse en 2, 3 o 4, macizas o neumáticas, así que un mismo modelo puede adaptarse a las condiciones de su mercado.

## Mover la hormigonera con seguridad

- Las hormigoneras de obra están diseñadas para moverse dentro de la obra, no para remolcarse a velocidad de carretera. Consulte la normativa local antes de usar cualquier hormigonera en la vía pública y, en caso de duda, transpórtela en camión o remolque.
- Vacíe siempre el tambor antes de mover la máquina; un tambor cargado desplaza el centro de gravedad.
- Una vez en posición, bloquee el tambor y calce las ruedas.

## Preguntas antes de hacer su pedido

- ¿Sobre qué terreno trabajan sus clientes: compactado, lodoso, arenoso o rocoso?
- ¿Cuántas veces al día se mueve la hormigonera?
- ¿Es fácil encontrar reparación de llantas en su mercado?
- ¿Sus clientes prefieren máquinas más ligeras que puedan empujar a mano, o estabilidad en pendientes?

## Un punto de partida práctico

Muchos importadores manejan ambas: un modelo de dos ruedas con llantas macizas como opción de bajo mantenimiento y buen precio, y un modelo de cuatro ruedas neumáticas para contratistas que necesitan movilidad y estabilidad. Como las llantas y la configuración de ruedas son configurables, puede probar ambas en un contenedor mixto.

Cuéntenos en qué obras trabajan sus clientes por WhatsApp al +84 946 964 669 o en nuestro formulario de cotización, y le sugeriremos la configuración de ruedas y llantas adecuada.`,
    },
    'selling-concrete-mixers-dealer-guide': {
      title: 'Cómo vender hormigoneras: guía para distribuidores',
      excerpt:
        'Armar una gama de hormigoneras, usar color y logo OEM, elegir qué repuestos tener en stock y planear contenedores mixtos: una guía práctica para distribuidores.',
      content: `Las hormigoneras son un producto estable para los distribuidores de equipo de construcción: constructores, pequeños contratistas y rentadoras las necesitan, y vuelven por repuestos y reemplazos. Los distribuidores a los que les va bien con las hormigoneras suelen acertar en algunas decisiones desde el principio.

## Empiece con una gama enfocada

No necesita todos los modelos desde el primer día. Una gama enfocada es más fácil de explicar, almacenar y atender. Una estructura común:

- **Modelo de entrada (250 L)** — para constructores de vivienda, reparaciones y compradores sensibles al precio
- **Modelo principal (350 L)** — la todoterreno para contratistas pequeños y medianos
- **Modelo pesado (420–500 L)** — para contratistas más grandes y mayores volúmenes diarios

En nuestra gama, la capacidad del tambor va de 250 L a 500 L, con acero de 2–3 mm según el modelo. Dentro de cada tamaño puede ofrecer la configuración de ruedas y llantas que prefiere su mercado: llantas macizas para bajo mantenimiento, neumáticas para terreno áspero, y 2, 3 o 4 ruedas.

## Elija el motor que su mercado pueda atender

El mejor motor es aquel que sus clientes pueden abastecer y reparar localmente.

- **Eléctrico (2.2–5.5 kW, 220 V)** — para ciudades y obras con red eléctrica confiable
- **Gasolina (GP160 / GP200)** — portátil y con servicio fácil de encontrar
- **Diésel** — para uso más pesado y zonas donde el diésel es el combustible habitual

Pregunte a los mecánicos locales qué motores ya conocen. Una máquina que se puede reparar en el pueblo se vende mejor que una que no.

## Hágala su marca con OEM

Vender con su propia marca crea lealtad hacia usted y no hacia el nombre de una fábrica. En nuestras hormigoneras puede especificar:

- **Color** — amarillo, naranja, rojo, rojo oscuro, azul, verde, gris o un color personalizado
- **Logo y calcomanías** — su marca en el tambor y el chasis
- **Motor, ruedas y llantas** — adaptados a su mercado
- **Espesor del tambor** — para clientes que quieren un tambor más robusto

Un color uniforme en toda su gama hace que sus máquinas se reconozcan en cada obra de su zona. Envíe su archivo de logo y la referencia de color con anticipación para confirmar las muestras antes de la producción.

## Tenga en stock los repuestos correctos

Un buen soporte de repuestos suele ser lo que separa una venta única de un cliente a largo plazo. Repuestos que vale la pena tener en el estante:

- **Corona dentada y piñón** — se desgastan con el tiempo, sobre todo cuando se descuida el engrase
- **Paletas de mezcla** — se desgastan por el agregado abrasivo
- **Rodamientos** — para el tambor y los puntos de giro
- **Bandas de transmisión** — consumibles en los modelos con transmisión por banda
- **Llantas y ruedas** — macizas y neumáticas, si vende ambas
- **Tambores** — para clientes cuyo tambor se dañó a golpes o en un accidente
- **Repuestos de servicio del motor** — filtros, bujías, cuerdas de arranque

Pida un kit inicial de repuestos con su primer contenedor. Cuesta poco más de flete y evita envíos urgentes más adelante.

## Planee contenedores mixtos

Puede combinar modelos, colores y motores en un mismo contenedor. Los pedidos mínimos de nuestras hormigoneras son de 2–5 unidades por modelo según el tamaño, así que un solo contenedor puede llevar toda su gama inicial más los repuestos. Si también vende carretillas, agregarlas al mismo contenedor llena el espacio alrededor de las hormigoneras.

## Apoye a sus clientes después de la venta

- Entregue a cada comprador una hoja sencilla de cuidado diario: limpiar el tambor mientras está húmedo, engrasar la corona dentada, revisar la tensión de la banda y el aceite del motor.
- Capacite al personal de su tienda para reconocer los problemas comunes: bandas que patinan, piñones desgastados, poco aceite en el motor.
- Lleve un registro de lo que compró cada cliente para poder sugerirle repuestos y mejoras.

## Exhibición y demostración

Las hormigoneras se venden mejor cuando los compradores pueden verlas. Tenga al menos una máquina armada en su patio, muestre el espesor del tambor y el engranaje, y póngala en marcha para que los clientes escuchen el motor. Una máquina de exhibición limpia y con su marca dice más que un folleto.

¿Listo para armar su gama? Cuéntenos su mercado, el suministro eléctrico y sus clientes típicos por WhatsApp al +84 946 964 669 o mediante nuestro formulario de cotización, y le sugeriremos una combinación inicial de modelos y repuestos.`,
    },
    '1-bag-concrete-mixer-guide': {
      title: 'Hormigonera de 1 saco: qué es y cuál comprar',
      excerpt:
        'Qué es una hormigonera de 1 saco (revolvedora de un bulto), cuánto concreto rinde un saco de cemento y por qué las de 350 L son el tamaño habitual.',
      content: `"Hormigonera de 1 saco", o "revolvedora de un bulto" como se dice en México, es la forma en que muchos constructores, distribuidores y rentadoras describen el tamaño de una hormigonera de tambor: una máquina que mezcla un saco de cemento de 50 kg, con la arena, la grava y el agua que le corresponden, en una sola mezcla. Es el tamaño de hormigonera más común en obras pequeñas y medianas, y con razón.

## Qué significa "1 saco" en la práctica

En obra, el concreto suele medirse por proporciones en volumen de **cemento : arena : grava**. Una mezcla común de uso general es 1:2:4. Como regla práctica, un metro cúbico de concreto 1:2:4 necesita aproximadamente de 6,2 a 6,5 sacos de cemento de 50 kg, así que **un saco rinde unos 0,15–0,16 m³ de concreto**.

Por eso, una hormigonera de un saco debe poder voltear unos 150–170 litros de concreto fresco por mezcla con margen de sobra, porque un tambor nunca se llena hasta su volumen nominal. La mezcla útil de una hormigonera de tambor es aproximadamente el 60–65% de la capacidad del tambor.

## Por qué 350 L es el tamaño clásico de un saco

Un tambor de 350 L da unos 200–220 L de concreto mezclado por mezcla, lo que cubre con holgura una mezcla de un saco, incluidas las mezclas más ricas que producen más volumen por saco. Por eso nuestras hormigoneras de **350 L y 385 L** se venden como hormigoneras de un saco.

- **250 L** — menos de un saco completo por mezcla. Buena para reparaciones, casas pequeñas y obras estrechas.
- **350 L / 385 L** — la hormigonera de un saco para todo: casas, edificios pequeños, zapatas y losas.
- **420–500 L** — más de un saco por mezcla, para trabajos más grandes y mayor producción diaria.

La mezcla exacta siempre depende de su diseño de mezcla, así que tome estas cifras como una guía, no como una especificación.

## Cómo elegir una hormigonera de 1 saco

**Ruedas y llantas.** Los modelos de dos ruedas con llantas neumáticas grandes 5.00-12 se remolcan y se mueven fácilmente en terreno áspero. Los modelos de cuatro ruedas quedan más firmes en obras irregulares. Las llantas macizas 4.00-8 nunca se ponchan, algo importante donde es difícil encontrar reparación de llantas.

**Motor.** Elija según lo que haya disponible en la obra:
- **Eléctrico** (2.2–5.5 kW, 220 V) — silencioso y barato de operar donde hay electricidad confiable.
- **Gasolina** (GP160 / GP200) — ligero y fácil de arrancar, la opción habitual para trabajos móviles.
- **Diésel** — para obras remotas y jornadas largas.

**Acero del tambor.** Nuestros tambores de 350 L usan acero de 2 mm en el tambor superior y 2.5 mm en el inferior, y el de 385 L usa 2.5 mm y 3 mm. Se puede especificar acero más grueso para uso diario intenso.

## Cómo sacar el máximo provecho de cada mezcla

- Agregue primero cerca de la mitad del agua, luego la grava, la arena y el cemento, y después el resto del agua.
- No sobrecargue el tambor: una hormigonera de un saco está dimensionada para un saco, y llenarla de más derrama material y fuerza la transmisión.
- Mezcle hasta que el color sea uniforme y mantenga el mismo tiempo de mezcla en cada carga.
- Lave el tambor al final de cada día, antes de que el concreto fragüe sobre las paletas.

## Comprar hormigoneras de 1 saco en Vietnam

Phu Long fabrica hormigoneras de un saco de 350 L y 385 L, también llamadas mezcladoras o revolvedoras de concreto, en nuestra fábrica de Ninh Binh, Vietnam, junto con modelos de 250 L y de 420–500 L. Cada hormigonera puede fabricarse con el motor, las llantas, el color y el logo que necesita su mercado, y varios modelos pueden compartir un mismo contenedor.

Cuéntenos su mercado, la cantidad y el puerto de destino por WhatsApp al +84 946 964 669 o mediante nuestro formulario de cotización, y le recomendaremos el modelo de un saco adecuado y le enviaremos una cotización FOB o CIF.`,
    },
  },

  markets: {
    'Southeast Asia': 'Sudeste Asiático',
    'South Asia': 'Asia del Sur',
    Africa: 'África',
    'Middle East': 'Medio Oriente',
    Pacific: 'Pacífico',
    Americas: 'Américas',
  },

  orders: [
    { caption: 'Hormigoneras cargadas para exportación', load: 'Hormigoneras' },
    { caption: 'Contenedor mixto, maquinaria y motores GP160', load: 'Carga mixta' },
    { caption: 'Hormigoneras con motores GP160', load: 'Hormigoneras + motores' },
    { caption: 'Carretillas y motores eléctricos', load: 'Carretillas' },
    { caption: 'Hormigoneras con motores diésel', load: 'Hormigoneras + diésel' },
    { caption: 'Hormigoneras azules, contenedor IAAU 174407', load: 'Color personalizado' },
  ],

  customization: {
    Engine: 'Motor',
    'Electric (2.2–5.5 kW)': 'Eléctrico (2.2–5.5 kW)',
    'Gasoline (GP160/GP200)': 'Gasolina (GP160/GP200)',
    Diesel: 'Diésel',
    Color: 'Color',
    Yellow: 'Amarillo',
    Orange: 'Naranja',
    Red: 'Rojo',
    Blue: 'Azul',
    Green: 'Verde',
    Grey: 'Gris',
    Custom: 'Personalizado',
    Tyre: 'Llanta',
    'Solid 4.00-8': 'Maciza 4.00-8',
    'Pneumatic 5.00-12': 'Neumática 5.00-12',
    Wheels: 'Ruedas',
    '2 wheels': '2 ruedas',
    '4 wheels': '4 ruedas',
  },

  specLabels: {
    'Mixing Volume': 'Volumen de mezcla',
    Weight: 'Peso',
    'Dimensions (L×W×H)': 'Dimensiones (L×A×H)',
    'Upper Drum Thickness': 'Espesor del tambor superior',
    'Down Drum Thickness': 'Espesor del tambor inferior',
    Tyres: 'Llantas',
    'Number of Wheels': 'Número de ruedas',
    'Batch Capacity': 'Capacidad por mezcla',
    Capacity: 'Capacidad',
    Tray: 'Batea',
    Frame: 'Chasis',
    Tyre: 'Llanta',
    Style: 'Estilo',
    'Steel Diameter': 'Diámetro del acero',
    'Steel Type': 'Tipo de acero',
    'Stirrup Shapes': 'Formas de estribo',
    'Min Stirrup Size': 'Tamaño mín. de estribo',
    'Max Stirrup Size': 'Tamaño máx. de estribo',
    'Feeding Motor': 'Motor de alimentación',
    'Cutting Motor': 'Motor de corte',
    'Bending Motor': 'Motor de doblado',
    'Working Speed': 'Velocidad de trabajo',
    'Power Supply': 'Alimentación eléctrica',
    Control: 'Control',
    'Min Production Speed': 'Velocidad mín. de producción',
    Productivity: 'Productividad',
    'Auto Stop': 'Parada automática',
    Operation: 'Operación',
    'Row Number': 'Número de surcos',
    'Row Spacing': 'Distancia entre surcos',
    'Output Capacity': 'Rendimiento',
    Speed: 'Velocidad',
    'Threshed Rate': 'Tasa de trillado',
    Power: 'Potencia',
    Voltage: 'Voltaje',
    'Air Pressure': 'Presión de aire',
    'Air Flow': 'Caudal de aire',
    Drive: 'Transmisión',
    Material: 'Material',
    Coverage: 'Alcance',
    'Blade Diameter': 'Diámetro de las aspas',
    Diameter: 'Diámetro',
    Phase: 'Fase',
    Model: 'Modelo',
    Fuel: 'Combustible',
    Brand: 'Marca',
    Type: 'Tipo',
    Cooling: 'Enfriamiento',
    'Belt Pulley': 'Polea',
    Start: 'Arranque',
  },
};
