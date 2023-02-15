import { MyMiniFactoryClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: MyMiniFactoryClient
const objectId = "258957"

beforeAll(() => {
	c = new MyMiniFactoryClient(auth.apiKey)
})

test(`GET /objects/:id`, async () => {
	const r = await c.object(objectId)
	expect(r.ok).toBe(true)
})

test(`GET /objects/:id/files`, async () => {
	const r = await c.objectFiles(objectId)
	expect(r.ok).toBe(true)
})

test(`GET /objects/:id/prints`, async () => {
	const r = await c.objectPrints(objectId)
	expect(r.ok).toBe(true)
})

test(`GET /objects/:id/upload_status`, async () => {
	const r = await c.objectUploadStatus(objectId)
	expect(r.ok).toBe(false)
})
