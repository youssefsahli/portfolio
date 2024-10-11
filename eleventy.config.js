import pluginIcons from "eleventy-plugin-icons";

export default function (conf) {
	conf.setLayoutsDirectory("_includes/layouts");
	conf.addPassthroughCopy("static");
	conf.addPassthroughCopy("favicon.ico");
	conf.setServerPassthroughCopyBehavior("passthrough");
	conf.addNunjucksGlobal("theme-mode", "light");
	conf.addPlugin(pluginIcons, {
		sources: [
			{
				name: "feather",
				path: "node_modules/feather-icons/dist/icons",
				default: true,
			},
		],
	});
}
