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
	archiveDownloadUrl: string
	parentId: number
	name: string
	visibility: Visibility
	description: string
	views: number
	likes: number
	publishedAt: Date
	featured: string
	complexity: number
	dimensions: string
	materialQuantity: string
	designer: Designer
	images: Image[]
	files: File[]
	categories: []
}

export interface Category {
	id: number
	slug: string
	url: string
	name: string
	children: {
		totalCount: number
		items: PartialCategory[]
	}
	parent: PartialCategory
	tags: string[]
	licenses: License[]
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
	downloadUrl: string
	thumbnailUrl: string
	size: string
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

export interface Designer {
	username: string
	name: string
	profileUlr: string
	avatarUrl: string
	avatarThumbnilUrl: string
	bio: string
	website: string
}

export interface User {
	username: string
	name: string
	profileUrl: string
	avatarUrl: string
	avatarThumbnailUrl: string
	bio: string
	website: string
}

export interface Collection {
	id: number
	name: string
	slug: string
	url: string
	owner: Designer
	featured: boolean
	public: boolean
	createdAt: string
	description: string
	coverObject: Object
	images: Image[]
	files: File[]
	categories: Category[]
	tags: string[]
	licenses: License[]
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
