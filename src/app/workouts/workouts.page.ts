import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from './workouts.service';
import { Workout } from './workout.model';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})

export class WorkoutsPage implements OnInit {
  loadedWorkouts: Workout[]

  constructor(private workoutsService: WorkoutsService) { }

  ngOnInit() {
    this.loadedWorkouts = this.workoutsService.workouts
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
