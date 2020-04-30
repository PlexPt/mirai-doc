# 快速开始

我们将通过一个简单的 Demo 来阐述 Mirai 的强大功能，在此之前，我们假设您已经：

- 拥有 Java 开发环境以及相应 IDE
- 熟悉 Kotlin
- 熟悉 Maven

---
 
::: danger Question
如果从零开始用 Mirai 来实现一个自动复读功能，我们需要做什么呢？
:::

---


## 初始化工程

创建一个空的 Maven 工程（工程将以 Maven 进行演示）

::: tip
可以使用 [IDEA 插件](https://github.com/mamoe/mirai-console-intellij) 快速初始化一个工程
:::

## 添加依赖

引入 core 工程：
```xml
      <dependency>
            <groupId>net.mamoe</groupId>
            <artifactId>mirai-core</artifactId>
            <version>core-version</version>
            <optional>true</optional>
            <scope>provided</scope>
        </dependency>
```

引入 `mirai-console` 依赖：
```xml

       <!--https://bintray.com/him188moe/mirai/mirai-console-->
           <dependency>
               <groupId>net.mamoe</groupId>
               <artifactId>mirai-console</artifactId>
               <version>console-version</version>
               <optional>true</optional>
               <scope>provided</scope>
           </dependency>

```

## 配置

在 `plugin.yml` 配置文件中添加相关配置：

```yaml
name: "插件名字"
author: "作者名字"
version: "0.1.0"
main: "my_package_name.ExamplePluginBase"
info: "插件介绍"
depends: ["依赖插件名字"]
```

其中main指向 你的PluginBase
 
## PluginBase
pluginBase为你插件的启动点, 生命管理周期, 他应该被放到src/main/java或src/main/kotlin下
一般来说, 他要被放到一个package下, 假如它叫MyPluginBase, 放到package为my.package下, 那么plugin.yml的main则要写my.package.MyPluginBase
你可以在下面的DEMO中找到PluginBase的一些简单例子


## 编码



## 开始使用

加载插件 开始使用

 


::: tip
完整的代码示例请移步：[示例](https://github.com/plexpt/Mirai-samples/tree/master/Mirai-sample-quickstart) |
 [快速启动示例](https://github.com/plexpt/Mirai-samples/tree/master/Mirai-sample)
:::

## 小结

通过以上几个简单的步骤，我们就实现了自动回复消息功能，甚至连多余代码文件都不用编写！

从以上步骤中，我们可以看到集成`Mirai`非常的简单，只需要引入 mirai 工程，并配置 bot 即可。

但 Mirai 的强大远不止这些功能，想要详细了解 Mirai 的强大功能？那就继续往下看吧！

<script>
export default {
  mounted () {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", "https://img.shields.io/jcenter/v/net.mamoe/mirai-console.json", false)
    xmlHttp.send(null)
    var consoleVersionInfo = JSON.parse(xmlHttp.responseText).value.replace('v', '')
    xmlHttp.open("GET", "https://img.shields.io/jcenter/v/net.mamoe/mirai-core.json", false)
    xmlHttp.send(null)
    var coreVersion = JSON.parse(xmlHttp.responseText).value.replace('v', '')
    var codeNodeList = document.querySelectorAll('code')
    for (var i = 0; i < codeNodeList.length; i++) {
        codeNodeList[i].innerHTML = codeNodeList[i].innerHTML.replace('core-version', coreVersion)
        codeNodeList[i].innerHTML = codeNodeList[i].innerHTML.replace('console-version', consoleVersionInfo)
    }
  }
}
</script>
