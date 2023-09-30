# JSONServer + JWT Auth Fake API



## Para rodar o back:

## $ npm install
## $ npm audit fix
## $ npm run start-auth



## Para receber o token:

POST http://localhost:8081/oauth/token

{
  "email": "jackson@gmail.com",
  "password":"jackson"
}


## Após receber o token:

GET http://localhost:8081/restaurantes
