[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [OfflineMessageSource](./index.md)

# OfflineMessageSource

`@SinceMirai("0.33.0") abstract class OfflineMessageSource : `[`MessageSource`](../-message-source/index.md)

由一条消息中的 [QuoteReply](../-quote-reply/index.md) 得到的 [MessageSource](../-message-source/index.md).
此消息源可能来自一条与机器人无关的消息. 因此无法提供对象化的 `sender` 或 `target` 获取.

**See Also**

[buildMessageSource](../build-message-source.md)

### Types

| [Key](-key/index.md) | `companion object Key : Key<`[`OfflineMessageSource`](./index.md)`>` |
| [Kind](-kind/index.md) | `enum class Kind` |

### Constructors

| [&lt;init&gt;](-init-.md) | 由一条消息中的 [QuoteReply](../-quote-reply/index.md) 得到的 [MessageSource](../-message-source/index.md). 此消息源可能来自一条与机器人无关的消息. 因此无法提供对象化的 `sender` 或 `target` 获取.`OfflineMessageSource()` |

### Properties

| [kind](kind.md) | 消息种类`abstract val kind: Kind` |

### Companion Object Properties

| [typeName](type-name.md) | 此 [Key](../-message/-key/index.md) 指代的 [Message](../-message/index.md) 类型名. 一般为 `class.simpleName`, 如 "QuoteReply", "PlainText"`val typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [copyAmend](../copy-amend.md) | 复制这个消息源, 并以 [block](../copy-amend.md#net.mamoe.mirai.message.data$copyAmend(net.mamoe.mirai.message.data.MessageSource, kotlin.Function1((net.mamoe.mirai.message.data.MessageSourceAmender, kotlin.Unit)))/block) 修改`fun `[`MessageSource`](../-message-source/index.md)`.copyAmend(block: `[`MessageSourceAmender`](../-message-source-amender/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`OfflineMessageSource`](./index.md) |
| [flatten](../flatten.md) | 扁平化 [Message](../-message/index.md)`fun `[`Message`](../-message/index.md)`.flatten(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>` |
| [isAboutFriend](../is-about-friend.md) | 判断是否是发送给好友, 或从好友接收的消息的消息源`fun `[`MessageSource`](../-message-source/index.md)`.isAboutFriend(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isAboutGroup](../is-about-group.md) | 判断是否是发送给群, 或从群接收的消息的消息源`fun `[`MessageSource`](../-message-source/index.md)`.isAboutGroup(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isAboutTemp](../is-about-temp.md) | 判断是否是发送给临时会话, 或从临时会话接收的消息的消息源`fun `[`MessageSource`](../-message-source/index.md)`.isAboutTemp(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isContentEmpty](../is-content-empty.md) | 判断消息内容是否为空.`fun `[`Message`](../-message/index.md)`.isContentEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isContentNotEmpty](../is-content-not-empty.md) | `fun `[`Message`](../-message/index.md)`.isContentNotEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain](../is-not-plain.md) | `fun `[`Message`](../-message/index.md)`.isNotPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain2](../is-not-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isNotPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain](../is-plain.md) | `fun `[`Message`](../-message/index.md)`.isPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain2](../is-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [quote](../quote.md) | 引用这条消息`fun `[`MessageSource`](../-message-source/index.md)`.quote(): `[`QuoteReply`](../-quote-reply/index.md) |
| [recall](../recall.md) | 撤回这条消息. 可撤回自己 2 分钟内发出的消息, 和任意时间的群成员的消息.`suspend fun `[`MessageSource`](../-message-source/index.md)`.recall(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recallIn](../recall-in.md) | 在一段时间后撤回这条消息. 可撤回自己 2 分钟内发出的消息, 和任意时间的群成员的消息.`fun `[`MessageSource`](../-message-source/index.md)`.recallIn(timeMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job` |
| [repeat](../repeat.md) | `fun `[`Message`](../-message/index.md)`.repeat(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [repeat2](../repeat2.md) | `fun `[`Message`](../-message/index.md)`.~~repeat2~~(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [sendTo](../send-to.md) | `suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`Message`](../-message/index.md)`.sendTo(contact: C): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [times](../times.md) | `operator fun `[`Message`](../-message/index.md)`.times(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [toForwardMessage](../to-forward-message.md) | 转换为 [ForwardMessage](../-forward-message/index.md)`fun `[`Message`](../-message/index.md)`.toForwardMessage(sender: `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md)<br>`fun `[`Message`](../-message/index.md)`.toForwardMessage(senderId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, senderName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md) |

