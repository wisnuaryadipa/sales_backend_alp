import {services} from '@src/services';
import _ from 'lodash';
import moment from 'moment';



class Controller {

    getStockOpnameInTheEndOfTheMonth = async (itemId: string, warehouseId: number, month: number, year: number) => {
         /** 
         * Input : ItemId:String, WarehouseId:Integer, Date:String
         * Output : StockOpname obj / Null
         * Description : Function work to find if there is a stock opname around before end of the month
         * 
        */

        const stockOpname = await services.warehouse.stockOpname.getOpnameInEndOfTheMonth(itemId, warehouseId, year, month);

        return stockOpname;

    }

    getStockOpnameAtTheEndOfTheMonth = (itemId: string, warehouseId: number, month: number, year: number) => {
        /** 
        * Input : ItemId:String, WarehouseId:Integer, Date:String
        * Output : StockOpname obj / Null
        * Description : Function work to find if there is a stock opname in particular at the end of the month
        * 
       */
        
    }

    test = async () => {
        const _test = await services.warehouse.master.warehouses.getAllWarehouse();

        let satu = _.cloneDeep(_test);
        satu[1].nama_gudang = "test";

        const dua = _test;
        const obj = {
            satu: satu,
            dua: dua
        }
        console.log(moment( moment().year(2021).month(1).date(23)).toDate())
        return obj;
    }
}

export default new Controller();