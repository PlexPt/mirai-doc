[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [endsWith](./ends-with.md)

# endsWith

`@JvmOverloads fun endsWith(suffix: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, trim: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true): ListeningFilter<M, Ret, R, RR>`
`fun endsWith(suffix: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, removeSuffix: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true, trim: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true, onEvent: suspend M.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> R): Ret`

如果消息的结尾是 [suffix](ends-with.md#net.mamoe.mirai.event.MessageSubscribersBuilder$endsWith(kotlin.String, kotlin.Boolean)/suffix)

