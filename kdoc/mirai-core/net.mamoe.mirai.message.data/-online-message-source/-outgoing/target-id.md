[mirai-core](../../../index.md) / [net.mamoe.mirai.message.data](../../index.md) / [OnlineMessageSource](../index.md) / [Outgoing](index.md) / [targetId](./target-id.md)

# targetId

`val targetId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)

消息发送目标.

* 当 [OnlineMessageSource.Outgoing](index.md) 时为发信 [目标好友](../../../net.mamoe.mirai.contact/-q-q/id.md) 或 [群](../../../net.mamoe.mirai.contact/-group/id.md) 或 [临时消息](#)
* 当 [OnlineMessageSource.Incoming](../-incoming/index.md) 时为 [机器人](../../../net.mamoe.mirai/-bot/id.md)
* 当 [OfflineMessageSource](../../-offline-message-source/index.md) 时为 [机器人](../../../net.mamoe.mirai/-bot/id.md), 发信 [目标好友](../../../net.mamoe.mirai.contact/-q-q/id.md) 或 [群](../../../net.mamoe.mirai.contact/-group/id.md) 或 [临时消息](#) (取决于 [OfflineMessageSource.kind](../../-offline-message-source/kind.md))
