import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workoutplan',
  templateUrl: './workoutplan.component.html',
  styleUrls: ['./workoutplan.component.scss'],
})
export class WorkoutplanComponent implements OnInit {
  days: string[] = [
    '-Overview: Program',
    // week 1
    '-Day 1: Quads & Hamstrings',
    '-Day 2: Chest & Upper Back',
    '-Day 3: Cardio',
    '-Day 4: Triceps & Biceps',
    '-Day 5: Shoulders & Calves',
    '-Day 6: Lower Back & Abs',
    '-Day 7: Cardio',
    // week 2
    '-Day 8: Quads & Hamstrings',
    '-Day 9: Chest & Upper Back',
    '-Day 10: Cardio',
    '-Day 11: Triceps & Biceps',
    '-Day 12: Shoulders & Calves',
    '-Day 13: Lower Back & Abs',
    '-Day 14: Cardio',
    // week 3
    '-Day 15: Quads & Hamstrings',
    '-Day 16: Chest & Upper Back',
    '-Day 17: Cardio',
    '-Day 18: Triceps & Bicepss',
    '-Day 19: Shoulders & Calves',
    '-Day 20: Lower Back & Abs',
    '-Day 21: Cardio',
    // week 4
    '-Day 22: Quads & Hamstrings',
    '-Day 23: Chest & Upper Back',
    '-Day 24: Cardio',
    '-Day 25: Triceps & Biceps',
    '-Day 26: Shoulders & Calves',
    '-Day 27: Lower Back & Abs',
    '-Day 28: Cardio',
  ];
  constructor() {}

  ngOnInit() {}
}
