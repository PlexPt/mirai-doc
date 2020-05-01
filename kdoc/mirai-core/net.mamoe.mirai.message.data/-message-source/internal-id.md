[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageSource](index.md) / [internalId](./internal-id.md)

# internalId

`@SinceMirai("0.39.0") abstract val internalId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

内部 id. 仅用于协议模块使用.

在撤回消息和引用回复时均需使用此 id.

值没有顺序, 也可能为 0, 取决于服务器是否提供.

在事件中和在引用中无法保证同一条消息的 [internalId](./internal-id.md) 相同.

