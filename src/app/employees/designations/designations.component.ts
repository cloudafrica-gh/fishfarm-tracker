import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {AppService} from '../../app.service';

declare const $: any;

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css']
})
export class DesignationsComponent implements OnInit {

  rows = [];

  public srch = [...this.rows];
  public addD: any = {};
  addDesignationValidation: boolean = false;

  public isLoading = true;
  public loadingMsg = '';
  public errorMsg = '';
  public audioList = true;

  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.rows = appService.recordings;
    this.srch = [...this.rows];

  }

  ngOnInit() {
    this.getAudioRecordings();
  }

  addReset() {
    this.addD = {'designation': '', 'department': 'Web Development'};
    $('#add_designation').modal('show');
  }

  addDesignation(f) {
    // console.log(f);
    let randomnumber = Math.floor(Math.random() * 99);
    f.form.value.designation_id = randomnumber;
    if (f.invalid === true) {
      this.addDesignationValidation = true;
    } else {
      this.addDesignationValidation = false;
      this.rows.unshift(f.form.value);
      this.srch.unshift(f.form.value);
      this.rows = this.rows;
      $('#add_designation').modal('hide');
    }
  }

  onEdit(item) {
    this.router.navigate(['employees/designations/edit'], {queryParams: {'id': item.designation_id}});
  }

  onDelete(id) {
    // console.log("="+id+"=");

    var index = this.rows.findIndex(function (item, i) {
      return item.designation_id === id;
    });

    //console.log(index);
    if (index > -1) {
      this.rows.splice(index, 1);
      this.srch.splice(index, 1);
    }
    // console.log(this.rows);
    this.rows = this.rows;
  }

  getAudioRecordings() {
    this.dataService.getAudioRecordings()
      .subscribe(res => {
          this.rows = res;
          this.isLoading = false;
          this.loadingMsg = 'data loading ..';
          console.log('RecordingsComponent: recordings =>' + this.rows);
        },
        error => {
          this.isLoading = false;
          console.log('RecordingsComponent: error recordings: ', error);
        });
  }

}
