import { Component, signal, inject  } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [
		AsyncPipe,
		RouterOutlet
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass'
})
export class AppComponent {
	protected readonly title = signal('nt-pits-app');
}
