import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

  @Input() public isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit(): void {}

}
