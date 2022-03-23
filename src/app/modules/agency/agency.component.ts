import { Component, OnInit } from '@angular/core';
import { AgencyPresenter } from './agency.presenter';
import { NavigationService } from 'xplat/core/services';

@Component({
  selector: 'app-agency-ui',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
  providers: [AgencyPresenter]
})
export class AgencyComponent implements OnInit {
  public isLoading: boolean;

  constructor(
    public readonly agencyPresenter: AgencyPresenter,
    private navigation: NavigationService
  ) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    // Para simular la carga
    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  }

  public back(): void {
    this.navigation.back()
  }
}
