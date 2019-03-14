import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserCredentials {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private _httpClient: HttpClient
    ) { }

    /**
     * Gets an authorization token
     */
    getToken(credentials: UserCredentials): Observable<string> {
        /**
         * TO DO: configurable API url
         */
        const apiUrl = '//localhost:8080';
        return this._httpClient.post<string>(`${apiUrl}/ms-auth/login`, credentials);
    }
}
