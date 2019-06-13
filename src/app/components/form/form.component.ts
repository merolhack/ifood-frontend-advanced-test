import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

import { SearchService } from '../../services';
import { ModalComponent } from '../modal/modal.component';
import { Spotify } from '../../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() toggle = new EventEmitter<Spotify>();

  city: Address = null;
  options: null;
  subscription: Subscription;
  dataset = {};

  constructor(
      private search: SearchService,
      private modalService: NgbModal,
      private spinner: NgxSpinnerService
    ) { }

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  ngOnInit() {
  }

  /**
   * Stores the selected city in a variable
   *
   * @param address Address
   */
  public handleAddressChange(address: Address): void {
    console.log('address', address);
    this.city = address;
  }

  /**
   * Use the search service to get the tracks
   */
  public findTracks(): void {
    if (this.city !== null) {
      const lat = this.city.geometry.location.lat();
      const lon = this.city.geometry.location.lng();
      console.log('lat:', this.city.geometry.location.lat());
      console.log('lng:', this.city.geometry.location.lng());
      this.spinner.show();
      this.subscription = this.search.findByCoordinates(lat, lon)
        .subscribe(
          response => {
            console.log('response', response);
            this.dataset = response;
            this.toggle.emit(response);
          },
          error => console.log(error),
          () => {
            console.log('findTracks request finished!');
            this.spinner.hide();
          }
        );
    } else {
      this.openModal();
    }
  }

  /**
   * Open the modal window
   */
  private openModal(): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Warning';
  }

}
