export class MoneyFormatUtils {
    
    private static instance: MoneyFormatUtils;

    private formatter: Intl.NumberFormat;

    private constructor() {

        this.formatter = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

    }

    public static format(value: number): string {
        return MoneyFormatUtils.getInstance()
                .formatter.format(value);
    }

    private static getInstance(): MoneyFormatUtils {

        if (!MoneyFormatUtils.instance) {
            MoneyFormatUtils.instance =
                    new MoneyFormatUtils();
        }

        return MoneyFormatUtils.instance;

    }
    
}