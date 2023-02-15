import { MyMiniFactoryClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: MyMiniFactoryClient

beforeAll(() => {
	c = new MyMiniFactoryClient(auth.apiKey)
})

test(`GET /collections`, async () => {
	const r = await c.collections()
	expect(r.ok).toBe(true)
})

test(`GET /collections/:id`, async () => {
	const r = await c.collection("5")
	expect(r.ok).toBe(true)
})
