import { Component } from '@angular/core';
import { ORCService } from './orc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private fileList: any[];
  private text = '' ;
  constructor(private ocrService: ORCService) {}

  onFilesChangef(event: any) {
    this.fileList = event.target.files;
    this.ocrService.upload_file(this.fileList[0]).subscribe(
          next => console.log(next) );
  }
  getText() {
    this.text = '' ;
    this.ocrService.getText(this.fileList[0].name).
    subscribe(next => this.text = next);
   }
}

