[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [Message](index.md) / [contentEquals](./content-equals.md)

# contentEquals

`@SinceMirai("0.38.0") open fun contentEquals(another: `[`Message`](index.md)`, ignoreCase: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

判断内容是否与 [another](content-equals.md#net.mamoe.mirai.message.data.Message$contentEquals(net.mamoe.mirai.message.data.Message, kotlin.Boolean)/another) 相等.

若本函数返回 `true`, 则表明:

* `this` 与 [another](content-equals.md#net.mamoe.mirai.message.data.Message$contentEquals(net.mamoe.mirai.message.data.Message, kotlin.Boolean)/another) 的 [contentToString](content-to-string.md) 相等
* `this` 为 [another](content-equals.md#net.mamoe.mirai.message.data.Message$contentEquals(net.mamoe.mirai.message.data.Message, kotlin.Boolean)/another) 的所有 [MessageContent](../-message-content.md) 都 [相等](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/equals.html) 且有同样的排列顺序.

``` kotlin
//Unresolved: net.mamoe.mirai.message.data.ContentEqualsTest
```

`@SinceMirai("0.38.0") open fun contentEquals(another: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, ignoreCase: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

判断内容是否与 [another](content-equals.md#net.mamoe.mirai.message.data.Message$contentEquals(kotlin.String, kotlin.Boolean)/another) 相等.

若本函数返回 `true`, 则表明:

* [contentToString](content-to-string.md) 与 [another](content-equals.md#net.mamoe.mirai.message.data.Message$contentEquals(kotlin.String, kotlin.Boolean)/another) 相等
* 若 `this` 为 [MessageChain](../-message-chain/index.md), 则只包含 [MessageMetadata](../-message-metadata.md) 和 [PlainText](../-plain-text/index.md)

``` kotlin
//Unresolved: net.mamoe.mirai.message.data.ContentEqualsTest
```

