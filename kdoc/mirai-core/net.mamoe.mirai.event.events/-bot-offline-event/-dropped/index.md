[mirai-core](../../../index.md) / [net.mamoe.mirai.event.events](../../index.md) / [BotOfflineEvent](../index.md) / [Dropped](./index.md)

# Dropped

`data class Dropped : `[`BotOfflineEvent`](../index.md)`, `[`Packet`](../../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotPassiveEvent`](../../-bot-passive-event.md)

被服务器断开或因网络问题而掉线

### Constructors

| [&lt;init&gt;](-init-.md) | 被服务器断开或因网络问题而掉线`Dropped(bot: `[`Bot`](../../../net.mamoe.mirai/-bot/index.md)`, cause: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?)` |

### Properties

| [bot](bot.md) | `val bot: `[`Bot`](../../../net.mamoe.mirai/-bot/index.md) |
| [cause](cause.md) | `val cause: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?` |

