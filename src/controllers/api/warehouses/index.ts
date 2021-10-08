import transactionControllers from "@src/controllers/api/warehouses/transaction";
import stocOpnameControllers from "@src/controllers/api/warehouses/stockOpname";
import stockControllers from "@src/controllers/api/warehouses/stock";
import masterControllers from "@src/controllers/api/warehouses/master";
import reportControllers from "@src/controllers/api/warehouses/reports";

export default {
    transaction : transactionControllers,
    stockOpname: stocOpnameControllers,
    stock: stockControllers,
    master: masterControllers,
    reports: reportControllers,
    
}