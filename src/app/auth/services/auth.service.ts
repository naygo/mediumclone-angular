import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { map, Observable } from 'rxjs'

import { environment } from 'src/environments/environment'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { AuthReponseInterface } from 'src/app/auth/types/authResponse.interface'

const API_URL = environment.apiUrl

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthReponseInterface>(`${API_URL}/users`, data)
      .pipe(map((response: AuthReponseInterface) => response.user))
  }
}
