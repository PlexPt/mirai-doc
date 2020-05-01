[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSelectBuilder](index.md) / [quoteReply](./quote-reply.md)

# quoteReply

`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.~~quoteReply~~(block: suspend () -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

在超时后引用回复原消息

当 [block](../-message-select-builder-unit/quote-reply.md#net.mamoe.mirai.event.MessageSelectBuilderUnit$quoteReply(net.mamoe.mirai.event.MessageSelectionTimeoutChecker, kotlin.coroutines.SuspendFunction0((kotlin.Any)))/block) 返回值为 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 时不回复, 为 [Message](../../net.mamoe.mirai.message.data/-message/index.md) 时回复 [Message](../../net.mamoe.mirai.message.data/-message/index.md), 其他将 [toString](#) 后回复为 [PlainText](../../net.mamoe.mirai.message.data/-plain-text/index.md)

**See Also**

[timeout](../-message-select-builder-unit/timeout.md)

[reply](../-message-select-builder-unit/reply.md)

`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.~~quoteReply~~(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited


`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.~~quoteReply~~(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

`open fun ListeningFilter<M, `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`, R, `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?>.~~quoteReply~~(toReply: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited


`open fun ListeningFilter<M, `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`, R, `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?>.~~quoteReply~~(toReply: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

启动这个监听器, 在满足条件时引用回复原消息

`open fun ListeningFilter<M, `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`, R, `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?>.~~quoteReply~~(replier: suspend M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

启动这个监听器, 在满足条件时执行 [replier](../-message-subscribers-builder/quote-reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$quoteReply(net.mamoe.mirai.event.MessageSubscribersBuilder.ListeningFilter((net.mamoe.mirai.event.MessageSubscribersBuilder.M, net.mamoe.mirai.event.MessageSubscribersBuilder.Ret, net.mamoe.mirai.event.MessageSubscribersBuilder.R, net.mamoe.mirai.event.MessageSubscribersBuilder.RR)), kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, kotlin.Any)))/replier) 并引用回复原消息

