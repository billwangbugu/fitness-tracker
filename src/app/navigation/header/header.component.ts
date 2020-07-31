import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Input() isAuth = false;

  constructor() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  onLogout() {
    this.logout.emit();
  }
}
