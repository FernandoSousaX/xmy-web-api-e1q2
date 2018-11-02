module.exports = {
 port: process.env.PORT || 3000,

 /** WARNING: For security reasons put the next 3 properties in environment variables */
 adminUsername: process.env.ADMIN_USERNAME || 'joao',
 adminPassword: process.env.ADMIN_PASSWORD || '123456Aa',
 tokenSecretKey: process.env.SECRET_KEY || 'super_secret',

 /** @property Expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, '2 days', '10h', '7d' */
 tokenExireTime: '1h'
 }