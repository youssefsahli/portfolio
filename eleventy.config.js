export default function (conf) {
	conf.setLayoutsDirectory("_includes/layouts");
	conf.addPassthroughCopy("static");
	conf.addPassthroughCopy("favicon.ico");
	conf.setServerPassthroughCopyBehavior("passthrough");
	conf.addNunjucksGlobal("theme-mode", "light");
}
