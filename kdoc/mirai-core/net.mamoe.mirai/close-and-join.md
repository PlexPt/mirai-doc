[mirai-core](../index.md) / [net.mamoe.mirai](index.md) / [closeAndJoin](./close-and-join.md)

# closeAndJoin

`suspend fun `[`Bot`](-bot/index.md)`.closeAndJoin(cause: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`? = null): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

关闭这个 [Bot](-bot/index.md), 停止一切相关活动. 所有引用都会被释放.

注: 不可重新登录. 必须重新实例化一个 [Bot](-bot/index.md).

### Parameters

`cause` - 原因. 为 null 时视为正常关闭, 非 null 时视为异常关闭