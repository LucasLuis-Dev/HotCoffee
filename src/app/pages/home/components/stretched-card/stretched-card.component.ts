import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-stretched-card',
  templateUrl: './stretched-card.component.html',
  styleUrls: ['./stretched-card.component.css']
})
export class StretchedCardComponent {

  @Input()
  new: any = "";

}
