import {TrainingService} from './training.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpErrorResponse} from '@angular/common/http';

describe('TrainingService', () =>{

  let trainingService: TrainingService,
      httpTestingcontroller: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[TrainingService]
    });

    trainingService = TestBed.get(TrainingService),
    httpTestingcontroller = TestBed.get(HttpTestingController);
  });

  it('should retrieve available training', ()=>{

    trainingService.fetchAvailableExercises()
  })
})
