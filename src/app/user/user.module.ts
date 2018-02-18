import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherAboutComponent } from './another-about/another-about.component';

import { RouterModule } from '@angular/router';
import { routes } from './user.routing';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [AnotherAboutComponent]
})
export class UserModule { }
