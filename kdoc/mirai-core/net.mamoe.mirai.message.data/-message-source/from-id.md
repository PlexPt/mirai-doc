[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageSource](index.md) / [fromId](./from-id.md)

# fromId

`abstract val fromId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)

发送人.

* 当 [OnlineMessageSource.Outgoing](../-online-message-source/-outgoing/index.md) 时为 [机器人](../../net.mamoe.mirai/-bot/id.md)
* 当 [OnlineMessageSource.Incoming](../-online-message-source/-incoming/index.md) 时为发信 [目标好友](../../net.mamoe.mirai.contact/-q-q/id.md) 或 [群](../../net.mamoe.mirai.contact/-group/id.md)
* 当 [OfflineMessageSource](../-offline-message-source/index.md) 时为 [机器人](../../net.mamoe.mirai/-bot/id.md), 发信 [目标好友](../../net.mamoe.mirai.contact/-q-q/id.md) 或 [群](../../net.mamoe.mirai.contact/-group/id.md) (取决于 [OfflineMessageSource.kind](../-offline-message-source/kind.md))
