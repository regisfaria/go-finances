const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumSignificantDigits: 3,
    minimumFractionDigits: 2,
  }).format(value);

export default formatValue;
