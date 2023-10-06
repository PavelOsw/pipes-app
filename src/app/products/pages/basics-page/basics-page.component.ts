import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'pavel';
  public nameUpper: string = 'PAVEL';
  public fullName: string = 'pavel oswaldo';

  public customDate: Date = new Date();

}
