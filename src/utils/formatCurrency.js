export const formatCurrency = (ammount, locale = "en-us", currency = "USD") => {
  return ammount?.toLocaleString(locale, {
    style: "currency",
    currency,
  });
};
