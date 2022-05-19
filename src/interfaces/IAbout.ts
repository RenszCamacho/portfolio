export interface IAbouts {
    description?: string;
    title?: string;
    _createdAt?: string;
    _id?: string;
    _rev?: string;
    _type?: string;
    _updatedAt?: string;
    imgUrl?: ImgURL;
}

export interface ImgURL {
    _type: string;
    asset: Asset;
}

export interface Asset {
    _ref: string;
    _type: string;
}
