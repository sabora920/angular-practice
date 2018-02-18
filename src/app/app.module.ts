import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component'

const appRoutes: Routes = [
  {path:'', component: UserComponent, pathMatch: 'full'},
  {path:'about', component: AboutComponent},
  {path:'posts', component: PostsComponent},
  {path:'hobbies', component: HobbiesComponent},
  {path:'anotherabout', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    PostsComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
