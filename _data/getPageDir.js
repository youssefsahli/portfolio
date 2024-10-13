export default function () {
	return function (path) {
		if (typeof path !== "string") {
			throw new Error("Expected a string for path, but got " + typeof path);
		}

		// Remove any trailing slashes to standardize the path
		path = path.replace(/\/+$/, "");

		// Split the path by '/'
		let parts = path.split("/");
		console.log(parts);

		// If the last part contains a dot, it's likely a file, so remove it
		if (parts.length > 1 && parts[parts.length - 1].includes(".")) {
			parts.pop(); // Remove the file part
		}

		// Handle cases where there's no folder in the path
		if (parts.length <= 1) {
			return null; // No folder in the path
		}

		return parts[parts.length - 1]; // Return the last folder
	};
}
