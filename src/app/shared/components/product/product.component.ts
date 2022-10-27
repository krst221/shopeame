import { product } from './../../models/product.model';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() index: number = -1;
  @Input() product: product = {
    id: '',
    name: '',
    price: '',
    description: '',
    stars: 0,
    image: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
