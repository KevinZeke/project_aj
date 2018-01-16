export class Result<Data> {
    constructor(public code: number,
                public msg: string,
                public data: Data) {
    }
}