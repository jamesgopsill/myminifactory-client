import { MyMiniFactoryClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: MyMiniFactoryClient

beforeAll(() => {
	c = new MyMiniFactoryClient(auth.apiKey)
})

test(`GET /category`, async () => {
	const r = await c.categories()
	expect(r.ok).toBe(true)
})

test(`GET /category`, async () => {
	const r = await c.category("60")
	expect(r.ok).toBe(true)
})
