export const FormatINR = (amount:number) => {
  var formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });
  return formatter.format(amount);
};
