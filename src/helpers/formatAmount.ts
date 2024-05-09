/**
 *
 * @description formatCurrency a method for formatting currency
 * @function formatCurrency
 * @property amount {number}
 * @returns string
 */
export const formatAmount = (amount: number) => {
    return new Intl.NumberFormat().format(amount);
};
