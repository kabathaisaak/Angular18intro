import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppNavbar} from "./navbar/navbar.component";
import {HeaderComponent} from "./header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppNavbar,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title =  'this is loaded dynamically'
  // : string ='url'
  isDisabled: boolean = true;
  isActive: boolean = true;
  fruitName: string = "Apple"

  buttonclick(){
    console.log('buttonclicked');

}
}
