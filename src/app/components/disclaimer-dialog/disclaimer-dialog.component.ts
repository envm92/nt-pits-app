import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogRef,
	MatDialogTitle,
} from '@angular/material/dialog';

@Component({
	selector: 'app-disclaimer-dialog',
	imports: [
		MatButtonModule,
		MatDialogTitle,
		MatDialogContent,
		MatDialogActions,
		MatDialogClose,
	],
	templateUrl: './disclaimer-dialog.component.html',
	styleUrl: './disclaimer-dialog.component.scss',
})
export class DisclaimerDialogComponent {
	readonly dialogRef = inject(MatDialogRef<DisclaimerDialogComponent>);
}
