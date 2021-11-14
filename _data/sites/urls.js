module.exports = {
	name: "Demo dashboard", // optional, falls back to object key
	description: "Demo Sitespeed en accessibility dashboard",
	seotitle: "Demo dashboard",
	metadescription: "Demo Sitespeed en accessibility dashboard, benchmark web pages over time.",
	footertxt: "INFO:<br> Tuned by ",
	backgroundColor: "#151518",
	// LOGO 
	// logo: "https://eon-speedlify.vercel.app/assets/img/logo.svg",
	logo: "https://cdn.vattenfall.nl/vattenfallnlprd/11.1.40/assets/images/logo-vattenfall.svg",
	logowidth: '100px',
	logoheight: '100px',
	logoBackgroundColor: "white",
	paddingLogo: "10px",
	borderRadius: "50%",
	// HIDE LOGO : none inline block 
	logoHidden: 'inline',

	// BACKGROUND IMAGES. headerBackgroundImage is used of mobile and desktop when configured. If Small is configured this image is used on mobile. No images gives background color. 
	// https://svgwave.in/
	// headerBackgroundImageSmall: "/bg.png",
	// headerBackgroundImageSmall: "https://www.essent.nl/content/Images/219862_isolatie-huis.jpg",
	flipBackgroundImageMobile: "1",
	headerBackgroundImage: "/bg.svg",
	// headerBackgroundImage: "https://www.vattenfall.nl/media/_homepage-nieuw/vattenfall-disrupt-man-zit-op-strand-fossielvrij-binnen-een-generatie.jpg?width=2048",
	// Rotate background image horizontal.  1 or -1
	flipBackgroundImageDesktop: "-1",
	
	// HEADER HIGHT:
	backgroundhight: "400px",


	// FADE ON TOP OF BACKGROUND IMAGE. From, To. RGBA colorcodes. Last numer is level of transparancy. 1 = fully covered 0 = transparant. Use 0.8 0.6 0.5 etcetera. 
	fadecolorFrom: '21,21,24,0.9',
	fadecolorTo: '21,21,24,0',

	titleTextColor: "",
	titleStyle: "italic",  // normal italic


	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false, // !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 1, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.11ty.dev/",
		"https://nuxtjs.org/",
		"https://gridsome.org/",
	],
	slugs: [
		"SLUGs11Ty",
		"SLUGNuxt",
		"SLUGridsome",
	],
	seodescriptions: [
		"SEOEleventy",
		"SEONuxtNuxt",
		"SEOGridgrid",
	],
	metadescriptions: [
		"Metaleventy",
		"MetaNuxtNuxt",
		"MetaGridgrid",
	]
};