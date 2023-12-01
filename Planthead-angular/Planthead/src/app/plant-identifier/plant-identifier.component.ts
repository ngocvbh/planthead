import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-plant-identifier',
  templateUrl: './plant-identifier.component.html',
  styleUrls: ['./plant-identifier.component.css']
})
export class PlantIdentifierComponent {
  selectedImage: File | null = null;
  identifiedPlants: any[] = [];
  errorMessage: string | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  identifyPlant(): void {
    if (this.selectedImage) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        const base64Image = fileReader.result?.toString().split(',')[1];

        if (base64Image) {
          this.callPlantIdentificationAPI(base64Image);
        }
      };

      fileReader.readAsDataURL(this.selectedImage);
    }
  }

  private callPlantIdentificationAPI(base64Image: string): void {
    const apiUrl = 'https://api.plant.id/v2/identify';
    const apiKey = 'F5JvjP5w8oTAHujCu056rI76pQBX0uPyTE0fkHfWFiyHZZyw2p';

    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Api-Key': apiKey
    });

    const requestBody = {
      images: [base64Image],
      modifiers: ['similar_images'],
      plant_details: ['common_names', 'description', 'edible_parts', 'url']
    };

    this.http.post(apiUrl, requestBody, { headers }).subscribe(
      (response: any) => {
        this.identifiedPlants = response.suggestions.map((suggestion: any) => ({
          plant_name: suggestion.plant_name,
          probability: suggestion.probability,
          common_names: suggestion.plant_details.common_names || [],
          description: suggestion.plant_details.description,
          edible_parts: suggestion.plant_details.edible_parts,
          url: suggestion.plant_details.url || ''
        }));
        this.errorMessage = null;
      },
      (error) => {
        this.errorMessage = 'Error identifying the plant. Please try again.';
        console.error('Error:', error);
        this.identifiedPlants = [];
      }
    );
  }

  getDescriptionString(description: any): string {
    return JSON.stringify(description);
  }
  
}
