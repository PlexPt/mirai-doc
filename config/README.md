---
sidebarDepth: 3
---

# 使用配置

本文讲解了`Mirai-console`在使用过程中的配置选项，其中，部分配置继承自`Mirai-core`原生所支持的配置

## 基本配置

本部分配置包含了大部分用户的常用配置，其中一部分为 Mirai-core 所支持的配置

## 使用方式

plugin.yml:

```yaml
name: "插件名字"
author: "作者名字"
version: "0.1.0"
main: "my_package_name.ExamplePluginBase"
info: "插件介绍"
depends: ["依赖插件名字"]
```
 

### name

- 类型：`String`
- 默认值：`null`

插件名字，必填， 建议全英文小写加-

 
