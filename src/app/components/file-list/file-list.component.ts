import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  private _files: Array<any> = [];

  @Input() set files(value) {
    const list = Array.prototype.slice.call(value)
    list.forEach(element => {
      this._files.push(element);
    });    
  }
  get files() {
    return this._files;
  }

  constructor() { }

  ngOnInit() {
  }

}
