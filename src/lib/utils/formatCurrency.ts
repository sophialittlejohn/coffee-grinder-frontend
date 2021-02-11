export const formatCurrency = (rawNumber: number) => {
  const CHF = new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
  }).format(rawNumber);
  return CHF;
};
