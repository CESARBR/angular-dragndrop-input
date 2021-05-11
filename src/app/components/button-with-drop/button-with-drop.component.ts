import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-with-drop',
  templateUrl: './button-with-drop.component.html',
  styleUrls: ['./button-with-drop.component.scss']
})
export class ButtonWithDropComponent implements OnInit {

  @Output() filesToUpload = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public uploadFiles(fileList: any) {
    this.filesToUpload.emit(fileList);
  }

}

