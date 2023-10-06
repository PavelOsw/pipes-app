import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Pavel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  changeClient(): void {
    this.name = 'Yaren';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Pedro', 'Ana', 'María', 'José', 'Juan', 'Luisa' ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente ',
    '=1': 'tenemos un cliente ',
    'other':'tenemos # clientes '
  }

  deletClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe & Json Pipe
  public person = {
    name: 'Pavel',
    age: '24',
    address: 'Guadalajara, México'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap: ', value) )
  )

  public promiseValue: Promise<string> = new Promise( (resolve, reject ) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa');
    }, 3500);
  })
}
