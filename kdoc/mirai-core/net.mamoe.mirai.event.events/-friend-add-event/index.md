[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [FriendAddEvent](./index.md)

# FriendAddEvent

`@SinceMirai("0.36.0") data class FriendAddEvent : `[`BotEvent`](../-bot-event/index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)

成功添加了一个新好友的事件

### Constructors

| [&lt;init&gt;](-init-.md) | 成功添加了一个新好友的事件`FriendAddEvent(friend: `[`Friend`](../../net.mamoe.mirai.contact/-friend/index.md)`)` |

### Properties

| [bot](bot.md) | `val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [friend](friend.md) | 新好友. 已经添加到 [Bot.friends](../../net.mamoe.mirai/-bot/friends.md)`val friend: `[`Friend`](../../net.mamoe.mirai.contact/-friend/index.md) |
| [friendDeprecated](friend-deprecated.md) | `val ~~friendDeprecated~~: `[`QQ`](../../net.mamoe.mirai.contact/-q-q/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

