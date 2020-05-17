import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DataService } from '../../services/data.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

declare const $: any;

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };

  rows = [];
  productionData: any = [];
  public updateEmp = [];
  public createEmp: any = {};
  public srch = [];
  addEmployeeValidation = false;

  public columns: Array<any> = [
    { title: 'Name', name: 'name', sort: true },
    { title: 'Employee ID', name: 'employeeID', sort: true },
    { title: 'Email', name: 'email', sort: true },
    { title: 'Mobile', name: 'mobile', sort: true },
    { title: 'Join Date', name: 'joinDate', sort: true },
    { title: 'Role', name: 'role', sort: true },
    { title: 'Action', name: 'action', sort: true }
  ];

  public allEmployees = true;

  public modules = [];

  public addEmp: any = {};

  public date: Date = new Date();
  public model: any = { date: { year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate() } };

  public empUpt = {};
  public vals = [];

  public myDatePickerOptionsT: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };
  public myDatePickerOptionsF: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };
  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '38px'
  };
  ecoData: any = {};
  isHidden = true;
  ecoDataForm: FormGroup;
  dateFrom: '';
  dateTo = '';
  totalUsers: any;
  ecoIndicator: any = [];

  public isLoading = true;
  public loadingMsg = '';
  public errorMsg = '';

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private dataService: DataService,
    private router: Router
  ) {
    this.rows = appService.employees;
    this.ecoIndicator = appService.ecoIndicators;
    this.srch = [...this.rows];
    this.modules = appService.employee_modules;
  }

  ngOnInit() {

    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    this.getAllUsers();
  }

  addReset() {
    const randomnumber = Math.floor(Math.random() * 99);
    // this.createEmp = {'employeeID':randomnumber};
    // console.log(randomnumber)
    this.addEmp = {
      firstName: '',
      lastName: '',
      employeeID: randomnumber,
      email: '',
      phone: '',
      company: '',
      designation: '',
      userName: '',
      password: '',
      cPassword: '',
      joinDate: { formatted: '' }
    };
    $('#add_employee').modal('show');
  }

  addSubmit(f) {
    if (f.invalid === true) {
      this.addEmployeeValidation = true;
    } else {
      this.addEmployeeValidation = false;
      // console.log(f.form.value);
      this.rows.unshift(f.form.value);
      this.srch.unshift(f.form.value);
      this.rows = this.rows;
      $('#add_employee').modal('hide');
    }
  }

  onEdit(item) {
    this.router.navigate(['users/all-users/edit'], { queryParams: { 'id': item.employeeID } });
  }

  onDelete(id) {
    // console.log("="+id+"=");
    const index = this.rows.findIndex(function (item, i) {
      return item.employeeID === id;
    });

    // console.log(index);
    if (index > -1) {
      this.rows.splice(index, 1);
      this.srch.splice(index, 1);
    }
    // console.log(this.rows);
    this.rows = this.rows;
  }

  searchID(val) {
    // console.log(val);
    val = val.toString();
    // console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    // console.log(this.rows);
    const temp = this.srch.filter(function (d) {
      // console.log(d.employeeID);
      d.employeeID = d.employeeID.toString();
      return d.employeeID.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // console.log(temp);
    this.rows.push(...temp);
    // console.log(this.rows);
  }

  searchName(val) {
    // console.log(val);
    // console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    // console.log(this.rows);
    const temp = this.srch.filter(function (d) {
      // console.log(d.userName);
      val = val.toLowerCase();
      return d.userName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // console.log(temp);
    this.rows.push(...temp);
    // console.log(this.rows);
  }

  searchDesg(val) {
    // console.log(val);
    // console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    // console.log(this.rows);
    const temp = this.srch.filter(function (d) {
      // console.log(d.designation);
      val = val.toLowerCase();
      return d.designation.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // console.log(temp);
    this.rows.push(...temp);
    // console.log(this.rows);
  }

  getAllUsers() {
    this.dataService.getAllRegisterUser()
      .subscribe(res => {
        this.rows = res;
        this.totalUsers = this.rows.length;
        localStorage.setItem('totalUsers', this.totalUsers);
        this.isLoading = false;
        this.loadingMsg = 'data loading ...';
        console.log(`AllUsersComponent: total users: ${this.rows} => ${this.totalUsers} `);
      },
        error => {
          this.isLoading = false;
          console.log('AllUsersComponent: error all users: ', error);
        });
  }

  checkProductionData(userId: string) {
    console.log(`userId: ${userId}`);
    this.dataService.postUserPondProductionData(userId)
      .subscribe(cpdRes => {
        this.productionData = cpdRes;
        console.log(`user productionData: ${this.productionData}`);
      },
        error => {
          console.error(`error loading user producationData: ${error}`);
        });
  }

  checkEconomicIndicator(userId: string) {
    console.log(`ecoIndicator userId: ${userId}`);
    this.dataService.calculateEconomicIndicator(userId)
      .subscribe(res => {
        // this.ecoIndicator = res;
        console.log('ctr: user economicIndicators', this.ecoIndicator);
        $('#ecoIndicator').modal('show');
        // this.router.navigateByUrl('/clients/profile/details', { state: this.rows });
      }, error => {
        console.log('ctr: error economic indicator', error);
      });
  }
  addUserPond(f: any) {
    console.log(`AllUsersComponent: add user pond ==> ${f}`);
    $('#add_userpond').modal('show');
  }
}
