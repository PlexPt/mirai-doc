[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [MiraiLoggerPlatformBase](index.md) / [follower](./follower.md)

# follower

`var follower: `[`MiraiLogger`](../-mirai-logger/index.md)`?`

随从. 在 this 中调用所有方法后都应继续往 [follower](../-mirai-logger/follower.md) 传递调用.
[follower](../-mirai-logger/follower.md) 的存在可以让一次日志被多个日志记录器记录.

一般不建议直接修改这个属性. 请通过 [plus](../-mirai-logger/plus.md) 来连接两个日志记录器.
如: `val logger = bot.logger + MyOwnLogger()`
这样, 当调用 `logger.info()` 时, bot.logger 会首先记录, MyOwnLogger 会随后记录.

当然, 多个 logger 也可以加在一起: `val logger = bot.logger + MyOwnLogger() + MyOwnLogger2()`

