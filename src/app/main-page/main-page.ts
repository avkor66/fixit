import { Component } from '@angular/core';
import { StartBlock } from './start-block/start-block';
import { ChooseBlock } from './choose-block/choose-block';
import { ProfitBlock } from './profit-block/profit-block';
import { JoinBlock } from './join-block/join-block';
import { HubBlock } from './hub-block/hub-block';
import { ConnectBlock } from './connect-block/connect-block';
import { PlansBlock } from './plans-block/plans-block';

@Component({
  selector: 'app-main-page',
  imports: [
    StartBlock,
    ChooseBlock,
    PlansBlock,
    ProfitBlock,
    JoinBlock,
    HubBlock,
    ConnectBlock,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
