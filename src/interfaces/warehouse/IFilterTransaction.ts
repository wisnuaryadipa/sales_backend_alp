import IFilter from '@src/interfaces/warehouse/IFilter';

export default interface IFilterTransaction extends IFilter {
    transactionType?: "OUT" | "IN" | "SWAPIN" | "SWAPOUT"
}