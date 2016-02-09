import {Component} from 'angular2/core';


@Component({
  selector: 'cf-app',
  providers: [],
  templateUrl: 'app/cf.html',
  directives: [],
  pipes: []
})
export class CfApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
