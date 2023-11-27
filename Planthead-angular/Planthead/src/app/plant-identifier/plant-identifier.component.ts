import { Component } from '@angular/core';
import { PlantIdentifierService } from '../plant-identifier.service';

@Component({
  selector: 'app-plant-identifier',
  templateUrl: './plant-identifier.component.html',
  styleUrls: ['./plant-identifier.component.css']
})
export class PlantIdentifierComponent {
  selectedImage: File | null = null;
  suggestions: any[] = [];

  constructor(private plantIdentifierService: PlantIdentifierService) { }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  identifyPlant(): void {
    if (this.selectedImage) {
      this.plantIdentifierService.identifyPlant(this.selectedImage)
        .subscribe(
          (response: any) => {
            this.suggestions = response.suggestions;
            console.log(response, { depth: null });
          },
          (error) => {
            console.error('Error identifying plant:', error);
          }
        );
    }
  }
}
