[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [ImageUploadEvent](./index.md)

# ImageUploadEvent

`sealed class ImageUploadEvent : `[`BotEvent`](../-bot-event/index.md)`, `[`BotActiveEvent`](../-bot-active-event.md)`, `[`AbstractCancellableEvent`](../../net.mamoe.mirai.event/-abstract-cancellable-event/index.md)

图片上传完成

**See Also**

[Succeed](-succeed/index.md)

[Failed](-failed/index.md)

### Types

| [Failed](-failed/index.md) | `data class Failed : `[`ImageUploadEvent`](./index.md)`, `[`CancellableEvent`](../../net.mamoe.mirai.event/-cancellable-event/index.md) |
| [Succeed](-succeed/index.md) | `data class Succeed : `[`ImageUploadEvent`](./index.md)`, `[`CancellableEvent`](../../net.mamoe.mirai.event/-cancellable-event/index.md) |

### Properties

| [bot](bot.md) | `open val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [source](source.md) | `abstract val source: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md) |
| [target](target.md) | `abstract val target: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

