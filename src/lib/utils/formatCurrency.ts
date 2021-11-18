export const formatCurrency = (rawNumber: number): string => {
  const CHF = new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
  }).format(rawNumber);
  return CHF;
};
