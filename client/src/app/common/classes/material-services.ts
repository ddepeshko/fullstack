import { ElementRef } from '@angular/core';
import { IMaterialInstance } from '@models/material-instance';

declare var M: any;

export class MaterialServices {
  static toast(message: string) {
    M.toast({ html: message });
  }
  static initializeFloatingButton(ref: ElementRef | undefined) {
    if (ref) M.FloatingActionButton.init(ref.nativeElement);
  }

  static updateTextInputs() {
    M.updateTextInputs();
  }
  static initModal(component: ElementRef): IMaterialInstance {
    return M.Modal.init(component.nativeElement);
  }
}
