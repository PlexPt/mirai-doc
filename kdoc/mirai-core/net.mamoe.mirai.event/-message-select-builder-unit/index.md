[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [MessageSelectBuilderUnit](./index.md)

# MessageSelectBuilderUnit

`@SinceMirai("0.29.0") abstract class MessageSelectBuilderUnit<M : `[`ContactMessage`](../../net.mamoe.mirai.message/-contact-message/index.md)`, R> : `[`MessageSubscribersBuilder`](../-message-subscribers-builder/index.md)`<M, `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`, R, `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?>`

[selectMessagesUnit](../select-messages-unit.md) 或 [selectMessages](../select-messages.md) 时的 DSL 构建器.

它是特殊化的消息监听 ([subscribeMessages](../kotlinx.coroutines.-coroutine-scope/subscribe-messages.md)) DSL

**See Also**

[MessageSubscribersBuilder](../-message-subscribers-builder/index.md)

### Functions

| [-&gt;](--.md) | `open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.->(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.->(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [always](always.md) | 无任何触发条件, 每次收到消息都执行 [onEvent](../-message-subscribers-builder/always.md#net.mamoe.mirai.event.MessageSubscribersBuilder$always(kotlin.coroutines.SuspendFunction2((net.mamoe.mirai.event.MessageSubscribersBuilder.M, kotlin.String, net.mamoe.mirai.event.MessageSubscribersBuilder.RR)))/onEvent)`open fun ~~always~~(onEvent: `[`MessageListener`](../-message-listener.md)`<M, `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?>): `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html) |
| [default](default.md) | 当其他条件都不满足时的默认处理.`abstract fun default(onEvent: `[`MessageListener`](../-message-listener.md)`<M, R>): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [defaultQuoteReply](default-quote-reply.md) | 当其他条件都不满足时引用回复原消息.`fun defaultQuoteReply(block: suspend () -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [defaultReply](default-reply.md) | 当其他条件都不满足时回复原消息.`fun defaultReply(block: suspend () -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [invoke](invoke.md) | 返回一个限制本次 select 的最长等待时间的 [Deferred](#)`fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.invoke(block: suspend () -> R): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [obtainCurrentCoroutineScope](obtain-current-coroutine-scope.md) | `abstract fun obtainCurrentCoroutineScope(): CoroutineScope` |
| [obtainCurrentDeferred](obtain-current-deferred.md) | `abstract fun obtainCurrentDeferred(): CompletableDeferred<R>?` |
| [quoteReply](quote-reply.md) | 在超时后引用回复原消息`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.quoteReply(block: suspend () -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.quoteReply(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.quoteReply(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [reply](reply.md) | 在超时后回复原消息`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.reply(block: suspend () -> `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.reply(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`open infix fun `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md)`.reply(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [timeout](timeout.md) | 限制本次 select 的最长等待时间, 当超时后执行 [block](timeout.md#net.mamoe.mirai.event.MessageSelectBuilderUnit$timeout(kotlin.Long, kotlin.coroutines.SuspendFunction0((net.mamoe.mirai.event.MessageSelectBuilderUnit.R)))/block) 以完成 select`fun timeout(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, block: suspend () -> R): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>返回一个限制本次 select 的最长等待时间的 [Deferred](#)`fun timeout(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`MessageSelectionTimeoutChecker`](../-message-selection-timeout-checker/index.md) |
| [timeoutException](timeout-exception.md) | 限制本次 select 的最长等待时间, 当超时后抛出 [TimeoutCancellationException](#)`fun timeoutException(timeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, exception: () -> `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)` = { throw MessageSelectionTimeoutException() }): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

### Inheritors

| [MessageSelectBuilder](../-message-select-builder/index.md) | [selectMessages](../select-messages.md) 时的 DSL 构建器.`abstract class MessageSelectBuilder<M : `[`ContactMessage`](../../net.mamoe.mirai.message/-contact-message/index.md)`, R> : `[`MessageSelectBuilderUnit`](./index.md)`<M, R>` |

