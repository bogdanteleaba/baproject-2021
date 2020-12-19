import { Component, OnInit } from '@angular/core';
import { Tip } from './tip.model';
import { TipsTricksService } from './tips-tricks.service'

@Component({
  selector: 'app-tips-tricks',
  templateUrl: './tips-tricks.page.html',
  styleUrls: ['./tips-tricks.page.scss'],
})
export class TipsTricksPage implements OnInit {

  loadedTips: Tip[];

  constructor(private tipsTricksService: TipsTricksService) { }

  ngOnInit() {
    this.loadedTips = this.tipsTricksService.tips;
  }

}
