[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [endsWithReply](./ends-with-reply.md)

# endsWithReply

`open infix fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.endsWithReply(replier: suspend M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): Ret`

不考虑空格, [消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)以 [this](ends-with-reply/-this-.md) 结尾则执行 [replier](ends-with-reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$endsWithReply(kotlin.String, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, kotlin.Any)))/replier) 并将其返回值回复给发信对象.

### Parameters

`replier` - 若返回 [Message](../../net.mamoe.mirai.message.data/-message/index.md) 则直接发送; 若返回 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 则不回复; 其他情况则 [Any.toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html) 后回复