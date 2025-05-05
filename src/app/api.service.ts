import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8081/deploy/process'; // Your Spring Boot API URL

  constructor(private http: HttpClient) { 
    console.log("api service called");
  }

  // https://angular.dev/guide/http/making-requests

  // Method to get data from backend
  async postDeployCamundaProcess(processFile: File): Promise<any> {

  if (!processFile) {
      return;
  }

  console.log("Sende file: " + processFile.name);

  const formData = new FormData();
  formData.append('file', processFile);

    console.log("post call for new process")
    this.http.post(this.apiUrl,formData).subscribe(
      response => console.log("File was uploaded: ", response),
      error => console.log("File upload failed: ", error)
    );
    //const data = await fetch(this.apiUrl);
  }
}
