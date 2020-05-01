[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [MessageReceipt](./index.md)

# MessageReceipt

`open class MessageReceipt<out C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`>`

发送消息后得到的回执. 可用于撤回.

此对象持有 [Contact](../../net.mamoe.mirai.contact/-contact/index.md) 的弱引用, [Bot](../../net.mamoe.mirai/-bot/index.md) 离线后将会释放引用, 届时 [target](target.md) 将无法访问.

### Parameters

`source` - 指代发送出去的消息

`target` - 消息发送对象

**See Also**

[Group.sendMessage](../../net.mamoe.mirai.contact/-group/send-message.md)

[QQ.sendMessage](../../net.mamoe.mirai.contact/-q-q/send-message.md)

[Member.sendMessage](../../net.mamoe.mirai.contact/-member/send-message.md)

[MessageReceipt.sourceId](../source-id.md)

[MessageReceipt.sourceTime](../source-time.md)

### Constructors

| [&lt;init&gt;](-init-.md) | 发送消息后得到的回执. 可用于撤回.`MessageReceipt(source: Outgoing, target: C, botAsMember: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?)` |

### Properties

| [botAsMember](bot-as-member.md) | `val botAsMember: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?` |
| [isToGroup](is-to-group.md) | 是否为发送给群的消息的回执`val isToGroup: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [source](source.md) | 指代发送出去的消息.`val source: Outgoing` |
| [target](target.md) | 发送目标, 为 [Group](../../net.mamoe.mirai.contact/-group/index.md) 或 [QQ](../../net.mamoe.mirai.contact/-q-q/index.md) 或 [Member](../../net.mamoe.mirai.contact/-member/index.md)`val target: C` |

### Functions

| [__quoteBlockingForJava__](__quote-blocking-for-java__.md) | `fun __quoteBlockingForJava__(): `[`QuoteReply`](../../net.mamoe.mirai.message.data/-quote-reply/index.md) |
| [__quoteReplyBlockingForJava__](__quote-reply-blocking-for-java__.md) | `fun __quoteReplyBlockingForJava__(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](./index.md)`<C>`<br>`fun __quoteReplyBlockingForJava__(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](./index.md)`<C>` |
| [__recallBlockingForJava__](__recall-blocking-for-java__.md) | `fun __recallBlockingForJava__(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [__recallInBlockingForJava__](__recall-in-blocking-for-java__.md) | `fun __recallInBlockingForJava__(timeMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): Job` |
| [__recallInBlockingForJava__2](__recall-in-blocking-for-java__2.md) | `fun ~~__recallInBlockingForJava__2~~(timeMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): Job` |

### Extension Properties

| [sourceId](../source-id.md) | 获取源消息 [MessageSource.id](../../net.mamoe.mirai.message.data/-message-source/id.md)`val `[`MessageReceipt`](./index.md)`<*>.sourceId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [sourceTime](../source-time.md) | 获取源消息 [MessageSource.time](../../net.mamoe.mirai.message.data/-message-source/time.md)`val `[`MessageReceipt`](./index.md)`<*>.sourceTime: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Extension Functions

| [quote](../quote.md) | 引用这条消息.`fun `[`MessageReceipt`](./index.md)`<*>.quote(): `[`QuoteReply`](../../net.mamoe.mirai.message.data/-quote-reply/index.md) |
| [quoteReply](../quote-reply.md) | 引用这条消息并回复.`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`MessageReceipt`](./index.md)`<C>.quoteReply(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](./index.md)`<C>`<br>`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`MessageReceipt`](./index.md)`<C>.quoteReply(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](./index.md)`<C>` |
| [recall](../recall.md) | 撤回这条消息. [recall](../recall.md) 或 [recallIn](../../net.mamoe.mirai/recall-in.md) 只能被调用一次.`suspend fun `[`MessageReceipt`](./index.md)`<*>.recall(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recallIn](../recall-in.md) | 在一段时间后撤回这条消息. [recall](../recall.md) 或 [recallIn](../../net.mamoe.mirai/recall-in.md) 只能被调用一次.`fun `[`MessageReceipt`](./index.md)`<*>.recallIn(timeMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job` |

