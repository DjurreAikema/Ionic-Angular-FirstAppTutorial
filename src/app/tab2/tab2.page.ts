import {Component, Inject} from '@angular/core';
import {PhotoService} from "src/app/services/photo.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  public photoService: PhotoService = Inject(PhotoService);

  constructor() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
