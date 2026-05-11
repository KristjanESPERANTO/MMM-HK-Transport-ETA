/**
 * Demo config for MMM-HK-Transport-ETA
 *
 * Usage:
 *   cd modules/MMM-HK-Transport-ETA
 *   npm run demo
 */

const config = {
	address: "0.0.0.0",
	ipWhitelist: [],
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	modules: [
		{
			module: "clock",
			position: "top_left",
		},
		{
			module: "MMM-HK-Transport-ETA",
			position: "top_right",
			config: {
				transportETAProvider: "mtr",
				sta: "Hong Kong",
				reloadInterval: 60 * 1000,
				updateInterval: 5 * 1000,
				initialLoadDelay: 0,
			},
		},
	],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
