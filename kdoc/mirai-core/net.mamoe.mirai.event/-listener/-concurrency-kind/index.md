[mirai-core](../../../index.md) / [net.mamoe.mirai.event](../../index.md) / [Listener](../index.md) / [ConcurrencyKind](./index.md)

# ConcurrencyKind

`enum class ConcurrencyKind`

### Enum Values

| [CONCURRENT](-c-o-n-c-u-r-r-e-n-t.md) | 并发地同时处理多个事件, 但无法保证 [onEvent](../on-event.md) 返回 [ListeningStatus.STOPPED](../../-listening-status/-s-t-o-p-p-e-d.md) 后立即停止事件监听. |
| [LOCKED](-l-o-c-k-e-d.md) | 使用 [Mutex](#) 保证同一时刻只处理一个事件. |

