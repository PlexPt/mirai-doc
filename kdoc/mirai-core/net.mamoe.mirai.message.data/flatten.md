[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [flatten](./flatten.md)

# flatten

`fun `[`Message`](-message/index.md)`.flatten(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`SingleMessage`](-single-message/index.md)`>`

扁平化 [Message](-message/index.md)

对于不同类型的接收者（receiver）:

* `CombinedMessage(A, B)` 返回 `A <- B`
* `MessageChain(E, F, G)` 返回 `E <- F <- G`
* 其他: 返回 `sequenceOf(this)`
`fun `[`MessageChain`](-message-chain/index.md)`.flatten(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`SingleMessage`](-single-message/index.md)`>`