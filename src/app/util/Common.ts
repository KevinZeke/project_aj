import {Result} from "../dto/Result";

export class Common {
    public static error(result: Result<any>) {
        throw new Error(`错误代码：${result.code}，${result.msg}`);
    }

    public static warn(message: string) {
        console.warn("警告: " + message);
    }

    public static info(result: Result<any>, url: string = undefined) {
        let date = new Date();
        console.log("");
        console.log(`####### ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} : ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} #######`);
        url && console.log("api: " + url);
        console.log(`response:{ code: ${result.code}, msg: ${result.msg} }`);
        console.log(result.data);
        console.log("####### #######");
    }

    public static curDate() {
        let date = new Date();
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
}

export class Dom {
    public static info(element: any): { height: number, width: number, top: number, left: number } {
        if (element) {
            return {
                height: Dom.height(element),
                width: Dom.width(element),
                top: Dom.top(element),
                left: Dom.left(element)
            }
        }
        return null;
    };

    public static height(element: any): number {
        return element.offsetHeight;
    }

    public static width(element: any): number {
        return element.offsetWidth;
    }

    public static top(element: any, isTop2Window?: boolean): number {
        let offset = element.offsetTop;
        if (isTop2Window) {
            if (element.offsetParent != null)
                offset += Dom.top(element.offsetParent)
        }
        return offset;
    }

    public static left(element: any, isLeft2Window?: boolean): number {
        let offset = element.offsetLeft;
        if (isLeft2Window) {
            if (element.offsetParent != null)
                offset += Dom.left(element.offsetParent)
        }
        return offset;
    }

}