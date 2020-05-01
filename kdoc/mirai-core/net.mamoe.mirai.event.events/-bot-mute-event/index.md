[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [BotMuteEvent](./index.md)

# BotMuteEvent

`data class BotMuteEvent : `[`GroupEvent`](../-group-event/index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md)

Bot 被禁言

### Constructors

| [&lt;init&gt;](-init-.md) | Bot 被禁言`BotMuteEvent(durationSeconds: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`)` |

### Properties

| [durationSeconds](duration-seconds.md) | `val durationSeconds: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [group](group.md) | `val group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md) |
| [operator](operator.md) | 操作人.`val operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |
