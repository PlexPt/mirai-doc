[mirai-core](../index.md) / [net.mamoe.mirai.message](index.md) / [recallIn](./recall-in.md)

# recallIn

`fun `[`MessageReceipt`](-message-receipt/index.md)`<*>.recallIn(timeMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`

在一段时间后撤回这条消息. [recall](recall.md) 或 [recallIn](../net.mamoe.mirai/recall-in.md) 只能被调用一次.

### Parameters

`timeMillis` - 延迟时间, 单位为毫秒

### Exceptions

`IllegalStateException` - 当此消息已经被撤回或正计划撤回时