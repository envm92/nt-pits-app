import { Component } from '@angular/core';
import { PitsFlowComponent, CdkCustomStepperWithoutFormExample } from '../pits-flow/pits-flow.component';

@Component({
  selector: 'app-main',
  imports: [PitsFlowComponent, CdkCustomStepperWithoutFormExample],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

}
