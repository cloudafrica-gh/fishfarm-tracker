import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public ecoIndicators = [
    {
      'id': 1,
      'userId': 'aed9f150-a8e2-4d59-9f3d-3a2f489116c3',
      'noOfWorkers': '2',
      'moneyReceived': 200,
      'moneySpent': 250,
      'numberOfPonds': '2',
      'createdAt': '2020-02-24T20:20:19.000Z',
      'updatedAt': '2020-02-24T20:20:19.000Z'
  }
  ];
  public recordings = [
    {
      'id': 1,
      'pondId': 2,
      'userId': '975eafb3-e626-421d-9016-54d744c06ef7',
      'farmName': 'Yeb Fishery',
      'audioFile': 'voice-00121.mp3',
      'inputType': 'mp3'
    },
    {
      'id': 2,
      'pondId': 2,
      'userId': '975eafb3-e626-421d-9016-54d744c06ef7',
      'farmName': 'Osoko Pond',
      'audioFile': 'voice-00122.mp3',
      'inputType': 'mp3'
    },
  ];
  public employees = [
    {
      'firstName': 'John',
      'lastName': 'Doe',
      'userName': 'John',
      'designation': 'Web Designer',
      'employeeID': 1,
      'email': 'johndoe@example.com',
      'phone': `9876543210`,
      'joinDate': {formatted: '17-01-2018'},
      'password': 'qwer',
      'cPassword': 'qwer',
      'company': 'Delta Infotech',
      id: 'S_001'
    },
    {
      'firstName': 'Jeffrey',
      'lastName': 'Warden',
      'userName': 'Jeffrey',
      'designation': 'Web Developer',
      'employeeID': 2,
      'email': 'jeffreywarden@example.com',
      'phone': `9876783210`,
      'joinDate': {formatted: '13-01-2018'},
      'password': 'qwer',
      'cPassword': 'qwer',
      'company': 'Delta Infotech',
      'id': 'S_002'
    },
    {
      'firstName': 'Bernard',
      'lastName': 'Galaviz',
      'userName': 'Bernard',
      'designation': 'Ios Developer',
      'employeeID': 3,
      'email': 'bernardgalaviz@example.com',
      'phone': `9876556210`,
      'joinDate': {formatted: '12-01-2018'},
      'password': 'qwer',
      'cPassword': 'qwer',
      'company': 'Delta Infotech',
      'id': 'S_003'
    }
  ];
  public employee_modules = [
    {
      'module': 'Holidays',
      'read': true,
      'write': false,
      'create': false,
      'delete': false,
      'import': false,
      'export': false
    },
    {
      'module': 'Leave Request',
      'read': true,
      'write': false,
      'create': false,
      'delete': false,
      'import': false,
      'export': false
    },
    {
      'module': 'Clients',
      'read': true,
      'write': false,
      'create': false,
      'delete': false,
      'import': false,
      'export': false
    },
    {
      'module': 'Projects',
      'read': true,
      'write': false,
      'create': false,
      'delete': false,
      'import': false,
      'export': false
    },
    {
      'module': 'Tasks',
      'read': true,
      'write': true,
      'create': true,
      'delete': true,
      'import': false,
      'export': false
    },
    {
      'module': 'Chats',
      'read': true,
      'write': true,
      'create': true,
      'delete': true,
      'import': false,
      'export': false
    },
    {
      'module': 'Assests',
      'read': true,
      'write': true,
      'create': true,
      'delete': true,
      'import': false,
      'export': false
    },
    {
      'module': 'Timing Sheets',
      'read': true,
      'write': true,
      'create': true,
      'delete': true,
      'import': false,
      'export': false
    }

  ];
  public holidays = [
    {
      'title': 'New Year',
      'date': {formatted: '11-01-2018'},
      'day': 'Sunday',
      'status': 'completed',
      'holiday_id': 1
    },
    {
      'title': 'Good Friday',
      'date': {formatted: '01-01-2018'},
      'day': 'Friday',
      'status': 'completed',
      'holiday_id': 2
    },
    {
      'title': 'May Day',
      'date': {formatted: '09-09-2018'},
      'day': 'Monday',
      'status': 'completed',
      'holiday_id': 3
    },
    {
      'title': 'Memorial Day',
      'date': {formatted: '17-01-2018'},
      'day': 'Monday',
      'status': 'completed',
      'holiday_id': 4
    },
    {
      'title': 'Ramzon',
      'date': {formatted: '19-01-2018'},
      'day': 'Monday',
      'status': 'upcoming',
      'holiday_id': 5
    },
    {
      'title': 'Bakrid',
      'date': {formatted: '17-02-2018'},
      'day': 'Saturday',
      'status': 'upcoming',
      'holiday_id': 6
    },
    {
      'title': 'Deepavali',
      'date': {formatted: '01-05-2018'},
      'day': 'Wednesday',
      'status': 'upcoming',
      'holiday_id': 7
    }
  ];
  public leaves = [
    {
      'employeeName': 'John Doe',
      'employeePos': 'Web Devloper',
      'leaveType': 'Casual Leave',
      'from': {formatted: '17-01-2018'},
      'to': {formatted: '19-01-2018'},
      'days': '2',
      'reason': 'Going for Picnic',
      'status': 'New',
      'leave_id': 1
    },
    {
      'employeeName': 'Jeffrey Smith',
      'employeePos': 'Ios Devloper',
      'leaveType': 'Medical Leave',
      'from': {formatted: '21-01-2018'},
      'to': {formatted: '23-01-2018'},
      'days': '2',
      'reason': 'Going to Hospital',
      'status': 'Pending',
      'leave_id': 2
    },
    {
      'employeeName': 'Bernard Shaw',
      'employeePos': 'Angular Devloper',
      'leaveType': 'Loss of Pay',
      'from': {formatted: '09-11-2018'},
      'to': {formatted: '11-11-2018'},
      'days': '2',
      'reason': 'Going to Native',
      'status': 'Approved',
      'leave_id': 3
    }
  ];
  public departments = [
    {'department': 'Web Development', 'department_id': 1},
    {'department': 'Support Management', 'department_id': 2},
    {'department': 'Marketing', 'department_id': 3},
    {'department': 'IT Management', 'department_id': 4},
    {'department': 'Application Development', 'department_id': 5},
    {'department': 'Accounts Management', 'department_id': 6},
    {'department': 'Testing Management', 'department_id': 7}
  ];
  public designations = [
    {'designation': 'Web Developer', 'department': 'Web Development', 'designation_id': 1},
    {'designation': 'Web Designer', 'department': 'Support Management', 'designation_id': 2},
    {'designation': 'Andriod Developer', 'department': 'Marketing', 'designation_id': 3},
    {'designation': 'Ios Developer', 'department': 'IT Management', 'designation_id': 4},
    {'designation': 'UI Developer', 'department': 'Application Development', 'designation_id': 5},
    {'designation': 'Angular Developer', 'department': 'IT Management', 'designation_id': 6},
    {'designation': 'NodeJS Developer', 'department': 'Application Development', 'designation_id': 7},
    {'designation': 'Front End Developer', 'department': 'Accounts Management', 'designation_id': 8}
  ];
  public projects = [
    {
      'projectName': 'Food and Drinks',
      'projectID': 1,
      'role': 'Web Developer',
      'leader': 'Jeffrey Lalor',
      'deadline': {formatted: '17-01-2018'},
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.',
      'cost': '$1200',
      'rate': 'Fixed',
      'totalHours': '100 Hours',
      'createdOn': {formatted: '17-01-2018'},
      'createdBy': 'Barry Cuda',
      'status': 'Active',
      'priority': 'High',
      'progress': 65,
      'client': 'Global Technologies',
      'startDate': {formatted: '17-01-2018'},
      'endDate': {formatted: '17-01-2018'}
    },
    {
      'projectName': 'School Guru',
      'projectID': 2,
      'role': 'Web Designer',
      'leader': 'John Lalor',
      'deadline': {formatted: '17-01-2018'},
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.',
      'cost': '$1800',
      'rate': 'Hourly',
      'totalHours': '120 Hours',
      'createdOn': {formatted: '19-01-2018'},
      'createdBy': 'King Cuda',
      'status': 'Active',
      'progress': 15,
      'priority': 'High',
      'client': 'Cream Inc',
      'startDate': {formatted: '17-01-2018'},
      'endDate': {formatted: '17-01-2018'}
    },
    {
      'projectName': 'Penabook',
      'projectID': 3,
      'role': 'UI Designer',
      'leader': 'John Lalor',
      'deadline': {formatted: '17-01-2018'},
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.',
      'cost': '$1800',
      'rate': 'Fixed',
      'progress': 49,
      'totalHours': '220 Hours',
      'createdOn': {formatted: '19-01-2018'},
      'createdBy': 'Brain Fade',
      'status': 'Active',
      'priority': 'Medium',
      'client': 'Cream Inc',
      'startDate': {formatted: '17-01-2018'},
      'endDate': {formatted: '17-01-2018'}
    },
    {
      'projectName': 'Harvey Clinic',
      'projectID': 4,
      'role': 'Ios Developer',
      'leader': 'John Lalor',
      'deadline': {formatted: '17-01-2018'},
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.',
      'cost': '$5800',
      'rate': 'Hourly',
      'progress': 88,
      'totalHours': '220 Hours',
      'createdOn': {formatted: '19-01-2018'},
      'createdBy': 'Brain Fade',
      'status': 'Inactive',
      'priority': 'Low',
      'client': 'Dreams Tech',
      'startDate': {formatted: '17-01-2018'},
      'endDate': {formatted: '17-01-2018'}
    },
    {
      'projectName': 'The Gigs',
      'projectID': 5,
      'role': 'Ios Developer',
      'leader': 'John Lalor',
      'deadline': {formatted: '17-01-2018'},
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.',
      'cost': '$5800',
      'rate': 'Hourly',
      'progress': 100,
      'totalHours': '220 Hours',
      'createdOn': {formatted: '19-01-2018'},
      'createdBy': 'Brain Fade',
      'status': 'Inactive',
      'priority': 'Low',
      'client': 'Dreams Tech',
      'startDate': {formatted: '17-01-2018'},
      'endDate': {formatted: '17-01-2018'}
    }
  ];
  public clients = [
    {
      'id': 3,
      'pondId': 3,
      'userId': '82ee6173-7a67-481e-8f93-ca366a4004e5',
      'pondName': 'test',
      'pondType': null,
      'cubicSize': 20,
      'isLargest': 1,
      'isSmallest': 0,
      'firstName': 'test',
      'lastName': 'test',
      'farmName': 'test'
    },
    {
      'id': 4,
      'pondId': 4,
      'userId': 'cfb9c7c1-5ebf-485f-89d6-8a08534bd2e2',
      'pondName': 'the one pond',
      'pondType': null,
      'cubicSize': 250,
      'isLargest': 0,
      'isSmallest': 1,
      'firstName': 'nana',
      'lastName': 'akoto',
      'farmName': 'the only farm'
    },
    {
      'id': 5,
      'pondId': 5,
      'userId': '5a39df6e-be24-4d5c-be5d-38e5c34bc93a',
      'pondName': 'oclmini',
      'pondType': null,
      'cubicSize': 66,
      'isLargest': 1,
      'isSmallest': 0,
      'firstName': 'nana',
      'lastName': 'aboagye',
      'farmName': 'jexy farms'
    },
    {
      'id': 6,
      'pondId': 6,
      'userId': '6fc24834-a5cd-4046-9541-49ba7075b1c9',
      'pondName': 'krekatu',
      'pondType': null,
      'cubicSize': 42,
      'isLargest': 0,
      'isSmallest': 1,
      'firstName': 'Roland',
      'lastName': 'Anumel',
      'farmName': 'RA'
    },
    {
      'id': 7,
      'pondId': 7,
      'userId': '56b67f0b-da59-4916-906c-caeb172164af',
      'pondName': 'Gorman',
      'pondType': null,
      'cubicSize': 50,
      'isLargest': 1,
      'isSmallest': 0,
      'firstName': 'Eric',
      'lastName': 'Gorman',
      'farmName': 'Gorma'
    },
  ];
  public invoices = [
    {
      'userId': '975eafb3-e626-421d-9016-54d744c06ef7',
      'fullName': 'Hanson Peprah',
      'email': 'hanson.peprah@sasghana.com',
      'phoneNumber': '0244588584',
      'farmName': 'Yeb Fishery',
      'location': 'Somanya',
      'aboutFarm': null,
      'noOfPonds': null,
      'noOfHatcheries': null,
      'noOfCages': null
    },
    {
      'userId': 'd0fe0006-b0b8-4c9a-bfe5-7d3d56fb08c9',
      'fullName': 'qqq qqq',
      'email': 'qqq',
      'phoneNumber': '0qqq',
      'farmName': 'qqq',
      'location': 'qwww',
      'aboutFarm': null,
      'noOfPonds': null,
      'noOfHatcheries': null,
      'noOfCages': null
    },
    {
      'userId': 'aa76e883-99a8-42dd-9f14-a53afab3611e',
      'fullName': 'Anderson Kyeremeh',
      'email': 'anderson.kyereme@sasghana.com',
      'phoneNumber': '0552492165',
      'farmName': 'Yeb Fishery',
      'location': 'Accra',
      'aboutFarm': null,
      'noOfPonds': null,
      'noOfHatcheries': null,
      'noOfCages': null
    },
    {
      'userId': 'f1c4debb-2b05-4e29-9bf5-cc975d4d18c0',
      'fullName': 'Grace Omabo',
      'email': 'grace.omabo@gmail.com',
      'phoneNumber': '0244954473',
      'farmName': 'Omabo Farms',
      'location': 'Gyiasekan',
      'aboutFarm': null,
      'noOfPonds': null,
      'noOfHatcheries': null,
      'noOfCages': null
    },
    {
      'userId': '82ee6173-7a67-481e-8f93-ca366a4004e5',
      'fullName': 'test test',
      'email': 'meme@me.com',
      'phoneNumber': '0200000001',
      'farmName': 'test',
      'location': 'string',
      'aboutFarm': null,
      'noOfPonds': null,
      'noOfHatcheries': null,
      'noOfCages': null
    },
  ];
  public payments = [
    {
      'paymentID': 1,
      'client': 'Barry Cuda',
      'paidDate': {formatted: '07-07-1998'},
      'paymentType': 'Paypal',
      'paidAmount': 380
    },
    {
      'paymentID': 2,
      'client': 'Tressa Wexler',
      'paidDate': {formatted: '07-07-1998'},
      'paymentType': 'Paypal',
      'paidAmount': 5000
    },
    {
      'paymentID': 3,
      'client': 'Ruby Bartlet',
      'paidDate': {formatted: '07-07-1998'},
      'paymentType': 'Paypal',
      'paidAmount': 380
    }
  ];
  public contacts = [
    {
      'contactName': 'John Doe',
      'number': '917698234598',
      'email': 'johndoe@gmail.com',
      'designation': 'Web Developer',
      'status': 'active',
      'contactID': 1
    },
    {
      'contactName': 'Dwayne Johnson',
      'number': '917698234598',
      'email': 'dwaynejohn@gmail.com',
      'designation': 'NoedJS Developer',
      'status': 'inactive',
      'contactID': 2
    },
    {
      'contactName': 'Mark Boucher',
      'number': '917698234598',
      'email': 'markboucher@gmail.com',
      'designation': 'UI Designer',
      'status': 'active',
      'contactID': 3
    },
    {
      'contactName': 'Zet Babu',
      'number': '917697234598',
      'email': 'zetbabu@gmail.com',
      'designation': 'Angular Developer',
      'status': 'active',
      'contactID': 4
    },
    {
      'contactName': 'Steve Parker',
      'number': '917698234598',
      'email': 'steveparke@gmail.com',
      'designation': 'Front End Developer',
      'status': 'active',
      'contactID': 5
    },
    {
      'contactName': 'Will Smith',
      'number': '918998234598',
      'email': 'willsmith@gmail.com',
      'designation': 'IOS Developer',
      'status': 'inactive',
      'contactID': 6
    },
    {
      'contactName': 'Edward Snow',
      'number': '918998234598',
      'email': 'edwardsnow@gmail.com',
      'designation': 'Database Developer',
      'status': 'active',
      'contactID': 7
    },
    {
      'contactName': 'Steve Jobs',
      'number': '917698234598',
      'email': 'stevejobs@gmail.com',
      'designation': 'Apple CEO',
      'status': 'active',
      'contactID': 8
    },
    {
      'contactName': 'Bill Gates',
      'number': '919698234598',
      'email': 'gatesbill@gmail.com',
      'designation': 'Microsoft Developer',
      'status': 'active',
      'contactID': 9
    },
    {
      'contactName': 'Pichai Sundar',
      'number': '917698234598',
      'email': 'sundarpichai@gmail.com',
      'designation': 'Google CEO',
      'status': 'active',
      'contactID': 10
    }
  ];
  timingsheet = [
    {
      'sheet_id': 1,
      'firstName': 'Bernardo',
      'lastName': 'Galaviz',
      'designation': 'Angular Developer',
      'date': {formatted: '02-08-2017'},
      'project': 'Penabook',
      'hours_assigned': 20,
      'hours_remaining': 12,
      'hours_today': 7,
      'deadline': {formatted: '20-01-2018'},
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.'
    },
    {
      'sheet_id': 2,
      'firstName': 'Catherine',
      'lastName': 'Manseau',
      'designation': 'IOS Developer',
      'date': {formatted: '02-08-2017'},
      'project': 'School Guru',
      'hours_assigned': 30,
      'hours_remaining': 12,
      'hours_today': 6,
      'deadline': {formatted: '02-10-2018'},
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.'
    },
    {
      'sheet_id': 3,
      'firstName': 'Jeffery',
      'lastName': 'Lalor',
      'designation': 'Android Developer',
      'date': {formatted: '02-08-2017'},
      'project': 'Food and Drinks',
      'hours_assigned': 20,
      'hours_remaining': 12,
      'hours_today': 6,
      'deadline': {formatted: '02-01-2018'},
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.'
    },
    {
      'sheet_id': 4,
      'firstName': 'Mike',
      'lastName': 'Litorus',
      'designation': 'Team Leader',
      'date': {formatted: '20-08-2017'},
      'project': 'Harvey Clinic',
      'hours_assigned': 20,
      'hours_remaining': 2,
      'hours_today': 6,
      'deadline': {formatted: '02-01-2018'},
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.'
    }
  ];
  public tickets = [
    {
      'ticket_id': 1,
      'subject': 'Laptop Issue',
      'assign_staff': 'John Smith',
      'created_date': {formatted: '05-05-2017'},
      'last_reply': {formatted: '05-05-2017'},
      'priority': 'High',
      'status': 'New',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.'
    },
    {
      'ticket_id': 2,
      'subject': 'Network Slow',
      'assign_staff': 'William Jaden',
      'created_date': {formatted: '11-07-2017'},
      'last_reply': {formatted: '15-07-2017'},
      'priority': 'Highest',
      'status': 'Open',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.'
    }
  ];
  public tasks = [
    {
      'title': 'Patient appointment booking',
      'status': 'upcoming',
      'taskID': 1
    },
    {
      'title': 'Appointment booking with payment gateway',
      'status': 'pending',
      'taskID': 2
    },
    {
      'title': 'Doctor available module',
      'status': 'completed',
      'taskID': 3
    },
    {
      'title': 'Patient and Doctor video conferencing',
      'status': 'pending',
      'taskID': 4
    },
    {
      'title': 'Private chat module',
      'status': 'pending',
      'taskID': 5
    },
    {
      'title': 'Patient Profile add',
      'status': 'pending',
      'taskID': 6
    }
  ];
  public assets = [
    {
      'asset_user': 'John Doe',
      'asset_id': 123,
      'asset_name': 'Dell Laptop',
      'purchase_date': {formatted: '17-01-2017'},
      'end_date': {formatted: '19-01-2018'},
      'amount': 1214
    },
    {
      'asset_user': 'Richard Miles',
      'asset_id': 124,
      'asset_name': 'Canon Printer',
      'purchase_date': {formatted: '17-03-2017'},
      'end_date': {formatted: '17-09-2019'},
      'amount': 814
    },
    {
      'asset_user': 'Mike Litorus',
      'asset_id': 128,
      'asset_name': 'Seagate Hardisk',
      'purchase_date': {formatted: '17-08-2016'},
      'end_date': {formatted: '19-08-2018'},
      'amount': 214
    }
  ];
  public users = [
    {
      'user_name': 'Daniel Porter',
      'email': 'danielporter@gmail.com',
      'company': 'Focus Technologies',
      'role': 'Admin',
      'user_id': 451
    },
    {
      'user_name': 'Barry Cuda',
      'email': 'barrycuda@gmail.com',
      'company': 'Global Technologies',
      'role': 'Employee',
      'user_id': 452
    },
    {
      'user_name': 'John Doe',
      'email': 'johndoe@gmail.com',
      'company': 'Focus Technologies',
      'role': 'Client',
      'user_id': 453
    }
  ];
  public leaveType = [
    {
      'leave_type': 'Casual Leave',
      'leave_days': 12,
      'status': 'Active',
      'id': 456
    },
    {
      'leave_type': 'Medical Leave',
      'leave_days': 12,
      'status': 'Active',
      'id': 458
    }
  ];

  public inbox = [
    {
      'mail_id': 1243,
      'favourite': true,
      'mailFrom': 'John Doe',
      'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      'attachment': true,
      'time': '13:14',
      'unread': true
    },
    {
      'mail_id': 1254,
      'favourite': false,
      'mailFrom': 'Code Canyon',
      'message': 'Important account security update from Envato',
      'attachment': true,
      'time': '30 Nov',
      'unread': true
    },
    {
      'mail_id': 1253,
      'favourite': true,
      'mailFrom': 'Theme Forest',
      'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      'attachment': true,
      'time': '27 Nov',
      'unread': false
    },
    {
      'mail_id': 1244,
      'favourite': false,
      'mailFrom': 'Envato Account',
      'message': 'Important account security update from Envato',
      'attachment': true,
      'time': '26 Nov',
      'unread': false
    },
    {
      'mail_id': 1245,
      'favourite': false,
      'mailFrom': 'Richard Parker',
      'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      'attachment': true,
      'time': '13 Nov',
      'unread': true
    }
  ];

  public jobs = [
    {
      'job_id': 145,
      'job_title': 'Web Developer',
      'department': 'Development',
      'job_type': 'Full Time',
      'status': 'open',
      'expiry_date': {formatted: '25-02-2019'}
    }
  ];

  public applicants = [
    {
      'applicant_id': 454,
      'name': 'John Doe',
      'email': 'johndoe@gmail.com',
      'phone': '9807512345',
      'apply_date': {formatted: '25-12-2018'},
      'status': 'New'

    }
  ];

  constructor() {
  }

}
