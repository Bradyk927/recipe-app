import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretParagraph = false;
  log = [];
  loadedFeature = 'recipes'
  

  onToggleDetails() {
      this.secretParagraph =!this.secretParagraph;
      this.log.push(this.log.length + 1);
      // this.log.push(new Date());

  }

  onNavigate(feature: string){
    this.loadedFeature = feature;

  }
}

   


