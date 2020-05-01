[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageChain](index.md) / [getOrNull](./get-or-null.md)

# getOrNull

`@JvmName("firstOrNull") open fun <M : `[`Message`](../-message/index.md)`> getOrNull(key: Key<M>): M?`

获取第一个类型为 [key](get-or-null.md#net.mamoe.mirai.message.data.MessageChain$getOrNull(net.mamoe.mirai.message.data.Message.Key((net.mamoe.mirai.message.data.MessageChain.getOrNull.M)))/key) 的 [Message](../-message/index.md) 实例, 找不到则返回 `null`

### Parameters

`key` - 由各个类型消息的伴生对象持有. 如 [PlainText.Key](../-plain-text/-key/index.md)