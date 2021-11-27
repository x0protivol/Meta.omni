export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: any;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: any;
	/** Input type for dynamic zone content of Editorial */
	EditorialContentDynamicZoneInput: any;
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: any;
	/** The `Long` scalar type represents 52-bit integers */
	Long: any;
	/** A time string with format: HH:mm:ss.SSS */
	Time: any;
	/** The `Upload` scalar type represents a file upload. */
	Upload: any;
};

export type AboutUs = {
	__typename?: 'AboutUs';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
};

export type AboutUsInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type AdminUser = {
	__typename?: 'AdminUser';
	id: Scalars['ID'];
	username: Maybe<Scalars['String']>;
	firstname: Scalars['String'];
	lastname: Scalars['String'];
};

export type AffiliateInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type Affiliates = {
	__typename?: 'Affiliates';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
};

export type Brand = {
	__typename?: 'Brand';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	title: Scalars['String'];
	description: Scalars['String'];
	slug: Scalars['String'];
	products: Maybe<Array<Maybe<Product>>>;
};

export type BrandProductsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type BrandAggregator = {
	__typename?: 'BrandAggregator';
	count: Maybe<Scalars['Int']>;
	totalCount: Maybe<Scalars['Int']>;
};

export type BrandConnection = {
	__typename?: 'BrandConnection';
	values: Maybe<Array<Maybe<Brand>>>;
	groupBy: Maybe<BrandGroupBy>;
	aggregate: Maybe<BrandAggregator>;
};

export type BrandConnectionCreated_At = {
	__typename?: 'BrandConnectionCreated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<BrandConnection>;
};

export type BrandConnectionDescription = {
	__typename?: 'BrandConnectionDescription';
	key: Maybe<Scalars['String']>;
	connection: Maybe<BrandConnection>;
};

export type BrandConnectionId = {
	__typename?: 'BrandConnectionId';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<BrandConnection>;
};

export type BrandConnectionSlug = {
	__typename?: 'BrandConnectionSlug';
	key: Maybe<Scalars['String']>;
	connection: Maybe<BrandConnection>;
};

export type BrandConnectionTitle = {
	__typename?: 'BrandConnectionTitle';
	key: Maybe<Scalars['String']>;
	connection: Maybe<BrandConnection>;
};

export type BrandConnectionUpdated_At = {
	__typename?: 'BrandConnectionUpdated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<BrandConnection>;
};

export type BrandGroupBy = {
	__typename?: 'BrandGroupBy';
	id: Maybe<Array<Maybe<BrandConnectionId>>>;
	created_at: Maybe<Array<Maybe<BrandConnectionCreated_At>>>;
	updated_at: Maybe<Array<Maybe<BrandConnectionUpdated_At>>>;
	title: Maybe<Array<Maybe<BrandConnectionTitle>>>;
	description: Maybe<Array<Maybe<BrandConnectionDescription>>>;
	slug: Maybe<Array<Maybe<BrandConnectionSlug>>>;
};

