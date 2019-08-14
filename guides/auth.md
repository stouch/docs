# Authentication

> When demoing `SDK.whatever()` method, that's either fired through `this.$api` or on the `api` object directly after it being imported.

## Token

The Directus API returns a [JWT token](https://jwt.io/) on successful login. This token will always expire in 5 minutes. There are also static tokens for each user, though because these tokens don't change they should be used with caution. You can learn more about both of these types of tokens in [API Reference: Authentication](https://docs.directus.io/api/reference.html#authentication).

## SDK Login / Logout

The application forwards the credentials to the SDK, which will make the request for the token and start an internal interval.

**The SDK keeps the user logged in forever**. To logout of the application, the `logout` method has to be fired on the SDK. This will delete the token locally and cancel the refresh interval. Checkout the [SDK implementation](https://github.com/directus/sdk-js/blob/master/remote.d.ts) for the actual inner working of this.

## Application Auth Flow

The SDK uses [Emittery](https://github.com/sindresorhus/emittery) under the hood. The SDK is "connected" to the store via these events. For example: `login:success` will `commit` a login mutation to the store, setting the `loggedIn` flag in the store to true. Likewise, `login:failed` / `logout` will set this flag to false. The store is only used to reflect the current loggedin state of the SDK. The application has no further involvement in keeping the user logged in.

### Logging In

- User enters credentials
- Application fires `SDK.login()` with the credentials
- SDK reports logged in => store.state.auth.loggedIn = true.
- SDK reports logged in failed => store.state.auth.loggedIn = false && store.state.auth.error = error.

The `SDK.login()` method returns a promise. The promise will resolve on a successful login. Therefore, the application can navigate away from the login page on a resolve of this promise.

### Logging Out

- Application fires `SDK.logout()`
- SDK logs out the user
- SDK reports logged out => store.state.auth.loggedIn = false.

## Persisted Sessions

Keeps the access token in the SDK and the application store in sync. The token in the store gets saved and retrieved to/from localstorage so the user isn't logged out on refresh.

If the user re-opens the page when there is an invalid token in the store, the SDKs loggedIn flag will be false and the application will logout immediately.

## Password Encryption

The API encrypts every Directus user's password as a hash using a strong one-way hashing algorithm called `bcrypt`. The `CRYPT_BLOWFISH` algorithm creates a 60 character long hash with a recognizable `$2y$` identifier. All hashes are generated with a random salt and a cost of `10`. This cost determines the rounds of expansion used, so our default cost of `10` is equal to 2<sup>10</sup> (1,024) iterations — a good balance for most hardware.

### Manually Setting Passwords

You can manually generate new passwords using the PHP code below, or by using [online tools](https://bcrypt-generator.com/). Once generated, you can add the hashed value directly to `directus_users.password`.

```php
echo password_hash('new-password-here', PASSWORD_BCRYPT, ['cost' => 10]);
```

## Two-Factor Authentication (2FA)

### Enabling 2FA

2FA is enabled from the User Profile. To do so, click on the "Enable 2FA" button, and scan the QR code in your authenticator app.

::: danger
This QR code will only be shown to you once. After you save your profile, the next time you log in, you will be required to enter your One-Time Password (OTP) after your email and password.
:::

The user's 2FA secret is stored in the `2fa_secret` column of the `directus_users` table.

### Enforcing 2FA

2FA is enforced at a Role level, by toggling "Enforce 2FA". For any route that makes use of the `AuthenticationMiddleWare`, such as `'/'`,  if 2FA is enforced but not enabled for the current user, the API will throw a `TFAEnforcedException`.
