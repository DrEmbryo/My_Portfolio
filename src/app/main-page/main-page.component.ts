import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  skills = [
    {
      name : 'HTML 5',
      procent: 80,
    },
    {
      name : 'CSS 3',
      procent: 75,
    },
    {
      name : 'Bootstrap 4',
      procent: 60,
    },
    {
      name : 'JavaScript',
      procent: 70,
    },
    {
      name : 'JQuery',
      procent: 60,
    },
    {
      name : 'Node.js & express',
      procent: 40,
    },
    {
      name : 'MongoDB',
      procent: 50,
    },
    {
      name : 'MySQL',
      procent: 50,
    },
    {
      name : 'Angular 2 +',
      procent: 55,
    },
  ];

  info = {
    phone: '+375293703169',
    skype: 'pavel_goroshcko',
    email: 'p.i.goroshko@gmail.com',
  };

  ngOnInit() {
  }

}
