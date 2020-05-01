[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [ForwardMessageBuilder](index.md) / [says](./says.md)

# says

`infix fun `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`.says(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`ForwardMessageBuilder`](index.md)
`infix fun `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`.says(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`ForwardMessageBuilder`](index.md)
`infix fun `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`.says(message: `[`Message`](../-message/index.md)`): `[`ForwardMessageBuilder`](index.md)
`infix fun `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`.says(message: `[`Message`](../-message/index.md)`): `[`ForwardMessageBuilder`](index.md)
`infix inline fun `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`.says(chain: `[`MessageChainBuilder`](../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`ForwardMessageBuilder`](index.md)
`infix fun `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`.says(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`ForwardMessageBuilder`](index.md)
`infix fun `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`.says(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`ForwardMessageBuilder`](index.md)
`infix fun `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`.says(message: `[`Message`](../-message/index.md)`): `[`ForwardMessageBuilder`](index.md)
`infix fun `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`.says(message: `[`Message`](../-message/index.md)`): `[`ForwardMessageBuilder`](index.md)

添加一条消息, 自动按顺序调整时间

`infix inline fun `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`.says(chain: `[`MessageChainBuilder`](../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`ForwardMessageBuilder`](index.md)
`infix inline fun `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`.says(chain: `[`MessageChainBuilder`](../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`ForwardMessageBuilder`](index.md)
`infix inline fun `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`.says(chain: `[`MessageChainBuilder`](../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`ForwardMessageBuilder`](index.md)

构造并添加一个 [MessageChain](../-message-chain/index.md), 自动按顺序调整时间

