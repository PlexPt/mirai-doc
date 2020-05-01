[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [BotOnlineEvent](./index.md)

# BotOnlineEvent

`data class BotOnlineEvent : `[`BotActiveEvent`](../-bot-active-event.md)

[Bot](../../net.mamoe.mirai/-bot/index.md) 登录完成, 好友列表, 群组列表初始化完成

### Constructors

| [&lt;init&gt;](-init-.md) | [Bot](../../net.mamoe.mirai/-bot/index.md) 登录完成, 好友列表, 群组列表初始化完成`BotOnlineEvent(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`)` |

### Properties

| [bot](bot.md) | `val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

