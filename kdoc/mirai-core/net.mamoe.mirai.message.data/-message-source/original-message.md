[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageSource](index.md) / [originalMessage](./original-message.md)

# originalMessage

`abstract val originalMessage: `[`MessageChain`](../-message-chain/index.md)

原消息内容.

此属性是 **lazy** 的: 它只会在第一次调用时初始化, 因为需要反序列化服务器发来的整个包, 相当于接收了一条新消息.

