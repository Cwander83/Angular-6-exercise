import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login" }
  },
  {
    path: "signup",
    component: SignupComponent,
    data: { title: "Sign Up" }
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
