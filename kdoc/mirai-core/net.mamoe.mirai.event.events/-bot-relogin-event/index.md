[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [BotReloginEvent](./index.md)

# BotReloginEvent

`data class BotReloginEvent : `[`BotEvent`](../-bot-event/index.md)`, `[`BotActiveEvent`](../-bot-active-event.md)

[Bot](../../net.mamoe.mirai/-bot/index.md) 主动重新登录.

### Constructors

| [&lt;init&gt;](-init-.md) | [Bot](../../net.mamoe.mirai/-bot/index.md) 主动重新登录.`BotReloginEvent(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, cause: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?)` |

### Properties

| [bot](bot.md) | `val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [cause](cause.md) | `val cause: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?` |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

