import type {
	Image,
	MetadataParams,
	MyMiniFactoryClient,
	Object,
	Paginated,
} from "../index.js"

export async function object(this: MyMiniFactoryClient, id: string) {
	const url = `${this._url}/objects/${id}`
	return this._fetch<Object>("GET", url)
}

export async function objectFiles(
	this: MyMiniFactoryClient,
	id: string,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/objects/${id}/files`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Paginated<File>>("GET", url, params)
}

export async function objectPrints(
	this: MyMiniFactoryClient,
	id: string,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/objects/${id}/prints`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Paginated<Image>>("GET", url, params)
}

export async function objectUploadStatus(
	this: MyMiniFactoryClient,
	id: string
) {
	const url = `${this._url}/objects/${id}/upload_status`
	return this._fetch("GET", url)
}

export async function uploadObjectMetadata(
	this: MyMiniFactoryClient,
	params: MetadataParams
) {
	const url = `${this._url}/object`
	return this._fetch("POST", url, params)
}

export async function patchObjectMetadata(
	this: MyMiniFactoryClient,
	params: Partial<MetadataParams>
) {
	const url = `${this._url}/object`
	return this._fetch("PATCH", url, params)
}
