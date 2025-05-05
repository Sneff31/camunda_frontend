import { Component } from '@angular/core';
import { ApiService } from './../api.service';  // Import the service

@Component({
  selector: 'app-deployment-process',
  imports: [],
  templateUrl: './deployment-process.component.html',
  styleUrl: './deployment-process.component.css'
})
export class DeploymentProcessComponent {
  message = 'Please deploy a process!';
  fileName = "Please choose a file!";
  processName: string = '';
  data: any;
  selectedFile!: File;

  constructor(private ApiService: ApiService) { 
    console.log("app component called");
  }

  deployCamundaProcess() {

    console.log("deployCamundaProcess called");

    this.message = "";

    this.message = 'Prozess is deployed: ' + this.selectedFile?.name;

    this.ApiService.postDeployCamundaProcess(this.selectedFile);

  }

  onFileSelected(event: Event): void{
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
        this.fileName = this.selectedFile.name;
    }
  }

}
