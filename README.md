# Daily Insurance Portal

Full stack application using angular(frontend) and spring boot rest api

## Installation
### step 1: Run all microservices.
1. run all microservices in sts or eclipse
```java
1: Authorization-microservice> http://localhost:8080/swagger-ui.html
2: Wallet-microservice> http://localhost:8081/swagger-ui.html
3: Policy-microservice> http://localhost:8082/swagger-ui.htm
4: Processclaim-microservice> http://localhost:8083/swagger-ui.htm
```
2. H2 In memory database used for development.
```java
1: Authorization-microservice> http://localhost:8080/h2-console
2: Wallet-microservice> http://localhost:8081/h2-console
3: Policy-microservice> http://localhost:8082/h2-console
4: Processclaim-microservice> http://localhost:8083/h2-console
#username - user
#password - 
```

##step 2: run frontend using following commands.


```bash
npm install
ng serve -o
```
This will open portal on:
```java
http://localhost:4200/login
```


## Usage

```python
in progress...
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Github](https://github.com/arvindsis11)
