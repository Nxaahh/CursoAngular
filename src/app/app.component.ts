import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TasklistComponent } from './componentes/task/tasklist/tasklist.component';
import { FormsModule } from '@angular/forms';
import { TaskresumeComponent } from './componentes/task/taskresume/taskresume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TasklistComponent, FormsModule, TaskresumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso Angular';
  nombre = 'Noah'
  imagenAleatorio:string=""

  muestraImagen() {
    let random:number = Math.trunc((Math.random()*1000)+100)
    this.imagenAleatorio= "https://picsum.photos/200/300?random=" + random
  }

}