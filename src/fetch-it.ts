import { keysToCamel, keysToSnake } from "./format-keys.js"
import type { HttpResponse, MyMiniFactoryClient } from "./index.js"
import { parseDates } from "./parse-dates.js"

export async function fetchIt<T>(
	this: MyMiniFactoryClient,
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
	url: string,
	params: { [k: string]: any } | undefined = undefined
) {
	let config: any = {
		method,
		mode: "cors",
		headers: {},
	}

	if (typeof params === "object") {
		params = keysToSnake(params)
	}

	if (this._apiKey) {
		url += `?key=${this._apiKey}`
	}

	// Query params
	if (method === "GET" && typeof params === "object") {
		if (this._apiKey) {
			url += "&"
		} else {
			url += "?"
		}
		for (const [k, v] of Object.entries(params)) {
			url += k + "=" + v + "&"
		}
		url = url.slice(0, -1)
		url = encodeURI(url)
	}

	if (method === "POST" && typeof params === "object") {
		config.headers["Content-Type"] = "application/json"
		config.body = JSON.stringify(params)
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.content = undefined
	if (r.ok && r.status === 200) {
		if (r.headers.get("Content-Type")?.includes("application/json")) {
			let content = await r.json()
			content = keysToCamel(content)
			parseDates(content)
			r.content = content
		}
	}
	return r
}
