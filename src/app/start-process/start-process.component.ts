import { Component } from '@angular/core';
import { ApiService } from './../api.service';  // Import the service

@Component({
  selector: 'app-start-process',
  imports: [],
  templateUrl: './start-process.component.html',
  styleUrl: './start-process.component.css'
})
export class StartProcessComponent {
  message = 'Please deploy a process!';
  processName: string = '';
  data: any;

  constructor(private ApiService: ApiService) { 
    console.log("app component called");
  }

  deployCamundaProcess(processName:string) {

    console.log("deployCamundaProcess called");

    this.message = "";

    //this.ApiService.postDeployCamundaProcess(processName);
    
    this.message = 'Prozess is deployed: ' + processName;
  }

}
