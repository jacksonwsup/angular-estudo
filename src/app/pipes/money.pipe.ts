import { Pipe, PipeTransform } from "@angular/core";
import { MoneyFormatUtils } from "../utils/moneyformat.utils";

@Pipe({
    name: "money"
})
export class MoneyPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        
        return MoneyFormatUtils.format(value);

    }

}