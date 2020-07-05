import {Injectable} from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
    providedIn: 'root'
})
export class KeycloakService {
    public keycloakAuth: Keycloak.KeycloakInstance | undefined;

    constructor() {
    }

    init(): Promise<any> {
        return new Promise((resolve, reject) => {
            const config: Keycloak.KeycloakConfig = {
                url: 'http://localhost:9080/auth',
                realm: 'jhipster',
                clientId: 'web_app',
                credentials: 'web_app'
            } as Keycloak.KeycloakConfig;
            this.keycloakAuth = Keycloak(config);
            this.keycloakAuth
                .init({onLoad: 'login-required'})
                .then(() => {
                    resolve();
                }, () => {
                    console.error("ERROR initializing keycloak service");
                    reject();
                });
        });
    }

    isAuthenticated(): boolean | undefined {
        if (this.keycloakAuth !== undefined) {
            return this.keycloakAuth.authenticated;
        } else {
            return false;
        }
    }

    getToken(): string | undefined {
        if (this.keycloakAuth === undefined) {
            return undefined;
        }
        return this.keycloakAuth.token;
    }
}
