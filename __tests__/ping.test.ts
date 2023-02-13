import { MyMiniFactoryClient } from "../src/index.js"

let c: MyMiniFactoryClient

beforeAll(() => {
	c = new MyMiniFactoryClient()
})

test(`Ping`, async () => {
	expect(c.ping()).toBe("pong")
})
