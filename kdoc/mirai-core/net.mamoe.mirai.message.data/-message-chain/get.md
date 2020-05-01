[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageChain](index.md) / [get](./get.md)

# get

`@JvmName("first") open operator fun <M : `[`Message`](../-message/index.md)`> get(key: Key<M>): M`

获取第一个类型为 [key](get.md#net.mamoe.mirai.message.data.MessageChain$get(net.mamoe.mirai.message.data.Message.Key((net.mamoe.mirai.message.data.MessageChain.get.M)))/key) 的 [Message](../-message/index.md) 实例

### Parameters

`key` - 由各个类型消息的伴生对象持有. 如 [PlainText.Key](../-plain-text/-key/index.md)

### Exceptions

`NoSuchElementException` - 当找不到这个类型的 [Message](../-message/index.md) 时