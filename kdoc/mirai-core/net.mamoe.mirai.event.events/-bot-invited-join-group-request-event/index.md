[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [BotInvitedJoinGroupRequestEvent](./index.md)

# BotInvitedJoinGroupRequestEvent

`@SinceMirai("0.39.4") data class BotInvitedJoinGroupRequestEvent : `[`BotEvent`](../-bot-event/index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)

[Bot](../../net.mamoe.mirai/-bot/index.md) 被邀请加入一个群.

### Constructors

| [&lt;init&gt;](-init-.md) | [Bot](../../net.mamoe.mirai/-bot/index.md) 被邀请加入一个群.`BotInvitedJoinGroupRequestEvent(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, eventId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, invitorId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, groupId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, groupName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, invitorNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`)` |

### Properties

| [bot](bot.md) | `val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [eventId](event-id.md) | 事件唯一识别号`val eventId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [groupId](group-id.md) | `val groupId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [groupName](group-name.md) | `val groupName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [invitor](invitor.md) | `val invitor: `[`Friend`](../../net.mamoe.mirai.contact/-friend/index.md) |
| [invitorId](invitor-id.md) | 邀请入群的账号的 id`val invitorId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [invitorNick](invitor-nick.md) | 邀请人昵称`val invitorNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Functions

| [__acceptBlockingForJava__](__accept-blocking-for-java__.md) | `fun __acceptBlockingForJava__(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [__ignoreBlockingForJava__](__ignore-blocking-for-java__.md) | `fun __ignoreBlockingForJava__(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [accept](accept.md) | `suspend fun accept(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [ignore](ignore.md) | `suspend fun ignore(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

