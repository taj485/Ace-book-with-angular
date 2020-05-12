const OKTA_DOMAIN = 'https://dev-802232.okta.com';
const CLIENT_ID = '0oabvrlykZb0rtDnL4x6';
const CALLBACK_PATH = '/implicit/callback';

const ISSUER = `https://dev-802232.okta.com/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `http://${window.location.host}/implicit/callback`;
const SCOPES = 'openid profile email';

const oktaConfig = {
    issuer: ISSUER,
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    scope: SCOPES.split(/\s+/),
    };



  