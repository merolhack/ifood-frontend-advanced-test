import { Component, OnInit } from '@angular/core';

import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';
import { Spotify } from 'src/app/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  tableIsOpened: boolean;
  dataSet: Spotify;

  constructor() { }

  ngOnInit() {
    this.tableIsOpened = false;
  }

  toggleTable(response: Spotify) {
    this.dataSet = response;
    this.tableIsOpened = (response) ? true : false;
  }

}
