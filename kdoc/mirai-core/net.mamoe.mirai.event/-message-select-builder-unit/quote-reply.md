[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSelectBuilderUnit](index.md) / [quoteReply](./quote-reply.md)

# quoteReply

`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.quoteReply(block: suspend () -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

在超时后引用回复原消息

当 [block](quote-reply.md#net.mamoe.mirai.event.MessageSelectBuilderUnit$quoteReply(net.mamoe.mirai.event.MessageSelectionTimeoutChecker, kotlin.coroutines.SuspendFunction0((kotlin.Any)))/block) 返回值为 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 时不回复, 为 [Message](../../net.mamoe.mirai.message.data/-message/index.md) 时回复 [Message](../../net.mamoe.mirai.message.data/-message/index.md), 其他将 [toString](#) 后回复为 [PlainText](../../net.mamoe.mirai.message.data/-plain-text/index.md)

**See Also**

[timeout](timeout.md)

[reply](reply.md)

`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.quoteReply(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)
`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.quoteReply(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)