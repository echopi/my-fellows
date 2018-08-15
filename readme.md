# my fellows

## 开发指南

```bash
mvn spring-boot:run
mvn clean package && java -jar target/my-fellow.jar

# dev
mvn spring-boot:run -Dspring.profiles.active=dev
```

## actuator

```txt
http://127.0.0.1:${port}/actuator
```

2.0 之后 endpoint 变动:

https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#production-ready-endpoints

## 构建应用镜像

```sh
mvn clean package docker:build
#./mvnw install dockerfile:build

docker run -it --rm -d  --name myfellows -p 7001:8080 jiewei/my-fellows:latest

curl 127.0.0.1:7001/hello-world
```
