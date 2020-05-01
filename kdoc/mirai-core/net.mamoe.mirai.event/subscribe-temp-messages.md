[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [subscribeTempMessages](./subscribe-temp-messages.md)

# subscribeTempMessages

`@SinceMirai("0.35.0") fun <R> `[`Bot`](../net.mamoe.mirai/-bot/index.md)`.subscribeTempMessages(coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrencyKind: ConcurrencyKind = Listener.ConcurrencyKind.CONCURRENT, listeners: `[`TempMessageSubscribersBuilder`](-temp-message-subscribers-builder.md)`.() -> R): R`

订阅来自这个 [Bot](../net.mamoe.mirai/-bot/index.md) 的所有临时会话消息事件.

**See Also**

[CoroutineScope.incoming](kotlinx.coroutines.-coroutine-scope/incoming.md)

