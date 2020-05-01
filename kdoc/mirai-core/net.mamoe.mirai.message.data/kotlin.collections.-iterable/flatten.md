[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [kotlin.collections.Iterable](index.md) / [flatten](./flatten.md)

# flatten

`fun `[`Iterable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)`<`[`Message`](../-message/index.md)`>.flatten(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>`

扁平化消息序列.

原 [this](flatten/-this-.md):

```
A <- CombinedMessage(B, C) <- D <- MessageChain(E, F, G)
```

结果 [Sequence](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html):

```
A <- B <- C <- D <- E <- F <- G
```

`@JvmName("flatten1") fun `[`Iterable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>.flatten(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>`