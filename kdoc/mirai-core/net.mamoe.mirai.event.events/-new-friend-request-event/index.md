[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [NewFriendRequestEvent](./index.md)

# NewFriendRequestEvent

`@SinceMirai("0.35.0") data class NewFriendRequestEvent : `[`BotEvent`](../-bot-event/index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)

一个账号请求添加机器人为好友的事件

### Constructors

| [&lt;init&gt;](-init-.md) | 一个账号请求添加机器人为好友的事件`NewFriendRequestEvent(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, eventId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, fromId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, fromGroupId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, fromNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`)` |

### Properties

| [bot](bot.md) | `val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [eventId](event-id.md) | 事件唯一识别号`val eventId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [fromGroup](from-group.md) | `val fromGroup: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md)`?` |
| [fromGroupId](from-group-id.md) | 来自群 [Group.id](../../net.mamoe.mirai.contact/-group/id.md), 其他途径时为 0`val fromGroupId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [fromId](from-id.md) | 请求人 [QQ.id](../../net.mamoe.mirai.contact/-q-q/id.md)`val fromId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [fromNick](from-nick.md) | 群名片或好友昵称`val fromNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [message](message.md) | 申请好友消息`val message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Functions

| [__acceptBlockingForJava__](__accept-blocking-for-java__.md) | `fun __acceptBlockingForJava__(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [__rejectBlockingForJava__](__reject-blocking-for-java__.md) | `fun __rejectBlockingForJava__(blackList: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [accept](accept.md) | `suspend fun accept(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [reject](reject.md) | `suspend fun reject(blackList: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

