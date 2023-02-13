import type {
	Collection,
	MyMiniFactoryClient,
	Object,
	Paginated,
	User,
} from "../index.js"

export async function me(this: MyMiniFactoryClient) {
	const url = `${this._url}/user`
	return this._fetch<User>("GET", url)
}

export async function user(this: MyMiniFactoryClient, username: string) {
	const url = `${this._url}/users/${username}`
	return this._fetch<User>("GET", url)
}

export async function userFollowing(
	this: MyMiniFactoryClient,
	username: string,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/users/${username}/following`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Paginated<User>>("GET", url, params)
}

export async function userFollowers(
	this: MyMiniFactoryClient,
	username: string,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/users/${username}/followers`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Paginated<User>>("GET", url, params)
}

export async function userObjects(
	this: MyMiniFactoryClient,
	username: string,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/users/${username}/objects`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Paginated<Object>>("GET", url, params)
}

export async function userLikedObjects(
	this: MyMiniFactoryClient,
	username: string,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/users/${username}/objects_liked`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Paginated<Object>>("GET", url, params)
}

export async function userCollections(
	this: MyMiniFactoryClient,
	username: string,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/users/${username}/collections`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Paginated<Collection>>("GET", url, params)
}

export async function userCollection(
	this: MyMiniFactoryClient,
	username: string,
	collectionSlug: string,
	page: number = 1,
	perPage: number = 20
) {
	const url = `${this._url}/users/${username}/collections/${collectionSlug}`
	const params = {
		page,
		perPage,
	}
	return this._fetch<Collection>("GET", url, params)
}
