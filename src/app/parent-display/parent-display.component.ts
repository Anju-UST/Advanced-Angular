import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-display',
  templateUrl: './parent-display.component.html',
  styleUrls: ['./parent-display.component.css']
})
export class ParentDisplayComponent {
  agreeCount=0;
  disagreeCount=0;
  voters = ['Angelin', 'Athira', 'Annu'];

  countChangedHandler(poll: boolean) {
    poll?this.agreeCount++:this.disagreeCount++;

}
// DcountChangedHandler(DisAgree: number) {
//   this.disagreeCount = DisAgree;
// }
}
