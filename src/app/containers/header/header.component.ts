import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Output() updatePage = new EventEmitter<string>();
  collapsed: boolean = true;

  constructor() {}

  navigateTo(selected: string) {
    this.updatePage.emit(selected);
  }
}
