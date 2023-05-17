import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggle:EventEmitter<any>=new EventEmitter();
  toggelSidebar(){
this.toggle.emit()
setTimeout(() => {
  window.dispatchEvent(
    new Event('resize')
  );
}, 200);
  }
}


