import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { take } from "rxjs/operators";

import { StopTrainingComponent } from "./stop-training.component";
import { TrainingService } from "../training.service";
import * as fromTraining from "../training.reduce";

@Component({
  selector: "app-current-training",
  templateUrl: "./current-training.component.html",
  styleUrls: ["./current-training.component.scss"],
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  duration: number;
  timer: number;
  pauseTimer = false;

  constructor(
    private dialog: MatDialog,
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.store
      .select(fromTraining.getActiveTraining)
      .pipe(take(1))
      .subscribe((ex) => {
        this.duration = ex.duration;
        const step = (ex.duration / 100) * 1000;
        this.timer = window.setInterval(() => {
          this.progress = this.progress + 1;
          if (this.progress >= 100) {
            this.trainingService.completeExercise();
            clearInterval(this.timer);
          }
        }, step);
      });
  }

  onStop() {
    clearInterval(this.timer);
    this.pauseTimer = true;
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: { progress: this.progress },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
        this.pauseTimer = false;
      }
    });
  }
}
