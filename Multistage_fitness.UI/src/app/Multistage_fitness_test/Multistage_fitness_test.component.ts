import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Multistage_fitnessService } from '../services/Multistage_fitness.service';
@Component({
  selector: 'app-Multistage_fitness_test',
  templateUrl: './Multistage_fitness_test.component.html',
  styleUrls: ['./Multistage_fitness_test.component.css']
})
export class Multistage_fitness_testComponent implements OnInit {

  duration : number; //60000 indicates 1min
  times = 5;
  startbutton: boolean = true;
  progress: boolean = false;
  TestData : any[];
  counter : number = 0;
  SpeedLevel : number = 0;
  ShuttleNo : number = 0;
  Speed : number = 0;
  NextShuttle : number= 0;
  TotalTime : number = 0;
  TotalDistance : number = 0;
  subscription : any;
  LevelTime : number = 0;
  AccumulatedDistance : number = 0;
  UserData : any[];
  PossibleResults : any[];
  TestCount : number = 0;

  constructor(private _Multistage_fitnessService : Multistage_fitnessService) { }

  ngOnInit() {
    this._Multistage_fitnessService.getDataOnLoad()
    .subscribe(
      data =>
      {
        this.TestData = data.testData;
        this.UserData = data.userData;
        this.PossibleResults = data.possibleResults;
      }
    );
  }

  ClickStart()
  {
    this.TestCount++;
    if(this.TestCount > 1)
    {
      this._Multistage_fitnessService.getDataOnLoad()
    .subscribe(
      data =>
      {
        this.TestData = data.testData;
        this.UserData = data.userData;
        this.PossibleResults = data.possibleResults;
        this.TotalTime  = this.TotalDistance = this.counter = 0;
        this.StartTest();
      }
    );
    }
    else
    {
     this.StartTest();
    }
  }

  StartTest(){
      if(this.counter != this.TestData.length)
      {
        this.startbutton = false;
        this.LevelTime = +this.TestData[this.counter].levelTime;
        this.duration = this.LevelTime * 1000;
        this.progress = true;
        this.SpeedLevel = +this.TestData[this.counter].speedLevel;
        this.ShuttleNo = +this.TestData[this.counter].shuttleNo;
        this.Speed = +this.TestData[this.counter].speed;
        this.AccumulatedDistance = +this.TestData[this.counter].accumulatedShuttleDistance;
        this.NextShuttle = +this.TestData[this.counter].levelTime;
        this.subscription = setInterval(() => {
          this.UpdateValue();
        }, 1000);
      }
      else
      {
        this.startbutton = true;
        this.progress = false;
        this.NextShuttle = 0;
        this.UserData.forEach(element => {
          if(element.result == '')
          {
            element.result = this.TestData[this.counter-1].speedLevel + "-"+ this.TestData[this.counter-1].shuttleNo;
          }
        });
      }
  }
  UpdateValue()
  {
   if ((this.NextShuttle-1) >= 0)
   {
     this.NextShuttle = Math.round((this.NextShuttle-1) * 100) / 100;
     this.TotalTime = Math.round((++ this.TotalTime) * 100) / 100;
     this.TotalDistance = Math.round((this.TotalDistance + (40/this.LevelTime))*100)/100;
   }
   else
   {
    clearInterval(this.subscription);
    this.TotalTime = Math.round((this.TotalTime + this.NextShuttle )*100)/100;
    this.TotalDistance = this.AccumulatedDistance;    
     this.counter++;
     this.StartTest();
   }
  }
  IsWarned(index)
  {
    this.UserData[index].isWarn ="Warned";
  }
  GetResult(index)
  {
    if(this.counter!=0)
    {
      this.UserData[index].result = this.TestData[this.counter-1].speedLevel + "-"+ this.TestData[this.counter-1].shuttleNo;
    }
    else
    {
      this.UserData[index].result = this.TestData[this.counter].speedLevel + "-"+ this.TestData[this.counter].shuttleNo;
    }
  }

}
