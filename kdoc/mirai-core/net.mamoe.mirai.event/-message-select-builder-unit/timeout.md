[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSelectBuilderUnit](index.md) / [timeout](./timeout.md)

# timeout

`fun timeout(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, block: suspend () -> R): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

限制本次 select 的最长等待时间, 当超时后执行 [block](timeout.md#net.mamoe.mirai.event.MessageSelectBuilderUnit$timeout(kotlin.Long, kotlin.coroutines.SuspendFunction0((net.mamoe.mirai.event.MessageSelectBuilderUnit.R)))/block) 以完成 select

`fun timeout(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)

返回一个限制本次 select 的最长等待时间的 [Deferred](#)

**See Also**

[invoke](invoke.md)

[reply](reply.md)

