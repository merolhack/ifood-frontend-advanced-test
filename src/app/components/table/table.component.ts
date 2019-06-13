import { Component, OnInit, HostBinding, Input, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  tracks = [];

  onAudioPlay() {
    this.audioPlayerRef.nativeElement.play();
  }

  ngOnInit(): void {
  }

  onSort(event) {
    console.log(event);
  }

}
