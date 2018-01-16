export class FormError<ValueType> {
    public code: number;
    public describe: string;
    public required: ValueType;
    public actual: ValueType;
    public sample: ValueType;

    constructor() {
    }
}
