import { MyMiniFactoryClient, SearchParams } from "../src/index.js"
import { auth } from "./test.config.js"

let c: MyMiniFactoryClient

beforeAll(() => {
	c = new MyMiniFactoryClient(auth.apiKey)
})

test(`GET /search`, async () => {
	const search: SearchParams = {
		q: "test",
	}
	const r = await c.search(search)
	expect(r.ok).toBe(true)
})
