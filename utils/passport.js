window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'Npk9mKF4amGIica03M4h9wIydh2iL6A1',
    redirectUri: 'https://good-quick-jennet.ngrok-free.app',
    logoutRedirectUri: 'https://good-quick-jennet.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

