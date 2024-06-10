import {Component, OnInit} from "@angular/core";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent{

}
