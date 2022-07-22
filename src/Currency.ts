import { CurrencyDataType } from "./types/CurrencyDataType";
import { CurrencyNameTranslationsType } from "./types/CurrencyNameTranslationsType";

export class Currency {
    private readonly lang: string;
    private readonly name: string;
    private readonly code: string;
    private readonly number: number;
    private readonly minorUnits: number;
    private readonly dividedInto: number;
    private readonly symbols: string[];
    private readonly translations: CurrencyNameTranslationsType;

    constructor (data: CurrencyDataType, lang: string) {
        this.lang = lang;
        this.name = data.name;
        this.code = data.code;
        this.number = data.number;
        this.minorUnits = data.minorUnits ?? 0;
        this.dividedInto = data.dividedInto ?? 1;
        this.symbols = data.symbols ?? [];
        this.translations = data.translations ?? [];
    }

    public getName(lang?: string): string {
        return this.translations[lang ?? this.lang] ?? this.name;
    }

    public getCode(): string {
        return this.code;
    }

    public getNumber(): number {
        return this.number;
    }

    public getMinorUnits(): number {
        return this.minorUnits;
    }

    public getDividedInto(): number {
        return this.dividedInto;
    }

    public getSymbols(): string[] {
        return this.symbols;
    }

    public getDefaultSymbol(): string|null {
        return this.symbols[0] ?? null;
    }

    public getTranslations(): CurrencyNameTranslationsType {
        return this.translations;
    }
}