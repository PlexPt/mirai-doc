[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [Message](index.md) / [followedBy](./followed-by.md)

# followedBy

`@SinceMirai("0.34.0") open fun followedBy(tail: `[`Message`](index.md)`): `[`MessageChain`](../-message-chain/index.md)

将 `this` 和 [tail](followed-by.md#net.mamoe.mirai.message.data.Message$followedBy(net.mamoe.mirai.message.data.Message)/tail) 连接.

连接后可以保证 [ConstrainSingle](../-constrain-single/index.md) 的元素单独存在.

例:

```
val a = PlainText("Hello ")
val b = PlainText("world!")
val c: MessageChain = a + b
println(c) // "Hello world!"

val d = PlainText("world!")
val e = c + d; // PlainText + CombinedMessage
println(c) // "Hello world!"
```

**See Also**

[plus](plus.md)

