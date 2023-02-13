import type {
	MyMiniFactoryClient,
	Object,
	Paginated,
	SearchParams,
} from "../index.js"

export async function search(
	this: MyMiniFactoryClient,
	searchParams: SearchParams
) {
	const url = `${this._url}/search`
	return this._fetch<Paginated<Object>>("GET", url, searchParams)
}