export type BrandInput = {
	title: Scalars['String'];
	description: Scalars['String'];
	slug: Scalars['String'];
	products: Maybe<Array<Maybe<Scalars['ID']>>>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type Category = {
	__typename?: 'Category';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	title: Scalars['String'];
	slug: Scalars['String'];
	parent: Maybe<Category>;
	categoryDescription: Maybe<Array<Maybe<ComponentStoreAppearance>>>;
	locale: Maybe<Scalars['String']>;
	appearsIn: Maybe<Array<Maybe<Section>>>;
	localizations: Maybe<Array<Maybe<Category>>>;
};

export type CategoryAppearsInArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type CategoryLocalizationsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type CategoryAggregator = {
	__typename?: 'CategoryAggregator';
	count: Maybe<Scalars['Int']>;
	totalCount: Maybe<Scalars['Int']>;
};

export type CategoryConnection = {
	__typename?: 'CategoryConnection';
	values: Maybe<Array<Maybe<Category>>>;
	groupBy: Maybe<CategoryGroupBy>;
	aggregate: Maybe<CategoryAggregator>;
};

export type CategoryConnectionCreated_At = {
	__typename?: 'CategoryConnectionCreated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionId = {
	__typename?: 'CategoryConnectionId';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionLocale = {
	__typename?: 'CategoryConnectionLocale';
	key: Maybe<Scalars['String']>;
	connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionParent = {
	__typename?: 'CategoryConnectionParent';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionSlug = {
	__typename?: 'CategoryConnectionSlug';
	key: Maybe<Scalars['String']>;
	connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionTitle = {
	__typename?: 'CategoryConnectionTitle';
	key: Maybe<Scalars['String']>;
	connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionUpdated_At = {
	__typename?: 'CategoryConnectionUpdated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<CategoryConnection>;
};

export type CategoryGroupBy = {
	__typename?: 'CategoryGroupBy';
	id: Maybe<Array<Maybe<CategoryConnectionId>>>;
	created_at: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
	updated_at: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
	title: Maybe<Array<Maybe<CategoryConnectionTitle>>>;
	slug: Maybe<Array<Maybe<CategoryConnectionSlug>>>;
	parent: Maybe<Array<Maybe<CategoryConnectionParent>>>;
	locale: Maybe<Array<Maybe<CategoryConnectionLocale>>>;
};

export type CategoryInput = {
	title: Scalars['String'];
	slug: Scalars['String'];
	parent: Maybe<Scalars['ID']>;
	categoryDescription: Maybe<Array<Maybe<ComponentStoreAppearanceInput>>>;
	appearsIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type ComponentEditorialInstagramPost = {
	__typename?: 'ComponentEditorialInstagramPost';
	id: Scalars['ID'];
	postURL: Scalars['String'];
	clientAccessToken: Maybe<Scalars['String']>;
};

export type ComponentEditorialInstagramPostInput = {
	postURL: Scalars['String'];
	clientAccessToken: Maybe<Scalars['String']>;
};

export type ComponentEditorialMeta = {
	__typename?: 'ComponentEditorialMeta';
	id: Scalars['ID'];
	name: Scalars['String'];
	value: Scalars['String'];
};

export type ComponentEditorialMetaInput = {
	name: Scalars['String'];
	value: Scalars['String'];
};

export type ComponentEditorialParagraph = {
	__typename?: 'ComponentEditorialParagraph';
	id: Scalars['ID'];
	Content: Maybe<Scalars['String']>;
};

export type ComponentEditorialParagraphInput = {
	Content: Maybe<Scalars['String']>;
};

export type ComponentEditorialSlide = {
	__typename?: 'ComponentEditorialSlide';
	id: Scalars['ID'];
	caption: Maybe<Scalars['String']>;
	image: Maybe<UploadFile>;
};

export type ComponentEditorialSlideInput = {
	caption: Maybe<Scalars['String']>;
	image: Maybe<Scalars['ID']>;
};

export type ComponentEditorialSlider = {
	__typename?: 'ComponentEditorialSlider';
	id: Scalars['ID'];
	slide: Maybe<Array<Maybe<ComponentEditorialSlide>>>;
};

export type ComponentEditorialSliderInput = {
	slide: Maybe<Array<Maybe<ComponentEditorialSlideInput>>>;
};

export type ComponentEditorialSoundcloudTrack = {
	__typename?: 'ComponentEditorialSoundcloudTrack';
	id: Scalars['ID'];
	url: Scalars['String'];
};

export type ComponentEditorialSoundcloudTrackInput = {
	url: Scalars['String'];
};

export type ComponentEditorialTwitterPost = {
	__typename?: 'ComponentEditorialTwitterPost';
	id: Scalars['ID'];
	tweetID: Scalars['String'];
};

export type ComponentEditorialTwitterPostInput = {
	tweetID: Scalars['String'];
};

export type ComponentEditorialYoutubeVideo = {
	__typename?: 'ComponentEditorialYoutubeVideo';
	id: Scalars['ID'];
	videoID: Scalars['String'];
	title: Maybe<Scalars['String']>;
};

export type ComponentEditorialYoutubeVideoInput = {
	videoID: Scalars['String'];
	title: Maybe<Scalars['String']>;
};

export type ComponentProductVariationInput = {
	title: Scalars['String'];
	skuPrefix: Scalars['String'];
	abbreviation: Scalars['String'];
	units: Scalars['Int'];
};

export type ComponentProductVariations = {
	__typename?: 'ComponentProductVariations';
	id: Scalars['ID'];
	title: Scalars['String'];
	skuPrefix: Scalars['String'];
	abbreviation: Scalars['String'];
	units: Scalars['Int'];
};

export type ComponentStoreAppearance = {
	__typename?: 'ComponentStoreAppearance';
	id: Scalars['ID'];
	section: Maybe<Section>;
	description: Maybe<Scalars['String']>;
};

export type ComponentStoreAppearanceInput = {
	section: Maybe<Scalars['ID']>;
	description: Maybe<Scalars['String']>;
};

export type ComponentStoreCategory = {
	__typename?: 'ComponentStoreCategory';
	id: Scalars['ID'];
	category: Maybe<Category>;
};

export type ComponentStoreCategoryInput = {
	category: Maybe<Scalars['ID']>;
};

export type ComponentStoreSection = {
	__typename?: 'ComponentStoreSection';
	id: Scalars['ID'];
	section: Enum_Componentstoresection_Section;
};

export type ComponentStoreSectionInput = {
	section: Enum_Componentstoresection_Section;
};

export type ComponentStoreSponsor = {
	__typename?: 'ComponentStoreSponsor';
	id: Scalars['ID'];
	title: Scalars['String'];
	logo: Maybe<UploadFile>;
	websiteLink: Scalars['String'];
};

export type ComponentStoreSponsorInput = {
	title: Scalars['String'];
	logo: Maybe<Scalars['ID']>;
	websiteLink: Scalars['String'];
};

export type Delivery = {
	__typename?: 'Delivery';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
};

export type DeliveryInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export enum Enum_Componentstoresection_Section {
	Gallery = 'gallery',
	Men = 'men',
	Women = 'women',
}

export type Editorial = {
	__typename?: 'Editorial';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	title: Scalars['String'];
	cover: Maybe<UploadFile>;
	content: Array<Maybe<EditorialContentDynamicZone>>;
	metaTags: Maybe<Array<Maybe<ComponentEditorialMeta>>>;
	slug: Scalars['String'];
	headline: Scalars['String'];
	publishOverride: Maybe<Scalars['Date']>;
	locale: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	authors: Maybe<Array<Maybe<UsersPermissionsUser>>>;
	relatedProducts: Maybe<Array<Maybe<Product>>>;
	relatedStories: Maybe<Array<Maybe<Editorial>>>;
	appearsIn: Maybe<Array<Maybe<Category>>>;
	localizations: Maybe<Array<Maybe<Editorial>>>;
};

export type EditorialAuthorsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type EditorialRelatedProductsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type EditorialRelatedStoriesArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type EditorialAppearsInArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type EditorialLocalizationsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type EditorialAggregator = {
	__typename?: 'EditorialAggregator';
	count: Maybe<Scalars['Int']>;
	totalCount: Maybe<Scalars['Int']>;
};

export type EditorialConnection = {
	__typename?: 'EditorialConnection';
	values: Maybe<Array<Maybe<Editorial>>>;
	groupBy: Maybe<EditorialGroupBy>;
	aggregate: Maybe<EditorialAggregator>;
};

export type EditorialConnectionCover = {
	__typename?: 'EditorialConnectionCover';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialConnectionCreated_At = {
	__typename?: 'EditorialConnectionCreated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialConnectionHeadline = {
	__typename?: 'EditorialConnectionHeadline';
	key: Maybe<Scalars['String']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialConnectionId = {
	__typename?: 'EditorialConnectionId';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialConnectionLocale = {
	__typename?: 'EditorialConnectionLocale';
	key: Maybe<Scalars['String']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialConnectionPublishOverride = {
	__typename?: 'EditorialConnectionPublishOverride';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialConnectionPublished_At = {
	__typename?: 'EditorialConnectionPublished_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialConnectionSlug = {
	__typename?: 'EditorialConnectionSlug';
	key: Maybe<Scalars['String']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialConnectionTitle = {
	__typename?: 'EditorialConnectionTitle';
	key: Maybe<Scalars['String']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialConnectionUpdated_At = {
	__typename?: 'EditorialConnectionUpdated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<EditorialConnection>;
};

export type EditorialContentDynamicZone =
	| ComponentEditorialSlider
	| ComponentEditorialParagraph
	| ComponentEditorialSlide
	| ComponentEditorialYoutubeVideo
	| ComponentEditorialInstagramPost
	| ComponentEditorialSoundcloudTrack
	| ComponentEditorialTwitterPost;

export type EditorialGroupBy = {
	__typename?: 'EditorialGroupBy';
	id: Maybe<Array<Maybe<EditorialConnectionId>>>;
	created_at: Maybe<Array<Maybe<EditorialConnectionCreated_At>>>;
	updated_at: Maybe<Array<Maybe<EditorialConnectionUpdated_At>>>;
	title: Maybe<Array<Maybe<EditorialConnectionTitle>>>;
	cover: Maybe<Array<Maybe<EditorialConnectionCover>>>;
	slug: Maybe<Array<Maybe<EditorialConnectionSlug>>>;
	headline: Maybe<Array<Maybe<EditorialConnectionHeadline>>>;
	publishOverride: Maybe<Array<Maybe<EditorialConnectionPublishOverride>>>;
	locale: Maybe<Array<Maybe<EditorialConnectionLocale>>>;
	published_at: Maybe<Array<Maybe<EditorialConnectionPublished_At>>>;
};

export type EditorialInput = {
	title: Scalars['String'];
	cover: Maybe<Scalars['ID']>;
	authors: Maybe<Array<Maybe<Scalars['ID']>>>;
	content: Array<Scalars['EditorialContentDynamicZoneInput']>;
	metaTags: Maybe<Array<ComponentEditorialMetaInput>>;
	relatedProducts: Maybe<Array<Maybe<Scalars['ID']>>>;
	relatedStories: Maybe<Array<Maybe<Scalars['ID']>>>;
	slug: Scalars['String'];
	appearsIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	headline: Scalars['String'];
	publishOverride: Maybe<Scalars['Date']>;
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type FileInfoInput = {
	name: Maybe<Scalars['String']>;
	alternativeText: Maybe<Scalars['String']>;
	caption: Maybe<Scalars['String']>;
};

export type FileInput = {
	name: Scalars['String'];
	alternativeText: Maybe<Scalars['String']>;
	caption: Maybe<Scalars['String']>;
	width: Maybe<Scalars['Int']>;
	height: Maybe<Scalars['Int']>;
	formats: Maybe<Scalars['JSON']>;
	hash: Scalars['String'];
	ext: Maybe<Scalars['String']>;
	mime: Scalars['String'];
	size: Scalars['Float'];
	url: Scalars['String'];
	previewUrl: Maybe<Scalars['String']>;
	provider: Scalars['String'];
	provider_metadata: Maybe<Scalars['JSON']>;
	related: Maybe<Array<Maybe<Scalars['ID']>>>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type Footer = {
	__typename?: 'Footer';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	sponsors: Maybe<Array<Maybe<ComponentStoreSponsor>>>;
};

export type FooterInput = {
	sponsors: Maybe<Array<Maybe<ComponentStoreSponsorInput>>>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type HomePage = {
	__typename?: 'HomePage';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	storiesLinkImage: Maybe<UploadFile>;
	bannerImage: Maybe<UploadFile>;
	menswearLinkImage: Maybe<UploadFile>;
	womenswearLinkImage: Maybe<UploadFile>;
	galleryLinkImage: Maybe<UploadFile>;
};

export type HomePageInput = {
	storiesLinkImage: Maybe<Scalars['ID']>;
	bannerImage: Maybe<Scalars['ID']>;
	menswearLinkImage: Maybe<Scalars['ID']>;
	womenswearLinkImage: Maybe<Scalars['ID']>;
	galleryLinkImage: Maybe<Scalars['ID']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
	__typename?: 'I18NLocale';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	name: Maybe<Scalars['String']>;
	code: Maybe<Scalars['String']>;
};

export type InputId = {
	id: Scalars['ID'];
};

export type LocaleInput = {
	name: Maybe<Scalars['String']>;
	code: Maybe<Scalars['String']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type Morph =
	| UsersPermissionsMe
	| UsersPermissionsMeRole
	| UsersPermissionsLoginPayload
	| UserPermissionsPasswordPayload
	| AboutUs
	| UpdateAboutUsPayload
	| DeleteAboutUsPayload
	| Affiliates
	| UpdateAffiliatePayload
	| DeleteAffiliatePayload
	| Brand
	| BrandConnection
	| BrandAggregator
	| BrandGroupBy
	| BrandConnectionId
	| BrandConnectionCreated_At
	| BrandConnectionUpdated_At
	| BrandConnectionTitle
	| BrandConnectionDescription
	| BrandConnectionSlug
	| CreateBrandPayload
	| UpdateBrandPayload
	| DeleteBrandPayload
	| Category
	| CategoryConnection
	| CategoryAggregator
	| CategoryGroupBy
	| CategoryConnectionId
	| CategoryConnectionCreated_At
	| CategoryConnectionUpdated_At
	| CategoryConnectionTitle
	| CategoryConnectionSlug
	| CategoryConnectionParent
	| CategoryConnectionLocale
	| CreateCategoryPayload
	| UpdateCategoryPayload
	| DeleteCategoryPayload
	| Delivery
	| UpdateDeliveryPayload
	| DeleteDeliveryPayload
	| Editorial
	| EditorialConnection
	| EditorialAggregator
	| EditorialGroupBy
	| EditorialConnectionId
	| EditorialConnectionCreated_At
	| EditorialConnectionUpdated_At
	| EditorialConnectionTitle
	| EditorialConnectionCover
	| EditorialConnectionSlug
	| EditorialConnectionHeadline
	| EditorialConnectionPublishOverride
	| EditorialConnectionLocale
	| EditorialConnectionPublished_At
	| CreateEditorialPayload
	| UpdateEditorialPayload
	| DeleteEditorialPayload
	| Footer
	| UpdateFooterPayload
	| DeleteFooterPayload
	| HomePage
	| UpdateHomePagePayload
	| DeleteHomePagePayload
	| PrivacyPolicy
	| UpdatePrivacyPolicyPayload
	| DeletePrivacyPolicyPayload
	| Product
	| ProductConnection
	| ProductAggregator
	| ProductAggregatorSum
	| ProductAggregatorAvg
	| ProductAggregatorMin
	| ProductAggregatorMax
	| ProductGroupBy
	| ProductConnectionId
	| ProductConnectionCreated_At
	| ProductConnectionUpdated_At
	| ProductConnectionTitle
	| ProductConnectionBrand
	| ProductConnectionDescription
	| ProductConnectionSku
	| ProductConnectionThumbnail
	| ProductConnectionPrice
	| ProductConnectionSlug
	| ProductConnectionSection
	| ProductConnectionFeatured
	| ProductConnectionDiscountPrice
	| ProductConnectionLocale
	| ProductConnectionPublished_At
	| CreateProductPayload
	| UpdateProductPayload
	| DeleteProductPayload
	| Section
	| SectionConnection
	| SectionAggregator
	| SectionGroupBy
	| SectionConnectionId
	| SectionConnectionCreated_At
	| SectionConnectionUpdated_At
	| SectionConnectionTitle
	| SectionConnectionSlug
	| SectionConnectionLocale
	| CreateSectionPayload
	| UpdateSectionPayload
	| DeleteSectionPayload
	| SizingChart
	| UpdateSizingChartPayload
	| DeleteSizingChartPayload
	| TermsAndConditions
	| UpdateTermsAndConditionPayload
	| DeleteTermsAndConditionPayload
	| I18NLocale
	| UploadFile
	| UploadFileConnection
	| UploadFileAggregator
	| UploadFileAggregatorSum
	| UploadFileAggregatorAvg
	| UploadFileAggregatorMin
	| UploadFileAggregatorMax
	| UploadFileGroupBy
	| UploadFileConnectionId
	| UploadFileConnectionCreated_At
	| UploadFileConnectionUpdated_At
	| UploadFileConnectionName
	| UploadFileConnectionAlternativeText
	| UploadFileConnectionCaption
	| UploadFileConnectionWidth
	| UploadFileConnectionHeight
	| UploadFileConnectionFormats
	| UploadFileConnectionHash
	| UploadFileConnectionExt
	| UploadFileConnectionMime
	| UploadFileConnectionSize
	| UploadFileConnectionUrl
	| UploadFileConnectionPreviewUrl
	| UploadFileConnectionProvider
	| UploadFileConnectionProvider_Metadata
	| DeleteFilePayload
	| UsersPermissionsPermission
	| UsersPermissionsRole
	| UsersPermissionsRoleConnection
	| UsersPermissionsRoleAggregator
	| UsersPermissionsRoleGroupBy
	| UsersPermissionsRoleConnectionId
	| UsersPermissionsRoleConnectionName
	| UsersPermissionsRoleConnectionDescription
	| UsersPermissionsRoleConnectionType
	| CreateRolePayload
	| UpdateRolePayload
	| DeleteRolePayload
	| UsersPermissionsUser
	| UsersPermissionsUserConnection
	| UsersPermissionsUserAggregator
	| UsersPermissionsUserGroupBy
	| UsersPermissionsUserConnectionId
	| UsersPermissionsUserConnectionCreated_At
	| UsersPermissionsUserConnectionUpdated_At
	| UsersPermissionsUserConnectionUsername
	| UsersPermissionsUserConnectionEmail
	| UsersPermissionsUserConnectionProvider
	| UsersPermissionsUserConnectionConfirmed
	| UsersPermissionsUserConnectionBlocked
	| UsersPermissionsUserConnectionRole
	| CreateUserPayload
	| UpdateUserPayload
	| DeleteUserPayload
	| ComponentEditorialInstagramPost
	| ComponentEditorialMeta
	| ComponentEditorialParagraph
	| ComponentEditorialSlide
	| ComponentEditorialSlider
	| ComponentEditorialSoundcloudTrack
	| ComponentEditorialTwitterPost
	| ComponentEditorialYoutubeVideo
	| ComponentProductVariations
	| ComponentStoreAppearance
	| ComponentStoreCategory
	| ComponentStoreSection
	| ComponentStoreSponsor;

export type Mutation = {
	__typename?: 'Mutation';
	updateAboutUs: Maybe<UpdateAboutUsPayload>;
	deleteAboutUs: Maybe<DeleteAboutUsPayload>;
	updateAffiliate: Maybe<UpdateAffiliatePayload>;
	deleteAffiliate: Maybe<DeleteAffiliatePayload>;
	createBrand: Maybe<CreateBrandPayload>;
	updateBrand: Maybe<UpdateBrandPayload>;
	deleteBrand: Maybe<DeleteBrandPayload>;
	createCategory: Maybe<CreateCategoryPayload>;
	updateCategory: Maybe<UpdateCategoryPayload>;
	deleteCategory: Maybe<DeleteCategoryPayload>;
	updateDelivery: Maybe<UpdateDeliveryPayload>;
	deleteDelivery: Maybe<DeleteDeliveryPayload>;
	createEditorial: Maybe<CreateEditorialPayload>;
	updateEditorial: Maybe<UpdateEditorialPayload>;
	deleteEditorial: Maybe<DeleteEditorialPayload>;
	updateFooter: Maybe<UpdateFooterPayload>;
	deleteFooter: Maybe<DeleteFooterPayload>;
	updateHomePage: Maybe<UpdateHomePagePayload>;
	deleteHomePage: Maybe<DeleteHomePagePayload>;
	updatePrivacyPolicy: Maybe<UpdatePrivacyPolicyPayload>;
	deletePrivacyPolicy: Maybe<DeletePrivacyPolicyPayload>;
	createProduct: Maybe<CreateProductPayload>;
	updateProduct: Maybe<UpdateProductPayload>;
	deleteProduct: Maybe<DeleteProductPayload>;
	createSection: Maybe<CreateSectionPayload>;
	updateSection: Maybe<UpdateSectionPayload>;
	deleteSection: Maybe<DeleteSectionPayload>;
	updateSizingChart: Maybe<UpdateSizingChartPayload>;
	deleteSizingChart: Maybe<DeleteSizingChartPayload>;
	updateTermsAndCondition: Maybe<UpdateTermsAndConditionPayload>;
	deleteTermsAndCondition: Maybe<DeleteTermsAndConditionPayload>;
	/** Delete one file */
	deleteFile: Maybe<DeleteFilePayload>;
	/** Create a new role */
	createRole: Maybe<CreateRolePayload>;
	/** Update an existing role */
	updateRole: Maybe<UpdateRolePayload>;
	/** Delete an existing role */
	deleteRole: Maybe<DeleteRolePayload>;
	/** Create a new user */
	createUser: Maybe<CreateUserPayload>;
	/** Update an existing user */
	updateUser: Maybe<UpdateUserPayload>;
	/** Delete an existing user */
	deleteUser: Maybe<DeleteUserPayload>;
	createCategoryLocalization: Category;
	createEditorialLocalization: Editorial;
	createProductLocalization: Product;
	createSectionLocalization: Section;
	createTermsAndConditionLocalization: TermsAndConditions;
	upload: UploadFile;
	multipleUpload: Array<Maybe<UploadFile>>;
	updateFileInfo: UploadFile;
	login: UsersPermissionsLoginPayload;
	register: UsersPermissionsLoginPayload;
	forgotPassword: Maybe<UserPermissionsPasswordPayload>;
	resetPassword: Maybe<UsersPermissionsLoginPayload>;
	emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationUpdateAboutUsArgs = {
	input: Maybe<UpdateAboutUsInput>;
};

export type MutationUpdateAffiliateArgs = {
	input: Maybe<UpdateAffiliateInput>;
};

export type MutationCreateBrandArgs = {
	input: Maybe<CreateBrandInput>;
};

export type MutationUpdateBrandArgs = {
	input: Maybe<UpdateBrandInput>;
};

export type MutationDeleteBrandArgs = {
	input: Maybe<DeleteBrandInput>;
};

export type MutationCreateCategoryArgs = {
	input: Maybe<CreateCategoryInput>;
};

export type MutationUpdateCategoryArgs = {
	input: Maybe<UpdateCategoryInput>;
};

export type MutationDeleteCategoryArgs = {
	input: Maybe<DeleteCategoryInput>;
};

export type MutationUpdateDeliveryArgs = {
	input: Maybe<UpdateDeliveryInput>;
};

export type MutationCreateEditorialArgs = {
	input: Maybe<CreateEditorialInput>;
};

export type MutationUpdateEditorialArgs = {
	input: Maybe<UpdateEditorialInput>;
};

export type MutationDeleteEditorialArgs = {
	input: Maybe<DeleteEditorialInput>;
};

export type MutationUpdateFooterArgs = {
	input: Maybe<UpdateFooterInput>;
};

export type MutationUpdateHomePageArgs = {
	input: Maybe<UpdateHomePageInput>;
};

export type MutationUpdatePrivacyPolicyArgs = {
	input: Maybe<UpdatePrivacyPolicyInput>;
};

export type MutationCreateProductArgs = {
	input: Maybe<CreateProductInput>;
};

export type MutationUpdateProductArgs = {
	input: Maybe<UpdateProductInput>;
};

export type MutationDeleteProductArgs = {
	input: Maybe<DeleteProductInput>;
};

export type MutationCreateSectionArgs = {
	input: Maybe<CreateSectionInput>;
};

export type MutationUpdateSectionArgs = {
	input: Maybe<UpdateSectionInput>;
};

export type MutationDeleteSectionArgs = {
	input: Maybe<DeleteSectionInput>;
};

export type MutationUpdateSizingChartArgs = {
	input: Maybe<UpdateSizingChartInput>;
};

export type MutationUpdateTermsAndConditionArgs = {
	input: Maybe<UpdateTermsAndConditionInput>;
	locale: Maybe<Scalars['String']>;
};

export type MutationDeleteTermsAndConditionArgs = {
	locale: Maybe<Scalars['String']>;
};

export type MutationDeleteFileArgs = {
	input: Maybe<DeleteFileInput>;
};

export type MutationCreateRoleArgs = {
	input: Maybe<CreateRoleInput>;
};

export type MutationUpdateRoleArgs = {
	input: Maybe<UpdateRoleInput>;
};

export type MutationDeleteRoleArgs = {
	input: Maybe<DeleteRoleInput>;
};

export type MutationCreateUserArgs = {
	input: Maybe<CreateUserInput>;
};

export type MutationUpdateUserArgs = {
	input: Maybe<UpdateUserInput>;
};

export type MutationDeleteUserArgs = {
	input: Maybe<DeleteUserInput>;
};

export type MutationCreateCategoryLocalizationArgs = {
	input: UpdateCategoryInput;
};

export type MutationCreateEditorialLocalizationArgs = {
	input: UpdateEditorialInput;
};

export type MutationCreateProductLocalizationArgs = {
	input: UpdateProductInput;
};

export type MutationCreateSectionLocalizationArgs = {
	input: UpdateSectionInput;
};

export type MutationCreateTermsAndConditionLocalizationArgs = {
	input: UpdateTermsAndConditionInput;
};

export type MutationUploadArgs = {
	refId: Maybe<Scalars['ID']>;
	ref: Maybe<Scalars['String']>;
	field: Maybe<Scalars['String']>;
	source: Maybe<Scalars['String']>;
	info: Maybe<FileInfoInput>;
	file: Scalars['Upload'];
};

export type MutationMultipleUploadArgs = {
	refId: Maybe<Scalars['ID']>;
	ref: Maybe<Scalars['String']>;
	field: Maybe<Scalars['String']>;
	source: Maybe<Scalars['String']>;
	files: Array<Maybe<Scalars['Upload']>>;
};

export type MutationUpdateFileInfoArgs = {
	id: Scalars['ID'];
	info: FileInfoInput;
};

export type MutationLoginArgs = {
	input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
	input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
	email: Scalars['String'];
};

export type MutationResetPasswordArgs = {
	password: Scalars['String'];
	passwordConfirmation: Scalars['String'];
	code: Scalars['String'];
};

export type MutationEmailConfirmationArgs = {
	confirmation: Scalars['String'];
};

export type PrivacyPolicy = {
	__typename?: 'PrivacyPolicy';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
};

export type PrivacyPolicyInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type Product = {
	__typename?: 'Product';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	title: Scalars['String'];
	brand: Maybe<Brand>;
	description: Scalars['String'];
	sku: Scalars['String'];
	thumbnail: Maybe<UploadFile>;
	price: Scalars['Float'];
	variations: Maybe<Array<Maybe<ComponentProductVariations>>>;
	slug: Scalars['String'];
	section: Maybe<Section>;
	featured: Scalars['Boolean'];
	discountPrice: Maybe<Scalars['Float']>;
	locale: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	appearsIn: Maybe<Array<Maybe<Category>>>;
	images: Maybe<Array<Maybe<UploadFile>>>;
	relatedProducts: Maybe<Array<Maybe<Product>>>;
	relatedStories: Maybe<Array<Maybe<Editorial>>>;
	localizations: Maybe<Array<Maybe<Product>>>;
};

export type ProductAppearsInArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type ProductImagesArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type ProductRelatedProductsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type ProductRelatedStoriesArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type ProductLocalizationsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type ProductAggregator = {
	__typename?: 'ProductAggregator';
	count: Maybe<Scalars['Int']>;
	totalCount: Maybe<Scalars['Int']>;
	sum: Maybe<ProductAggregatorSum>;
	avg: Maybe<ProductAggregatorAvg>;
	min: Maybe<ProductAggregatorMin>;
	max: Maybe<ProductAggregatorMax>;
};

export type ProductAggregatorAvg = {
	__typename?: 'ProductAggregatorAvg';
	price: Maybe<Scalars['Float']>;
	discountPrice: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMax = {
	__typename?: 'ProductAggregatorMax';
	price: Maybe<Scalars['Float']>;
	discountPrice: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMin = {
	__typename?: 'ProductAggregatorMin';
	price: Maybe<Scalars['Float']>;
	discountPrice: Maybe<Scalars['Float']>;
};

export type ProductAggregatorSum = {
	__typename?: 'ProductAggregatorSum';
	price: Maybe<Scalars['Float']>;
	discountPrice: Maybe<Scalars['Float']>;
};

export type ProductConnection = {
	__typename?: 'ProductConnection';
	values: Maybe<Array<Maybe<Product>>>;
	groupBy: Maybe<ProductGroupBy>;
	aggregate: Maybe<ProductAggregator>;
};

export type ProductConnectionBrand = {
	__typename?: 'ProductConnectionBrand';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionCreated_At = {
	__typename?: 'ProductConnectionCreated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionDescription = {
	__typename?: 'ProductConnectionDescription';
	key: Maybe<Scalars['String']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionDiscountPrice = {
	__typename?: 'ProductConnectionDiscountPrice';
	key: Maybe<Scalars['Float']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionFeatured = {
	__typename?: 'ProductConnectionFeatured';
	key: Maybe<Scalars['Boolean']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionId = {
	__typename?: 'ProductConnectionId';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionLocale = {
	__typename?: 'ProductConnectionLocale';
	key: Maybe<Scalars['String']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionPrice = {
	__typename?: 'ProductConnectionPrice';
	key: Maybe<Scalars['Float']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionPublished_At = {
	__typename?: 'ProductConnectionPublished_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionSection = {
	__typename?: 'ProductConnectionSection';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionSku = {
	__typename?: 'ProductConnectionSku';
	key: Maybe<Scalars['String']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionSlug = {
	__typename?: 'ProductConnectionSlug';
	key: Maybe<Scalars['String']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionThumbnail = {
	__typename?: 'ProductConnectionThumbnail';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionTitle = {
	__typename?: 'ProductConnectionTitle';
	key: Maybe<Scalars['String']>;
	connection: Maybe<ProductConnection>;
};

export type ProductConnectionUpdated_At = {
	__typename?: 'ProductConnectionUpdated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<ProductConnection>;
};

export type ProductGroupBy = {
	__typename?: 'ProductGroupBy';
	id: Maybe<Array<Maybe<ProductConnectionId>>>;
	created_at: Maybe<Array<Maybe<ProductConnectionCreated_At>>>;
	updated_at: Maybe<Array<Maybe<ProductConnectionUpdated_At>>>;
	title: Maybe<Array<Maybe<ProductConnectionTitle>>>;
	brand: Maybe<Array<Maybe<ProductConnectionBrand>>>;
	description: Maybe<Array<Maybe<ProductConnectionDescription>>>;
	sku: Maybe<Array<Maybe<ProductConnectionSku>>>;
	thumbnail: Maybe<Array<Maybe<ProductConnectionThumbnail>>>;
	price: Maybe<Array<Maybe<ProductConnectionPrice>>>;
	slug: Maybe<Array<Maybe<ProductConnectionSlug>>>;
	section: Maybe<Array<Maybe<ProductConnectionSection>>>;
	featured: Maybe<Array<Maybe<ProductConnectionFeatured>>>;
	discountPrice: Maybe<Array<Maybe<ProductConnectionDiscountPrice>>>;
	locale: Maybe<Array<Maybe<ProductConnectionLocale>>>;
	published_at: Maybe<Array<Maybe<ProductConnectionPublished_At>>>;
};

export type ProductInput = {
	title: Scalars['String'];
	appearsIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	brand: Maybe<Scalars['ID']>;
	description: Scalars['String'];
	sku: Scalars['String'];
	thumbnail: Maybe<Scalars['ID']>;
	images: Maybe<Array<Maybe<Scalars['ID']>>>;
	price: Scalars['Float'];
	variations: Maybe<Array<Maybe<ComponentProductVariationInput>>>;
	slug: Scalars['String'];
	section: Maybe<Scalars['ID']>;
	featured: Maybe<Scalars['Boolean']>;
	discountPrice: Maybe<Scalars['Float']>;
	relatedProducts: Maybe<Array<Maybe<Scalars['ID']>>>;
	relatedStories: Maybe<Array<Maybe<Scalars['ID']>>>;
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export enum PublicationState {
	Live = 'LIVE',
	Preview = 'PREVIEW',
}

export type Query = {
	__typename?: 'Query';
	aboutUs: Maybe<AboutUs>;
	affiliate: Maybe<Affiliates>;
	brand: Maybe<Brand>;
	brands: Maybe<Array<Maybe<Brand>>>;
	brandsConnection: Maybe<BrandConnection>;
	category: Maybe<Category>;
	categories: Maybe<Array<Maybe<Category>>>;
	categoriesConnection: Maybe<CategoryConnection>;
	delivery: Maybe<Delivery>;
	editorial: Maybe<Editorial>;
	editorials: Maybe<Array<Maybe<Editorial>>>;
	editorialsConnection: Maybe<EditorialConnection>;
	footer: Maybe<Footer>;
	homePage: Maybe<HomePage>;
	privacyPolicy: Maybe<PrivacyPolicy>;
	product: Maybe<Product>;
	products: Maybe<Array<Maybe<Product>>>;
	productsConnection: Maybe<ProductConnection>;
	section: Maybe<Section>;
	sections: Maybe<Array<Maybe<Section>>>;
	sectionsConnection: Maybe<SectionConnection>;
	sizingChart: Maybe<SizingChart>;
	termsAndCondition: Maybe<TermsAndConditions>;
	files: Maybe<Array<Maybe<UploadFile>>>;
	filesConnection: Maybe<UploadFileConnection>;
	role: Maybe<UsersPermissionsRole>;
	/** Retrieve all the existing roles. You can't apply filters on this query. */
	roles: Maybe<Array<Maybe<UsersPermissionsRole>>>;
	rolesConnection: Maybe<UsersPermissionsRoleConnection>;
	user: Maybe<UsersPermissionsUser>;
	users: Maybe<Array<Maybe<UsersPermissionsUser>>>;
	usersConnection: Maybe<UsersPermissionsUserConnection>;
	me: Maybe<UsersPermissionsMe>;
};

export type QueryAboutUsArgs = {
	publicationState: Maybe<PublicationState>;
};

export type QueryAffiliateArgs = {
	publicationState: Maybe<PublicationState>;
};

export type QueryBrandArgs = {
	id: Scalars['ID'];
	publicationState: Maybe<PublicationState>;
};

export type QueryBrandsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	publicationState: Maybe<PublicationState>;
};

export type QueryBrandsConnectionArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type QueryCategoryArgs = {
	id: Scalars['ID'];
	publicationState: Maybe<PublicationState>;
};

export type QueryCategoriesArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	publicationState: Maybe<PublicationState>;
	locale: Maybe<Scalars['String']>;
};

export type QueryCategoriesConnectionArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	locale: Maybe<Scalars['String']>;
};

export type QueryDeliveryArgs = {
	publicationState: Maybe<PublicationState>;
};

export type QueryEditorialArgs = {
	id: Scalars['ID'];
	publicationState: Maybe<PublicationState>;
};

export type QueryEditorialsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	publicationState: Maybe<PublicationState>;
	locale: Maybe<Scalars['String']>;
};

export type QueryEditorialsConnectionArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	locale: Maybe<Scalars['String']>;
};

export type QueryFooterArgs = {
	publicationState: Maybe<PublicationState>;
};

export type QueryHomePageArgs = {
	publicationState: Maybe<PublicationState>;
};

export type QueryPrivacyPolicyArgs = {
	publicationState: Maybe<PublicationState>;
};

export type QueryProductArgs = {
	id: Scalars['ID'];
	publicationState: Maybe<PublicationState>;
};

export type QueryProductsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	publicationState: Maybe<PublicationState>;
	locale: Maybe<Scalars['String']>;
};

export type QueryProductsConnectionArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	locale: Maybe<Scalars['String']>;
};

export type QuerySectionArgs = {
	id: Scalars['ID'];
	publicationState: Maybe<PublicationState>;
};

export type QuerySectionsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	publicationState: Maybe<PublicationState>;
	locale: Maybe<Scalars['String']>;
};

export type QuerySectionsConnectionArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	locale: Maybe<Scalars['String']>;
};

export type QuerySizingChartArgs = {
	publicationState: Maybe<PublicationState>;
};

export type QueryTermsAndConditionArgs = {
	publicationState: Maybe<PublicationState>;
	locale: Maybe<Scalars['String']>;
};

export type QueryFilesArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	publicationState: Maybe<PublicationState>;
};

export type QueryFilesConnectionArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type QueryRoleArgs = {
	id: Scalars['ID'];
	publicationState: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	publicationState: Maybe<PublicationState>;
};

export type QueryRolesConnectionArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type QueryUserArgs = {
	id: Scalars['ID'];
	publicationState: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
	publicationState: Maybe<PublicationState>;
};

export type QueryUsersConnectionArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
	name: Scalars['String'];
	description: Maybe<Scalars['String']>;
	type: Maybe<Scalars['String']>;
	permissions: Maybe<Array<Maybe<Scalars['ID']>>>;
	users: Maybe<Array<Maybe<Scalars['ID']>>>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type Section = {
	__typename?: 'Section';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	title: Scalars['String'];
	slug: Scalars['String'];
	locale: Maybe<Scalars['String']>;
	localizations: Maybe<Array<Maybe<Section>>>;
};

export type SectionLocalizationsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type SectionAggregator = {
	__typename?: 'SectionAggregator';
	count: Maybe<Scalars['Int']>;
	totalCount: Maybe<Scalars['Int']>;
};

export type SectionConnection = {
	__typename?: 'SectionConnection';
	values: Maybe<Array<Maybe<Section>>>;
	groupBy: Maybe<SectionGroupBy>;
	aggregate: Maybe<SectionAggregator>;
};

export type SectionConnectionCreated_At = {
	__typename?: 'SectionConnectionCreated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<SectionConnection>;
};

export type SectionConnectionId = {
	__typename?: 'SectionConnectionId';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<SectionConnection>;
};

export type SectionConnectionLocale = {
	__typename?: 'SectionConnectionLocale';
	key: Maybe<Scalars['String']>;
	connection: Maybe<SectionConnection>;
};

export type SectionConnectionSlug = {
	__typename?: 'SectionConnectionSlug';
	key: Maybe<Scalars['String']>;
	connection: Maybe<SectionConnection>;
};

export type SectionConnectionTitle = {
	__typename?: 'SectionConnectionTitle';
	key: Maybe<Scalars['String']>;
	connection: Maybe<SectionConnection>;
};

export type SectionConnectionUpdated_At = {
	__typename?: 'SectionConnectionUpdated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<SectionConnection>;
};

export type SectionGroupBy = {
	__typename?: 'SectionGroupBy';
	id: Maybe<Array<Maybe<SectionConnectionId>>>;
	created_at: Maybe<Array<Maybe<SectionConnectionCreated_At>>>;
	updated_at: Maybe<Array<Maybe<SectionConnectionUpdated_At>>>;
	title: Maybe<Array<Maybe<SectionConnectionTitle>>>;
	slug: Maybe<Array<Maybe<SectionConnectionSlug>>>;
	locale: Maybe<Array<Maybe<SectionConnectionLocale>>>;
};

export type SectionInput = {
	title: Scalars['String'];
	slug: Scalars['String'];
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type SizingChart = {
	__typename?: 'SizingChart';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
};

export type SizingChartInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type TermsAndConditionInput = {
	content: Maybe<Scalars['String']>;
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type TermsAndConditions = {
	__typename?: 'TermsAndConditions';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	content: Maybe<Scalars['String']>;
	locale: Maybe<Scalars['String']>;
	localizations: Maybe<Array<Maybe<TermsAndConditions>>>;
};

export type TermsAndConditionsLocalizationsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type UploadFile = {
	__typename?: 'UploadFile';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	name: Scalars['String'];
	alternativeText: Maybe<Scalars['String']>;
	caption: Maybe<Scalars['String']>;
	width: Maybe<Scalars['Int']>;
	height: Maybe<Scalars['Int']>;
	formats: Maybe<Scalars['JSON']>;
	hash: Scalars['String'];
	ext: Maybe<Scalars['String']>;
	mime: Scalars['String'];
	size: Scalars['Float'];
	url: Scalars['String'];
	previewUrl: Maybe<Scalars['String']>;
	provider: Scalars['String'];
	provider_metadata: Maybe<Scalars['JSON']>;
	related: Maybe<Array<Maybe<Morph>>>;
};

export type UploadFileRelatedArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
	__typename?: 'UploadFileAggregator';
	count: Maybe<Scalars['Int']>;
	totalCount: Maybe<Scalars['Int']>;
	sum: Maybe<UploadFileAggregatorSum>;
	avg: Maybe<UploadFileAggregatorAvg>;
	min: Maybe<UploadFileAggregatorMin>;
	max: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
	__typename?: 'UploadFileAggregatorAvg';
	width: Maybe<Scalars['Float']>;
	height: Maybe<Scalars['Float']>;
	size: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
	__typename?: 'UploadFileAggregatorMax';
	width: Maybe<Scalars['Float']>;
	height: Maybe<Scalars['Float']>;
	size: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
	__typename?: 'UploadFileAggregatorMin';
	width: Maybe<Scalars['Float']>;
	height: Maybe<Scalars['Float']>;
	size: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
	__typename?: 'UploadFileAggregatorSum';
	width: Maybe<Scalars['Float']>;
	height: Maybe<Scalars['Float']>;
	size: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
	__typename?: 'UploadFileConnection';
	values: Maybe<Array<Maybe<UploadFile>>>;
	groupBy: Maybe<UploadFileGroupBy>;
	aggregate: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
	__typename?: 'UploadFileConnectionAlternativeText';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
	__typename?: 'UploadFileConnectionCaption';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
	__typename?: 'UploadFileConnectionCreated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
	__typename?: 'UploadFileConnectionExt';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
	__typename?: 'UploadFileConnectionFormats';
	key: Maybe<Scalars['JSON']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
	__typename?: 'UploadFileConnectionHash';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
	__typename?: 'UploadFileConnectionHeight';
	key: Maybe<Scalars['Int']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
	__typename?: 'UploadFileConnectionId';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
	__typename?: 'UploadFileConnectionMime';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
	__typename?: 'UploadFileConnectionName';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
	__typename?: 'UploadFileConnectionPreviewUrl';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
	__typename?: 'UploadFileConnectionProvider';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
	__typename?: 'UploadFileConnectionProvider_metadata';
	key: Maybe<Scalars['JSON']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
	__typename?: 'UploadFileConnectionSize';
	key: Maybe<Scalars['Float']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
	__typename?: 'UploadFileConnectionUpdated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
	__typename?: 'UploadFileConnectionUrl';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
	__typename?: 'UploadFileConnectionWidth';
	key: Maybe<Scalars['Int']>;
	connection: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
	__typename?: 'UploadFileGroupBy';
	id: Maybe<Array<Maybe<UploadFileConnectionId>>>;
	created_at: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
	updated_at: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
	name: Maybe<Array<Maybe<UploadFileConnectionName>>>;
	alternativeText: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
	caption: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
	width: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
	height: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
	formats: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
	hash: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
	ext: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
	mime: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
	size: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
	url: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
	previewUrl: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
	provider: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
	provider_metadata: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
	username: Scalars['String'];
	email: Scalars['String'];
	provider: Maybe<Scalars['String']>;
	password: Maybe<Scalars['String']>;
	resetPasswordToken: Maybe<Scalars['String']>;
	confirmationToken: Maybe<Scalars['String']>;
	confirmed: Maybe<Scalars['Boolean']>;
	blocked: Maybe<Scalars['Boolean']>;
	role: Maybe<Scalars['ID']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
	__typename?: 'UserPermissionsPasswordPayload';
	ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
	identifier: Scalars['String'];
	password: Scalars['String'];
	provider: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
	__typename?: 'UsersPermissionsLoginPayload';
	jwt: Maybe<Scalars['String']>;
	user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
	__typename?: 'UsersPermissionsMe';
	id: Scalars['ID'];
	username: Scalars['String'];
	email: Scalars['String'];
	confirmed: Maybe<Scalars['Boolean']>;
	blocked: Maybe<Scalars['Boolean']>;
	role: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
	__typename?: 'UsersPermissionsMeRole';
	id: Scalars['ID'];
	name: Scalars['String'];
	description: Maybe<Scalars['String']>;
	type: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
	__typename?: 'UsersPermissionsPermission';
	id: Scalars['ID'];
	type: Scalars['String'];
	controller: Scalars['String'];
	action: Scalars['String'];
	enabled: Scalars['Boolean'];
	policy: Maybe<Scalars['String']>;
	role: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
	username: Scalars['String'];
	email: Scalars['String'];
	password: Scalars['String'];
};

export type UsersPermissionsRole = {
	__typename?: 'UsersPermissionsRole';
	id: Scalars['ID'];
	name: Scalars['String'];
	description: Maybe<Scalars['String']>;
	type: Maybe<Scalars['String']>;
	permissions: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
	users: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleUsersArgs = {
	sort: Maybe<Scalars['String']>;
	limit: Maybe<Scalars['Int']>;
	start: Maybe<Scalars['Int']>;
	where: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
	__typename?: 'UsersPermissionsRoleAggregator';
	count: Maybe<Scalars['Int']>;
	totalCount: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
	__typename?: 'UsersPermissionsRoleConnection';
	values: Maybe<Array<Maybe<UsersPermissionsRole>>>;
	groupBy: Maybe<UsersPermissionsRoleGroupBy>;
	aggregate: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
	__typename?: 'UsersPermissionsRoleConnectionDescription';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
	__typename?: 'UsersPermissionsRoleConnectionId';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
	__typename?: 'UsersPermissionsRoleConnectionName';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
	__typename?: 'UsersPermissionsRoleConnectionType';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
	__typename?: 'UsersPermissionsRoleGroupBy';
	id: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
	name: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
	description: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
	type: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
	__typename?: 'UsersPermissionsUser';
	id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	updated_at: Scalars['DateTime'];
	username: Scalars['String'];
	email: Scalars['String'];
	provider: Maybe<Scalars['String']>;
	confirmed: Maybe<Scalars['Boolean']>;
	blocked: Maybe<Scalars['Boolean']>;
	role: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
	__typename?: 'UsersPermissionsUserAggregator';
	count: Maybe<Scalars['Int']>;
	totalCount: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
	__typename?: 'UsersPermissionsUserConnection';
	values: Maybe<Array<Maybe<UsersPermissionsUser>>>;
	groupBy: Maybe<UsersPermissionsUserGroupBy>;
	aggregate: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
	__typename?: 'UsersPermissionsUserConnectionBlocked';
	key: Maybe<Scalars['Boolean']>;
	connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
	__typename?: 'UsersPermissionsUserConnectionConfirmed';
	key: Maybe<Scalars['Boolean']>;
	connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
	__typename?: 'UsersPermissionsUserConnectionCreated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
	__typename?: 'UsersPermissionsUserConnectionEmail';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
	__typename?: 'UsersPermissionsUserConnectionId';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
	__typename?: 'UsersPermissionsUserConnectionProvider';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
	__typename?: 'UsersPermissionsUserConnectionRole';
	key: Maybe<Scalars['ID']>;
	connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
	__typename?: 'UsersPermissionsUserConnectionUpdated_at';
	key: Maybe<Scalars['DateTime']>;
	connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
	__typename?: 'UsersPermissionsUserConnectionUsername';
	key: Maybe<Scalars['String']>;
	connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
	__typename?: 'UsersPermissionsUserGroupBy';
	id: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
	created_at: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
	updated_at: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
	username: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
	email: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
	provider: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
	confirmed: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
	blocked: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
	role: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateBrandInput = {
	data: Maybe<BrandInput>;
};

export type CreateBrandPayload = {
	__typename?: 'createBrandPayload';
	brand: Maybe<Brand>;
};

export type CreateCategoryInput = {
	data: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
	__typename?: 'createCategoryPayload';
	category: Maybe<Category>;
};

export type CreateEditorialInput = {
	data: Maybe<EditorialInput>;
};

export type CreateEditorialPayload = {
	__typename?: 'createEditorialPayload';
	editorial: Maybe<Editorial>;
};

export type CreateProductInput = {
	data: Maybe<ProductInput>;
};

export type CreateProductPayload = {
	__typename?: 'createProductPayload';
	product: Maybe<Product>;
};

export type CreateRoleInput = {
	data: Maybe<RoleInput>;
};

export type CreateRolePayload = {
	__typename?: 'createRolePayload';
	role: Maybe<UsersPermissionsRole>;
};

export type CreateSectionInput = {
	data: Maybe<SectionInput>;
};

export type CreateSectionPayload = {
	__typename?: 'createSectionPayload';
	section: Maybe<Section>;
};

export type CreateUserInput = {
	data: Maybe<UserInput>;
};

export type CreateUserPayload = {
	__typename?: 'createUserPayload';
	user: Maybe<UsersPermissionsUser>;
};

export type DeleteAboutUsPayload = {
	__typename?: 'deleteAboutUsPayload';
	aboutUs: Maybe<AboutUs>;
};

export type DeleteAffiliatePayload = {
	__typename?: 'deleteAffiliatePayload';
	affiliate: Maybe<Affiliates>;
};

export type DeleteBrandInput = {
	where: Maybe<InputId>;
};

export type DeleteBrandPayload = {
	__typename?: 'deleteBrandPayload';
	brand: Maybe<Brand>;
};

export type DeleteCategoryInput = {
	where: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
	__typename?: 'deleteCategoryPayload';
	category: Maybe<Category>;
};

export type DeleteDeliveryPayload = {
	__typename?: 'deleteDeliveryPayload';
	delivery: Maybe<Delivery>;
};

export type DeleteEditorialInput = {
	where: Maybe<InputId>;
};

export type DeleteEditorialPayload = {
	__typename?: 'deleteEditorialPayload';
	editorial: Maybe<Editorial>;
};

export type DeleteFileInput = {
	where: Maybe<InputId>;
};

export type DeleteFilePayload = {
	__typename?: 'deleteFilePayload';
	file: Maybe<UploadFile>;
};

export type DeleteFooterPayload = {
	__typename?: 'deleteFooterPayload';
	footer: Maybe<Footer>;
};

export type DeleteHomePagePayload = {
	__typename?: 'deleteHomePagePayload';
	homePage: Maybe<HomePage>;
};

export type DeletePrivacyPolicyPayload = {
	__typename?: 'deletePrivacyPolicyPayload';
	privacyPolicy: Maybe<PrivacyPolicy>;
};

export type DeleteProductInput = {
	where: Maybe<InputId>;
};

export type DeleteProductPayload = {
	__typename?: 'deleteProductPayload';
	product: Maybe<Product>;
};

export type DeleteRoleInput = {
	where: Maybe<InputId>;
};

export type DeleteRolePayload = {
	__typename?: 'deleteRolePayload';
	role: Maybe<UsersPermissionsRole>;
};

export type DeleteSectionInput = {
	where: Maybe<InputId>;
};

export type DeleteSectionPayload = {
	__typename?: 'deleteSectionPayload';
	section: Maybe<Section>;
};

export type DeleteSizingChartPayload = {
	__typename?: 'deleteSizingChartPayload';
	sizingChart: Maybe<SizingChart>;
};

export type DeleteTermsAndConditionPayload = {
	__typename?: 'deleteTermsAndConditionPayload';
	termsAndCondition: Maybe<TermsAndConditions>;
};

export type DeleteUserInput = {
	where: Maybe<InputId>;
};

export type DeleteUserPayload = {
	__typename?: 'deleteUserPayload';
	user: Maybe<UsersPermissionsUser>;
};

export type EditAboutUsInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditAffiliateInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditBrandInput = {
	title: Maybe<Scalars['String']>;
	description: Maybe<Scalars['String']>;
	slug: Maybe<Scalars['String']>;
	products: Maybe<Array<Maybe<Scalars['ID']>>>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditCategoryInput = {
	title: Maybe<Scalars['String']>;
	slug: Maybe<Scalars['String']>;
	parent: Maybe<Scalars['ID']>;
	categoryDescription: Maybe<Array<Maybe<EditComponentStoreAppearanceInput>>>;
	appearsIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditComponentEditorialInstagramPostInput = {
	id: Maybe<Scalars['ID']>;
	postURL: Maybe<Scalars['String']>;
	clientAccessToken: Maybe<Scalars['String']>;
};

export type EditComponentEditorialMetaInput = {
	id: Maybe<Scalars['ID']>;
	name: Maybe<Scalars['String']>;
	value: Maybe<Scalars['String']>;
};

export type EditComponentEditorialParagraphInput = {
	id: Maybe<Scalars['ID']>;
	Content: Maybe<Scalars['String']>;
};

export type EditComponentEditorialSlideInput = {
	id: Maybe<Scalars['ID']>;
	caption: Maybe<Scalars['String']>;
	image: Maybe<Scalars['ID']>;
};

export type EditComponentEditorialSliderInput = {
	id: Maybe<Scalars['ID']>;
	slide: Maybe<Array<Maybe<EditComponentEditorialSlideInput>>>;
};

export type EditComponentEditorialSoundcloudTrackInput = {
	id: Maybe<Scalars['ID']>;
	url: Maybe<Scalars['String']>;
};

export type EditComponentEditorialTwitterPostInput = {
	id: Maybe<Scalars['ID']>;
	tweetID: Maybe<Scalars['String']>;
};

export type EditComponentEditorialYoutubeVideoInput = {
	id: Maybe<Scalars['ID']>;
	videoID: Maybe<Scalars['String']>;
	title: Maybe<Scalars['String']>;
};

export type EditComponentProductVariationInput = {
	id: Maybe<Scalars['ID']>;
	title: Maybe<Scalars['String']>;
	skuPrefix: Maybe<Scalars['String']>;
	abbreviation: Maybe<Scalars['String']>;
	units: Maybe<Scalars['Int']>;
};

export type EditComponentStoreAppearanceInput = {
	id: Maybe<Scalars['ID']>;
	section: Maybe<Scalars['ID']>;
	description: Maybe<Scalars['String']>;
};

export type EditComponentStoreCategoryInput = {
	id: Maybe<Scalars['ID']>;
	category: Maybe<Scalars['ID']>;
};

export type EditComponentStoreSectionInput = {
	id: Maybe<Scalars['ID']>;
	section: Maybe<Enum_Componentstoresection_Section>;
};

export type EditComponentStoreSponsorInput = {
	id: Maybe<Scalars['ID']>;
	title: Maybe<Scalars['String']>;
	logo: Maybe<Scalars['ID']>;
	websiteLink: Maybe<Scalars['String']>;
};

export type EditDeliveryInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditEditorialInput = {
	title: Maybe<Scalars['String']>;
	cover: Maybe<Scalars['ID']>;
	authors: Maybe<Array<Maybe<Scalars['ID']>>>;
	content: Array<Scalars['EditorialContentDynamicZoneInput']>;
	metaTags: Maybe<Array<Maybe<EditComponentEditorialMetaInput>>>;
	relatedProducts: Maybe<Array<Maybe<Scalars['ID']>>>;
	relatedStories: Maybe<Array<Maybe<Scalars['ID']>>>;
	slug: Maybe<Scalars['String']>;
	appearsIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	headline: Maybe<Scalars['String']>;
	publishOverride: Maybe<Scalars['Date']>;
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
	name: Maybe<Scalars['String']>;
	alternativeText: Maybe<Scalars['String']>;
	caption: Maybe<Scalars['String']>;
	width: Maybe<Scalars['Int']>;
	height: Maybe<Scalars['Int']>;
	formats: Maybe<Scalars['JSON']>;
	hash: Maybe<Scalars['String']>;
	ext: Maybe<Scalars['String']>;
	mime: Maybe<Scalars['String']>;
	size: Maybe<Scalars['Float']>;
	url: Maybe<Scalars['String']>;
	previewUrl: Maybe<Scalars['String']>;
	provider: Maybe<Scalars['String']>;
	provider_metadata: Maybe<Scalars['JSON']>;
	related: Maybe<Array<Maybe<Scalars['ID']>>>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditFooterInput = {
	sponsors: Maybe<Array<Maybe<EditComponentStoreSponsorInput>>>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditHomePageInput = {
	storiesLinkImage: Maybe<Scalars['ID']>;
	bannerImage: Maybe<Scalars['ID']>;
	menswearLinkImage: Maybe<Scalars['ID']>;
	womenswearLinkImage: Maybe<Scalars['ID']>;
	galleryLinkImage: Maybe<Scalars['ID']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
	name: Maybe<Scalars['String']>;
	code: Maybe<Scalars['String']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditPrivacyPolicyInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
	title: Maybe<Scalars['String']>;
	appearsIn: Maybe<Array<Maybe<Scalars['ID']>>>;
	brand: Maybe<Scalars['ID']>;
	description: Maybe<Scalars['String']>;
	sku: Maybe<Scalars['String']>;
	thumbnail: Maybe<Scalars['ID']>;
	images: Maybe<Array<Maybe<Scalars['ID']>>>;
	price: Maybe<Scalars['Float']>;
	variations: Maybe<Array<Maybe<EditComponentProductVariationInput>>>;
	slug: Maybe<Scalars['String']>;
	section: Maybe<Scalars['ID']>;
	featured: Maybe<Scalars['Boolean']>;
	discountPrice: Maybe<Scalars['Float']>;
	relatedProducts: Maybe<Array<Maybe<Scalars['ID']>>>;
	relatedStories: Maybe<Array<Maybe<Scalars['ID']>>>;
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
	name: Maybe<Scalars['String']>;
	description: Maybe<Scalars['String']>;
	type: Maybe<Scalars['String']>;
	permissions: Maybe<Array<Maybe<Scalars['ID']>>>;
	users: Maybe<Array<Maybe<Scalars['ID']>>>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditSectionInput = {
	title: Maybe<Scalars['String']>;
	slug: Maybe<Scalars['String']>;
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditSizingChartInput = {
	Content: Maybe<Scalars['String']>;
	published_at: Maybe<Scalars['DateTime']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditTermsAndConditionInput = {
	content: Maybe<Scalars['String']>;
	localizations: Maybe<Array<Maybe<Scalars['ID']>>>;
	locale: Maybe<Scalars['String']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
	username: Maybe<Scalars['String']>;
	email: Maybe<Scalars['String']>;
	provider: Maybe<Scalars['String']>;
	password: Maybe<Scalars['String']>;
	resetPasswordToken: Maybe<Scalars['String']>;
	confirmationToken: Maybe<Scalars['String']>;
	confirmed: Maybe<Scalars['Boolean']>;
	blocked: Maybe<Scalars['Boolean']>;
	role: Maybe<Scalars['ID']>;
	created_by: Maybe<Scalars['ID']>;
	updated_by: Maybe<Scalars['ID']>;
};

export type UpdateAboutUsInput = {
	data: Maybe<EditAboutUsInput>;
};

export type UpdateAboutUsPayload = {
	__typename?: 'updateAboutUsPayload';
	aboutUs: Maybe<AboutUs>;
};

export type UpdateAffiliateInput = {
	data: Maybe<EditAffiliateInput>;
};

export type UpdateAffiliatePayload = {
	__typename?: 'updateAffiliatePayload';
	affiliate: Maybe<Affiliates>;
};

export type UpdateBrandInput = {
	where: Maybe<InputId>;
	data: Maybe<EditBrandInput>;
};

export type UpdateBrandPayload = {
	__typename?: 'updateBrandPayload';
	brand: Maybe<Brand>;
};

export type UpdateCategoryInput = {
	where: Maybe<InputId>;
	data: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
	__typename?: 'updateCategoryPayload';
	category: Maybe<Category>;
};

export type UpdateDeliveryInput = {
	data: Maybe<EditDeliveryInput>;
};

export type UpdateDeliveryPayload = {
	__typename?: 'updateDeliveryPayload';
	delivery: Maybe<Delivery>;
};

export type UpdateEditorialInput = {
	where: Maybe<InputId>;
	data: Maybe<EditEditorialInput>;
};

export type UpdateEditorialPayload = {
	__typename?: 'updateEditorialPayload';
	editorial: Maybe<Editorial>;
};

export type UpdateFooterInput = {
	data: Maybe<EditFooterInput>;
};

export type UpdateFooterPayload = {
	__typename?: 'updateFooterPayload';
	footer: Maybe<Footer>;
};

export type UpdateHomePageInput = {
	data: Maybe<EditHomePageInput>;
};

export type UpdateHomePagePayload = {
	__typename?: 'updateHomePagePayload';
	homePage: Maybe<HomePage>;
};

export type UpdatePrivacyPolicyInput = {
	data: Maybe<EditPrivacyPolicyInput>;
};

export type UpdatePrivacyPolicyPayload = {
	__typename?: 'updatePrivacyPolicyPayload';
	privacyPolicy: Maybe<PrivacyPolicy>;
};

export type UpdateProductInput = {
	where: Maybe<InputId>;
	data: Maybe<EditProductInput>;
};

export type UpdateProductPayload = {
	__typename?: 'updateProductPayload';
	product: Maybe<Product>;
};

export type UpdateRoleInput = {
	where: Maybe<InputId>;
	data: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
	__typename?: 'updateRolePayload';
	role: Maybe<UsersPermissionsRole>;
};

export type UpdateSectionInput = {
	where: Maybe<InputId>;
	data: Maybe<EditSectionInput>;
};

export type UpdateSectionPayload = {
	__typename?: 'updateSectionPayload';
	section: Maybe<Section>;
};

export type UpdateSizingChartInput = {
	data: Maybe<EditSizingChartInput>;
};

export type UpdateSizingChartPayload = {
	__typename?: 'updateSizingChartPayload';
	sizingChart: Maybe<SizingChart>;
};

export type UpdateTermsAndConditionInput = {
	data: Maybe<EditTermsAndConditionInput>;
};

export type UpdateTermsAndConditionPayload = {
	__typename?: 'updateTermsAndConditionPayload';
	termsAndCondition: Maybe<TermsAndConditions>;
};

export type UpdateUserInput = {
	where: Maybe<InputId>;
	data: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
	__typename?: 'updateUserPayload';
	user: Maybe<UsersPermissionsUser>;
};
