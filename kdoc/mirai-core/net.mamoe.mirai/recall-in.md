[mirai-core](../index.md) / [net.mamoe.mirai](index.md) / [recallIn](./recall-in.md)

# recallIn

`fun `[`Bot`](-bot/index.md)`.recallIn(source: `[`MessageSource`](../net.mamoe.mirai.message.data/-message-source/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`

在一段时间后撤回这个消息源所指代的消息.

### Parameters

`millis` - 延迟的时间, 单位为毫秒

`coroutineContext` - 额外的 [CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)

**See Also**

[recall](recall.md)

`fun `[`Bot`](-bot/index.md)`.recallIn(message: `[`MessageChain`](../net.mamoe.mirai.message.data/-message-chain/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`

在一段时间后撤回这条消息.

### Parameters

`millis` - 延迟的时间, 单位为毫秒

`coroutineContext` - 额外的 [CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)

**See Also**

[recall](recall.md)

