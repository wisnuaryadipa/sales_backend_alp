import IFilter from '@src/interfaces/warehouse/IFilter';
export type TransactionType = "OUT" | "IN" | "SWAPIN" | "SWAPOUT" | undefined;

export default interface IFilterTransaction extends IFilter {
    transactionType?: string | undefined
}