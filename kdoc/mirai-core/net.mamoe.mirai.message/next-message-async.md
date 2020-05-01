[mirai-core](../index.md) / [net.mamoe.mirai.message](index.md) / [nextMessageAsync](./next-message-async.md)

# nextMessageAsync

`fun <reified P : `[`ContactMessage`](-contact-message/index.md)`> P.nextMessageAsync(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)` = -1, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Deferred<`[`MessageChain`](../net.mamoe.mirai.message.data/-message-chain/index.md)`>`

### Exceptions

`TimeoutCancellationException` -

**See Also**

[nextMessage](next-message.md)

`inline fun <reified P : `[`ContactMessage`](-contact-message/index.md)`> P.nextMessageAsync(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)` = -1, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext, crossinline filter: suspend P.(P) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): Deferred<`[`MessageChain`](../net.mamoe.mirai.message.data/-message-chain/index.md)`>`

**See Also**

[nextMessage](next-message.md)

