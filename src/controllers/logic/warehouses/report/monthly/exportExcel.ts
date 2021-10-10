import xlsx, {Workbook} from 'exceljs';
import moment from 'moment';

class Controller {

    initial = (workbook: Workbook) => {

        workbook.creator = "Wisnu Arya Dipa";
        workbook.created = moment().toDate();

        return workbook;
    }



    index = (filename: string, data?: any) => {

        let wb: Workbook = new xlsx.Workbook();
        wb = this.initial(wb);
        const firstSheet = wb.addWorksheet('Montly');
        firstSheet.columns = [
            { header: 'Id', key: 'id', width: 10 },
            { header: 'Name', key: 'name', width: 32 },
            { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
        ];

        wb.xlsx.writeFile('reportMonth.xlsx')

    }
} 

export default new Controller();