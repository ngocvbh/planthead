import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  private apiUrl = 'https://plant.id/api/v3';
  private apiKey = 'F5JvjP5w8oTAHujCu056rI76pQBX0uPyTE0fkHfWFiyHZZyw2pE';

  constructor(private http: HttpClient) {}

  uploadImage(image: File){
    const formData = new FormData();
    formData.append('image', image);

    const headers = new HttpHeaders({
      'ngocplanth': this.apiKey,
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
