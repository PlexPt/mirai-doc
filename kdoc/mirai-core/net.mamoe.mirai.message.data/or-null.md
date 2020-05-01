[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [orNull](./or-null.md)

# orNull

`fun <reified T : `[`Message`](-message/index.md)`> `[`MessageChain`](-message-chain/index.md)`.orNull(): `[`OrNullDelegate`](-or-null-delegate/index.md)`<T?>`

提供一个类型的 [Message](-message/index.md) 的委托, 若不存在这个类型的 [Message](-message/index.md) 则委托会提供 `null`

用法:

```
val message: MessageChain

val at: At? by message.orNull()
```

**See Also**

[orNull](./or-null.md)

[orElse](or-else.md)

