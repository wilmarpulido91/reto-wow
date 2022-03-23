import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ValidateNumbers } from 'xplat/core/helpers';
import { Agency } from "xplat/core/models";

@Injectable()
export class AgencyPresenter {
  public agency : Agency;
  public agencyForm: FormGroup;
  public submittedAgency: boolean;

  public constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    
    this.submittedAgency = false;

    let agency = localStorage.getItem('agency');
    this.agency = agency != null ? JSON.parse(agency) : {};

    this.agencyForm = this.formBuilder.group({
      name: [this.agency.agencia, Validators.required],
      address: [this.agency.direccion, Validators.required],
      distrit: [this.agency.distrito, Validators.required],
      latitude: [this.agency.lat, Validators.required],
      length: [this.agency.lon, Validators.required]
    });

  }

  get fAgency(): any { return this.agencyForm.controls; }
  get isInvalid(): boolean { return this.agencyForm.invalid }

  public onSubmitAgency(): void {
    this.submittedAgency = true;
    localStorage.clear();
    
    if (this.agencyForm.valid) {
      this.agency = {
        id: 0,
        agencia: this.fAgency.name.value,
        direccion: this.fAgency.address.value,
        distrito: this.fAgency.distrit.value,
        lat: this.fAgency.latitude.value,
        lon: this.fAgency.length.value
      }
      localStorage.setItem('agency', JSON.stringify(this.agency));
      this.router.navigate(['./dashboard']);
    }
  }
}
