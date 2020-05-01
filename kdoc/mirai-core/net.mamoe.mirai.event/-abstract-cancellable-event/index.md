[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [AbstractCancellableEvent](./index.md)

# AbstractCancellableEvent

`abstract class AbstractCancellableEvent : `[`Event`](../-event.md)`, `[`CancellableEvent`](../-cancellable-event/index.md)

可被取消的事件的实现

### Constructors

| [&lt;init&gt;](-init-.md) | 可被取消的事件的实现`AbstractCancellableEvent()` |

### Properties

| [isCancelled](is-cancelled.md) | 事件是否已取消.`open val isCancelled: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Functions

| [cancel](cancel.md) | 取消事件.`open fun cancel(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

### Extension Functions

| [broadcast](../broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../-event.md)`> E.broadcast(): E` |

### Inheritors

| [BeforeImageUploadEvent](../../net.mamoe.mirai.event.events/-before-image-upload-event/index.md) | 图片上传前. 可以阻止上传`data class BeforeImageUploadEvent : `[`BotEvent`](../../net.mamoe.mirai.event.events/-bot-event/index.md)`, `[`BotActiveEvent`](../../net.mamoe.mirai.event.events/-bot-active-event.md)`, `[`AbstractCancellableEvent`](./index.md) |
| [ImageUploadEvent](../../net.mamoe.mirai.event.events/-image-upload-event/index.md) | 图片上传完成`sealed class ImageUploadEvent : `[`BotEvent`](../../net.mamoe.mirai.event.events/-bot-event/index.md)`, `[`BotActiveEvent`](../../net.mamoe.mirai.event.events/-bot-active-event.md)`, `[`AbstractCancellableEvent`](./index.md) |
| [MessageSendEvent](../../net.mamoe.mirai.event.events/-message-send-event/index.md) | 主动发送消息`sealed class MessageSendEvent : `[`BotEvent`](../../net.mamoe.mirai.event.events/-bot-event/index.md)`, `[`BotActiveEvent`](../../net.mamoe.mirai.event.events/-bot-active-event.md)`, `[`AbstractCancellableEvent`](./index.md) |

