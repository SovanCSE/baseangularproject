import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` <h2>
                 Welcome {{name}}
              </h2> `,
  styles: [``]
})
export class TestComponent implements OnInit {
   public name:string = 'Kushal';
   public fk:string;
   
  constructor() {
  } 

  ngOnInit() {
  }


}
