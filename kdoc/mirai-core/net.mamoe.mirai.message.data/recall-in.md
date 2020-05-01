[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [recallIn](./recall-in.md)

# recallIn

`fun `[`MessageSource`](-message-source/index.md)`.recallIn(timeMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`
`fun `[`MessageChain`](-message-chain/index.md)`.recallIn(millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`

在一段时间后撤回这条消息. 可撤回自己 2 分钟内发出的消息, 和任意时间的群成员的消息.

[Bot](../net.mamoe.mirai/-bot/index.md) 撤回自己的消息不需要权限.
[Bot](../net.mamoe.mirai/-bot/index.md) 撤回群员的消息需要管理员权限.

### Exceptions

`PermissionDeniedException` - 当 [Bot](../net.mamoe.mirai/-bot/index.md) 无权限操作时

`IllegalStateException` - 当这条消息已经被撤回时 (仅同步主动操作)

**See Also**

[Bot.recall](../net.mamoe.mirai/-bot/recall.md)

`@JvmOverloads fun `[`QuoteReply`](-quote-reply/index.md)`.recallIn(millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`

在一段时间后撤回这条消息.

