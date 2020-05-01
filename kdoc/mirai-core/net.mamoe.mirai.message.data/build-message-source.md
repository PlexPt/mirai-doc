[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [buildMessageSource](./build-message-source.md)

# buildMessageSource

`@SinceMirai("0.39.0") fun `[`Bot`](../net.mamoe.mirai/-bot/index.md)`.buildMessageSource(block: `[`MessageSourceBuilder`](-message-source-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`MessageSource`](-message-source/index.md)

构建一个 [OfflineMessageSource](-offline-message-source/index.md)

### 参数

一个 [OfflineMessageSource](-offline-message-source/index.md) 须要以下参数:

* 发送人和发送目标: 通过 [MessageSourceBuilder.sendTo](-message-source-builder/send-to.md) 设置
* 消息元数据 (即 [MessageSource.id](-message-source/id.md), [MessageSource.internalId](-message-source/internal-id.md), [MessageSource.time](-message-source/time.md))
元数据用于 [撤回](recall.md), [引用回复](quote.md), 和官方客户端定位原消息.
可通过 [MessageSourceBuilder.id](-message-source-builder/id.md), [MessageSourceBuilder.time](-message-source-builder/time.md), [MessageSourceBuilder.internalId](-message-source-builder/internal-id.md) 设置
可通过 [MessageSourceBuilder.metadata](-message-source-builder/metadata.md) 从另一个 [MessageSource](-message-source/index.md) 复制
* 消息内容: 通过 [MessageSourceBuilder.messages](-message-source-builder/messages.md) 设置

### 性质

* 当两个消息的元数据相同时, 他们在群中会是同一条消息. 可通过此特性决定官方客户端 "定位原消息" 的目标
* 发送人的信息和消息内容会在官方客户端显示在引用回复中.

### 实例

```
bot.buildMessageSource {
    bot sendTo target // 指定发送人和发送目标
    metadata(source) // 从另一个消息源复制 id, internalId, time

    messages { // 指定消息内容
        +"hi"
    }
}
```

