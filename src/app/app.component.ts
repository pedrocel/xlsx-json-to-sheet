import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  arr: Array<any>;

  constructor() {
    this.arr = [
      { name: 'Moran', role: 'back' },
      { name: 'Alain', role: 'front' },
      { name: 'Tony', role: 'back' },
      { name: 'Mike', role: 'back' },
      { name: 'Abo', role: 'back' },
      { name: 'Toni', role: 'back' },
    ]
  }

  exportToExcel($event) {
	  const fileName = 'test.xlsx';

		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.arr);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'test');

		XLSX.writeFile(wb, fileName);
  }
}
