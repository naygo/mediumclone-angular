import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'

import { StoreModule } from '@ngrx/store'

import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { reducers } from 'src/app/auth/store/reducers'
import { AuthService } from 'src/app/auth/services/auth.service'
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('auth', reducers),
    RouterModule.forChild(routes),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
