import { Currency } from "./Currency";
import { CurrencyDataRefType } from "./types/CurrencyDataRefType";
import { CurrencyListType } from "./types/CurrencyListType";

class Currencies {
    private readonly reference: CurrencyDataRefType;
    private lang = 'en';

    constructor (reference: CurrencyDataRefType) {
        this.reference = reference;
    }

    public setLanguage(lang: string): void {
        this.lang = lang;
    }

    public getAll(): CurrencyListType {
        const list: CurrencyListType = {};

        for (const [code, data] of Object.entries(this.reference)) {
            list[code] = new Currency(data, this.lang);
        }

        return list;
    }

    public get(code: string): Currency|null {
        const data = this.reference[code.toUpperCase()];

        return data ? new Currency(data, this.lang) : null;
    }

    public getByNumber(number: number): Currency|null {
        for (const data of Object.values(this.reference)) {
            if (data.number === number) {
                return new Currency(data, this.lang);
            }
        }

        return null;
    }
}

const reference = require('../data/active_currency_reference.json');

export const currencies = new Currencies(reference);