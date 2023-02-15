import { MyMiniFactoryClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: MyMiniFactoryClient
const username = "Scan The World"
const slug = "stw-skulls"

beforeAll(() => {
	c = new MyMiniFactoryClient(auth.apiKey)
})

test(`GET /users/:username`, async () => {
	const r = await c.user(username)
	expect(r.ok).toBe(true)
})

test(`GET /users/:username/following`, async () => {
	const r = await c.userFollowing(username, 1, 2)
	expect(r.ok).toBe(true)
})

test(`GET /users/:username/followers`, async () => {
	const r = await c.userFollowers(username, 1, 2)
	expect(r.ok).toBe(true)
})

test(`GET /users/:username/objects`, async () => {
	const r = await c.userObjects(username, 1, 2)
	expect(r.ok).toBe(true)
})

test(`GET /users/:username/objects_liked`, async () => {
	const r = await c.userLikedObjects(username, 1, 2)
	expect(r.ok).toBe(true)
})

test(`GET /users/:username/collections`, async () => {
	const r = await c.userCollections(username, 1, 2)
	expect(r.ok).toBe(true)
})

test(`GET /users/:username/collections/:slug`, async () => {
	const r = await c.userCollection(username, slug)
	expect(r.ok).toBe(true)
})
