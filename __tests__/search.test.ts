import { MyMiniFactoryClient, SearchParams } from "../src/index.js"

let c: MyMiniFactoryClient

beforeAll(() => {
	c = new MyMiniFactoryClient()
})

test(`Search`, async () => {
	const search: SearchParams = {
		q: "test",
	}
	const r = await c.search(search)
	console.log(r.status, r.statusText)
	console.log(r.content)
	expect(r.ok).toBe(true)
})
