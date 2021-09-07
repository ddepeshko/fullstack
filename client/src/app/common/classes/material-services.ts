import { ElementRef } from '@angular/core';

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
}
