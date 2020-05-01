[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [MiraiLoggerPlatformBase](index.md) / [plus](./plus.md)

# plus

`open operator fun <T : `[`MiraiLogger`](../-mirai-logger/index.md)`> plus(follower: T): T`

添加一个 [follower](../-mirai-logger/plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower), 返回 [follower](../-mirai-logger/plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower)
它只会把 `this` 的属性 [MiraiLogger.follower](../-mirai-logger/follower.md) 修改为这个函数的参数 [follower](../-mirai-logger/plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower), 然后返回这个参数.
若 [MiraiLogger.follower](../-mirai-logger/follower.md) 已经有值, 则会替换掉这个值.

+------+      +----------+      +----------+      +----------+
| base | &lt;--  | follower | &lt;--  | follower | &lt;--  | follower |
+------+      +----------+      +----------+      +----------+

**Return**
[follower](../-mirai-logger/plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower)

