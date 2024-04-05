import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../api/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  products!: Product[];

  chartData: any;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProductsSmall().then(data => this.products = data);
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
            borderColor: documentStyle.getPropertyValue('--bluegray-700'),
            tension: .4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--green-600'),
            borderColor: documentStyle.getPropertyValue('--green-600'),
            tension: .4
        }
    ]
    }
  }
}
