import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IMaterialInstance } from '@models/material-instance';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPositions } from '@models/positions';

@Component({
  selector: 'app-add-position-modal',
  templateUrl: './add-position-modal.component.html',
  styleUrls: ['./add-position-modal.component.scss'],
})
export class AddPositionModalComponent implements OnInit, OnChanges {
  public modal: IMaterialInstance;
  public form: FormGroup;
  @Input() position: IPositions;
  @Output() formValueEmitter: EventEmitter<IPositions> = new EventEmitter<IPositions>();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      cost: [null, [Validators.required, Validators.min(1)]],
      _id: [null],
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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form && this.position) {
      this.form.patchValue({
        name: this.position.name,
        cost: this.position.cost,
        _id: this.position._id,
      });
      this.form.enable();
    }
  }
}
