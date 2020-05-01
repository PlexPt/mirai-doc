[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [Listener](./index.md)

# Listener

`interface Listener<in E : `[`Event`](../-event.md)`> : CompletableJob`

事件监听器.
由 [subscribe](../kotlinx.coroutines.-coroutine-scope/subscribe.md) 等方法返回.

取消监听: [complete](#)

### Types

| [ConcurrencyKind](-concurrency-kind/index.md) | `enum class ConcurrencyKind` |

### Properties

| [concurrencyKind](concurrency-kind.md) | 并发类型`abstract val concurrencyKind: ConcurrencyKind` |

### Functions

| [onEvent](on-event.md) | `abstract suspend fun onEvent(event: E): `[`ListeningStatus`](../-listening-status/index.md) |

