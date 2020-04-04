import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "MelysKitchen";
  loadedPage = "recipes";

  onNavigate(updatedPage: string) {
    this.loadedPage = updatedPage;
  }
}
