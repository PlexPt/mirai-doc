[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [FriendEvent](./index.md)

# FriendEvent

`interface FriendEvent : `[`BotEvent`](../-bot-event/index.md)

有关好友的事件

### Properties

| [bot](bot.md) | `open val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [friend](friend.md) | `abstract val friend: `[`Friend`](../../net.mamoe.mirai.contact/-friend/index.md) |
| [friendDeprecated](friend-deprecated.md) | `open val ~~friendDeprecated~~: `[`QQ`](../../net.mamoe.mirai.contact/-q-q/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

