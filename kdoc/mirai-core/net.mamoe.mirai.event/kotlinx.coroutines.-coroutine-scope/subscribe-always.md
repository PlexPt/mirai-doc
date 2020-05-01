[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [kotlinx.coroutines.CoroutineScope](index.md) / [subscribeAlways](./subscribe-always.md)

# subscribeAlways

`inline fun <reified E : `[`Event`](../-event.md)`> CoroutineScope.subscribeAlways(coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrency: ConcurrencyKind = Listener.ConcurrencyKind.LOCKED, noinline listener: suspend E.(E) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Listener`](../-listener/index.md)`<E>`

在指定的 [CoroutineScope](#) 下订阅所有 [E](subscribe-always.md#E) 及其子类事件.
每当 [事件广播](../broadcast.md) 时, [listener](subscribe-always.md#net.mamoe.mirai.event$subscribeAlways(kotlinx.coroutines.CoroutineScope, kotlin.coroutines.CoroutineContext, net.mamoe.mirai.event.Listener.ConcurrencyKind, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.subscribeAlways.E, , kotlin.Unit)))/listener) 都会被执行.

可在任意时候通过 [Listener.complete](#) 来主动停止监听.
[Bot](../../net.mamoe.mirai/-bot/index.md) 被关闭后事件监听会被 [取消](#).

### Parameters

`coroutineContext` - 给事件监听协程的额外的 [CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)

**See Also**

[CoroutineScope.subscribe](subscribe.md)

`@SinceMirai("0.38.0") fun <E : `[`Event`](../-event.md)`> CoroutineScope.subscribeAlways(eventClass: `[`KClass`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html)`<E>, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrency: ConcurrencyKind = Listener.ConcurrencyKind.LOCKED, listener: suspend E.(E) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Listener`](../-listener/index.md)`<E>`

**See Also**

[CoroutineScope.subscribeAlways](./subscribe-always.md)

