# 手机安装Java



### 本文介绍在Android Termux中安装Java（Open-JDK-8）！



## 方法1

要安装Java，请打开Termux并执行以下命令：

```shell
pkg install wget && wget https://raw.githubusercontent.com/MasterDevX/java/master/installjava && bash installjava
```

##### 安装后，运行`java -version`以检查是否正确安装（如果抛出命令未找到错误，则未成功）。



## 方法2

安装 AidLearning-FrameWork

打开并执行以下命令

```sh
apt update
apt install openjdk-8-jre
```

安装完成后，输入

```sh
java -version
```





#### 之后，您可以使用`java`命令运行Mirai



#### 相关链接

下载Termux

https://f-droid.org/packages/com.termux/

脚本出处

https://github.com/MasterDevX/Termux-Java

下载 [AidLearning-FrameWork](https://github.com/aidlearning/AidLearning-FrameWork)

https://github.com/aidlearning/AidLearning-FrameWork/releases/download/v0.84/aidv0.84-b2.apk

