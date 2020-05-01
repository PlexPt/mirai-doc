[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [contains](./contains.md)

# contains

`@JvmOverloads fun contains(sub: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, ignoreCase: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): ListeningFilter<M, Ret, R, RR>`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)包含 [sub](contains.md#net.mamoe.mirai.event.MessageSubscribersBuilder$contains(kotlin.String, kotlin.Boolean)/sub)

`fun contains(sub: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, ignoreCase: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false, trim: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true, onEvent: `[`MessageListener`](../-message-listener.md)`<M, R>): Ret`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)包含 [sub](contains.md#net.mamoe.mirai.event.MessageSubscribersBuilder$contains(kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, net.mamoe.mirai.event.MessageSubscribersBuilder.R)))/sub) 中的任意一个元素

`@PlannedRemoval("1.0.0") fun ~~contains~~(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`, onEvent: `[`MessageListener`](../-message-listener.md)`<M, R>): Ret`
**Deprecated:** for binary compatibility

