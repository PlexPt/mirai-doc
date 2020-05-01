[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [syncFromEventOrNull](./sync-from-event-or-null.md)

# syncFromEventOrNull

`@SinceMirai("0.39.0") suspend inline fun <reified E : `[`Event`](-event.md)`, R : `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`> syncFromEventOrNull(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, crossinline mapper: suspend E.(E) -> R?): R?`

挂起当前协程, 监听这个事件, 并尝试从这个事件中获取一个值, 在超时时返回 `null`

### Parameters

`timeoutMillis` - 超时. 单位为毫秒. `-1` 为不限制

`mapper` - 过滤转换器. 返回非 null 则代表得到了需要的值.

### Exceptions

`Throwable` - 当 [mapper](sync-from-event-or-null.md#net.mamoe.mirai.event$syncFromEventOrNull(kotlin.Long, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.syncFromEventOrNull.E, , net.mamoe.mirai.event.syncFromEventOrNull.R)))/mapper) 抛出任何异常时, 本函数会抛出该异常

**Return**
超时返回 `null`, 否则返回 [mapper](sync-from-event-or-null.md#net.mamoe.mirai.event$syncFromEventOrNull(kotlin.Long, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.syncFromEventOrNull.E, , net.mamoe.mirai.event.syncFromEventOrNull.R)))/mapper) 返回的第一个非 `null` 值.

**See Also**

[asyncFromEvent](kotlinx.coroutines.-coroutine-scope/async-from-event.md)

