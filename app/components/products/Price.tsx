export function Price({
  priceWithTax,
  currencyCode,
}: {
  priceWithTax: number;
  currencyCode: string;
}) {
  return <>{formatPrice(priceWithTax, currencyCode)}</>;
}

export function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat("gh-GH", {
    style: "currency",
    currency,
  }).format(value);
}
