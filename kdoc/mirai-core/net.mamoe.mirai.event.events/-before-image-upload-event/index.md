[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [BeforeImageUploadEvent](./index.md)

# BeforeImageUploadEvent

`data class BeforeImageUploadEvent : `[`BotEvent`](../-bot-event/index.md)`, `[`BotActiveEvent`](../-bot-active-event.md)`, `[`AbstractCancellableEvent`](../../net.mamoe.mirai.event/-abstract-cancellable-event/index.md)

图片上传前. 可以阻止上传

### Constructors

| [&lt;init&gt;](-init-.md) | 图片上传前. 可以阻止上传`BeforeImageUploadEvent(target: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`, source: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`)` |

### Properties

| [bot](bot.md) | `val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [source](source.md) | `val source: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md) |
| [target](target.md) | `val target: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

