import type { LicenseTypes, Visibility } from "./enums.js"

export type HttpResponse<T> =
	| ({
			ok: true
			status: 200
			content: T
	  } & Response)
	| ({
			ok: true
			status: 204
			content: undefined
	  } & Response)
	| ({
			ok: false
			content: undefined
	  } & Response)

export interface SearchParams {
	q: string
	page?: number
	perPage?: number
	sort?: "visits" | "date" | "popularity"
	order?: "desc" | "asc"
	cat?: string
	support?: string
	tech?: string
	complexity?: "eas" | "med" | "diff"
	featured?: 0 | 1
	remix?: string
	commercialUse?: string
	exclusive?: string
}

export interface Paginated<T> {
	totalCount: number
	items: T[]
}

export interface Object {
	id: number
	url: string
	name: string
	visibility: Visibility
	visibilityName: string
	listed: boolean
	status: number
	statusName: string
	description: string | null
	descriptionHtml: string
	printingDetails: string | null
	printingDetailsHtml: string | null
	featured: boolean
	support: boolean
	complexity: unknown | null
	complexityName: string | null
	dimensions: string | null
	materialQuantity: string | null
	images: Image[]
	views: number
	likes: number
	publishedAt: Date
	tags: string[]
	licenses: License[]
	filters: string[]
	fileMode: number
	categories: {
		totalCount: 0
		items: unknown[]
	}
	files: {
		totalCount: number
		items: unknown[]
	}
	prints: {
		totalCount: 0
		items: unknown[]
	}
	designer: User
	license: string
	price: {
		currency: string
		symbol: string
		value: string
	} | null
	purchaseUrl: string | null
	archiveDownloadUrl: string | null
}

export interface Category {
	id: number
	slug: string
	url: string
	name: string
	popularity: number
	bannerUrl: string | null
	children: {
		totalCount: number
		items: Category[]
	}
	parent: Category
	objects?: {
		totalCount: number
		items: Object[]
	}
}

export interface License {
	type: LicenseTypes
	value: boolean
}

export interface PartialCategory {
	id: number
	slug: string
	name: string
}

export interface File {
	id: number
	filename: string
	description: string
	status: number
	statusName: string
	size: number
	patchUrl: string
	thumbnailUrl: string | null
	downloadUrl: string | null
	createdAt: Date
	render360Urls: string[]
}

export interface Image {
	id: number
	isPrimary: boolean
	original: ImageDetails
	thumbnail: ImageDetails
	standard: ImageDetails
}

export interface ImageDetails {
	url: string
	width: string
	height: string
}

export interface User {
	username: string
	name: string
	isAdmin: boolean
	isPremium: boolean
	isStoreManager: boolean
	isCampaignManager: boolean
	profileUrl: string
	profileSettingsUrl: string
	avatarUrl: string
	avatarThumbnailUrl: string
	avatarSmallThumbnailUrl: string
	coverUrl: string
	website: string | null
	bio: string
	followings: number
	followers: number
	likes: number
	views: number
	objects: number
	totalPrints: number
	totalCollections: number
	totalObjectsStore: number
	printingSince: {
		date: Date
		timezoneType: number
		timezone: string
	} | null
	socialNetworks: {
		totalCount: number
		items: SocialNetwork[]
	}
	printers: {
		totalCount: number
		items: Printer[]
	}
}

export interface SocialNetwork {
	id: number
	name: string
	value: string
}

export interface Printer {
	id: number
	name: string
	automaticSlicing: boolean
	premium: boolean
	model: string
	brand: string
	image: string | null
	website: string
	nozzleDiameter: number
	dimensions: Dimensions
}

export interface Dimensions {
	x: number
	y: number
	z: number
}

export interface Collection {
	id: number
	name: string
	slug: string
	url: string
	owner: {
		username: string
		name: string
		isAdmin: string
		isPremium: string
		isStoreManager: string
		isCampaignManager: string
	}
	featured: boolean
	isPublic: boolean
	public: boolean
	createdAt: Date
	description: string | null
	objImg: string[]
	totalObjects: number
}

export interface UploadStatus {
	id: number
	name: string
	files: Status[]
	images: Status[]
}

export interface Status {
	uploadId: string
	filename: string
	status: string
}

export interface MetadataParams {
	name: string
	description: string
	visibility: Visibility
	howTo: string
	dimensions: string
	timeToDoFrom: number
	timeToDoTo: number
	supportFree: boolean
	filamentQuantity: string
	clientUrl: string
	tags: string
	licenses: License[]
	files: any[]
	images: any[]
}
