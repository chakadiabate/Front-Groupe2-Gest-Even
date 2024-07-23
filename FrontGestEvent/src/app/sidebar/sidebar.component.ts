import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OnInit} from "@angular/core";

import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  visible = false;
  background : String = "none";

  Affiche() {
    if (this.visible === false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  changebackground(background:String):void{
    this.background = "none";
    this.background = background;

  }

/*  links = document.querySelectorAll(" .pages a");
  ngOnInit(): void {
    this.links.forEach((item, index) => {
      item.addEventListener("click", ()=>{
        item.style.backgroundColor = "#dcdcdc"
      })
      // Perform any operation you want on each item
    });
  }*/
  onLinkClick(event: Event): void {
    const target = event.target as HTMLElement;
    this.background = "none";
    target.style.backgroundColor = '#dcdcdc';
  }
}
