# Currency reference (ISO 4217)

## Installation
```bash
yarn add currency-reference
```


## Usage

### Import
```typescript
import { currencies } from "currency-reference/dist/currencies";
```

### Get currency by currency code
```typescript
const currency = currencies.get('USD');
```

### Get currency by currency number
```typescript
const currency = currencies.getByNumber(840);
```

### Set the default language ('en' or 'ru'). 'en' - default
```typescript
currencies.setLanguage('ru');
```


## Examples
```typescript
currency.getName(); // 'US Dollar'
currency.getName('ru'); // 'Доллар США'
currency.getCode(); // 'USD'
currency.getNumber(); // 840
currency.getDefaultSymbol(); // '$'
currency.getMinorUnits(); // 2
currency.getDividedInto(); // 100
```

### Get all currencies
```typescript
currencies.getAll(); // {AED: Currency, AFN: Currency, ALL: Currency, AMD: Currency, ANG: Currency, …}
```