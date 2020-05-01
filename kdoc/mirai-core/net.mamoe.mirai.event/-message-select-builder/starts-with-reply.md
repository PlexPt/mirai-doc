[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSelectBuilder](index.md) / [startsWithReply](./starts-with-reply.md)

# startsWithReply

`open fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.~~startsWithReply~~(replier: suspend M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

不考虑空格, [消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)以 [this](../-message-subscribers-builder/starts-with-reply/-this-.md) 开始则执行 [replier](../-message-subscribers-builder/starts-with-reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$startsWithReply(kotlin.String, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, kotlin.Any)))/replier) 并将其返回值回复给发信对象.

### Parameters

`replier` - 若返回 [Message](../../net.mamoe.mirai.message.data/-message/index.md) 则直接发送; 若返回 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 则不回复; 其他类型则 [Any.toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html) 后回复