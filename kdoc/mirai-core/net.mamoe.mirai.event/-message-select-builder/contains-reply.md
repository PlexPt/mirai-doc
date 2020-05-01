[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSelectBuilder](index.md) / [containsReply](./contains-reply.md)

# containsReply

`open fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.~~containsReply~~(reply: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)包含 [this](../-message-subscribers-builder/contains-reply/-this-.md) 则回复 [reply](../-message-subscribers-builder/contains-reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$containsReply(kotlin.String, kotlin.String)/reply)

`open fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.~~containsReply~~(replier: suspend M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)包含 [this](../-message-subscribers-builder/contains-reply/-this-.md) 则执行 [replier](../-message-subscribers-builder/contains-reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$containsReply(kotlin.String, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, kotlin.Any)))/replier) 并将其返回值回复给发信对象.

[replier](../-message-subscribers-builder/contains-reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$containsReply(kotlin.String, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, kotlin.Any)))/replier) 的 `it` 将会是消息内容 string.

### Parameters

`replier` - 若返回 [Message](../../net.mamoe.mirai.message.data/-message/index.md) 则直接发送; 若返回 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 则不回复; 其他情况则 [Any.toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html) 后回复