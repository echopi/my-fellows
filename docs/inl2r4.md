# spring-boot 应用开发指南

## 应用初始化

使用 [https://start.spring.io/](https://start.spring.io/) 初始化应用
* Maven 项目

* JDK 1.8 

* spring-boot: 2.0.0.RC

* 依赖：devtools actuator ..



![image.png | center | 830x294](https://lark-assets-prod.oss-cn-hangzhou.aliyuncs.com/2018/png/5fa7b30f-10f3-433d-85c6-c4c180dc4322.png "")


## 
## 搭建开发环境

* 安装 git
* 使用 Intelli IDE 开发 java


```sh
git clone xxx
git checkout your_dev_branch

./mvnw
...
```

修改 maven 配置，加快仓库代码下载

```plain
<mirrors>
    <mirror>
      <id>alimaven</id>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>        
    </mirror>
</mirrors>
```

开发阶段应用热重启

```plain
# devtools 依赖已添加
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-devtools</artifactId>
	<!--<scope>runtime</scope>-->
	<optional>true</optional>
</dependency>

mvn spring-boot:run
```

IDEA 配置自动编译：

![image.png | center | 830x459](https://lark-assets-prod.oss-cn-hangzhou.aliyuncs.com/2018/png/7beeb870-7d10-419d-a171-7ec774d5d3dc.png "")


打包并启动应用

```plain
./mvnw package && java -jar target/{build_final_appname}.jar
```

构建镜像

```plain
./mvnw install dockerfile:build
```


## 参考资料
* [Spring Boot with Docker](https://spring.io/guides/gs/spring-boot-docker/)
* 
  



