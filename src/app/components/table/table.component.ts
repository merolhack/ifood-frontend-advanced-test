import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Spotify } from 'src/app/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() data: Spotify;

  @HostBinding('class.is-open') @Input()
  isOpen = false;

  tracks = [];

  ngOnInit(): void {
  }

  onSort(event) {
    console.log(event);
  }

}
