
/**
 * 1 sds = ExchangeRatesArray[n].value 
 */
export const ExchangeRatesArray = [
  {
    currencyName: "USD",
    networkName: "",
    value: 0.00124,
    key: "1",
  },
  {
    currencyName: "USDT",
    networkName: "BEP20",
    value: 0.00148,
    key: "2",
  },
  {
    currencyName: "USDT",
    networkName: "ERC20",
    value: 0.00151,
    key: "3",
  },
  {
    currencyName: "RUB",
    networkName: "",
    value: 0.1116,
    key: "4",
  },
  {
    currencyName: "ETH",
    networkName: "",
    value: 0.0000111,
    key: "5",
  },
  {
    currencyName: "SETH",
    networkName: "Sepolia",
    value: 0.000001,
    key: "6",
  },
];

export function getCurrencyName(currencyID: string): string {
  try {
    return ExchangeRatesArray.filter(item => {
      if (item.key == currencyID) return item;
    })[0].currencyName;

  } catch (error) {
    return '';
  }
}
