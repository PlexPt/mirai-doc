[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSelectBuilder](index.md) / [reply](./reply.md)

# reply

`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.~~reply~~(block: suspend () -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

在超时后回复原消息

当 [block](../-message-select-builder-unit/reply.md#net.mamoe.mirai.event.MessageSelectBuilderUnit$reply(net.mamoe.mirai.event.MessageSelectionTimeoutChecker, kotlin.coroutines.SuspendFunction0((kotlin.Any)))/block) 返回值为 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 时不回复, 为 [Message](../../net.mamoe.mirai.message.data/-message/index.md) 时回复 [Message](../../net.mamoe.mirai.message.data/-message/index.md), 其他将 [toString](#) 后回复为 [PlainText](../../net.mamoe.mirai.message.data/-plain-text/index.md)

**See Also**

[timeout](../-message-select-builder-unit/timeout.md)

[quoteReply](../-message-select-builder-unit/quote-reply.md)

`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.~~reply~~(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited


`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.~~reply~~(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

`open fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.~~reply~~(reply: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited


`open fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.~~reply~~(reply: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

当发送的消息内容为 [this](../-message-subscribers-builder/reply/-this-.md) 就回复 [reply](../-message-subscribers-builder/reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$reply(kotlin.String, kotlin.String)/reply)

`open fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.~~reply~~(replier: suspend M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

当发送的消息内容为 [this](../-message-subscribers-builder/reply/-this-.md) 就执行并回复 [replier](../-message-subscribers-builder/reply.md#net.mamoe.mirai.event.MessageSubscribersBuilder$reply(kotlin.String, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, kotlin.Any)))/replier) 的返回值

`open fun ListeningFilter<M, `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`, R, `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?>.~~reply~~(toReply: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited


`open fun ListeningFilter<M, `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`, R, `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?>.~~reply~~(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited


`open fun ListeningFilter<M, `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`, R, `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?>.~~reply~~(replier: suspend M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)
**Deprecated:** Using `reply` DSL in message selection is prohibited

启动这个监听器, 在满足条件时回复原消息

