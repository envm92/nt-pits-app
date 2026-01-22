import { Component, forwardRef } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { NgTemplateOutlet } from '@angular/common';
import { BareNecessitiesComponent } from '../bare-necessities/bare-necessities.component';
import { SensoryExternalComponent } from '../sensory-external/sensory-external.component';
import { SensoryInternalComponent } from '../sensory-internal/sensory-internal.component';
import { EmotionalLayerComponent } from '../emotional-layer/emotional-layer.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'cdk-app-pits-flow',
	templateUrl: './pit-flow-form.component.html',
	imports: [forwardRef(() => PitsFlowComponent), CdkStepperModule, BareNecessitiesComponent, SensoryExternalComponent, SensoryInternalComponent, EmotionalLayerComponent],
})
export class CdkCustomStepperWithoutFormExample { }

@Component({
	selector: 'app-pits-flow',
	providers: [{ provide: CdkStepper, useExisting: PitsFlowComponent }],
	imports: [
		NgTemplateOutlet,
		CdkStepperModule,
		MatDividerModule,
		MatButtonModule,
		MatIconModule
	],
	templateUrl: './pits-flow.component.html',
	styleUrl: './pits-flow.component.scss',
})
export class PitsFlowComponent extends CdkStepper {
	selectStepByIndex(index: number): void {
		this.selectedIndex = index;
	}

}
