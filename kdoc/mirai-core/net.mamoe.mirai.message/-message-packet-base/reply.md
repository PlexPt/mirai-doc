[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [MessagePacketBase](index.md) / [reply](./reply.md)

# reply

`suspend fun reply(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`

给这个消息事件的主体发送消息
对于好友消息事件, 这个方法将会给好友 ([subject](subject.md)) 发送消息
对于群消息事件, 这个方法将会给群 ([subject](subject.md)) 发送消息

`suspend fun reply(plain: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`
`@PlannedRemoval("1.0.0") @JvmName("reply1") suspend fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.~~reply~~(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`
**Deprecated:** use reply(String) for clear semantics


`@PlannedRemoval("1.0.0") @JvmName("reply1") suspend fun `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`.~~reply~~(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`
**Deprecated:** use reply(String) for clear semantics

