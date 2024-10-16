import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Directive({
  selector: '[appDynamicColResize]' ,
  standalone: true // Add this directive as an attribute in the ion-col
})
export class DynamicColResizeDirective implements OnInit {


  constructor(private el: ElementRef, private renderer: Renderer2, private platform: Platform) {}

  ngOnInit() {
    this.setDynamicColSize();  // Set initial size based on current window size
  }

  // Listen to window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setDynamicColSize();
  }

  // Method to calculate and set the column size
  private setDynamicColSize() {
    const width = this.platform.width(); // Get the current window width

    let courseColSize = '12'; // Default to full width for mobile screens
    let contentColSize = '12'; // Default for content

    if (width >= 768 && width < 1024) {
      // Tablet: Course Info as 5, Content as 7
      courseColSize = '5';
      contentColSize = '7';
    } else if (width >= 1024) {
      // Web: Course Info as 4, Content as 8
      courseColSize = '4';
      contentColSize = '8';
    }

    // For course-info-col
    if (this.el.nativeElement.classList.contains('course-info-col')) {
      this.renderer.setAttribute(this.el.nativeElement, 'size-md', courseColSize);
      this.renderer.setAttribute(this.el.nativeElement, 'size-lg', courseColSize);
    }

    // For content-col
    if (this.el.nativeElement.classList.contains('content-col')) {
      this.renderer.setAttribute(this.el.nativeElement, 'size-md', contentColSize);
      this.renderer.setAttribute(this.el.nativeElement, 'size-lg', contentColSize);
    }
  }
}
