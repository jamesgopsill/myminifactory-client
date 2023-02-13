import type { File, MyMiniFactoryClient } from "../index.js"

export async function file(this: MyMiniFactoryClient, id: string) {
	const url = `${this._url}/files/${id}`
	return this._fetch<File>("GET", url)
}

export async function uploadFile(this: MyMiniFactoryClient) {
	// TODO: Implement
	return "Not implemented yet."
}

export async function uploadImage(this: MyMiniFactoryClient) {
	// TODO: Implement
	return "Not implemented yet."
}
