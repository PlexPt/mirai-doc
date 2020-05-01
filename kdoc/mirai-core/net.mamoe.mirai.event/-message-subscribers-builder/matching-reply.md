[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [matchingReply](./matching-reply.md)

# matchingReply

`open infix fun `[`Regex`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/index.html)`.matchingReply(replier: suspend M.(`[`MatchResult`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-match-result/index.html)`) -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): Ret`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)可由正则表达式匹配([Regex.matchEntire](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/match-entire.html)), 则执行 [replier](matching-reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$matchingReply(kotlin.text.Regex, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.text.MatchResult, kotlin.Any)))/replier) 并将其返回值回复给发信对象.

[replier](matching-reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$matchingReply(kotlin.text.Regex, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.text.MatchResult, kotlin.Any)))/replier) 的 `it` 将会是消息内容 string.

### Parameters

`replier` - 若返回 [Message](../../net.mamoe.mirai.message.data/-message/index.md) 则直接发送; 若返回 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 则不回复; 其他情况则 [Any.toString](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/to-string.html) 后回复