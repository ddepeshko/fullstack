import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMaterialInstance } from '@models/material-instance';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-position-modal',
  templateUrl: './add-position-modal.component.html',
  styleUrls: ['./add-position-modal.component.scss'],
})
export class AddPositionModalComponent implements OnInit {
  public modal: IMaterialInstance;
  public form: FormGroup;
  @Output() formValueEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      cost: [null, [Validators.required, Validators.min(1)]],
    });
  }

  onCloseModal() {
    this.modal.close();
  }

  public onSubmit(): void {
    this.form.disable();
    if (this.form.invalid) {
      this.form.enable();
      return;
    }
    this.formValueEmitter.emit(this.form.value);
  }
}
