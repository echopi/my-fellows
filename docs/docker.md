# 使用 docker 部署应用

## 搭建 docker 环境

参考 [ECS上搭建Docker(CentOS7)](https://help.aliyun.com/document_detail/51853.html?spm=5176.11065259.1996646101.searchclickresult.158a232cXTXbTt)

```sh
# 登录 ECS 
ssh root@120.77.146.192

docker -v
```

## 拉镜像

```sh
# ls dcoker images
docker images

# pull images
docker pull redis
docker pull mysql
```

## 启动应用依赖服务

数据持久化到 host 机 /root/data 下

```sh
docker run --rm -it -p 6379:6379 -v /root/data/redis:/data --name db-redis -d redis:latest redis-server --appendonly yes
docker run --rm -it -p 3306:3306 -v /root/data/mysql:/var/lib/mysql --name db-mysql -e MYSQL_ROOT_PASSWORD='Yizhong2018@#$' -d mysql:latest

# 查看启动的容器
docker ps
```

## 启动应用

app-image 为打包为镜像的应用

```sh
docker run --name app --link db-mysql:mysql --link db-redis:redis -d app-image
```

## 其他常用命令

```sh
# stop db container
docker stop db-mysql
docker stop db-redis


# 进入容器，使用 redis 客户端操作
docker exec -it db-redis redis-cli


# host 的 redis 服务
sudo systemctl start redis
sudo systemctl stop redis

# find pid by port
ss -lptn 'sport = :6379'


# 本地机器连接远程 redis
./redis-cli  -h  120.77.146.192
```

## 参考资料

* [ECS上搭建Docker(CentOS7)](https://help.aliyun.com/document_detail/51853.html?spm=5176.11065259.1996646101.searchclickresult.158a232cXTXbTt)


