[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [BotOfflineEvent](./index.md)

# BotOfflineEvent

`sealed class BotOfflineEvent : `[`BotEvent`](../-bot-event/index.md)

[Bot](../../net.mamoe.mirai/-bot/index.md) 离线.

### Types

| [Active](-active/index.md) | 主动离线`data class Active : `[`BotOfflineEvent`](./index.md)`, `[`BotActiveEvent`](../-bot-active-event.md) |
| [Dropped](-dropped/index.md) | 被服务器断开或因网络问题而掉线`data class Dropped : `[`BotOfflineEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md) |
| [Force](-force/index.md) | 被挤下线`data class Force : `[`BotOfflineEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md) |
| [RequireReconnect](-require-reconnect/index.md) | 服务器主动要求更换另一个服务器`data class RequireReconnect : `[`BotOfflineEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

