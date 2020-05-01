[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [selectMessagesUnit](./select-messages-unit.md)

# selectMessagesUnit

`@SinceMirai("0.29.0") @JvmName("selectMessages1") suspend inline fun <reified T : `[`ContactMessage`](../net.mamoe.mirai.message/-contact-message/index.md)`> T.selectMessagesUnit(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)` = -1, filterContext: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true, crossinline selectBuilder: `[`MessageSelectBuilderUnit`](-message-select-builder-unit/index.md)`<T, `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`>.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

[selectMessages](select-messages.md) 的 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 返回值捷径 (由于 Kotlin 无法推断 [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) 类型)

