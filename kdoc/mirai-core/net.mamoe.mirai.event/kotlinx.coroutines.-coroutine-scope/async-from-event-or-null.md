[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [kotlinx.coroutines.CoroutineScope](index.md) / [asyncFromEventOrNull](./async-from-event-or-null.md)

# asyncFromEventOrNull

`@SinceMirai("0.39.0") inline fun <reified E : `[`Event`](../-event.md)`, R : `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`> CoroutineScope.asyncFromEventOrNull(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, crossinline mapper: suspend E.(E) -> R?): Deferred<R?>`

异步监听这个事件, 并尝试从这个事件中获取一个值.

若 [mapper](async-from-event-or-null.md#net.mamoe.mirai.event$asyncFromEventOrNull(kotlinx.coroutines.CoroutineScope, kotlin.Long, kotlin.coroutines.CoroutineContext, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.asyncFromEventOrNull.E, , net.mamoe.mirai.event.asyncFromEventOrNull.R)))/mapper) 抛出的异常将会被传递给 [Deferred.await](#) 抛出.

### Parameters

`timeoutMillis` - 超时. 单位为毫秒. `-1` 为不限制

`coroutineContext` - 额外的 [CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)

`mapper` - 过滤转换器. 返回非 `null` 则代表得到了需要的值. [syncFromEvent](../sync-from-event.md) 会返回这个值