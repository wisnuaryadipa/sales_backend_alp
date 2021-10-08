import {Request, Response} from 'express';
import {services} from '@src/services';
import logicController from '@src/controllers/logic';
import transWhLogicController from '@src/controllers/logic/warehouses/transactions';
import moment from 'moment';
import fs from 'fs';
import _ from 'lodash';


class Controller {

    static bulan = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];

    index = async () => {
        let subJenisItem = await services.warehouse.master.subJenisItem.getSubJenisItemByUidJenisItem("A");
        
        let data: any = await Promise.all(subJenisItem.map(async (subJenis: any, index: number) => {
            let _subJenis = subJenis;
            let _itemsBySubJenis = await services.warehouse.master.item.getItemsBySubJenisId(subJenis.uid);

            let _item = await Promise.all(_itemsBySubJenis.map(async (item:any, index:any) => {
                
                    const monthStart = 1;
                    const yearStart= 2018;
                    let _item = item;
                    _item.report =  {};
                if(item.uid === 'A20008'){
                    for (let year = yearStart; year <= moment().year(); year++) {
                        _item.report[year] =  {};
    
                        for (let month = 0; month < 12; month++) {

                            const selectedMonthYear = moment().year(year).month(month).startOf('month').toDate();
                            
                            const warehouses = await services.warehouse.master.warehouses.getAllWarehouse();
                            const amountTotal = {
                                "StockAt20th": 0,
                                "StockendOfMonth": 0,
                                "recivedGoods": 0,
                                "usedGoods": 0
                            }
                            _item.report[year][Controller.bulan[month]] = {};
                            _item.report[year][Controller.bulan[month]].detailsWarehouses = {}
                            for (const warehouse of warehouses) {

                                const transactionWholeMonth = await transWhLogicController.getTransactionWholeSelectedMonth(item.uid, warehouse.id, selectedMonthYear)
                                const periodicTransaction = await this.getPeriodicTransactions(item.uid, warehouse.id, month, year);
                                const stockAt20th = await this.stockAtTwentieth(_.cloneDeep(periodicTransaction), month, year);
                                const stockOnTheEndOfTheMonth = periodicTransaction;
                                const usedGoods = this.CountUsedGoodsMonthly(transactionWholeMonth);
                                const receivedGoods = this.CountReceivedGoodsMonthly(transactionWholeMonth);

                                // amountTotal.StockAt20th = amountTotal.StockAt20th + StockAt20th.totalQuantity.all;
                                const amountObj = {

                                    "StockAt20th": stockAt20th,
                                    "StockendOfMonth": stockOnTheEndOfTheMonth,
                                    "recivedGoods": receivedGoods,
                                    "usedGoods": usedGoods
                                }
                                _item.report[year][Controller.bulan[month]].detailsWarehouses[warehouse.nama_gudang] =  amountObj;
                            }
                            
                            _item.report[year][Controller.bulan[month]].totalQuantity = amountTotal;
                            // month == 1 && console.log(await this.stockAtTwentieth(item.uid, month, year))
                            
                        }
                    }
                }
                
                return _item;

            }))

            _subJenis.items = _item;
            return _subJenis;
        }));

        this.writeJsonFile(data, 'monthlyReport.json');

        return data;
    }

    getPeriodicTransactions = async (itemId: string, warehouseId: number, month: number, year: number) => {
        
        const stockOpnameInTheEndOfTheMonth = await logicController.warehouses.stockOpname.getStockOpnameInTheEndOfTheMonth(itemId, warehouseId, month, year);
        let stock = {};

        if(stockOpnameInTheEndOfTheMonth) {
            // Condition to handling where there is an opname around before the end of the month
            // Function to count quantity before doing stock opname
            const endDate = stockOpnameInTheEndOfTheMonth.createdAt;
            stock = await logicController.warehouses.filter.stockByDateByWarehouse(itemId, warehouseId, endDate);

        } else {
            // Condition to decide endDate to be at the end of the month
            // Function to count quantity before exacly at the end of the month
            const _thisDate = moment().year(year).month(month).endOf('month');
            const endDate = moment(_.cloneDeep(_thisDate).endOf('month')).toDate();
            stock = await logicController.warehouses.filter.stockByDateByWarehouse(itemId, warehouseId, endDate);

        }

        return stock;
    }

    CountReceivedGoodsMonthly = (transactions: any) => {

        const filteredInTransaction = transWhLogicController.filterTransactionByStatus(transactions, "IN");
        if(filteredInTransaction){

            console.log(filteredInTransaction)
        }
        const counted = _.sumBy(filteredInTransaction, 'quantity');

        return counted;

    }

    CountUsedGoodsMonthly = (transactions: any) => {

        const filteredInTransaction = transWhLogicController.filterTransactionByStatus(transactions, "OUT");
        const counted = _.sumBy(filteredInTransaction, 'quantity');

        return counted;

    }

    stockAtTwentieth = async (periodicTransactions: any, month: number, year: number) => {
        
        const transactions = periodicTransactions.listTransactions;
        const dateCurrent20th = moment().year(year).month(month).date(20).endOf('day');
        const filteredTransactions = _.filter(transactions, ({createdAt}) => moment(createdAt).isBefore(dateCurrent20th));
        const IN = _.sumBy(_.filter(_.cloneDeep(filteredTransactions), ({status}) => status == "IN"), 'quantity');
        const OUT = _.sumBy(_.filter(_.cloneDeep(filteredTransactions), ({status}) => status == "OUT"), 'quantity');
        const SWAPIN = _.sumBy(_.filter(_.cloneDeep(filteredTransactions), ({status}) => status == "SWAPIN"), 'quantity');
        const SWAPOUT = _.sumBy(_.filter(_.cloneDeep(filteredTransactions), ({status}) => status == "SWAPOUT"), 'quantity');
        const TOTAL = periodicTransactions.qtyOpname + (IN + SWAPIN) - (OUT - SWAPOUT);
        periodicTransactions.listTransactions = filteredTransactions;
        periodicTransactions.totalQuantity.in = IN;
        periodicTransactions.totalQuantity.out = OUT;
        periodicTransactions.totalQuantity.swapin = SWAPIN;
        periodicTransactions.totalQuantity.swapout = SWAPOUT;
        periodicTransactions.totalQuantity.all = TOTAL;

        return periodicTransactions;
    }



    writeJsonFile = (data: any, filename: string) => {
        let dataJsonFormat = JSON.stringify(data, null, 2);
        fs.writeFile(filename, dataJsonFormat, (err) => {
            if (err) throw err;
            console.log('Data has been written')
        })
    }

}

export default new Controller();