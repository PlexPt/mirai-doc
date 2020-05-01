[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [kotlinx.coroutines.CoroutineScope](index.md) / [incoming](./incoming.md)

# incoming

`fun <reified E : `[`Event`](../-event.md)`> CoroutineScope.incoming(coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrencyKind: ConcurrencyKind = Listener.ConcurrencyKind.CONCURRENT, capacity: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = Channel.UNLIMITED): ReceiveChannel<E>`

打开一个指定事件的接收通道

### Parameters

`capacity` - 同 [Channel](#) 的参数, 参见 [Channel.Factory](#) 中的常量.

**See Also**

[capacity](incoming.md#net.mamoe.mirai.event$incoming(kotlinx.coroutines.CoroutineScope, kotlin.coroutines.CoroutineContext, net.mamoe.mirai.event.Listener.ConcurrencyKind, kotlin.Int)/capacity)

[subscribeFriendMessages](subscribe-friend-messages.md)

[subscribeMessages](subscribe-messages.md)

[subscribeGroupMessages](subscribe-group-messages.md)

