const fastglob = require("fast-glob");



// lees filename, de category, en haal de urls die er in staan op als een KeyValue pair.   [ auto = fiat, audi, bmw etc // voetbal = psv, ajax, feyenoord]
async function getCategoryToUrlMap() {
	let categories = await fastglob("./_data/sites/*.js", {
		caseSensitiveMatch: false
	});

	let map = {};
	for(let file of categories) {
		let categoryName = file.split("/").pop().replace(/\.js$/, "");
		map[categoryName] = [];

		let categoryData = require(`./sites/${categoryName}.js`);
		if(typeof categoryData === "function") {
			categoryData = await categoryData();
		}
		map[categoryName] = categoryData.urls.map(url => url.toLowerCase());
	}

	return map;
}

// Nieuwe Set maken, met alle maps (met daarin de categorienamen en urls) 
function getCategoryList(map, url) {
	let categories = new Set();
	for(let categoryName in map) {
		if(map[categoryName].indexOf(url.toLowerCase())) {
			categories.add(categoryName);
		}
	}
	return Array.from(categories);
}

 
// lees filename, de category, en haal de seos die er in staan op als een KeyValue pair.   [ auto = fiatseo, audiseo, bmwseo etc // voetbal = psvseo, ajax, feyenoordseo]
async function getSeoToUrlMap() {
	let categories = await fastglob("./_data/sites/*.js", {
		caseSensitiveMatch: false
	});

	let map = {};
	for(let file of categories) {
		let categoryName = file.split("/").pop().replace(/\.js$/, "");
		map[categoryName] = [];

		let categoryData = require(`./sites/${categoryName}.js`);
		if(typeof categoryData === "function") {
			categoryData = await categoryData();
		}
		map[categoryName] = categoryData.seodescriptions.map(seodescription => seodescription.toLowerCase());
	}

	return map;
}

// Nieuwe Set maken, met alle maps (met daarin de categorienamen en urls) 
function getSeoList(map, seodescription) {
	let categories = new Set();
	for(let categoryName in map) {
		if(map[categoryName].indexOf(seodescription.toLowerCase())) {
			categories.add(categoryName);
		}
	}
	return Array.from(categories);
}









module.exports = async function() {
	let categoryMap = await getCategoryToUrlMap();
	let seoMap = await getSeoToUrlMap();
	let resultFiles = await fastglob("./_data/results/**/*.json", {
		caseSensitiveMatch: false
	});

	let sites = {};

	for(let resultFile of resultFiles) {
		let split = resultFile.split("/");
		let filename = split.pop();
		let hash = split.pop();
		let resultData = require(`.${resultFile}`);

		let categories = [];
		if(resultData.requestedUrl) {
			categories = getCategoryList(categoryMap, resultData.requestedUrl);
		}

		let scategories = [];
		if(resultData.requestedUrl) {
			scategories = getSeoList(seoMap, resultData.requestedUrl);
		}

 
		sites[hash] = {
			requestedUrl: resultData.requestedUrl,
			url: resultData.url,
			hash: hash,
			scategories: scategories.url,
			categories: categories,
			// Deprecated
			vertical: categories[0],
		};
	}
	return Object.values(sites);
};