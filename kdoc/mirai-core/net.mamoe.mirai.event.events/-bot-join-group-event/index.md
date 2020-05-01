[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [BotJoinGroupEvent](./index.md)

# BotJoinGroupEvent

`data class BotJoinGroupEvent : `[`BotPassiveEvent`](../-bot-passive-event.md)`, `[`GroupEvent`](../-group-event/index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)

Bot 成功加入了一个新群

### Constructors

| [&lt;init&gt;](-init-.md) | Bot 成功加入了一个新群`BotJoinGroupEvent(group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md)`)` |

### Properties

| [group](group.md) | `val group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

