[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [CancellableEvent](./index.md)

# CancellableEvent

`interface CancellableEvent`

可被取消的事件

### Properties

| [isCancelled](is-cancelled.md) | 事件是否已取消.`abstract val isCancelled: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Functions

| [cancel](cancel.md) | 取消这个事件.`abstract fun cancel(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

### Inheritors

| [AbstractCancellableEvent](../-abstract-cancellable-event/index.md) | 可被取消的事件的实现`abstract class AbstractCancellableEvent : `[`Event`](../-event.md)`, `[`CancellableEvent`](./index.md) |

