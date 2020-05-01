[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSubscribersBuilder](index.md) / [has](./has.md)

# has

`inline fun <reified N : `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`> has(noinline onEvent: suspend M.(N) -> R): Ret``fun <reified N : `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`> has(): ListeningFilter<M, Ret, R, RR>`

[消息内容](../../net.mamoe.mirai.message.data/-message/content-to-string.md)包含 [N](has.md#N) 类型的 [Message](../../net.mamoe.mirai.message.data/-message/index.md)

