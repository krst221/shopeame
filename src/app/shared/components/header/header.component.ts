import { tab } from './../../models/tab.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tab1: tab = {
    name: 'Home',
    imgUrl: '../../../assets/img/vector2.png',
    imgUrl2: '../../../assets/img/vector20.png',
    link: '/'
  }

  tab2: tab = {
    name: 'Prods.',
    imgUrl: '../../../assets/img/vector.png',
    imgUrl2: '../../../assets/img/vector21.png',
    link: '/products'
  }

  tab3: tab = {
    name: 'Gestión',
    imgUrl: '../../../assets/img/vector1.png',
    imgUrl2: '../../../assets/img/vector22.png',
    link: '/edit'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
