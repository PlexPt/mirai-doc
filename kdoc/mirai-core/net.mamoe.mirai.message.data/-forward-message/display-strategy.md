[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [ForwardMessage](index.md) / [displayStrategy](./display-strategy.md)

# displayStrategy

`val displayStrategy: DisplayStrategy`

卡片显示方案

### 显示方案

#### 移动端

在移动客户端将会显示为卡片

`<title>`: [DisplayStrategy.generateTitle](-display-strategy/generate-title.md)

`<preview>`: [DisplayStrategy.generatePreview](-display-strategy/generate-preview.md)

`<summary>`: [DisplayStrategy.generateSummary](-display-strategy/generate-summary.md)

```
|-------------------------|
| <title>                 |
| <preview>               |
|-------------------------|
| <summary>               |
|-------------------------|
```

默认显示方案:

```
|-------------------------|
| 群聊的聊天记录             |
| <消息 1>                 |
| <消息 2>                 |
| <消息 3>                 |
|-------------------------|
| 查看 3 条转发消息          |
|-------------------------|
```

#### PC 端

在部分 PC 端显示为类似移动端的卡片, 在其他 PC 端显示为以下格式

```
鸽子 A 2020/04/23 11:27:54
咕
鸽子 B 2020/04/23 11:27:55
咕
鸽子 C 1970/01/01 08:00:00
咕咕咕
```

### 构造

* 使用 [DSL](../build-forward-message.md)
* 通过 [ContactMessage](../../net.mamoe.mirai.message/-contact-message/index.md) 集合转换: [toForwardMessage](../kotlin.collections.-iterable/to-forward-message.md)
