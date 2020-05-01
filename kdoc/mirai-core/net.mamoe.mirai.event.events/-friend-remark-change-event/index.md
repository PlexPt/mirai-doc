[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [FriendRemarkChangeEvent](./index.md)

# FriendRemarkChangeEvent

`@SinceMirai("0.36.0") data class FriendRemarkChangeEvent : `[`BotEvent`](../-bot-event/index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)

好友昵称改变事件. 目前仅支持解析 (来自 PC 端的修改).

### Constructors

| [&lt;init&gt;](-init-.md) | 好友昵称改变事件. 目前仅支持解析 (来自 PC 端的修改).`FriendRemarkChangeEvent(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, friend: `[`Friend`](../../net.mamoe.mirai.contact/-friend/index.md)`, newName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`)` |

### Properties

| [bot](bot.md) | `val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [friend](friend.md) | `val friend: `[`Friend`](../../net.mamoe.mirai.contact/-friend/index.md) |
| [friendDeprecated](friend-deprecated.md) | `val ~~friendDeprecated~~: `[`QQ`](../../net.mamoe.mirai.contact/-q-q/index.md) |
| [newName](new-name.md) | `val newName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

