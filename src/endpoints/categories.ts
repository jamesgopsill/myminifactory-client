import type { Category, MyMiniFactoryClient, Paginated } from "../index.js"

export async function categories(
	this: MyMiniFactoryClient,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/categories`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Paginated<Category>>("GET", url, params)
}

export async function category(this: MyMiniFactoryClient, id: string) {
	const url = `${this._url}/categories/${id}`
	return this._fetch<Category>("GET", url)
}
