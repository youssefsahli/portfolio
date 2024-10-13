import * as fs from "node:fs";
import * as path from "node:path";
const debug = (await import("debug")).default("Youssef");
import pluginIcons from "eleventy-plugin-icons";

/**
 * Function to add a virtual template to a folder and its subfolders.
 * @param {string} conf - Eleventy configuration object.
 * @param {string} baseDir - The root directory where the virtual templates will be created.
 * @param {string} parentKey - The parent key for navigation (default null for root).
 */
function createVirtualTemplatesForFolders(conf, baseDir, parentKey = null) {
	// Utility function to get all subfolders in a directory
	function getFolders(dir) {
		return fs
			.readdirSync(dir)
			.filter((file) => fs.statSync(path.join(dir, file)).isDirectory());
	}

	const folders = getFolders(baseDir);
	debug(`Processing folder: ${baseDir} -> Found subfolders: ${folders}`);

	// Set the current folder's key based on its name
	const folderName = path.basename(baseDir);
	const currentKey = folderName;

	// Add virtual template for the current folder
	const virtualPath = `${baseDir}/index.njk`; // Path for virtual template

	debug(`Creating virtual template for: ${virtualPath}`);
	let templateData = {
		layout: "base.njk",
		eleventyExcludeFromCollections: true,
		tags: currentKey,
	};
	debug(templateData);
	conf.addTemplate(
		virtualPath,
		`

  {% for item in collections.${currentKey} %}
  <article>
  {% if 'index.html' in item.url %}
  {% icon "folder" %}
  {% else %}
  {% icon "file-text" %}
  {% endif %}
  <a href="{{ item.url }}">{{ item.data.title }}</a></article>
  {% endfor %}

`,
		templateData,
	);

	// Recursively create virtual templates for each subfolder
	folders.forEach((folder) => {
		const folderPath = path.join(baseDir, folder);
		// Recursively call this function for subfolders
		createVirtualTemplatesForFolders(conf, folderPath, currentKey);
	});
}

export default function (conf) {
	debug("Start =================================");
	conf.setLayoutsDirectory("_includes/layouts");
	conf.addWatchTarget("static/css");
	conf.addWatchTarget("index.html");
	conf.addWatchTarget("essays");
	conf.addWatchTarget("search");
	conf.addPassthroughCopy("static");
	conf.addPassthroughCopy("favicon.ico");
	conf.addPassthroughCopy("essays");
	conf.addPassthroughCopy("search");
	conf.setServerPassthroughCopyBehavior("passthrough");
	createVirtualTemplatesForFolders(conf, "essays", "home");
	conf.addPlugin(pluginIcons, {
		sources: [
			{
				name: "feather",
				path: "node_modules/feather-icons/dist/icons",
				default: true,
			},
		],
	});
	conf.addFilter("urlToBreadcrumbs", function (url, currentUrl = "") {
		let parts = url.split("/").filter((part) => part); // Split URL and filter out empty parts
		let output = "<ul>";
		let cumulativeUrl = ""; // Track cumulative URL for each breadcrumb

		parts.forEach((part, index) => {
			cumulativeUrl += `/${part}`;

			// Convert part to human-readable title (e.g., cosmetics -> Cosmetics)
			let title = part;
			currentUrl = currentUrl.replace(/\/+$/, "");
			if (cumulativeUrl === currentUrl) {
				output += `<li>${title}</li>`;
			} else {
				output += `<li><a href="${cumulativeUrl}">${title}</a></li>`;
			}
		});

		output += "</ul>";
		return output;
	});
}

export const config = {
	htmlTemplateEngine: "njk",
	markdownTemplateEngine: "njk",
};
