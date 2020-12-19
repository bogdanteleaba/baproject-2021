import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  private _workouts: Workout[] = [
    new Workout(
      'p1',
      'Get personalized Workout plan',
      'Why not getting a fully personalized workout program according to your needs and made so you can reach your objectives asap?',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80',
      149.99
    ),
    new Workout(
      'p2',
      "Back Workout",
      '45 min | Beginner',
      'https://images.unsplash.com/photo-1576511843319-715ce1f27494?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      189.99
    ),
    new Workout(
      'p3',
      'Chest Workout',
      '45 min | Beginner',
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1874&q=80',
      99.99
    ),
    new Workout(
      'p4',
      'TRX Workout',
      '45 min | Beginner',
      'https://images.unsplash.com/photo-1576511420003-e33641629f94?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      99.99
    ),new Workout(
      'p5',
      'Endurance Workout',
      '45 min | Beginner',
      'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      99.99
    ),
    new Workout(
      'p6',
      'Full Mass Workout',
      '45 min | Beginner',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
      99.99
    ),new Workout(
      'p7',
      'Full Body Workout',
      '45 min | Beginner',
      'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80',
      99.99
    ),new Workout(
      'p8',
      'Functional Training Program',
      'Not your average city trip!',
      'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      99.99
    )
  ];

  get workouts() {
    return [...this._workouts];
  }
  
  constructor() { }
}