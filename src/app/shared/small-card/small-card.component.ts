import { Component, Input } from '@angular/core';
import { INew } from 'src/app/interfaces/new.interface';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  new!: INew;

}
