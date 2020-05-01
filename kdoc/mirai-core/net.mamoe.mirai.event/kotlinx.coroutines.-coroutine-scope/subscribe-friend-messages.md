[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [kotlinx.coroutines.CoroutineScope](index.md) / [subscribeFriendMessages](./subscribe-friend-messages.md)

# subscribeFriendMessages

`fun <R> CoroutineScope.subscribeFriendMessages(coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrencyKind: ConcurrencyKind = Listener.ConcurrencyKind.CONCURRENT, listeners: `[`FriendMessageSubscribersBuilder`](../-friend-message-subscribers-builder.md)`.() -> R): R`

订阅来自所有 [Bot](../../net.mamoe.mirai/-bot/index.md) 的所有好友消息事件

**See Also**

[CoroutineScope.incoming](incoming.md)

