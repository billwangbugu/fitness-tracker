import { NgModule } from "@angular/core";
import { TrainingComponent } from "./training.component";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { OldTrainingComponent } from "./old-training/old-training.component";
import { StopTrainingComponent } from "./current-training/stop-training.component";
import { StoreModule } from "@ngrx/store";

import { SharedModule } from "../shared/shared.module";
import { TrainingRoutingModule } from "./training-routing.module";
import { trainingReducer } from "./training.reduce";
import { CountdownComponent } from "./current-training/countdown.component";

@NgModule({
  imports: [
    SharedModule,
    TrainingRoutingModule,
    StoreModule.forFeature("training", trainingReducer),
  ],
  exports: [],
  declarations: [
    TrainingComponent,
    NewTrainingComponent,
    CurrentTrainingComponent,
    StopTrainingComponent,
    OldTrainingComponent,
    CountdownComponent,
  ],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
