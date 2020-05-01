[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [BotImpl](index.md) / [close](./close.md)

# close

`open fun close(cause: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

关闭这个 [Bot](../-bot/index.md), 立即取消 [Bot](../-bot/index.md) 的 [kotlinx.coroutines.SupervisorJob](#).
之后 [kotlinx.coroutines.isActive](#) 将会返回 `false`.

**注意:** 不可重新登录. 必须重新实例化一个 [Bot](../-bot/index.md).

### Parameters

`cause` - 原因. 为 null 时视为正常关闭, 非 null 时视为异常关闭

**See Also**

[closeAndJoin](../close-and-join.md)

