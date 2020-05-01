[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [MessagePacketBase](index.md) / [quoteReply](./quote-reply.md)

# quoteReply

`suspend fun quoteReply(message: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`

给这个消息事件的主体发送引用回复消息
对于好友消息事件, 这个方法将会给好友 ([subject](subject.md)) 发送消息
对于群消息事件, 这个方法将会给群 ([subject](subject.md)) 发送消息

`suspend fun quoteReply(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`
`suspend fun quoteReply(plain: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`
`@JvmName("reply2") suspend fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.quoteReply(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`
`@JvmName("reply2") suspend fun `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`.quoteReply(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`
`@JvmName("reply2") suspend fun `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`.quoteReply(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`