[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [syncFromEvent](./sync-from-event.md)

# syncFromEvent

`@SinceMirai("0.39.0") suspend inline fun <reified E : `[`Event`](-event.md)`, R : `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`> syncFromEvent(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)` = -1, crossinline mapper: suspend E.(E) -> R?): R`

挂起当前协程, 监听事件 [E](sync-from-event.md#E), 并尝试从这个事件中**同步**一个值, 在超时时抛出 [TimeoutCancellationException](#)

### Parameters

`timeoutMillis` - 超时. 单位为毫秒. `-1` 为不限制.

`mapper` - 过滤转换器. 返回非 null 则代表得到了需要的值. [syncFromEvent](./sync-from-event.md) 会返回这个值

### Exceptions

`TimeoutCancellationException` - 在超时后抛出.

`Throwable` - 当 [mapper](sync-from-event.md#net.mamoe.mirai.event$syncFromEvent(kotlin.Long, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.syncFromEvent.E, , net.mamoe.mirai.event.syncFromEvent.R)))/mapper) 抛出任何异常时, 本函数会抛出该异常

**See Also**

[asyncFromEvent](kotlinx.coroutines.-coroutine-scope/async-from-event.md)

