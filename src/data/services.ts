export interface Service {
	slug: string;
	title: string;
	shortDescription: string;
	icon: string;
	image?: string; // Ruta a la imagen del servicio
	fullDescription: string;
	features: string[];
	includes?: string[];
	additionalInfo?: string;
}

export const services: Service[] = [
	{
		slug: "juegos-mecanicos",
		title: "Juegos Mecánicos",
		shortDescription: "Juegos mecánicos en los que contamos con el toro mecánico y el reloj mecánico",
		icon: "🎠",
		fullDescription: "Diversión garantizada con nuestros juegos mecánicos de alta calidad. Perfectos para eventos de todas las edades, nuestros juegos mecánicos son seguros, emocionantes y garantizan horas de entretenimiento.",
		features: [
			"Toro mecánico",
			"Reloj mecánico",
			"Supervisión profesional durante todo el evento",
			"Instalación y desmontaje incluidos",
			"Equipos certificados y en perfecto estado"
		],
		includes: [
			"Transporte e instalación",
			"Personal de supervisión",
		]
	},
	{
		slug: "juegos-inflables",
		title: "Juegos inflables",
		shortDescription: "Contamos con tobogán, castillo y cuncuna inflable.",
		icon: "🏰",
		fullDescription: "Nuestra amplia variedad de juegos inflables hará que los más pequeños disfruten al máximo. Desde castillos hasta toboganes, todos nuestros inflables cumplen con los más altos estándares de seguridad.",
		features: [
			"Castillo inflable",
			"Tobogán inflable",
			"Cuncuna inflable",
			"Materiales de primera calidad y resistentes",
			"Diseños coloridos y atractivos"
		],
		includes: [
			"Instalación profesional",
			"Supervisión durante el evento",
			
		]
	},
	{
		slug: "juegos-de-salon",
		title: "Juegos de salón",
		shortDescription: "Diversión garantizada para los más pequeños. Shows interactivos, coloridos y llenos de asombro adaptados a cada edad.",
		icon: "🎪",
		fullDescription: "Transformamos cualquier espacio en un mundo mágico de diversión. Nuestros juegos de salón incluyen actividades interactivas, shows y entretenimiento adaptado a cada grupo de edad.",
		features: [
			"Shows interactivos y educativos",
			"Actividades adaptadas por edad",
			"Animadores profesionales",
			"Materiales seguros y de calidad",
			"Ambiente colorido y festivo"
		],
		includes: [
			"Personal de animación",
			"Materiales y equipos",
			"Coordinación de actividades",
			"Premios y sorpresas"
		]
	},
	{
		slug: "carritos",
		title: "Carritos",
		shortDescription: "Para endulzar tu evento contamos con los servicios de palomitas de maíz, algodones de azúcar y helados soft",
		icon: "🍿",
		image: "/images/carritos/carritos1.jpeg", // Imagen principal del servicio
		fullDescription: "Endulza tu evento con nuestros deliciosos carritos de comida. Ofrecemos palomitas de maíz recién hechas, algodones de azúcar artesanales y helados soft que serán las delicias de grandes y pequeños.",
		features: [
			"Palomitas de maíz recién hechas",
			"Algodones de azúcar artesanales",
			"Helados barquillo",
			"Servicio rápido y eficiente"
		],
		includes: [
			"Carrito decorado",
			"Personal de servicio",
			"Materiales e ingredientes",
			"Utensilios y empaques"
		]
	},
	{
		slug: "juegos-stand",
		title: "Juegos Stand",
		shortDescription: "Juegos clásicos como martillo de fuerza, rana de bronce y juegos de ingenio",
		icon: "🎯",
		fullDescription: "Revive la nostalgia con nuestros juegos stand clásicos. Desde el martillo de fuerza hasta la rana de bronce, ofrecemos diversión tradicional que nunca pasa de moda.",
		features: [
			"Martillo de fuerza",
			"Rana de bronce",
			"Juegos de ingenio y destreza",
			"Equipos en perfecto estado"
		],
		includes: [
			"Instalación de juegos",
			"Personal de supervisión",

		]
	},
	{
		slug: "shows",
		title: "Shows",
		shortDescription: "Espectáculos y entretenimiento en vivo para hacer de tu evento una experiencia inolvidable.",
		icon: "🎬",
		fullDescription: "Lleva tu evento al siguiente nivel con nuestros espectáculos en vivo. Ofrecemos una amplia variedad de shows profesionales que harán de tu celebración un momento inolvidable.",
		features: [
			"Shows profesionales y de calidad",
			"Variedad de espectáculos disponibles",
			"Artistas experimentados",
			"Equipos de sonido e iluminación",
			"Adaptables a diferentes espacios"
		],
		includes: [
			"Artistas profesionales",
			"Equipos técnicos",
			"Coordinación del espectáculo",
			"Sonido e iluminación básica"
		]
	},
	{
		slug: "recuerdos-foto-video",
		title: "Recuerdos: Foto/Video",
		shortDescription: "Contamos con los servicios de Tótem fotográfico y Video 360",
		icon: "📷",
		fullDescription: "Captura los mejores momentos de tu evento con nuestros servicios de fotografía y video. Ofrecemos tótems fotográficos y video 360 para que tus invitados se lleven recuerdos únicos.",
		features: [
			"Tótem fotográfico interactivo",
			"Video 360 para experiencias inmersivas",
			"Fotos instantáneas de alta calidad",
			"Compartición digital inmediata en video 360",
			"Equipos profesionales de última generación"
		],
		includes: [
			"Equipos profesionales",
			"Personal técnico",
			"Plataforma de descarga digital"
		]
	}
];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find(service => service.slug === slug);
}

