import type { ContentOverlay } from './types';

export const fr: ContentOverlay = {
  groups: {
    construction: 'Chantier',
    agriculture: 'Agriculture',
    industrial: 'Industrie',
    engine: 'Moteurs',
  },

  lines: {
    'mini-concrete-mixers': {
      name: "Mini Bétonnière",
      tagline: "Bétonnières à cuve de 250 L, 140–150 kg, assez légères pour être poussées par une seule personne. Moteur électrique, essence ou diesel.",
      intro: "Une mini bétonnière est une petite bétonnière à cuve, facile à déplacer, pour les travaux qui demandent du béton ou du mortier en petites gâchées : réparations, semelles, allées, maçonnerie et carrelage. Les nôtres ont une cuve de 250 litres, pèsent 140–150 kg et passent par un portail standard, avec la même tôle de cuve de 2–2.5 mm que nos grandes bétonnières.",
      facts: [{ label: "Capacité de la cuve", value: "250 L" }, { label: "Poids", value: "140 – 150 kg" }, { label: "Moteur", value: "Électrique, essence ou diesel" }, { label: "Roues", value: "2 ou 4" }],
      photos: ["Showroom, bétonnières en quatre couleurs", "Hall d'assemblage", "Cuves prêtes pour un chargement FCL"],
    },
    'concrete-mixers': {
      name: 'Bétonnières',
      tagline: 'Bétonnières à cuve de 250 à 500 litres, fabriquées à votre couleur, avec votre moteur et votre logo.',
      intro:
        'Notre machine la plus connue, et celle par laquelle la plupart de nos partenaires commencent. Chaque bétonnière est soudée, peinte et testée dans notre usine, puis expédiée avec le moteur de votre choix : électrique, essence ou diesel.',
      facts: [
        { label: 'Capacité de cuve', value: '250 – 500 L' },
        { label: 'Moteur', value: 'Électrique, essence ou diesel' },
        { label: 'Roues', value: '2, 3 ou 4, pneus pleins ou gonflables' },
        { label: 'Acier de cuve', value: '2 – 3 mm' },
      ],
      photos: [
        'Showroom, bétonnières en quatre couleurs',
        "Hall d'assemblage",
        'Cuves prêtes pour un chargement FCL',
        "Conteneur chargé pour l'export",
        'Bétonnière 385 L',
        'Bétonnière 500 L',
      ],
      banner: ['Notre showroom, bétonnières en quatre couleurs', 'Prête à travailler, moteur essence'],
    },
    'stirrup-bending-machines': {
      name: "Cintreuses d'étriers",
      tagline: "Alimentez, cintrez et coupez des fers à béton de 6 à 10 mm en étriers finis, depuis un écran tactile.",
      intro:
        "Deux versions d'une même machine automatique. Le modèle à moteur standard produit 14 à 15 étriers par minute ; le modèle servo avec commande PLC réalise des étriers jusqu'à 1 200 mm et s'arrête automatiquement quand l'acier est épuisé.",
      facts: [
        { label: "Diamètre d'acier", value: '6 – 10 mm, lisse ou crénelé' },
        { label: 'Production', value: '14 – 15 étriers/min' },
        { label: "Taille d'étrier", value: "Jusqu'à 1 200 mm" },
        { label: 'Alimentation', value: '220V monophasé' },
      ],
      photos: [
        "Rouleaux d'alimentation",
        'Tête de cintrage',
        'Modèle servo, panneau de commande',
        'Modèle servo, vue de côté',
        'Modèle servo, vue arrière',
      ],
    },
    'rice-transplanters': {
      name: 'Repiqueuses de riz',
      tagline: "Quatre à six rangs à la fois, jusqu'à 1 200 m² par heure, assez légères pour une seule personne.",
      intro:
        'Des modèles automoteurs à entraînement électrique ou essence, et un modèle tiré à la main avec griffe à assistance électrique pour les petites parcelles et les terrasses. Tous pèsent 65 kg au plus et plantent avec un écartement de 20 ou 24 cm.',
      facts: [
        { label: 'Rangs', value: '4, 5 ou 6' },
        { label: 'Rendement', value: '360 – 1 200 m²/h' },
        { label: 'Écartement des rangs', value: '20 ou 24 cm' },
        { label: 'Poids', value: '35 – 65 kg' },
      ],
      photos: ['PLSP-06, six rangs', 'Plateau à plants', 'PLSP-05, cinq rangs', 'Griffes de plantation', 'PLSP-04, quatre rangs'],
      banner: ['Repiquage avec une machine Phu Long', 'Repiqueuses prêtes à la livraison'],
    },
    'paddy-threshers': {
      name: 'Batteuses de paddy',
      tagline: "De 500 à 2 700 kg de paddy par heure, avec au moins 98 % du grain battu.",
      intro:
        "Trois tailles sur une même conception de tambour tournant à 900 RPM : la PL800 de 75 kg pour une exploitation familiale, la PL1200 pour les exploitations moyennes et la PL2000 pour les coopératives et les prestataires de récolte.",
      facts: [
        { label: 'Rendement', value: '500 – 2 700 kg/h' },
        { label: 'Taux de battage', value: '98 % ou plus' },
        { label: 'Vitesse du tambour', value: '900 RPM' },
        { label: 'Poids', value: '75 – 490 kg' },
      ],
      photos: ['Batteuses dans notre entrepôt', 'Tambour de battage', 'PL1200'],
      banner: ['Jour de récolte avec une batteuse Phu Long', 'Batteuses prêtes à la livraison'],
    },
    'industrial-fans': {
      name: 'Ventilateurs industriels',
      tagline: "Ventilateurs centrifuges, axiaux, mobiles et muraux, jusqu'à 90 000 m³ d'air par heure.",
      intro:
        "Six familles de ventilateurs pour la ventilation, le désenfumage, le tirage forcé et le refroidissement. Les carters sont roulés et soudés en acier SS400 ou en inox SUS 304, les turbines sont équilibrées en usine, et chaque ventilateur peut être fabriqué en entraînement direct ou par courroie.",
      facts: [
        { label: "Débit d'air", value: "Jusqu'à 90 075 m³/h" },
        { label: 'Pression', value: "Jusqu'à 15 034 Pa" },
        { label: 'Puissance', value: '180 W – 410 kW' },
        { label: 'Matériau', value: 'Acier SS400 ou SUS 304' },
      ],
      photos: [
        'Ventilateur axial PLAX 204',
        'Lot de PLCF 121, prêt à expédier',
        'Ventilateur axial en caisson',
        'Ventilateur mobile PLPF',
        'PLCF 101 sur palettes',
        'Ventilateurs axiaux pour gaine',
      ],
      banner: ['Ventilateur axial PLAX 204 dans notre atelier', 'Ventilateurs centrifuges prêts à expédier'],
    },
    wheelbarrows: {
      name: 'Brouettes',
      tagline: 'Bennes de 70 à 120 litres en acier ou en plastique PP, sur roues pleines ou gonflables.',
      intro:
        "Sept brouettes pour les chantiers, les exploitations agricoles et les quincailleries, de la 80 L économique à la 120 L à grosse roue. Châssis galvanisé ou peint par poudrage, livré à plat pour le chargement en conteneur.",
      facts: [
        { label: 'Capacité', value: '70 – 120 L' },
        { label: 'Benne', value: 'Acier ou plastique PP' },
        { label: 'Châssis', value: 'Galvanisé ou peint par poudrage' },
      ],
      photos: ['80 L, grosse roue', '90 L, benne PP', 'Pièces'],
    },
    engines: {
      name: 'Moteurs',
      tagline: 'Moteurs électriques, moteurs essence GP160/GP200 et diesel CAOFONG pour nos machines.',
      intro:
        "Les mêmes moteurs que nous montons sur nos bétonnières et nos machines agricoles, vendus séparément en remplacement ou pour votre chaîne d'assemblage.",
      facts: [
        { label: 'Électrique', value: '2.2 – 5.5 kW, 220V' },
        { label: 'Essence', value: 'GP160 / GP200, 5.5 – 6.5 Hp' },
        { label: 'Diesel', value: 'CAOFONG, 8 – 12 Hp' },
      ],
      photos: ['Moteur essence', 'Moteur électrique', 'GP200'],
    },
    'vikyno-diesel-engines': {
      name: 'Moteurs diesel Vikyno',
      tagline: 'Moteurs diesel Vikyno fabriqués au Vietnam, de 7 à 36.5 Hp, refroidis par air ou par eau.',
      intro:
        "Moteurs monocylindres RV pour pompes, groupes électrogènes et machines agricoles, RV325NA et RV365NB pour les équipements lourds, et série EV à démarrage électrique.",
      facts: [
        { label: 'Puissance', value: '7 – 36.5 Hp' },
        { label: 'Modèles', value: 'RV70 à RV365NB, EV2400, EV2600' },
        { label: 'Refroidissement', value: 'Air ou eau' },
      ],
      photos: ['RV165-2', 'RV325NA', 'EV2400'],
    },
  },

  seo: {
    'mini-concrete-mixers': {
      title: "Mini Bétonnière 250L Fabriquée au Vietnam | Phu Long",
      description: "Mini bétonnière d'une usine au Vietnam : cuve de 250 L, 140–150 kg, 2 ou 4 roues, moteur électrique, essence ou diesel. Couleur et logo OEM, export FOB/CIF.",
      aboutTitle: "Qu'est-ce qu'une mini bétonnière ?",
      about: ["Une mini bétonnière est une bétonnière à cuve compacte et mobile qui transforme ciment, sable, gravier et eau en béton ou en mortier par petites gâchées. C'est la bonne taille pour les réparations, les poteaux de clôture, les semelles, les allées, la maçonnerie, l'enduit et le carrelage, là où une grande bétonnière est trop lourde à déplacer et le malaxage à la main trop lent.", "Phu Long fabrique ses mini bétonnières dans sa propre usine au Vietnam. Chaque bétonnière de 250 L pèse 140–150 kg, mesure 1700 × 860 × 1300 mm et roule sur des pneus pleins 4.00-8, avec 2 roues pour la pousser facilement ou 4 roues pour plus de stabilité. Choisissez un moteur électrique pour l'intérieur et la ville, ou un moteur essence ou diesel pour les chantiers sans courant, à votre couleur et avec votre logo."],
      faqTitle: "Questions fréquentes sur la mini bétonnière",
      guideLabel: "Lire : comment choisir une bétonnière",
      faq: [
        { q: "Quelle est la taille d’une mini bétonnière ?", a: "Notre mini bétonnière a une cuve de 250 L et mesure 1700 × 860 × 1300 mm. Elle pèse 140 kg avec 2 roues ou 150 kg avec 4 roues." },
        { q: "À quoi sert une mini bétonnière ?", a: "À préparer de petites gâchées de béton ou de mortier pour les réparations, semelles, poteaux, allées, la maçonnerie, l'enduit et le carrelage, sur les chantiers où une grande bétonnière ne passe pas ou resterait inutilisée." },
        { q: "Électrique, essence ou diesel : quel moteur choisir ?", a: "L'électrique (2.2–5.5 kW) est silencieux et propre pour l'intérieur et la ville. L'essence (GP160/GP200) convient aux chantiers sans courant. Le diesel est fait pour les longues journées et les chantiers isolés." },
        { q: "Mini bétonnière ou bétonnière 1 sac ?", a: "Choisissez la mini 250 L quand la mobilité compte le plus. Si vous coulez plus de béton par jour, nos modèles 350 L et 385 L malaxent un sac complet de ciment de 50 kg par gâchée." },
        { q: "Puis-je commander des mini bétonnières à ma marque ?", a: "Oui. Nous peignons la bétonnière à votre couleur et posons votre logo et vos autocollants. Commande minimale de 5 unités par modèle, expédition LCL ou FCL en FOB ou CIF." },
      ],
    },
    'stirrup-bending-machines': {
      title: "Cintreuse d'Étriers Automatique du Vietnam | Phu Long",
      description: "Cintreuses d'étriers automatiques fabriquées au Vietnam : alimentent, dressent, cintrent et coupent le fer à béton de 6–10 mm. Modèle standard et servo PLC, 220 V.",
      aboutTitle: "Cintreuses d'étriers automatiques du Vietnam",
      about: ["Phu Long fabrique des cintreuses d'étriers automatiques dans sa propre usine au Vietnam. Une seule machine alimente le fer depuis la bobine, le dresse, cintre chaque angle selon le programme et coupe l'étrier fini : un opérateur remplace une équipe de cintrage manuel.", "Les deux modèles acceptent le fer lisse et haute adhérence de 6 à 10 mm et fonctionnent en 220 V monophasé. Le modèle à moteur standard produit 14–15 étriers par minute (14 × 14 cm) jusqu'à 110 cm. Le modèle servo avec PLC et écran tactile HMI cintre plus précisément, atteint des étriers de 1 200 mm, produit 2.5–5 tonnes par jour et s'arrête seul quand l'acier est épuisé."],
      faqTitle: "Questions fréquentes sur la cintreuse d'étriers",
      guideLabel: "Lire : moteur standard ou servo PLC",
      faq: [
        { q: "Que fait une cintreuse d'étriers automatique ?", a: "Elle alimente le fer, le dresse, le cintre selon la forme réglée sur l'écran tactile et le coupe, en un seul cycle continu. Étriers carrés, rectangulaires, triangulaires, hexagonaux, en C, en spirale ou sur mesure." },
        { q: "Quels diamètres de fer peut-elle cintrer ?", a: "Fer lisse et haute adhérence de 6 à 10 mm sur les deux modèles. Le plus petit étrier mesure environ 7 cm sur le modèle standard et 55 mm sur le modèle servo." },
        { q: "Moteur standard ou servo : lequel choisir ?", a: "Le moteur standard pour une forte production d'étriers courants jusqu'à 110 cm. Le servo PLC pour plus de précision, des étriers jusqu'à 1 200 mm et l'arrêt automatique en fin de fer." },
        { q: "Quelle alimentation électrique faut-il ?", a: "220 V monophasé en standard, compatible avec la plupart des groupes électrogènes de chantier et des ateliers. Une version triphasée du modèle standard existe sur demande." },
        { q: "Combien d'opérateurs faut-il ?", a: "Un seul. Il installe la bobine, choisit la forme sur l'écran et récupère les étriers finis. La plupart des clients amortissent la machine grâce à la main-d'œuvre et à l'acier économisés." },
        { q: "Quelle est la commande minimale et comment est-elle expédiée ?", a: "Vous pouvez commander une seule machine. Chacune pèse 250–270 kg et mesure 2200 × 950 × 1280 mm ; expédition en LCL ou FCL, conditions FOB ou CIF depuis le Vietnam." },
      ],
    },
    'concrete-mixers': {
      title: 'Bétonnière Vietnam – Fabricant de bétonnières | Phu Long',
      description:
        'Bétonnières fabriquées au Vietnam : mini bétonnière 250 L, bétonnière 1 sac 350 L jusqu’à 500 L, moteur électrique, essence ou diesel, OEM, FOB/CIF.',
      aboutTitle: 'Bétonnières et malaxeurs à béton du Vietnam',
      about: [
        "Phu Long est un fabricant de bétonnières au Vietnam. Nous construisons des bétonnières à cuve, aussi appelées malaxeurs à béton, de 250 à 500 litres dans notre propre usine de Giao Thuy, Ninh Binh, et les expédions à des importateurs, revendeurs et entrepreneurs dans 20 pays.",
        "Pour les chantiers exigus et les petites réparations, notre mini bétonnière de 250 L pèse 140–150 kg et se déplace facilement à la main. Pour les petits et moyens chantiers, nos modèles de 350 L et 385 L sont la bétonnière 1 sac classique : un sac de ciment de 50 kg, avec son sable, son gravier et son eau, par gâchée. Les modèles de 420 à 500 L produisent davantage de béton par gâchée pour les chantiers plus importants. Chaque bétonnière peut être équipée d'un moteur électrique, essence ou diesel, à votre couleur et avec votre logo.",
      ],
      faqTitle: 'Questions fréquentes sur les bétonnières',
      faq: [
        {
          q: "Qu'est-ce qu'une bétonnière 1 sac ?",
          a: "Une bétonnière à cuve dimensionnée pour malaxer un sac de ciment de 50 kg par gâchée, avec le sable, le gravier et l'eau correspondants. Pour un dosage courant de chantier 1:2:4, cela représente environ 0,15–0.2 m³ de béton, que nos bétonnières de 350 L et 385 L traitent en une seule gâchée. La gâchée exacte dépend de votre formulation.",
        },
        {
          q: 'Fabriquez-vous une mini bétonnière ?',
          a: "Oui. Notre mini bétonnière de 250 L existe sur 2 ou 4 roues pleines 4.00-8, pèse 140–150 kg et mesure 1700 × 860 × 1300 mm : assez compacte pour les chantiers étroits, les réparations et les parcs de location. Elle fonctionne avec un moteur électrique, essence ou diesel, et une cuve plus petite à partir de 200 L peut être fabriquée sur demande.",
        },
        {
          q: 'Une bétonnière et un malaxeur à béton, est-ce la même chose ?',
          a: "Oui, dans l'usage courant les deux termes désignent la même machine : une cuve rotative qui mélange ciment, sable, gravier et eau pour obtenir du béton ou du mortier. « Bétonnière » est le nom le plus courant sur les chantiers ; « malaxeur à béton » est souvent employé dans le commerce et l'industrie.",
        },
        {
          q: 'Quelles tailles de bétonnières fabriquez-vous ?',
          a: 'Dix modèles avec des cuves de 250 L à 500 L, sur 2, 3 ou 4 roues, avec pneus pleins 4.00-8 ou gonflables 5.00-12. L’acier de la cuve fait 2–3 mm, plus épais sur demande.',
        },
        {
          q: 'Quels moteurs peuvent équiper les bétonnières ?',
          a: 'Des moteurs électriques de 2.2 à 5.5 kW en 220 V, des moteurs essence GP160 / GP200 ou des moteurs diesel. Vous choisissez le moteur pour chaque commande, et nous le montons et le testons en usine.',
        },
        {
          q: 'Pouvez-vous fabriquer les bétonnières à notre couleur avec notre logo ?',
          a: "Oui. Couleur, logo et autocollants, épaisseur de cuve, moteur et pneus peuvent tous être définis à chaque commande (OEM). Plusieurs couleurs et modèles peuvent partager un même conteneur.",
        },
        {
          q: 'Quelle est la commande minimum et comment expédiez-vous ?',
          a: "La commande minimum commence à 2 à 5 unités selon le modèle. Nous expédions depuis le Vietnam en FOB ou CIF, en conteneur complet (FCL) ou groupé (LCL). Envoyez-nous votre port et la quantité pour recevoir un devis.",
        },
        {
          q: 'Pourquoi acheter des bétonnières au Vietnam ?',
          a: "Vous achetez directement à l'usine qui découpe, soude, peint, assemble et teste chaque bétonnière, forte de plus de 20 ans d'expérience et de clients dans 20 pays. Nos bétonnières ont été testées par SGS Vietnam.",
        },
      ],
      guideLabel: 'Lire le guide de la bétonnière 1 sac',
    },
  },

  products: {
    'CM-250-2W': {
      name: 'Mini bétonnière 250 L — 2 roues (pleines)',
      description:
        "Une mini bétonnière pour les petits chantiers et les réparations. Bétonnière compacte de 250 L sur 2 roues pleines 4.00-8. Légère avec 140 kg, facile à manœuvrer sur les petits et moyens chantiers. Disponible avec moteur électrique, essence ou diesel.",
    },
    'CM-250-4W': {
      name: 'Mini bétonnière 250 L — 4 roues (pleines)',
      description:
        "Une mini bétonnière pour les petits chantiers et les réparations. Bétonnière de 250 L sur 4 roues pleines pour une meilleure stabilité sur terrain irrégulier. Idéale sur les chantiers où la machine doit rester bien en place pendant le malaxage.",
    },
    'CM-350-2W-S': {
      name: 'Bétonnière 1 sac 350 L — 2 roues (pleines)',
      description:
        "Une bétonnière 1 sac : un sac de ciment de 50 kg par gâchée. Bétonnière de 350 L sur 2 roues pleines 4.00-8. Pneus sans entretien, jamais crevés. Très demandée sur les marchés où la réparation de pneus est difficile.",
    },
    'CM-350-2W-P': {
      name: 'Bétonnière 1 sac 350 L — 2 roues (gonflables 5.00-12)',
      description:
        "Une bétonnière 1 sac : un sac de ciment de 50 kg par gâchée. Bétonnière robuste de 350 L avec grands pneus gonflables 5.00-12 pour un déplacement facile sur terrain accidenté. Notre modèle export le plus vendu, polyvalent pour la plupart des marchés de la construction.",
    },
    'CM-350-4W-S': {
      name: 'Bétonnière 1 sac 350 L — 4 roues (pleines)',
      description:
        "Une bétonnière 1 sac : un sac de ciment de 50 kg par gâchée. Bétonnière de 350 L sur 4 roues pleines. Stabilité maximale pour une installation fixe ou semi-fixe sur chantier.",
    },
    'CM-350-4W-P': {
      name: 'Bétonnière 1 sac 350 L — 4 roues (gonflables 5.00-10)',
      description:
        "Une bétonnière 1 sac : un sac de ciment de 50 kg par gâchée. Bétonnière de 350 L sur 4 grands pneus gonflables 5.00-10 : stabilité maximale et déplacement confortable sur les surfaces accidentées.",
    },
    'CM-385': {
      name: 'Bétonnière 1 sac 385 L — 2 roues (pleines)',
      description:
        "Une bétonnière 1 sac : un sac de ciment de 50 kg par gâchée. Bétonnière de 385 L, de taille moyenne à grande, sur 2 roues pleines. Elle comble l'écart entre 350 L et 420 L, idéale pour les chantiers moyens à importants qui demandent plus de rendement qu'une 350 L standard.",
    },
    'CM-420': {
      name: 'Bétonnière 420 L — 2 roues (pleines)',
      description:
        "Bétonnière grande capacité de 420 L sur 2 roues pleines. Cuve plus épaisse (2.5mm/3mm) pour une longue durée de vie en usage quotidien intensif.",
    },
    'CM-450': {
      name: 'Bétonnière 450 L — 3 roues (pleines)',
      description:
        "Bétonnière de 450 L avec une configuration originale à 3 roues, alliant stabilité et maniabilité sur les grands chantiers. Cuve renforcée pour un usage intensif et continu.",
    },
    'CM-500': {
      name: 'Bétonnière 500 L — 4 roues (gonflables 5.00-12)',
      description:
        "Notre bétonnière de plus grande capacité, 500 L, sur 4 grands pneus gonflables 5.00-12. Conçue pour les grands chantiers exigeants qui demandent un rendement journalier maximal.",
    },
    'WB-70L': {
      name: 'Brouette 70 L — benne acier',
      description:
        "Brouette classique à une roue avec benne acier de 70 L. Notre taille export la plus vendue : le meilleur équilibre entre capacité, poids et prix pour la plupart des marchés de la construction.",
    },
    'WB-80L-BIG': {
      name: 'Brouette 80 L — grosse roue gonflable',
      description:
        "Brouette à benne acier de 80 L avec grosse roue gonflable pour un transport confortable sur terrain accidenté et irrégulier. Châssis peint par poudrage.",
    },
    'WB-80L-ECO': {
      name: 'Brouette 80 L — économique',
      description:
        "Brouette économique de 80 L offrant un excellent rapport qualité-prix pour les marchés sensibles au prix. Benne acier standard, châssis peint.",
    },
    'WB-80L-CN': {
      name: 'Brouette 80 L — style chinois',
      description:
        "Brouette de 80 L au design de style chinois, appréciée sur les marchés d'Asie du Sud-Est et d'Afrique habitués à cette forme. Benne acier, châssis peint.",
    },
    'WB-90L-PP': {
      name: 'Brouette 90 L — benne plastique (PP)',
      description:
        "Brouette de 90 L avec benne en plastique PP, résistante à la corrosion due au ciment, à la chaux et aux engrais. Idéale pour les marchés humides et côtiers.",
    },
    'WB-120L-BIG': {
      name: 'Brouette 120 L — grosse roue gonflable',
      description:
        "Brouette grande capacité de 120 L avec grosse roue gonflable pour transporter un maximum de charge. Benne en acier épais, châssis peint par poudrage.",
    },
    'WB-120L-SMALL': {
      name: 'Brouette 120 L — petite roue gonflable',
      description:
        "Brouette grande capacité de 120 L avec roue gonflable plus petite. Encombrement réduit par rapport à la version grosse roue, plus facile à stocker et à expédier.",
    },
    'SBM-NORMAL': {
      name: "Cintreuse d'étriers — moteur standard",
      description:
        "Cintreuse d'étriers automatique à moteur standard. Cintre l'acier lisse et crénelé de 6–10mm en V, rectangle, triangle, hexagone, spirale ou forme personnalisée. Panneau de commande tactile, production de 14–15 étriers/min.",
    },
    'SBM-SERVO': {
      name: "Cintreuse d'étriers — servomoteur",
      description:
        "Cintreuse d'étriers automatique de haute précision à servomoteur. Cintre le fer lisse et haute adhérence de 6–10 mm en étriers de 55 mm à 1200 mm, 2.5–5 tonnes par jour. Programmation PLC avec écran tactile HMI. Arrêt automatique quand l'acier est épuisé.",
    },
    'PLSP-06': {
      name: 'Repiqueuse de riz PLSP-06 (6 rangs)',
      description:
        "Repiqueuse de riz automotrice 6 rangs, moteur électrique ou essence. Haute productivité de 950–1200 m²/h. Écartement des rangs réglable 20/24 cm.",
    },
    'PLSP-05': {
      name: 'Repiqueuse de riz PLSP-05 (5 rangs)',
      description: 'Repiqueuse de riz automotrice 5 rangs. Rendement de 750–950 m²/h, idéale pour les exploitations de 1 à 5 ha.',
    },
    'PLSP-04': {
      name: 'Repiqueuse de riz PLSP-04 (4 rangs)',
      description:
        'Repiqueuse de riz automotrice 4 rangs. Légère avec 50 kg, idéale pour les petites parcelles. Productivité de 500–800 m²/h.',
    },
    'PLHP-04': {
      name: 'Repiqueuse de riz PLHP-04 (4 rangs, tirée à la main)',
      description:
        "Repiqueuse de riz 4 rangs tirée à la main, à assistance électrique. Modèle d'entrée de gamme léger pour les petits exploitants et les terrains vallonnés. Productivité de 360–450 m²/h.",
    },
    PL2000: {
      name: 'Batteuse de paddy PL2000',
      description:
        "Batteuse de paddy grande capacité, 2500–2700 kg/h. Taux de battage ≥ 98%. Idéale pour les grandes exploitations et les services de récolte coopératifs.",
    },
    PL1200: {
      name: 'Batteuse de paddy PL1200',
      description: 'Batteuse de paddy de milieu de gamme, 1800–1900 kg/h. Efficace et durable pour les exploitations moyennes.',
    },
    PL800: {
      name: 'Batteuse de paddy PL800',
      description:
        "Batteuse de paddy compacte et légère, seulement 75 kg. Idéale pour les petites exploitations et les champs isolés. Rendement de 500–600 kg/h, taux de battage ≥ 98%.",
    },
    'PLCF-101': {
      name: 'Ventilateur centrifuge PLCF 101 — aubes incurvées vers l’avant',
      description:
        "Ventilateur centrifuge à aubes incurvées vers l'avant, pour un débit et une pression élevés à faible niveau sonore. Conçu pour la ventilation et l'extraction des odeurs dans les hôtels, restaurants, usines et bâtiments publics.",
    },
    'PLCF-121': {
      name: 'Ventilateur centrifuge PLCF 121 — aubes plates renforcées',
      description:
        "Ventilateur centrifuge robuste à grandes aubes plates et carter boulonné qui s'ouvre pour l'entretien. Utilisé pour la recirculation d'air et le désenfumage dans les bâtiments et les usines.",
    },
    'PLCF-152': {
      name: 'Ventilateur centrifuge PLCF 152 — haute pression',
      description:
        "Ventilateur centrifuge haute pression, à grande vitesse et forte aspiration. Tirage forcé pour fours, lignes de verrerie et de galvanoplastie, tunnels miniers, et transport pneumatique de grains, de laitier et de charbon.",
    },
    'PLAX-204': {
      name: 'Ventilateur axial PLAX 204',
      description:
        "Ventilateur axial à grand débit, faible bruit et faible consommation. Apport d'air frais, extraction d'air chaud et ventilation dans les entrepôts et sur les chantiers, ainsi que dans le raffinage pétrolier, le caoutchouc, le séchage et l'industrie pharmaceutique. Disponible en version gaine ronde, sur pied ou en caisson.",
    },
    PLPF: {
      name: 'Ventilateur mobile PLPF — pales de 1,5–2 m',
      description:
        "Grand ventilateur mobile sur roulettes avec pales en alliage d'aluminium de 1 500–2 000 mm. Déplace 41 500–80 200 m³/h sur 5–20 m en monophasé 220V, pour les entrepôts, ateliers et chantiers.",
    },
    PLQF: {
      name: 'Ventilateur de ventilation carré PLQF',
      description:
        "Ventilateur carré mural à volets, de 400 à 1 380 mm. Circulation et extraction d'air pour entrepôts, usines et autres bâtiments industriels, à faible coût de fonctionnement.",
    },
    'ENG-ELEC': {
      name: 'Moteur électrique (2.2–5.5 kW)',
      description:
        "Moteur électrique monophasé pour bétonnières et machines. Puissance de 2.2 à 5.5 kW en 220V. Léger : 17–20 kg.",
    },
    'ENG-GAS': {
      name: 'Moteur essence GP160 / GP200',
      description:
        'Moteurs essence fiables GP160 et GP200 pour bétonnières et machines agricoles. 5.5–6.5 Hp.',
    },
    'ENG-DIES': {
      name: 'Moteur diesel CAOFONG (8–12 Hp)',
      description:
        "Moteur diesel CAOFONG robuste de 8–12 Hp. Adapté aux grandes bétonnières sur les sites isolés sans accès à l'électricité.",
    },
    'VIKYNO-RV70': {
      name: 'Moteur diesel Vikyno RV70',
      description:
        'Moteur diesel monocylindre Vikyno-Vietnam RV70. Compact et fiable, adapté aux petites machines, pompes à eau et groupes électrogènes.',
    },
    'VIKYNO-RV80': {
      name: 'Moteur diesel Vikyno RV80',
      description:
        'Moteur diesel Vikyno-Vietnam RV80. Performances fiables pour les machines agricoles, les bétonnières et les pompes à eau.',
    },
    'VIKYNO-RV125-1': {
      name: 'Moteur diesel Vikyno RV125-1',
      description:
        'Moteur diesel Vikyno RV125-1 à poulie simple. Puissance de 12.5 Hp, très utilisé sur les équipements agricoles et de chantier.',
    },
    'VIKYNO-RV125-2': {
      name: 'Moteur diesel Vikyno RV125-2',
      description:
        "Moteur diesel Vikyno RV125-2 à double poulie. Puissance de 12.5 Hp. La double poulie permet d'entraîner deux équipements distincts en même temps.",
    },
    'VIKYNO-RV165-2': {
      name: 'Moteur diesel Vikyno RV165-2',
      description:
        'Moteur diesel Vikyno RV165-2 de moyenne puissance à double poulie. Puissance de 16.5 Hp, adapté aux grandes bétonnières (420–500L) et aux machines agricoles lourdes.',
    },
    'VIKYNO-RV325NA': {
      name: 'Moteur diesel Vikyno RV325NA',
      description:
        'Moteur diesel atmosphérique haute puissance Vikyno RV325NA. Puissance de 32.5 Hp pour les équipements industriels et agricoles lourds.',
    },
    'VIKYNO-RV365NB': {
      name: 'Moteur diesel Vikyno RV365NB',
      description:
        'Moteur diesel haut rendement Vikyno RV365NB. 36.5 Hp, adapté aux engins de chantier lourds et aux applications industrielles à grande échelle.',
    },
    'VIKYNO-EV2400': {
      name: 'Moteur diesel Vikyno EV2400',
      description:
        'Moteur diesel Vikyno EV2400 à démarrage électrique. Démarrage pratique par bouton-poussoir sur les sites isolés. Adapté aux bétonnières et aux machines agricoles.',
    },
    'VIKYNO-EV2600': {
      name: 'Moteur diesel Vikyno EV2600',
      description:
        "Moteur diesel Vikyno EV2600 à démarrage électrique, la version la plus puissante de la série EV. Un moteur fiable pour les applications exigeantes.",
    },
  },

  blogCategories: {
    'concrete-mixer': 'Bétonnières',
    wheelbarrow: 'Brouettes',
    'rice-transplanter': 'Repiqueuses de riz',
    'paddy-thresher': 'Batteuses de paddy',
    'stirrup-bending': "Cintrage d'étriers",
    'industrial-fan': 'Ventilateurs industriels',
    engine: 'Moteurs',
    general: "Guides d'achat",
  },

  blog: {
    'how-to-choose-concrete-mixer': {
      title: 'Comment choisir la bonne bétonnière pour votre chantier',
      excerpt:
        "Capacité de cuve, type de moteur, configuration des roues : un guide pratique pour les importateurs et chefs de chantier qui choisissent leur bétonnière.",
      content: `Le choix de la bonne bétonnière dépend de trois facteurs principaux : la taille du chantier, le terrain et les moteurs disponibles sur votre marché.

## 1. Capacité de la cuve

La caractéristique la plus visible est la capacité de la cuve. En règle générale :
- **250L** — maisons individuelles et petites réparations (la mini bétonnière)
- **350L** — chantiers moyens et travaux de voirie
- **450–500L** — grands chantiers, forte production journalière

Gardez à l'esprit que le volume réel de malaxage représente environ 60–65 % de la capacité de la cuve. Une cuve de 350L produit environ 200–220L de béton par gâchée.

## 2. Type de moteur

Chacun des trois types de moteur correspond à un usage différent :

| Moteur | Idéal pour |
|--------|----------|
| Électrique (2.2–5.5 kW, 220V) | Chantiers fixes raccordés au réseau |
| Essence (GP160/GP200, 5.5–6.5 Hp) | Chantiers isolés ou semi-fixes |
| Diesel (CAOFONG, 8–12 Hp) | Usage intensif, sans accès à l'électricité |

Le moteur électrique est le moins cher à l'usage mais nécessite une alimentation 220V. L'essence offre le meilleur équilibre entre mobilité et puissance. Le diesel est destiné aux environnements exigeants sans électricité.

## 3. Configuration des roues

- **2 roues** — plus légère, plus facile à manœuvrer dans les espaces réduits
- **4 roues** — plus stable sur terrain irrégulier, préférée sur les chantiers en pente

Pneus gonflables ou pleins : les pneus gonflables (5.00-12) absorbent mieux les chocs sur terrain accidenté. Les pneus pleins (4.00-8) ne demandent aucun entretien et ne crèvent jamais, ce qui les rend populaires sur les marchés où la réparation de pneus est difficile.

## 4. Épaisseur de la cuve

Chez Phu Long, nous utilisons une cuve de 2mm en partie haute / 2.5mm en partie basse pour les modèles de 250–350L, et 2.5mm / 3mm pour les 450–500L. Une cuve plus épaisse dure plus longtemps mais ajoute du poids. Pour les marchés à usage intensif, nous recommandons l'option la plus épaisse.

## En résumé

Adaptez le modèle à l'infrastructure électrique de votre marché et à la taille habituelle des chantiers. La plupart de nos clients export en Asie du Sud-Est et en Afrique choisissent la version 350L essence, la plus polyvalente. Pour les commandes OEM avec couleur et logo personnalisés, chaque modèle peut être configuré selon vos spécifications.`,
    },

    'concrete-mixer-daily-maintenance-checklist': {
      title: 'Entretien de la bétonnière : check-list quotidienne',
      excerpt:
        "Nettoyage de la cuve, graissage, tension de courroie, pneus et huile moteur : une check-list quotidienne et hebdomadaire pour faire durer votre bétonnière.",
      content: `Une bétonnière à cuve est une machine simple, et c'est justement pour cela qu'on la néglige. La plupart des pannes dont on nous parle ont les mêmes causes : du béton durci dans la cuve, des engrenages secs, une courroie qui patine ou un moteur qui manque d'huile. Dix minutes par jour suffisent à presque toutes les éviter.

## Avant de démarrer : le contrôle de 2 minutes

- **Huile moteur** — vérifiez le niveau à la jauge, bétonnière à l'horizontale. Complétez avec l'huile indiquée dans le manuel du moteur. Ne démarrez jamais un moteur essence ou diesel en manque d'huile.
- **Carburant et filtre à air** — sur les chantiers poussiéreux, le filtre à air s'encrasse vite. Tapotez-le pour le nettoyer ou remplacez-le s'il est foncé.
- **Moteurs électriques** — vérifiez que le câble, la prise et l'interrupteur ne sont pas endommagés. Gardez le moteur au sec et ne l'utilisez jamais avec un câble coupé ou rafistolé au ruban adhésif.
- **Carters de protection** — assurez-vous que les protections de courroie et d'engrenage sont en place avant de démarrer.
- **Béquille et roues** — placez la bétonnière sur un sol ferme et plat et calez les roues.

## Pendant le travail

- **Chargez cuve en rotation** — versez d'abord l'eau et une partie des granulats, puis le ciment, puis le reste. Cela limite le collage et soulage la transmission.
- **Ne surchargez pas** — la gâchée utile est bien inférieure à la capacité nominale de la cuve. Trop remplir fait déborder le matériau, fatigue les engrenages et réduit la durée de vie des roulements.
- **Écoutez** — un cognement, un grincement ou un changement de bruit du moteur est un signal pour arrêter et vérifier.

## Après le travail : nettoyez la cuve tant qu'elle est humide

C'est l'habitude la plus importante.

- Rincez la cuve et les pales juste après la dernière gâchée, tant que le béton est encore frais.
- Ajoutez quelques pelletées de gros gravier avec de l'eau et laissez tourner la cuve quelques minutes. Le gravier récure l'intérieur. Videz, puis rincez à nouveau.
- Lavez les éclaboussures de béton sur la couronne dentée, le châssis et le moteur.
- **Ne frappez jamais la cuve** au marteau pour détacher le béton durci. Les bosses font coller davantage la gâchée suivante et peuvent fissurer les soudures de la cuve.
- Après nettoyage, basculez l'ouverture de la cuve vers le bas pour que l'eau s'écoule et que la cuve ne rouille pas.

Nos cuves sont en acier de 2–3 mm selon le modèle, et les garder propres est le meilleur moyen de préserver cette épaisseur au fil des années.

## Chaque semaine : engrenages, courroie, pneus et boulons

**Couronne dentée et pignon** — l'engrenage ouvert qui entraîne la cuve est exposé au sable et au ciment. Essuyez l'ancienne graisse chargée de grains et appliquez de la graisse neuve sur les dents. Une graisse mêlée de sable agit comme une pâte abrasive : nettoyez d'abord, graissez ensuite.

**Roulements et points d'articulation** — graissez le roulement de cuve, le mécanisme de basculement et tous les graisseurs. Quelques coups de pompe suffisent ; l'excès de graisse ne fait qu'attirer la saleté.

**Tension de la courroie** — appuyez fermement du pouce au milieu de la courroie. Elle doit fléchir un peu sans battre. Une courroie trop lâche patine et fait perdre de la vitesse à la cuve ; une courroie trop tendue use les roulements. Remplacez les courroies fissurées, lustrées ou effilochées.

**Pneus** — les pneus gonflables doivent être gonflés à la pression indiquée sur le flanc ; un pneu sous-gonflé rend le déplacement pénible et s'use vite. Les pneus pleins n'ont pas besoin d'air, mais vérifiez qu'ils ne sont ni fissurés ni entaillés.

**Boulons et soudures** — vérifiez le serrage des boulons du support moteur, du châssis de cuve et du levier de basculement. Recherchez des fissures autour des soudures, surtout sur le timon et l'essieu.

## Entretien du moteur

Suivez le calendrier du fabricant du moteur pour les vidanges, la bougie (essence) et le filtre à carburant (diesel). Vidangez plus souvent par forte chaleur ou en milieu poussiéreux. Tenez un carnet simple avec les heures et les dates ; cela facilite la garantie et la revente.

## Stockage

Pour un stockage prolongé, nettoyez entièrement la cuve, appliquez un léger film d'huile sur l'acier nu, couvrez la machine, et vidangez ou stabilisez le carburant selon le manuel du moteur.

Besoin de pièces détachées pour vos bétonnières, comme couronnes dentées, pignons, courroies ou pneus ? Écrivez-nous sur WhatsApp au +84 946 964 669 avec votre modèle et des photos, ou utilisez notre formulaire de devis.`,
    },

    'drum-mixer-batch-size-mix-ratios': {
      title: 'Bétonnière : volume de gâchée, dosages et temps de malaxage',
      excerpt:
        "Combien de béton une bétonnière produit réellement par gâchée, les dosages courants sur chantier, le bon ordre de chargement et la durée de malaxage.",
      content: `La capacité d'une bétonnière figure sur la brochure, mais le volume de béton qui sort à chaque gâchée est un autre chiffre. Comprendre cet écart, et charger la cuve correctement, vous donne un béton plus résistant, moins de pertes et une machine qui dure plus longtemps.

## Capacité de cuve n'est pas volume de gâchée

Le nombre de litres dans le nom d'une bétonnière, par exemple 350 L, désigne la cuve. Une bétonnière à cuve basculante ne peut pas être remplie à ras bord : le matériau a besoin de place pour retomber et se mélanger pendant la rotation, et l'ouverture ne doit pas déborder quand la cuve est inclinée.

En pratique, la gâchée utile de béton malaxé représente environ **60–65 % de la capacité de la cuve**. Pour notre gamme, cela donne approximativement :

- **Cuve de 250 L** → environ 150–160 L par gâchée
- **Cuve de 350 L** → environ 210–225 L par gâchée
- **Cuve de 450 L** → environ 270–290 L par gâchée
- **Cuve de 500 L** → environ 300–325 L par gâchée

Organisez votre journée autour de ce chiffre. Un mètre cube fait 1 000 L : une bétonnière de 350 L a donc besoin d'environ cinq gâchées par mètre cube.

## Dosages courants sur chantier

Les petits chantiers utilisent souvent des dosages nominaux mesurés en volume, notés **ciment : sable : gravier**. Exemples typiques sur le terrain :

- **1 : 1.5 : 3** — un mélange plus riche, souvent utilisé pour les éléments de structure comme dalles, poutres et poteaux
- **1 : 2 : 4** — un mélange polyvalent pour semelles, sols et allées
- **1 : 3 : 6** — un mélange maigre pour béton de propreté et remplissage de masse

Ce sont des repères généraux, pas une formulation. Pour tout ouvrage de structure, suivez le dosage prescrit par votre ingénieur ou la norme locale, qui fixe aussi le rapport eau/ciment.

Mesurez toujours avec le même récipient, un seau ou une caisse de dosage, plutôt qu'en comptant les pelletées. Une pelletée varie d'une personne à l'autre et du début à la fin de la journée.

## Attention à l'eau

Trop d'eau rend le béton plus facile à mettre en place, mais plus faible et plus sujet à la fissuration et au retrait. Ajoutez l'eau progressivement et arrêtez-vous quand le mélange atteint la maniabilité voulue. Si le béton est trop ferme, ajoutez-en un peu à la fois : on peut toujours ajouter de l'eau, jamais en retirer.

N'oubliez pas que le sable humide contient déjà de l'eau. Par temps de pluie, il en faudra moins dans la cuve.

## Le bon ordre de chargement

Chargez avec la cuve déjà en rotation. Une séquence qui fonctionne bien avec les bétonnières à cuve basculante :

- Versez d'abord **environ la moitié de l'eau**, pour mouiller la paroi de la cuve et éviter que le ciment ne colle au fond.
- Ajoutez le **gravier**. Il récure la cuve et casse les grumeaux.
- Ajoutez le **sable**, puis le **ciment**.
- Ajoutez lentement **le reste de l'eau** jusqu'à obtenir le bon aspect.

Verser le ciment dans une cuve vide et sèche le fait s'agglomérer sur les pales et au fond de la cuve, et la gâchée sort hétérogène.

## Combien de temps malaxer

Une fois le dernier matériau ajouté, malaxez jusqu'à obtenir une couleur et une consistance homogènes, en général quelques minutes pour une petite bétonnière. Trop court, vous aurez des traces de ciment sec ou des poches de sable ; beaucoup plus long n'est pas mieux et peut provoquer une ségrégation et une perte de maniabilité par temps chaud. Gardez le même temps d'une gâchée à l'autre pour que chaque charge soit identique.

## Conseils pour une meilleure journée sur chantier

- Placez la bétonnière de niveau et près du coulage pour réduire les trajets.
- Gardez les sacs de ciment au sec et surélevés du sol.
- Videz complètement la cuve entre deux gâchées ; un reste de béton modifie le mélange suivant.
- Nettoyez la cuve aux pauses et en fin de journée tant qu'elle est encore humide.

## Adapter la taille de la bétonnière au chantier

Si votre équipe attend régulièrement la bétonnière, passez à la taille supérieure. Si c'est la bétonnière qui attend les brouettes, une cuve plus grande n'y changera rien : ajoutez de la main-d'œuvre ou raccourcissez le trajet. Notre gamme va de 250 L à 500 L, en motorisation électrique, essence ou diesel.

Besoin d'aide pour choisir une taille adaptée à vos coulages habituels ? Envoyez-nous votre volume journalier et les conditions du chantier sur WhatsApp au +84 946 964 669 ou via notre formulaire de devis.`,
    },

    'concrete-mixer-tyres-and-wheel-layouts': {
      title: 'Pneus de bétonnière : pleins ou gonflables, 2 à 4 roues',
      excerpt:
        "Pneus pleins ou gonflables, deux, trois ou quatre roues : comment le terrain, les déplacements et la réparation locale doivent guider votre choix.",
      content: `Sur une bétonnière, les roues et les pneus semblent un détail. Sur le chantier, ils déterminent la facilité de déplacement de la machine, sa stabilité pendant le malaxage et la fréquence à laquelle quelqu'un doit s'arrêter pour réparer une crevaison. Pour les importateurs, ils déterminent aussi les marchés sur lesquels un modèle se vendra.

## Pneus pleins

Les pneus pleins sont entièrement en caoutchouc. Sur nos bétonnières, la taille standard en pneu plein est **4.00-8**, montée sur des modèles comme les CM-250-2W, CM-350-2W-S, CM-385, CM-420 et CM-450.

**Avantages :**
- Ne crèvent jamais : aucune crevaison due aux chutes de fer à béton, aux clous ou aux pierres coupantes
- Pas de contrôle de pression, pas de chambre à air, pas de kit de réparation
- Coût réduit et remplacement simple

**Limites :**
- Moins d'absorption des chocs : la machine rebondit davantage sur terrain accidenté
- Plus difficiles à pousser sur sol meuble, boue ou sable
- Plus de vibrations transmises au châssis lors des déplacements

Les pneus pleins sont un excellent choix pour les marchés où la réparation de pneus est difficile à trouver, pour les chantiers jonchés de débris coupants et pour les bétonnières qui restent la plupart du temps au même endroit.

## Pneus gonflables

Les pneus gonflables contiennent de l'air, comme un pneu de voiture ou de brouette. Nos bétonnières utilisent des pneus gonflables **5.00-12** sur des modèles comme les CM-350-2W-P et CM-500, et **5.00-10** sur la CM-350-4W-P.

**Avantages :**
- Meilleure adhérence et portance sur sol meuble, boueux ou sablonneux
- Roulement plus doux, qui protège le châssis, les supports moteur et les roulements de cuve quand la bétonnière est souvent déplacée
- Le plus grand diamètre franchit plus facilement les ornières et les bordures

**Limites :**
- Peuvent crever sur les chantiers pleins de clous et de chutes d'acier
- Demandent des contrôles de pression réguliers, à la pression indiquée sur le flanc
- Plus chers que les pneus pleins

Les pneus gonflables conviennent aux chantiers à sol accidenté ou meuble et aux entrepreneurs qui déplacent la bétonnière entre plusieurs zones de travail dans la journée.

## Deux, trois ou quatre roues

**Deux roues** — la configuration classique. La bétonnière repose sur deux roues et une béquille ou des pieds. Elle est plus légère, moins chère et facile à basculer et à tourner à la main dans les espaces étroits comme les parcelles de maison et les rues étroites.

**Trois roues** — ajoute une roue avant pour diriger et déplacer la machine plus facilement sans soulever l'avant. Notre CM-450 utilise une configuration à trois roues.

**Quatre roues** — la plateforme la plus stable. La machine reste d'aplomb sur un sol irrégulier ou en pente et se déplace plus facilement sur de longues distances dans le chantier. Nos CM-250-4W, CM-350-4W et CM-500 utilisent quatre roues.

Sur toute la gamme, les roues peuvent être choisies en 2, 3 ou 4, pleines ou gonflables : un même modèle peut ainsi être adapté aux conditions de votre marché.

## Déplacer la bétonnière en sécurité

- Les bétonnières de chantier sont conçues pour être déplacées sur le chantier, pas remorquées à vitesse routière. Vérifiez la réglementation locale avant d'utiliser une bétonnière sur la voie publique, et en cas de doute transportez-la sur un camion ou une remorque.
- Videz toujours la cuve avant de déplacer la machine ; une cuve chargée déplace le centre de gravité.
- Bloquez la cuve et calez les roues une fois en position.

## Questions à se poser avant de commander

- Sur quel type de sol travaillent vos clients : compacté, boueux, sablonneux ou rocailleux ?
- Combien de fois la bétonnière est-elle déplacée dans la journée ?
- La réparation de pneus est-elle facile à trouver sur votre marché ?
- Vos clients préfèrent-ils des machines légères à pousser à la main, ou la stabilité en pente ?

## Un point de départ pratique

Beaucoup d'importateurs stockent les deux : un modèle deux roues à pneus pleins comme option économique et sans entretien, et un modèle quatre roues à pneus gonflables pour les entrepreneurs qui ont besoin de mobilité et de stabilité. Comme les pneus et la configuration des roues sont personnalisables, vous pouvez tester les deux dans un conteneur mixte.

Décrivez-nous les chantiers de vos clients sur WhatsApp au +84 946 964 669 ou via notre formulaire de devis, et nous vous proposerons la bonne configuration de roues et de pneus.`,
    },

    'selling-concrete-mixers-dealer-guide': {
      title: 'Vendre des bétonnières : guide pratique pour revendeurs',
      excerpt:
        "Construire une gamme de bétonnières, utiliser couleur et logo OEM, choisir les pièces à stocker et planifier des conteneurs mixtes : un guide pour revendeurs.",
      content: `Les bétonnières sont un produit régulier pour les revendeurs de matériel de chantier : constructeurs, petits entrepreneurs et loueurs en ont tous besoin, et ils reviennent pour les pièces et le renouvellement. Les revendeurs qui réussissent avec les bétonnières prennent généralement quelques bonnes décisions dès le départ.

## Commencez par une gamme ciblée

Inutile d'avoir tous les modèles dès le premier jour. Une gamme ciblée est plus facile à expliquer, à stocker et à entretenir. Une structure courante :

- **Modèle d'entrée (250 L)** — la mini bétonnière pour les constructeurs de maisons, les réparations et les acheteurs sensibles au prix
- **Modèle cœur de gamme (350 L)** — la bétonnière 1 sac polyvalente pour les petits et moyens entrepreneurs
- **Modèle lourd (420–500 L)** — pour les grands entrepreneurs et les volumes journaliers élevés

Sur notre gamme, la capacité de cuve va de 250 L à 500 L, avec un acier de cuve de 2–3 mm selon le modèle. Dans chaque taille, vous pouvez proposer la configuration de roues et de pneus que préfère votre marché : pneus pleins pour un entretien minimal, pneus gonflables pour les terrains accidentés, et 2, 3 ou 4 roues.

## Choisissez le moteur que votre marché peut entretenir

Le meilleur moteur est celui que vos clients peuvent alimenter et réparer localement.

- **Électrique (2.2–5.5 kW, 220 V)** — pour les villes et les chantiers disposant d'un réseau électrique fiable
- **Essence (GP160 / GP200)** — mobile et facile à faire réparer partout
- **Diesel** — pour un usage plus intensif et les régions où le diesel est le carburant courant

Demandez aux mécaniciens locaux quels moteurs ils connaissent déjà. Une machine qui peut être réparée en ville se vend mieux qu'une machine qui ne le peut pas.

## Créez votre marque grâce à l'OEM

Vendre sous votre propre marque fidélise les clients à votre enseigne plutôt qu'au nom d'une usine. Sur nos bétonnières, vous pouvez définir :

- **La couleur** — jaune, orange, rouge, rouge foncé, bleu, vert, gris, ou une couleur personnalisée
- **Le logo et les autocollants** — votre marque sur la cuve et le châssis
- **Le moteur, les roues et les pneus** — adaptés à votre marché
- **L'épaisseur de la cuve** — pour les clients qui veulent une cuve plus robuste

Une couleur cohérente sur toute votre gamme rend vos machines reconnaissables sur chaque chantier de votre région. Envoyez tôt votre fichier logo et votre référence de couleur pour que les échantillons soient validés avant la production.

## Stockez les bonnes pièces détachées

Un service pièces rapide fait souvent la différence entre une vente ponctuelle et un client fidèle. Les pièces à garder en rayon :

- **Couronne dentée et pignon** — ils s'usent avec le temps, surtout si le graissage est négligé
- **Pales de malaxage** — usées par les granulats abrasifs
- **Roulements** — pour la cuve et les points d'articulation
- **Courroies de transmission** — consommables sur les modèles à courroie
- **Pneus et roues** — pleins et gonflables si vous vendez les deux
- **Cuves** — pour les clients dont la cuve a été abîmée par des coups de marteau ou un accident
- **Pièces d'entretien moteur** — filtres, bougies, cordons de lanceur

Commandez un kit de pièces de démarrage avec votre premier conteneur. Cela coûte peu en fret supplémentaire et évite les envois urgents plus tard.

## Planifiez des conteneurs mixtes

Vous pouvez regrouper modèles, couleurs et moteurs dans un même conteneur. Le minimum de commande de nos bétonnières est de 2 à 5 unités par modèle selon la taille : un seul conteneur peut donc transporter toute votre gamme de départ plus les pièces détachées. Si vous vendez aussi des brouettes, les ajouter au même conteneur comble l'espace autour des bétonnières.

## Accompagnez vos clients après la vente

- Remettez à chaque acheteur une fiche d'entretien quotidien simple : nettoyer la cuve tant qu'elle est humide, graisser la couronne dentée, vérifier la tension de la courroie et l'huile moteur.
- Formez votre personnel à reconnaître les problèmes courants : courroies qui patinent, pignons usés, niveau d'huile bas.
- Gardez une trace des achats de chaque client pour lui proposer pièces et mises à niveau.

## Exposition et démonstration

Les bétonnières se vendent mieux quand les acheteurs peuvent les voir. Gardez au moins une machine montée dans votre dépôt, montrez l'épaisseur de la cuve et l'engrenage, et faites-la tourner pour que les clients entendent le moteur. Une machine d'exposition propre et à vos couleurs en dit plus qu'une brochure.

Prêt à construire votre gamme ? Indiquez-nous votre marché, l'alimentation électrique disponible et vos clients types sur WhatsApp au +84 946 964 669 ou via notre formulaire de devis, et nous vous proposerons une sélection de départ de modèles et de pièces.`,
    },

    '1-bag-concrete-mixer-guide': {
      title: 'Bétonnière 1 sac : définition et bien la choisir',
      excerpt:
        "Ce qu'est une bétonnière 1 sac, combien de béton produit un sac de ciment, et pourquoi la bétonnière de 350 L est la taille 1 sac de référence.",
      content: `« Bétonnière 1 sac », c'est ainsi que de nombreux constructeurs, revendeurs et loueurs décrivent la taille d'une bétonnière : une machine qui malaxe un sac de ciment de 50 kg, avec le sable, le gravier et l'eau correspondants, en une seule gâchée. C'est la taille de bétonnière la plus répandue sur les petits et moyens chantiers, et ce n'est pas un hasard.

## Ce que « 1 sac » veut dire en pratique

Sur chantier, le béton est généralement dosé en volume selon le rapport **ciment : sable : gravier**. Un dosage polyvalent courant est 1:2:4. En règle générale, un mètre cube de béton 1:2:4 demande environ 6,2 à 6,5 sacs de ciment de 50 kg : **un sac produit donc environ 0,15–0,16 m³ de béton**.

Une bétonnière 1 sac doit donc brasser environ 150–170 litres de béton frais par gâchée avec de la marge, car une cuve n'est jamais remplie à son volume nominal. La gâchée utile d'une bétonnière représente environ 60–65 % de la capacité de la cuve.

## Pourquoi 350 L est la taille 1 sac classique

Une cuve de 350 L donne environ 200–220 L de béton malaxé par gâchée, ce qui couvre confortablement une gâchée d'un sac, y compris avec les dosages plus riches qui produisent davantage de volume par sac. C'est pourquoi nos bétonnières de **350 L et 385 L** sont vendues comme bétonnières 1 sac.

- **250 L** — moins d'un sac complet par gâchée. La mini bétonnière idéale pour les réparations, les petites maisons et les chantiers exigus.
- **350 L / 385 L** — la bétonnière 1 sac de référence pour les maisons, les petits bâtiments, les semelles et les dalles.
- **420–500 L** — plus d'un sac par gâchée pour les grands chantiers et une production journalière plus élevée.

La gâchée exacte dépend toujours de votre formulation : considérez ces chiffres comme un repère, pas comme une spécification.

## Choisir une bétonnière 1 sac

**Roues et pneus.** Les modèles deux roues à grands pneus gonflables 5.00-12 se déplacent facilement sur terrain accidenté. Les modèles quatre roues sont plus stables sur les chantiers irréguliers. Les pneus pleins 4.00-8 ne crèvent jamais, un atout là où la réparation de pneus est difficile à trouver.

**Moteur.** Choisissez selon ce qui est disponible sur le chantier :
- **Électrique** (2.2–5.5 kW, 220 V) — silencieux et économique là où le courant est fiable.
- **Essence** (GP160 / GP200) — léger et facile à démarrer, le choix habituel pour les chantiers mobiles.
- **Diesel** — pour les chantiers isolés et les longues journées de travail.

**Acier de la cuve.** Nos cuves de 350 L utilisent un acier de 2 mm en partie haute et de 2.5 mm en partie basse, et la 385 L utilise 2.5 mm et 3 mm. Un acier plus épais peut être demandé pour un usage quotidien intensif.

## Tirer le meilleur de chaque gâchée

- Versez d'abord environ la moitié de l'eau, puis le gravier, le sable et le ciment, puis le reste de l'eau.
- Ne surchargez pas la cuve : une bétonnière 1 sac est dimensionnée pour un sac, et trop la remplir fait déborder le matériau et fatigue la transmission.
- Malaxez jusqu'à obtenir une couleur homogène, et gardez le même temps de malaxage pour chaque gâchée.
- Lavez la cuve à la fin de chaque journée avant que le béton ne prenne sur les pales.

## Acheter des bétonnières 1 sac au Vietnam

Phu Long, fabricant de bétonnières au Vietnam, construit des bétonnières 1 sac de 350 L et 385 L, aussi appelées malaxeurs à béton, dans son usine de Ninh Binh, ainsi que des modèles de 250 L et de 420–500 L. Chaque bétonnière peut être fabriquée avec le moteur, les pneus, la couleur et le logo dont votre marché a besoin, et plusieurs modèles peuvent partager un même conteneur.

Indiquez-nous votre marché, la quantité et votre port de destination sur WhatsApp au +84 946 964 669 ou via notre formulaire de devis : nous vous recommanderons le bon modèle 1 sac et vous enverrons un devis FOB ou CIF.`,
    },
  },

  markets: {
    'Southeast Asia': 'Asie du Sud-Est',
    'South Asia': 'Asie du Sud',
    Africa: 'Afrique',
    'Middle East': 'Moyen-Orient',
    Pacific: 'Pacifique',
    Americas: 'Amériques',
  },

  orders: [
    { caption: "Bétonnières chargées pour l'export", load: 'Bétonnières' },
    { caption: 'Conteneur mixte, machines et moteurs GP160', load: 'Chargement mixte' },
    { caption: 'Bétonnières avec moteurs GP160', load: 'Bétonnières + moteurs' },
    { caption: 'Brouettes et moteurs électriques', load: 'Brouettes' },
    { caption: 'Bétonnières avec moteurs diesel', load: 'Bétonnières + diesel' },
    { caption: 'Bétonnières bleues, conteneur IAAU 174407', load: 'Couleur personnalisée' },
  ],

  customization: {
    Engine: 'Moteur',
    Color: 'Couleur',
    Tyre: 'Pneus',
    Wheels: 'Roues',
    'Electric (2.2–5.5 kW)': 'Électrique (2.2–5.5 kW)',
    'Gasoline (GP160/GP200)': 'Essence (GP160/GP200)',
    Diesel: 'Diesel',
    Yellow: 'Jaune',
    Orange: 'Orange',
    Red: 'Rouge',
    Blue: 'Bleu',
    Green: 'Vert',
    Grey: 'Gris',
    Custom: 'Sur mesure',
    'Solid 4.00-8': 'Plein 4.00-8',
    'Pneumatic 5.00-12': 'Gonflable 5.00-12',
    '2 wheels': '2 roues',
    '4 wheels': '4 roues',
  },

  specLabels: {
    'Mixing Volume': 'Volume de malaxage',
    Weight: 'Poids',
    'Dimensions (L×W×H)': 'Dimensions (L×l×H)',
    'Upper Drum Thickness': 'Épaisseur cuve (haut)',
    'Down Drum Thickness': 'Épaisseur cuve (bas)',
    Tyres: 'Pneus',
    'Number of Wheels': 'Nombre de roues',
    'Batch Capacity': 'Capacité par gâchée',
    Capacity: 'Capacité',
    Tray: 'Benne',
    Frame: 'Châssis',
    Tyre: 'Pneu',
    Style: 'Style',
    'Steel Diameter': "Diamètre d'acier",
    'Steel Type': "Type d'acier",
    'Stirrup Shapes': "Formes d'étriers",
    'Min Stirrup Size': "Taille d'étrier min.",
    'Max Stirrup Size': "Taille d'étrier max.",
    'Feeding Motor': "Moteur d'alimentation",
    'Cutting Motor': 'Moteur de coupe',
    'Bending Motor': 'Moteur de cintrage',
    'Working Speed': 'Vitesse de travail',
    'Power Supply': 'Alimentation électrique',
    Control: 'Commande',
    'Min Production Speed': 'Vitesse de production min.',
    Productivity: 'Productivité',
    'Auto Stop': 'Arrêt automatique',
    Operation: 'Fonctionnement',
    'Row Number': 'Nombre de rangs',
    'Row Spacing': 'Écartement des rangs',
    'Output Capacity': 'Rendement',
    Speed: 'Vitesse',
    'Threshed Rate': 'Taux de battage',
    Power: 'Puissance',
    Voltage: 'Tension',
    'Air Pressure': "Pression d'air",
    'Air Flow': "Débit d'air",
    Drive: 'Entraînement',
    Material: 'Matériau',
    Coverage: 'Portée',
    'Blade Diameter': 'Diamètre des pales',
    Diameter: 'Diamètre',
    Phase: 'Phase',
    Model: 'Modèle',
    Fuel: 'Carburant',
    Brand: 'Marque',
    Type: 'Type',
    Cooling: 'Refroidissement',
    'Belt Pulley': 'Poulie',
    Start: 'Démarrage',
  },
};
