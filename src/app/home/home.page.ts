import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { StudentAttendanceComponent } from '../student-attendance/student-attendance.component';
import { AssessmentProgressComponent } from '../assessment-progress/assessment-progress.component';
import { CourseInfoComponent } from '../course-info/course-info.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DynamicColResizeDirective } from '../dynamic-col-size.directive';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, DynamicColResizeDirective,  StudentAttendanceComponent, AssessmentProgressComponent, CourseInfoComponent],
})
export class HomePage {
  constructor() {}
}
