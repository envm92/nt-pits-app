import { Component, signal, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-root',
	imports: [
    AsyncPipe,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	public theme = 'light';
	ngOnInit(): void {
		this.theme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		console.log(this.theme);
	}
	changeTheme(event: PointerEvent): void {
		this.theme = (this.theme === 'light') ? 'dark' : 'light';
		console.log(this.theme)
	}
}
