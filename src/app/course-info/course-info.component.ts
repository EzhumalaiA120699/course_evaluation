import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class CourseInfoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
