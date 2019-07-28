import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  @Input() document: document;

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      document: "",
    };

    return classes;
  }

  onChange(document) {
    document = document;
  }
}
