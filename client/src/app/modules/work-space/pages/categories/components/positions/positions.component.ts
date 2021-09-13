import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PositionsService } from '@services/positions.service';
import { IPositions } from '@models/positions';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ILoadable } from '@models/loadable';
import { MaterialServices } from '@classes/material-services';
import { IMaterialInstance } from '@models/material-instance';
import { IMessage } from '@models/message';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss'],
})
export class PositionsComponent implements OnInit, OnDestroy, ILoadable, AfterViewInit {
  @Input() categoryId: string;
  @ViewChild('modal') modalRef: ElementRef;
  public positions: IPositions[] = [];
  private destroy$ = new Subject<any>();
  public isLoading: boolean;
  public modal: IMaterialInstance;
  public selectedPosition: IPositions;

  constructor(private positionService: PositionsService) {}

  ngOnInit(): void {
    this.obtainPositions();
  }

  ngOnDestroy(): void {
    if (this.modal) {
      this.modal.destroy();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.initModal();
  }

  public initModal(): void {
    this.modal = MaterialServices.initModal(this.modalRef);
  }

  public onSelectPosition(position: IPositions): void {
    this.openModal();
    this.selectedPosition = position;
  }

  public openModal(): void {
    this.modal.open();
  }

  private obtainPositions(): void {
    this.isLoading = true;
    this.positionService
      .getAllPositions(this.categoryId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (positions: IPositions[]) => {
          this.isLoading = false;
          this.positions = positions;
        },
        (error) => {
          this.isLoading = false;
          MaterialServices.toast(error.error.message);
        }
      );
  }

  public onPositionDataChanged(position: IPositions): void {
    this.isLoading = true;
    position._id ? this.onUpdatePosition(position) : this.onCreatePosition(position);
  }

  public onCreatePosition(position: IPositions): void {
    position.category = this.categoryId;
    this.positionService
      .createPosition(position)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (positions: IPositions[]) => {
          this.isLoading = false;
          this.positions = positions;
          MaterialServices.toast('Позиция создана');
          this.modal.close();
        },
        (error) => {
          this.isLoading = false;
          MaterialServices.toast(error.error.message);
        }
      );
  }

  public onUpdatePosition(position: IPositions): void {
    if (!position._id) return;
    position.category = this.categoryId;
    this.positionService
      .updatePosition(position, position._id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (positions: IPositions[]) => {
          this.isLoading = false;
          this.positions = positions;
          MaterialServices.toast('Позиция обновлена');
          this.modal.close();
        },
        (error) => {
          this.isLoading = false;
          MaterialServices.toast(error.error.message);
        }
      );
  }

  public onDeletePosition(position: IPositions): void {
    if (!position._id) return;
    this.isLoading = true;
    this.positionService
      .deletePosition(position._id)
      .pipe(
        takeUntil(this.destroy$),
        switchMap((message: IMessage) => {
          MaterialServices.toast(message.message);
          return this.positionService.getAllPositions(this.categoryId);
        })
      )
      .subscribe(
        (positions: IPositions[]) => {
          this.isLoading = false;
          this.positions = positions;
        },
        (error) => {
          this.isLoading = false;
          MaterialServices.toast(error.error.message);
        }
      );
  }
}
