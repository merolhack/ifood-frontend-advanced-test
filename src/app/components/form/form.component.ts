import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { SearchService } from '../../services';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ModalComponent } from '../modal/modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  city: Address = null;
  subscription: Subscription;
  dataset = {};
  loading = true;

  constructor(private search: SearchService, private modalService: NgbModal) { }

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  ngOnInit() {
  }

  /**
   * Stores the selected city in a variable
   *
   * @param address Address
   */
  public handleAddressChange(address: Address) {
    console.log('address', address);
    this.city = address;
  }

  /**
   * 
   */
  public findTracks() {
    if (this.city !== null) {
      const lat = this.city.geometry.location.lat();
      const lon = this.city.geometry.location.lng();
      console.log('lat:', this.city.geometry.location.lat());
      console.log('lng:', this.city.geometry.location.lng());
      this.loading = true;
      this.subscription = this.search.findByCoordinates(lat, lon)
        .subscribe(
          response => {
            console.log('response', response);
            this.dataset = response;
          },
          error => console.log(error),
          () => {
            console.log('findTracks request finished!');
            this.loading = false;
          }
        );
    } else {
      this.openModal();
    }
  }

  /**
   * 
   */
  private openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Warning';
  }

}
