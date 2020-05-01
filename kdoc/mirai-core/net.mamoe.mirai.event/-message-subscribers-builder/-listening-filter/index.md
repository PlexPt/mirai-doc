[mirai-core](../../../index.md) / [net.mamoe.mirai.event](../../index.md) / [MessageSubscribersBuilder](../index.md) / [ListeningFilter](./index.md)

# ListeningFilter

`open inner class ListeningFilter<M : `[`ContactMessage`](../../../net.mamoe.mirai.message/-contact-message/index.md)`, out Ret, R : RR, RR>`

由 [contains](../contains.md), [startsWith](../starts-with.md) 等 DSL 创建出的监听条件, 使用 [invoke](invoke.md) 将其注册给事件

### Constructors

| [&lt;init&gt;](-init-.md) | 由 [contains](../contains.md), [startsWith](../starts-with.md) 等 DSL 创建出的监听条件, 使用 [invoke](invoke.md) 将其注册给事件`ListeningFilter(filter: M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`)` |

### Properties

| [filter](filter.md) | `val filter: M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Functions

| [and](and.md) | 进行逻辑 `and`.`infix fun and(another: ListeningFilter<M, Ret, R, RR>): ListeningFilter<M, Ret, R, RR>` |
| [invoke](invoke.md) | 启动事件监听.`operator fun invoke(onEvent: `[`MessageListener`](../../-message-listener.md)`<M, R>): Ret` |
| [nand](nand.md) | 进行逻辑 `nand`, 即 `not and`.`infix fun nand(another: ListeningFilter<M, Ret, R, RR>): ListeningFilter<M, Ret, R, RR>` |
| [not](not.md) | 进行逻辑 `not``fun not(): ListeningFilter<M, Ret, R, RR>` |
| [or](or.md) | 进行逻辑 `or`.`infix fun or(another: ListeningFilter<M, Ret, R, RR>): ListeningFilter<M, Ret, R, RR>` |
| [xor](xor.md) | 进行逻辑 `xor`.`infix fun xor(another: ListeningFilter<M, Ret, R, RR>): ListeningFilter<M, Ret, R, RR>` |

