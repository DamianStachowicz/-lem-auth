import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig } from '../../auth.config';

export interface UserCredentials {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private _config: AuthConfig,
        private _httpClient: HttpClient
    ) { }

    /**
     * Gets an authorization token
     */
    getToken(credentials: UserCredentials): Observable<string> {
        return this._httpClient.post<string>(`${this._config.apiUrls.msAuth}/ms-auth/login`, credentials);
    }
}
