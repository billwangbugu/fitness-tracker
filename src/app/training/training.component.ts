import { Component, OnInit } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { TrainingService } from "./training.service";
import * as fromTraining from "./training.reduce";

@Component({
  selector: "app-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.scss"],
})
export class TrainingComponent implements OnInit {
  ongoingTraining$: Observable<boolean>;

  constructor(
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) {}

  ngOnInit() {
    this.ongoingTraining$ = this.store.select(fromTraining.getIsTraining);
  }
}
