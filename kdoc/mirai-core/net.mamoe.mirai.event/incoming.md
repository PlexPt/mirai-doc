[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [incoming](./incoming.md)

# incoming

`fun <reified E : `[`BotEvent`](../net.mamoe.mirai.event.events/-bot-event/index.md)`> `[`Bot`](../net.mamoe.mirai/-bot/index.md)`.incoming(coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrencyKind: ConcurrencyKind = Listener.ConcurrencyKind.CONCURRENT, capacity: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = Channel.UNLIMITED): ReceiveChannel<E>`

打开一个来自指定 [Bot](../net.mamoe.mirai/-bot/index.md) 的指定事件的接收通道

### Parameters

`capacity` - 同 [Channel](#) 的参数, 参见 [Channel.Factory](#) 中的常量.

**See Also**

[capacity](incoming.md#net.mamoe.mirai.event$incoming(net.mamoe.mirai.Bot, kotlin.coroutines.CoroutineContext, net.mamoe.mirai.event.Listener.ConcurrencyKind, kotlin.Int)/capacity)

[subscribeFriendMessages](kotlinx.coroutines.-coroutine-scope/subscribe-friend-messages.md)

[subscribeMessages](kotlinx.coroutines.-coroutine-scope/subscribe-messages.md)

[subscribeGroupMessages](kotlinx.coroutines.-coroutine-scope/subscribe-group-messages.md)

