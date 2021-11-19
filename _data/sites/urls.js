module.exports = {
	name: "KLM performance Vattenfall Urban Storage en E-commerce bedrijven Dashboard", // optional, falls back to object key
	description: "Demo Sitespeed en accessibility dashboard <a href='https://google.com'>google.com</a> Demo Sitespeed en accessibility dashboard <a href='https://google.com'>google.com</a> Demo Sitespeed en accessibility dashboard <a href='https://google.com'>google.com</a> Demo Sitespeed en accessibility dashboard <a href='https://google.com'>google.com</a> Demo Sitespeed en accessibility dashboard <a href='https://google.com'>google.com</a> Demo Sitespeed en accessibility dashboard <a href='https://google.com'>google.com</a> Demo Sitespeed en accessibility dashboard <a href='https://google.com'>google.com</a> Demo Sitespeed en accessibility dashboard <a href='https://google.com'>google.com</a> Demo Sitespeed en accessibility dashboard <a href='https://google.com'>google.com</a>",
	seotitle: "Demo dashboard",
	metadescription: "Demo Sitespeed en accessibility dashboard, benchmark web pages over time.",
	footertxt: "INFO: <br><br> Html werkt <a href='https://google.com'>google.com</a>",


	backgroundColor: "#151518",
	// LOGO 
	logo: "https://eon-speedlify.vercel.app/assets/img/logo.svg",
	// logo: "https://cdn.vattenfall.nl/vattenfallnlprd/11.1.40/assets/images/logo-vattenfall.svg",
	logowidth: '80px',
	logoheight: '80px',
	logoBackgroundColor: "",
	paddingLogo: "10px",
	borderRadius: "0%",
	// HIDE LOGO : none inline block 
	logoHidden: 'inline',

	// BACKGROUND IMAGES.  
	// https://svgwave.in/
	// headerBackgroundImageSmall: "/bg.png",
	headerBackgroundImageSmall: "https://www.essent.nl/content/Images/219862_isolatie-huis.jpg",
	flipBackgroundImageMobile: "1",
	headerBackgroundImage: "/bg.svg",
	// headerBackgroundImage: "https://www.vattenfall.nl/media/_homepage-nieuw/vattenfall-disrupt-man-zit-op-strand-fossielvrij-binnen-een-generatie.jpg?width=2048",
	// Rotate background image horizontal.  1 or -1
	flipBackgroundImageDesktop: "-1",
	
	// HEADER HIGHT:
	backgroundhight: "400px",


	// FADE ON TOP OF BACKGROUND IMAGE. 
	// From, To. RGBA colorcodes. Last numer is level of transparancy. 1 = fully covered 0 = transparant. Use 0.8 0.6 0.5 etcetera. 
	fadecolorFrom: '21,21,24,1',
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
		"https://essent.nl",
		"https://unive.nl",
		"https://sneekweek.nl",
		"https://bol.com",
		 
	],
	
	seodescriptions: [
		"nu5",
		"nu5",
		"nu5",
		"nu5",
		"nu5",
		"nu5",
		"nu5",
	],
	metadescriptions: [
		"nu5",
		"nu5",
		"nu5",
		"nu5",
		"nu5",
		"nu5",
		"nu5",	],
	slugs: [
		"nu5",
		"nu5",
		"nu5",
		"nu5",
		"nu5",
		"nu5",
		"nu5",
	 
	 ]
};