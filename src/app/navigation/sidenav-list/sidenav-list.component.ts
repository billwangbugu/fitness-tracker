import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.scss"],
})
export class SidenavListComponent implements OnInit {
  @Input() isAuth;
  @Output() closeSidenav = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onLogout() {
    this.onClose();
    this.logout.emit();
  }

  onClose() {
    this.closeSidenav.emit();
  }
}
