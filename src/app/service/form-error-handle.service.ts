import {Injectable} from '@angular/core';

@Injectable()
export class FormErrorHandleService {


    private resolveName(name: string) {
        if (name) return name;
        return "该项";
    }

    public required(name?: string): string {
        return `${this.resolveName(name)}为必填项。`;
    }

    public min(minError: { min: number, actual: number }, name?: string): string {
        return `${this.resolveName(name)}最小应为${minError.min}，当前值为${minError.actual}`;
    }

    public minlength(minLengthError: { requiredLength: number, actualLength: number }, name?: string): string {
        return `${this.resolveName(name)}最少需要${minLengthError.requiredLength}个字，
        当前为${minLengthError.actualLength}个字。`;
    }

}
