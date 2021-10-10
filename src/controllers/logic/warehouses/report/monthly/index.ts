import generator from "@src/controllers/logic/warehouses/report/monthly/generator";
import exportExcel from "@src/controllers/logic/warehouses/report/monthly/exportExcel";

const reportMonthlyController = {
    generator: generator,
    exportExcel: exportExcel
}

export default reportMonthlyController;