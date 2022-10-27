import { tab } from './../../models/tab.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() tab: tab = {
    name: '',
    imgUrl: '',
    imgUrl2: '',
    link: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
