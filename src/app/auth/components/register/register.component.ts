import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'

import { Observable } from 'rxjs'

import { registerAction } from 'src/app/auth/store/actions/register.action'
import { isSubmittingSelector } from 'src/app/auth/store/selectors'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  isSubmitting$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }

    this.store.dispatch(registerAction({ request }))
  }
}
