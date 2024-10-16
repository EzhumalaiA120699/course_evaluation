import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home/home.page';
import { CommonModule } from '@angular/common';
import { DynamicColResizeDirective } from './dynamic-col-size.directive';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, DynamicColResizeDirective],
})
export class AppComponent {
  constructor() {}
}
