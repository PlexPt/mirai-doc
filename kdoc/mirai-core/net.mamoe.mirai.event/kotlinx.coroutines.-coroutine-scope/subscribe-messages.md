[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [kotlinx.coroutines.CoroutineScope](index.md) / [subscribeMessages](./subscribe-messages.md)

# subscribeMessages

`fun <R> CoroutineScope.subscribeMessages(coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrencyKind: ConcurrencyKind = Listener.ConcurrencyKind.CONCURRENT, listeners: `[`MessagePacketSubscribersBuilder`](../-message-packet-subscribers-builder.md)`.() -> R): R`

订阅来自所有 [Bot](../../net.mamoe.mirai/-bot/index.md) 的所有联系人的消息事件. 联系人可以是任意群或任意好友或临时会话.

**See Also**

[CoroutineScope.incoming](incoming.md)

