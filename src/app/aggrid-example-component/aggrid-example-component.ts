import { Component } from '@angular/core';
import {ModuleRegistry,AllCommunityModule, ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-aggrid-example-component',
  imports: [AgGridModule],
  templateUrl: './aggrid-example-component.html',
  styleUrl: './aggrid-example-component.css',
})
export class AggridExampleComponent {
columnDefs:ColDef[] =[
  {headerName:'EmpId',field:'EmpId', filter: true},
  {headerName:'EmpName',field:'EmpName', filter: true},
  {headerName:'EmpSalary',field:'EmpSalary', filter: true},

]

rowData=[{EmpId:1,EmpName:'abc',EmpSalary:2345},
        {EmpId:2,EmpName:'xyz',EmpSalary:3345},
        {EmpId:3,EmpName:'pqr',EmpSalary:4345}]
}
