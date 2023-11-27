import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantIdentifierService {
  private apiUrl = 'https://api.plant.id/v2/identify';
  private apiKey = 'F5JvjP5w8oTAHujCu056rI76pQBX0uPyTE0fkHfWFiyHZZyw2p'; 
  
  constructor(private http: HttpClient) { }

  identifyPlant(image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('images', image, image.name);

    const headers = new HttpHeaders({
      'Api-Key': this.apiKey
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
