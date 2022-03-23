import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AgencyPresenter } from './agency.presenter';

@Component({
  selector: 'app-agency-ui',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
  providers: [AgencyPresenter]
})
export class AgencyComponent implements OnInit {
  public isLoading: boolean;

  constructor(public readonly agencyPresenter: AgencyPresenter) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    // Para simular la carga
    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  }
}
