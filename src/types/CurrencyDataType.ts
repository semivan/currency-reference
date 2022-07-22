import { CurrencyNameTranslationsType } from "./CurrencyNameTranslationsType"

export type CurrencyDataType = {
    name: string;
    code: string;
    number: number;
    minorUnits: number;
    dividedInto: number;
    symbols: string[];
    translations: CurrencyNameTranslationsType;
}