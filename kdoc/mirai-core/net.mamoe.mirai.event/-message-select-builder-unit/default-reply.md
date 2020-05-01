[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSelectBuilderUnit](index.md) / [defaultReply](./default-reply.md)

# defaultReply

`fun defaultReply(block: suspend () -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

当其他条件都不满足时回复原消息.

当 [block](default-reply.md#net.mamoe.mirai.event.MessageSelectBuilderUnit$defaultReply(kotlin.coroutines.SuspendFunction0((kotlin.Any)))/block) 返回值为 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 时不回复, 为 [Message](../../net.mamoe.mirai.message.data/-message/index.md) 时回复 [Message](../../net.mamoe.mirai.message.data/-message/index.md), 其他将 [toString](#) 后回复为 [PlainText](../../net.mamoe.mirai.message.data/-plain-text/index.md)

