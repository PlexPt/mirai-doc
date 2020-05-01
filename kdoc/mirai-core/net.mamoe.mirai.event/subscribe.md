[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [subscribe](./subscribe.md)

# subscribe

`@JvmName("subscribeAlwaysForBot") inline fun <reified E : `[`BotEvent`](../net.mamoe.mirai.event.events/-bot-event/index.md)`> `[`Bot`](../net.mamoe.mirai/-bot/index.md)`.subscribe(coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrency: ConcurrencyKind = Listener.ConcurrencyKind.LOCKED, noinline handler: suspend E.(E) -> `[`ListeningStatus`](-listening-status/index.md)`): `[`Listener`](-listener/index.md)`<E>`

在 [Bot](../net.mamoe.mirai/-bot/index.md) 的 [CoroutineScope](#) 下订阅所有 [E](subscribe.md#E) 及其子类事件.
每当 [事件广播](broadcast.md) 时, [handler](subscribe.md#net.mamoe.mirai.event$subscribe(net.mamoe.mirai.Bot, kotlin.coroutines.CoroutineContext, net.mamoe.mirai.event.Listener.ConcurrencyKind, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.subscribe.E, , net.mamoe.mirai.event.ListeningStatus)))/handler) 都会被执行,
当 [handler](subscribe.md#net.mamoe.mirai.event$subscribe(net.mamoe.mirai.Bot, kotlin.coroutines.CoroutineContext, net.mamoe.mirai.event.Listener.ConcurrencyKind, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.subscribe.E, , net.mamoe.mirai.event.ListeningStatus)))/handler) 返回 [ListeningStatus.STOPPED](-listening-status/-s-t-o-p-p-e-d.md) 时停止监听

可在任意时候通过 [Listener.complete](#) 来主动停止监听.
[Bot](../net.mamoe.mirai/-bot/index.md) 被关闭后事件监听会被 [取消](#).

### Parameters

`coroutineContext` - 给事件监听协程的额外的 [CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)

**See Also**

[subscribe](kotlinx.coroutines.-coroutine-scope/subscribe.md)

`@SinceMirai("0.38.0") fun <E : `[`BotEvent`](../net.mamoe.mirai.event.events/-bot-event/index.md)`> `[`Bot`](../net.mamoe.mirai/-bot/index.md)`.subscribe(eventClass: `[`KClass`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html)`<E>, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrency: ConcurrencyKind = Listener.ConcurrencyKind.LOCKED, handler: suspend E.(E) -> `[`ListeningStatus`](-listening-status/index.md)`): `[`Listener`](-listener/index.md)`<E>`

**See Also**

[Bot.subscribe](kotlinx.coroutines.-coroutine-scope/subscribe.md)

