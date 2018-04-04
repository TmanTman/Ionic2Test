import { Component } from '@angular/core';
import { RestService } from '../../services/rest-service';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private restService: RestService) {

  }

  makeApiRequest() {
    this.restService.makePost();
  }
}
