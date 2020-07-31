import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { AuthService } from "./auth/auth.service";
import { Observable } from "rxjs";
import * as fromRoot from "./app.reducer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  openSidenav = false;
  isAuth$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    this.authService.initAuthListener();
  }

  onLogout() {
    this.authService.logout();
  }
}
