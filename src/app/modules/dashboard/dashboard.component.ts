import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from 'xplat/core/models';
import { BcpService } from 'xplat/core/services';

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [BcpService]
})
export class DashboardComponent implements OnInit {
  public isLoading: boolean;
  public agencies: Agency[];

  constructor(
    private bcpService: BcpService,
    private router: Router
  ) {
    this.isLoading = true;
    this.agencies = [];
  }

  ngOnInit(): void {
    this.bcpService.getAllAgencies().subscribe(
      res => {
        // Coloco un setTimeOut para ver el loader
        setTimeout(() => {
          this.isLoading = false;
          console.log(res);
          this.agencies = res;
        }, 600);
      },
      err => {
        console.log(err);
      }
    )
  }

  public goToDetail(evnt: Event, agency: Agency): void {
    evnt.preventDefault();
    localStorage.setItem('agency', JSON.stringify(agency));
    this.router.navigate(['./agecies', agency.id]);
  }
}
