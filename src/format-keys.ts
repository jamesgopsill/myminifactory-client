// https://matthiashager.com/converting-snake-case-to-camel-case-object-keys-with-javascript

const toCamel = (s: string) => {
	return s.replace(/([-_][a-z])/gi, ($1) => {
		return $1.toUpperCase().replace("-", "").replace("_", "")
	})
}

// https://stackoverflow.com/questions/54246477/how-to-convert-camelcase-to-snake-case-in-javascript
const toSnake = (s: string) => {
	return s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

const isArray = function (a: any) {
	return Array.isArray(a)
}

const isObject = function (o: any) {
	return o === Object(o) && !isArray(o) && typeof o !== "function"
}

export const keysToCamel = (o: any) => {
	if (isObject(o)) {
		const n = {}

		Object.keys(o).forEach((k) => {
			//@ts-expect-error
			n[toCamel(k)] = keysToCamel(o[k])
		})

		return n
	} else if (isArray(o)) {
		return o.map((i: any) => {
			return keysToCamel(i)
		})
	}
	return o
}

export const keysToSnake = (o: any) => {
	if (isObject(o)) {
		const n = {}

		Object.keys(o).forEach((k) => {
			//@ts-expect-error
			n[toSnake(k)] = keysToSnake(o[k])
		})

		return n
	} else if (isArray(o)) {
		return o.map((i: any) => {
			return keysToSnake(i)
		})
	}
	return o
}
