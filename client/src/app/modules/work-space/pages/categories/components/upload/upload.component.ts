import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() isFormDisabled: boolean;
  @Output() uploadImage: EventEmitter<File> = new EventEmitter<File>();
  constructor() {}

  ngOnInit(): void {}
  public onFileChange(event: Event): void {
    const file: File = ((event.target as HTMLInputElement).files as FileList)[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    this.uploadImage.emit(file);

    reader.readAsDataURL(file);
  }
}
