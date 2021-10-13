import xlsx, {Workbook, Worksheet} from 'exceljs';
import moment from 'moment';
import fs from 'fs';
import _ from 'lodash';

class Controller {
    static bulan = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];

    currentRow: number;

    constructor() {
        this.currentRow = 0;
    }

    addCurrRow = (): void => {
        this.currentRow += 1;
    }

    resetCurrRow = (): void => {
        this.currentRow = 0;
    }
    
    index = (data: any) => {

        const timeNow = moment().format('DD-MM-YYYY');
        let wb: Workbook = new xlsx.Workbook();
        
        wb = this.initial(wb);
        this.resetCurrRow();
        let itemSheet: Worksheet = wb.addWorksheet('Montly by Item');
        itemSheet = this.createFieldColumn(itemSheet);
        itemSheet = this.addDataItems(data, itemSheet);

        this.resetCurrRow();
        let subItemSheet: Worksheet = wb.addWorksheet('Montly by Sub Item');
        subItemSheet = this.createFieldColumn(subItemSheet);
        subItemSheet = this.addDataSubItem(data, subItemSheet);

        wb.xlsx.writeFile('reportMonth '+timeNow+'.xlsx')

    }

    initial = (workbook: Workbook) => {

        workbook.creator = "Wisnu Arya Dipa";
        workbook.created = moment().toDate();

        return workbook;
    }

    createFieldColumn = (workSheet: Worksheet) => {

        // MERGING FIRST ROW HEADER
        workSheet.mergeCells(1,1,2,1);
        workSheet.mergeCells(1,2,2,2);
        workSheet.mergeCells(1,3,1,4);
        workSheet.mergeCells(1,5,1,6);
        workSheet.mergeCells(1,7,1,8);
        workSheet.mergeCells(1,9,2,9);
        
        // ADD VALUES FIRST ROW HEADER
        this.addCurrRow();
        workSheet.getCell(this.currentRow,1).value = "Item";
        workSheet.getCell(this.currentRow,2).value = "Periode";
        workSheet.getCell(this.currentRow,3).value = "Kedatangan";
        workSheet.getCell(this.currentRow,5).value = "Posisi Stok";
        workSheet.getCell(this.currentRow,7).value = "Pemakaian";
        workSheet.getCell(this.currentRow,9).value = "Keterangan";

        // ADD VALUES SECOND ROW HEADER
        this.addCurrRow();
        workSheet.getCell(this.currentRow,3).value = "Tgl. Datang";
        workSheet.getCell(this.currentRow,4).value = "Jml. Datang";
        workSheet.getCell(this.currentRow,5).value = "TGL 20";
        workSheet.getCell(this.currentRow,6).value = "Akhir Bulan";
        workSheet.getCell(this.currentRow,7).value = "Jml. Pakai";
    
        return workSheet;

    }

    addDataItems = (data: any, workSheet: Worksheet) => {

        data.forEach((subJenisItem: any) => {
            
            subJenisItem.items.forEach((item:any) => {
                for (const yearKey in item.report) {
                    this.addCurrRow();
                    workSheet.mergeCells(this.currentRow,1,this.currentRow,9);
                    workSheet.getCell(this.currentRow,1).value = subJenisItem.sub_jenis_item;
                    workSheet.getCell(this.currentRow,1).alignment = { vertical: 'middle', horizontal: 'center'}
                    this.addCurrRow();
                    workSheet.mergeCells(this.currentRow,1,this.currentRow,9);
                    workSheet.getCell(this.currentRow,1).value = item.nama_item;
                    workSheet.getCell(this.currentRow,1).alignment = { vertical: 'middle', horizontal: 'center'}
                    this.addCurrRow();
                    workSheet.mergeCells(this.currentRow,1,this.currentRow,9);
                    workSheet.getCell(this.currentRow,1).value = yearKey;
                    workSheet.getCell(this.currentRow,1).alignment = { vertical: 'middle', horizontal: 'center'}
                    for (const monthKey in item.report[yearKey]) {
                        this.addCurrRow();
                        workSheet.getCell(this.currentRow,1).value = subJenisItem.sub_jenis_item + " - " + item.nama_item;
                        workSheet.getCell(this.currentRow,2).value = monthKey;
                        workSheet.getCell(this.currentRow,4).value = item.report[yearKey][monthKey].totalQuantity.recivedGoods;
                        workSheet.getCell(this.currentRow,5).value = item.report[yearKey][monthKey].totalQuantity.StockAt20th;
                        workSheet.getCell(this.currentRow,6).value = item.report[yearKey][monthKey].totalQuantity.StockendOfMonth;
                        workSheet.getCell(this.currentRow,7).value = item.report[yearKey][monthKey].totalQuantity.usedGoods;
                    }
                }
                
            })
        })

        return workSheet;
    }
    
    addDataSubItem = (data: any, workSheet: Worksheet) => {
        data.forEach((subJenisItem: any) => {

            for (let year = 2018; year <= moment().year(); year++) {
                this.addCurrRow();
                workSheet.mergeCells(this.currentRow,1,this.currentRow,9);
                workSheet.getCell(this.currentRow,1).value = subJenisItem.sub_jenis_item;
                workSheet.getCell(this.currentRow,1).alignment = { vertical: 'middle', horizontal: 'center'}
                this.addCurrRow();
                workSheet.mergeCells(this.currentRow,1,this.currentRow,9);
                workSheet.getCell(this.currentRow,1).value = year;
                workSheet.getCell(this.currentRow,1).alignment = { vertical: 'middle', horizontal: 'center'}

                for (let month = 0; month < 12; month++) {
                    let StockAt20th: number|null = null;
                    let StockendOfMonth: number|null = null;
                    let recivedGoods: number|null = null;
                    let usedGoods: number|null = null;
                    let startYear = 2018;
            
                    subJenisItem.items.forEach((item:any) => {
                        if (item.report[year][Controller.bulan[month]]) {
                            StockAt20th += item.report[year][Controller.bulan[month]].totalQuantity.StockAt20th;
                            StockendOfMonth += item.report[year][Controller.bulan[month]].totalQuantity.StockendOfMonth;
                            recivedGoods += item.report[year][Controller.bulan[month]].totalQuantity.recivedGoods;
                            usedGoods += item.report[year][Controller.bulan[month]].totalQuantity.usedGoods;
                        }
                    })
                    
                    this.addCurrRow();
                    workSheet.getCell(this.currentRow,1).value = subJenisItem.sub_jenis_item;
                    workSheet.getCell(this.currentRow,2).value = Controller.bulan[month].toUpperCase();
                    workSheet.getCell(this.currentRow,4).value = recivedGoods;
                    workSheet.getCell(this.currentRow,5).value = StockAt20th;
                    workSheet.getCell(this.currentRow,6).value = StockendOfMonth;
                    workSheet.getCell(this.currentRow,7).value = usedGoods;
                }
                
            }
        })

        return workSheet;

    }




} 

export default new Controller();