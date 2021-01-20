import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable, Subscription } from "rxjs";

import { TrainingService } from "../training.service";
import { Exercise } from "../exercise.model";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../app.reducer";
import * as fromTraining from "../training.reduce";

@Component({
  selector: "app-new-training",
  templateUrl: "./new-training.component.html",
  styleUrls: ["./new-training.component.scss"],
})
export class NewTrainingComponent implements OnInit {
  exercises$: Observable<Exercise[]>;
  isLoading$: Observable<boolean>;
  selectedExercise$: Observable<Exercise>;
  isSelected = false;

  constructor(
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
    this.selectedExercise$ = this.store.select(
      fromTraining.getSelectedExercise
    );
    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
    this.isSelected = false;
  }

  onExerciseSelected(val) {
    this.isSelected = true;
    this.trainingService.selectedExercise(val);
  }
}
