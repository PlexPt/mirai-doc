[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [MessageSendEvent](./index.md)

# MessageSendEvent

`sealed class MessageSendEvent : `[`BotEvent`](../-bot-event/index.md)`, `[`BotActiveEvent`](../-bot-active-event.md)`, `[`AbstractCancellableEvent`](../../net.mamoe.mirai.event/-abstract-cancellable-event/index.md)

主动发送消息

### Types

| [FriendMessageSendEvent](-friend-message-send-event/index.md) | `data class FriendMessageSendEvent : `[`MessageSendEvent`](./index.md)`, `[`CancellableEvent`](../../net.mamoe.mirai.event/-cancellable-event/index.md) |
| [GroupMessageSendEvent](-group-message-send-event/index.md) | `data class GroupMessageSendEvent : `[`MessageSendEvent`](./index.md)`, `[`CancellableEvent`](../../net.mamoe.mirai.event/-cancellable-event/index.md) |

### Properties

| [bot](bot.md) | `val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [target](target.md) | `abstract val target: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

