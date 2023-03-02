import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees! : Employee[];

  constructor(private employeeService : EmployeeService , private router: Router){

  }

  private getEmployees()
  {
    this.employeeService.getEmployeeList().subscribe(data => {
      console.log("something check point");
      console.log(data);
      this.employees = data;
    })
  }
  ngOnInit(): void {
      this.getEmployees();
  }

  updateEmployee(id : number)
  {
    this.router.navigate(['update-employee',id]);
  }
  
  deleteEmployee(id : number)
  {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    },error => console.log(error));
  }

  viewEmployee(id : number){
    this.router.navigate(['employee-details', id]);
  }
}
 