[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [subscribeGroupMessages](./subscribe-group-messages.md)

# subscribeGroupMessages

`fun <R> `[`Bot`](../net.mamoe.mirai/-bot/index.md)`.subscribeGroupMessages(coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrencyKind: ConcurrencyKind = Listener.ConcurrencyKind.CONCURRENT, listeners: `[`GroupMessageSubscribersBuilder`](-group-message-subscribers-builder.md)`.() -> R): R`

订阅来自这个 [Bot](../net.mamoe.mirai/-bot/index.md) 的所有群消息事件

### Parameters

`coroutineContext` - 给事件监听协程的额外的 [CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)

**See Also**

[CoroutineScope.incoming](kotlinx.coroutines.-coroutine-scope/incoming.md)

