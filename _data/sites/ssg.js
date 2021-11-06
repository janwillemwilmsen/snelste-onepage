module.exports = {
	name: "ssg", // optional, falls back to object key
	description: "Static Site Generator web sites",
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