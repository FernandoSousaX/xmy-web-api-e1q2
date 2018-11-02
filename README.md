# xmy-web-api-e1q2
 This is a genererated Web API wich runs on a Node.js server and uses MongoDB data.

 WARNING: Before proceeding to [Instalation](#Instalation) check the [config.js](config.js) file located in the root of the project.

 ## Table of Contents
 * [Instalation](#Instalation)
 * [Usage](#Usage)
	 * [Token](#Token)
	 * [Clientes](#Clientes)

 ## Instalation
 Install the modules
 ```
 npm install
 ```
 Start the server
 ```
 npm start
 ```

 ## Usage

 #### Token
 Authenticate using the following endpoint with credentials set in [config.js](config.js) file.
 ``` 
 POST /login 
 ```
 You will get a bearer token to use in the Authorization header for API requests.
 
 #### Clientes
 |HTTP Method|Path | Path Params | Query Params | Body Params |
 |:-------------:|-------------|:-------------:|:-------------:|:-----:|
 |GET| /api/clientes|None|None|None|
 |GET| /api/clientes/{id}|Id|None|None|
 |POST| /api/clientes|None|None|Collection Schema|
 |PUT| /api/clientes/{id}|Id|None|Collection Schema|
 |DELETE| /api/clientes/{id}|Id|None|None|