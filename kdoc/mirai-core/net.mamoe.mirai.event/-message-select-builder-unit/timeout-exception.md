[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSelectBuilderUnit](index.md) / [timeoutException](./timeout-exception.md)

# timeoutException

`fun timeoutException(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, exception: () -> `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)` = { throw MessageSelectionTimeoutException() }): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

限制本次 select 的最长等待时间, 当超时后抛出 [TimeoutCancellationException](#)

