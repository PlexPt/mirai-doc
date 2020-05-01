[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [orElse](./or-else.md)

# orElse

`inline fun <reified T : `[`Message`](-message/index.md)`?> `[`MessageChain`](-message-chain/index.md)`.orElse(lazyDefault: () -> T): `[`OrNullDelegate`](-or-null-delegate/index.md)`<T>`

提供一个类型的 [Message](-message/index.md) 的委托, 若不存在这个类型的 [Message](-message/index.md) 则委托会提供 `null`

用法:

```
val message: MessageChain

val at: At by message.orElse { /* 返回一个 At */ }
val atNullable: At? by message.orElse { /* 返回一个 At? */}
```

**See Also**

[orNull](or-null.md)

