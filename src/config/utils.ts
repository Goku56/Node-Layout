export const calculateDiscount = (price: number, percantage: number): number => {
  return price * (percantage / 100);
};
