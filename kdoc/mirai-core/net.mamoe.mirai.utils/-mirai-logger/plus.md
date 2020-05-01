[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [MiraiLogger](index.md) / [plus](./plus.md)

# plus

`abstract operator fun <T : `[`MiraiLogger`](index.md)`> plus(follower: T): T`

添加一个 [follower](plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower), 返回 [follower](plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower)
它只会把 `this` 的属性 [MiraiLogger.follower](follower.md) 修改为这个函数的参数 [follower](plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower), 然后返回这个参数.
若 [MiraiLogger.follower](follower.md) 已经有值, 则会替换掉这个值.

+------+      +----------+      +----------+      +----------+
| base | &lt;--  | follower | &lt;--  | follower | &lt;--  | follower |
+------+      +----------+      +----------+      +----------+

**Return**
[follower](plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower)

