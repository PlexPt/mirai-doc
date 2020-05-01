[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [kotlinx.coroutines.CoroutineScope](index.md) / [subscribe](./subscribe.md)

# subscribe

`inline fun <reified E : `[`Event`](../-event.md)`> CoroutineScope.subscribe(coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrency: ConcurrencyKind = Listener.ConcurrencyKind.LOCKED, noinline handler: suspend E.(E) -> `[`ListeningStatus`](../-listening-status/index.md)`): `[`Listener`](../-listener/index.md)`<E>`

在指定的 [CoroutineScope](#) 下订阅所有 [E](subscribe.md#E) 及其子类事件.
每当 [事件广播](../broadcast.md) 时, [handler](subscribe.md#net.mamoe.mirai.event$subscribe(kotlinx.coroutines.CoroutineScope, kotlin.coroutines.CoroutineContext, net.mamoe.mirai.event.Listener.ConcurrencyKind, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.subscribe.E, , net.mamoe.mirai.event.ListeningStatus)))/handler) 都会被执行.

当 [handler](subscribe.md#net.mamoe.mirai.event$subscribe(kotlinx.coroutines.CoroutineScope, kotlin.coroutines.CoroutineContext, net.mamoe.mirai.event.Listener.ConcurrencyKind, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.subscribe.E, , net.mamoe.mirai.event.ListeningStatus)))/handler) 返回 [ListeningStatus.STOPPED](../-listening-status/-s-t-o-p-p-e-d.md) 时停止监听.
或 [Listener.complete](#) 后结束.

这个函数返回 [Listener](../-listener/index.md), 它是一个 [CompletableJob](#). 请注意它除非被 [Listener.complete](#) 或 [Listener.cancel](#), 则不会完成.
例:

``` kotlin
runBlocking { // this: CoroutineScope
  subscribe<Event> { /* 一些处理 */} // 返回 Listener, 即 CompletableJob
}
foo()
```

`runBlocking` 不会结束, 也就是下一行 `foo()` 不会被执行. 直到监听时创建的 `Listener` 被停止.

要创建一个仅在某个机器人在线时的监听, 请在 [Bot](../../net.mamoe.mirai/-bot/index.md) 下调用本函数 (因为 [Bot](../../net.mamoe.mirai/-bot/index.md) 也实现 [CoroutineScope](#)).
这种方式创建的监听会自动筛选 [Bot](../../net.mamoe.mirai/-bot/index.md).

``` kotlin
bot1.subscribe<BotEvent> { /* 只会处理来自 bot1 的事件 */}
```

要创建一个全局都存在的监听（不推荐）, 即守护协程, 请在 [GlobalScope](#) 下调用本函数:

``` kotlin
GlobalScope.subscribe<Event> { /* 会收到来自全部 Bot 的事件和与 Bot 不相关的事件 */}
```

事件处理时的 [CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html) 为调用本函数时的 [receiver](subscribe/-this-.md) 的 [CoroutineScope.coroutineContext](#).
因此:

* 事件处理时抛出的异常将会在 [this](subscribe/-this-.md) 的 [CoroutineExceptionHandler](#) 中处理
若 [this](subscribe/-this-.md) 没有 [CoroutineExceptionHandler](#), 则在事件广播方的 [CoroutineExceptionHandler](#) 处理
若均找不到, 则会触发 logger warning.
* 事件处理时抛出异常不会停止监听器.
* 建议在事件处理中 (即 [handler](subscribe.md#net.mamoe.mirai.event$subscribe(kotlinx.coroutines.CoroutineScope, kotlin.coroutines.CoroutineContext, net.mamoe.mirai.event.Listener.ConcurrencyKind, kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.subscribe.E, , net.mamoe.mirai.event.ListeningStatus)))/handler) 里) 处理异常,
或在 [this](subscribe/-this-.md) 的 [CoroutineScope.coroutineContext](#) 中添加 [CoroutineExceptionHandler](#).

**注意:** 事件处理是 `suspend` 的, 请规范处理 JVM 阻塞方法.

### Parameters

`coroutineContext` - 给事件监听协程的额外的 [CoroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html).

`concurrency` - 并发类型. 查看 [Listener.ConcurrencyKind](../-listener/-concurrency-kind/index.md)

**See Also**

[syncFromEvent](../sync-from-event.md)

[asyncFromEvent](async-from-event.md)

[selectMessages](../select-messages.md)

[whileSelectMessages](../while-select-messages.md)

[subscribeAlways](subscribe-always.md)

[subscribeOnce](subscribe-once.md)

[subscribeMessages](subscribe-messages.md)

[subscribeGroupMessages](subscribe-group-messages.md)

[subscribeFriendMessages](subscribe-friend-messages.md)

`@SinceMirai("0.38.0") fun <E : `[`Event`](../-event.md)`> CoroutineScope.subscribe(eventClass: `[`KClass`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html)`<E>, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, concurrency: ConcurrencyKind = Listener.ConcurrencyKind.LOCKED, handler: suspend E.(E) -> `[`ListeningStatus`](../-listening-status/index.md)`): `[`Listener`](../-listener/index.md)`<E>`

**See Also**

[CoroutineScope.subscribe](./subscribe.md)

