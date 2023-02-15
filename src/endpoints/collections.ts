import type { Collection, MyMiniFactoryClient, Paginated } from "../index.js"

export async function collections(
	this: MyMiniFactoryClient,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/collections`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Paginated<Collection>>("GET", url, params)
}

export async function collection(this: MyMiniFactoryClient, id: string) {
	const url = `${this._url}/collections/${id}`
	return this._fetch<Collection>("GET", url)
}
