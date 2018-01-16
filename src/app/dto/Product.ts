import {Comment} from "./Comment";

export class Product {
    constructor(public pId: number,
                public title: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>,
                public comments: Array<Comment>) {
    }
}