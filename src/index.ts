import * as Categories from "./endpoints/categories.js"
import * as Collections from "./endpoints/collections.js"
import * as Files from "./endpoints/files.js"
import * as Objects from "./endpoints/objects.js"
import * as Search from "./endpoints/search.js"
import * as User from "./endpoints/user.js"
import { fetchIt } from "./fetch-it.js"

export * from "./definitions/enums.js"
export * from "./definitions/interfaces.js"

export class MyMiniFactoryClient {
	protected _url: string = "https://www.myminifactory.com/api/v2"
	protected _apiKey: string = ""
	constructor(apiKey: string = "") {
		this._apiKey = apiKey
	}
	protected _fetch = fetchIt

	public ping = () => "pong"
	// categories
	public categories = Categories.categories
	public category = Categories.category
	// collections
	public collections = Collections.collections
	public collection = Collections.collection
	// files
	public file = Files.file
	public uploadFile = Files.uploadFile
	public uploadImage = Files.uploadImage
	// objects
	public object = Objects.object
	public objectFiles = Objects.objectFiles
	public objectPrints = Objects.objectPrints
	public objectUploadStatus = Objects.objectUploadStatus
	public uploadObjectMetadata = Objects.uploadObjectMetadata
	public patchObjectMetadata = Objects.patchObjectMetadata
	// search
	public search = Search.search
	// user
	public me = User.me
	public user = User.user
	public userFollowers = User.userFollowers
	public userFollowing = User.userFollowing
	public userObjects = User.userObjects
	public userLikedObjects = User.userLikedObjects
	public userCollections = User.userCollections
	public userCollection = User.userCollection
}
