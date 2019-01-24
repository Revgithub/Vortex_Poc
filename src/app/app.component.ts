import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poc';
  begin = 'map';

  ngOnInit() {
    let navActive = false;
    var nav_btn = document.querySelector('#nav-btn');
    var nav = document.querySelector('#nav');
    nav_btn.addEventListener('click', function () {
      navActive = !navActive;
      if (navActive) {
        nav.className = 'active';
      }
      else {
        nav.className = '';
      }
    })

  }



  


  public a;
  public b;
  public desc;
  Department: String = 'ELECTRICAL';



  public cleanTransaction = function () {
    var transaction =
    {
      Employee_Id: null,
      Employee_Name: '',
      Department: '',
    }
    return transaction;
  };

  transactions =
    [
      {
        Employee_Id: 1001,
        Employee_Name: 'Revanth',
        Department: 'Accounts',

      },
      {
        Employee_Id: 1002,
        Employee_Name: 'Kanmani',
        Department: 'Sales',

      },
      {
        Employee_Id: 1003,
        Employee_Name: 'Kavin',
        Department: 'Support',

      },
      {
        Employee_Id: 1004,
        Employee_Name: 'Mani',
        Department: 'Electrical',

      },
      {
        Employee_Id: 1005,
        Employee_Name: 'Niranjana',
        Department: 'Sales',

      },
      {
        Employee_Id: 1006,
        Employee_Name: 'manjula',
        Department: 'Support'

      }
    ];

  public transaction = this.cleanTransaction();

  public transactionList = this.transactions;


  onSubmit(f) {
    console.log(f);
    this.a = f.value.Employee_Id;
    this.desc = f.value.Employee_Name;
    alert(this.desc)
    this.transaction.Employee_Id = this.a;
    this.transaction.Employee_Name = this.desc;
    this.transaction.Department = f.value.Department;
    console.log(this.transaction);
    console.log(this.transactions.push(this.transaction));
    this.transaction = this.cleanTransaction();
    alert("Employee added Successfully");
  }

  click(i) {
    console.log(i);
    console.log(this.transactions.splice(i, 1));
    alert("Employee detail  deleted");
  }




}
