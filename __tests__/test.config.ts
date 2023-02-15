import { existsSync, readFileSync } from "node:fs"

export let auth = {
	apiKey: "",
}

const fname = `${__dirname}/test-auth.json`

if (existsSync(fname)) {
	auth = JSON.parse(readFileSync(fname).toString())
}

if (process.env["MYMINIFACTORY_API_KEY"] != undefined) {
	auth.apiKey = process.env["MYMINIFACTORY_API_KEY"]
}
