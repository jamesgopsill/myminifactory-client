const dateKeys = ["publishedAt", "createdAt", "date"]

export const parseDates = (obj: any) => {
	Object.keys(obj).forEach((key) => {
		// If the key is one of the keys we expect date to be in.
		if (dateKeys.includes(key)) {
			// Replace value with date object
			obj[key] = new Date(Date.parse(obj[key]))
		}

		// If it is an array then iterate through the objects and perform the recursive process objects
		if (typeof obj[key] == "object" && Array.isArray(obj[key])) {
			for (const el of obj[key]) {
				// console.log(el)
				parseDates(el)
			}
		}
		// if it is an object then process it
		if (
			typeof obj[key] == "object" &&
			Array.isArray(obj[key]) == false &&
			obj[key] != null
		) {
			parseDates(obj[key])
		}
	})
}
