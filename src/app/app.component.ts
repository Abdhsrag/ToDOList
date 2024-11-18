import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./componants/main/main.component";
import { FooterComponent } from "./componants/footer/footer.component";
import { NavComponent } from "./componants/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do-List';
}
