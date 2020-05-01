[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageSource](./index.md)

# MessageSource

`@SinceMirai("0.33.0") sealed class MessageSource : `[`Message`](../-message/index.md)`, `[`MessageMetadata`](../-message-metadata.md)`, `[`ConstrainSingle`](../-constrain-single/index.md)`<`[`MessageSource`](./index.md)`>`

消息源, 它存在于 [MessageChain](../-message-chain/index.md) 中, 用于表示这个消息的来源.

### 组成

MessageSource 由 metadata (元数据), form &amp; target, content 组成

#### metadata

* [id](id.md) 消息 id (序列号)
* [internalId](internal-id.md) 消息内部 id
* [time](time.md) 时间

官方客户端通过 metadata 这三个数据定位消息, 撤回和引用回复都是如此.

#### form &amp; target

* [fromId](from-id.md) 消息发送人
* [targetId](target-id.md) 消息发送目标

#### content

* [originalMessage](original-message.md) 消息内容

消息源可用于 [引用回复](../-quote-reply/index.md) 或 [撤回](../../net.mamoe.mirai/-bot/recall.md).

**See Also**

[Bot.recall](../../net.mamoe.mirai/-bot/recall.md)

[MessageSource.quote](../quote.md)

[OnlineMessageSource](../-online-message-source/index.md)

[OfflineMessageSource](../-offline-message-source/index.md)

### Types

| [Key](-key/index.md) | `companion object Key : Key<`[`MessageSource`](./index.md)`>` |

### Properties

| [bot](bot.md) | 所属 [Bot](../../net.mamoe.mirai/-bot/index.md)`abstract val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [fromId](from-id.md) | 发送人.`abstract val fromId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [id](id.md) | 消息 id (序列号).`abstract val id: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [internalId](internal-id.md) | 内部 id. 仅用于协议模块使用.`abstract val internalId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [key](key.md) | `val key: Key<`[`MessageSource`](./index.md)`>` |
| [originalMessage](original-message.md) | 原消息内容.`abstract val originalMessage: `[`MessageChain`](../-message-chain/index.md) |
| [targetId](target-id.md) | 消息发送目标.`abstract val targetId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [time](time.md) | 发送时间时间戳, 单位为秒.`abstract val time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Functions

| [contentToString](content-to-string.md) | 返回空字符串, 因 [MessageMetadata](../-message-metadata.md) 的约束.`fun contentToString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [toString](to-string.md) | 返回 `"[mirai:source:$id,$internalId]"``fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Companion Object Properties

| [typeName](type-name.md) | 此 [Key](../-message/-key/index.md) 指代的 [Message](../-message/index.md) 类型名. 一般为 `class.simpleName`, 如 "QuoteReply", "PlainText"`val typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [copyAmend](../copy-amend.md) | 复制这个消息源, 并以 [block](../copy-amend.md#net.mamoe.mirai.message.data$copyAmend(net.mamoe.mirai.message.data.MessageSource, kotlin.Function1((net.mamoe.mirai.message.data.MessageSourceAmender, kotlin.Unit)))/block) 修改`fun `[`MessageSource`](./index.md)`.copyAmend(block: `[`MessageSourceAmender`](../-message-source-amender/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`OfflineMessageSource`](../-offline-message-source/index.md) |
| [flatten](../flatten.md) | 扁平化 [Message](../-message/index.md)`fun `[`Message`](../-message/index.md)`.flatten(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>` |
| [isAboutFriend](../is-about-friend.md) | 判断是否是发送给好友, 或从好友接收的消息的消息源`fun `[`MessageSource`](./index.md)`.isAboutFriend(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isAboutGroup](../is-about-group.md) | 判断是否是发送给群, 或从群接收的消息的消息源`fun `[`MessageSource`](./index.md)`.isAboutGroup(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isAboutTemp](../is-about-temp.md) | 判断是否是发送给临时会话, 或从临时会话接收的消息的消息源`fun `[`MessageSource`](./index.md)`.isAboutTemp(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isContentEmpty](../is-content-empty.md) | 判断消息内容是否为空.`fun `[`Message`](../-message/index.md)`.isContentEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isContentNotEmpty](../is-content-not-empty.md) | `fun `[`Message`](../-message/index.md)`.isContentNotEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain](../is-not-plain.md) | `fun `[`Message`](../-message/index.md)`.isNotPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain2](../is-not-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isNotPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain](../is-plain.md) | `fun `[`Message`](../-message/index.md)`.isPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain2](../is-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [quote](../quote.md) | 引用这条消息`fun `[`MessageSource`](./index.md)`.quote(): `[`QuoteReply`](../-quote-reply/index.md) |
| [recall](../recall.md) | 撤回这条消息. 可撤回自己 2 分钟内发出的消息, 和任意时间的群成员的消息.`suspend fun `[`MessageSource`](./index.md)`.recall(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recallIn](../recall-in.md) | 在一段时间后撤回这条消息. 可撤回自己 2 分钟内发出的消息, 和任意时间的群成员的消息.`fun `[`MessageSource`](./index.md)`.recallIn(timeMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job` |
| [repeat](../repeat.md) | `fun `[`Message`](../-message/index.md)`.repeat(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [repeat2](../repeat2.md) | `fun `[`Message`](../-message/index.md)`.~~repeat2~~(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [sendTo](../send-to.md) | `suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`Message`](../-message/index.md)`.sendTo(contact: C): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [times](../times.md) | `operator fun `[`Message`](../-message/index.md)`.times(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [toForwardMessage](../to-forward-message.md) | 转换为 [ForwardMessage](../-forward-message/index.md)`fun `[`Message`](../-message/index.md)`.toForwardMessage(sender: `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md)<br>`fun `[`Message`](../-message/index.md)`.toForwardMessage(senderId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, senderName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md) |

### Inheritors

| [OfflineMessageSource](../-offline-message-source/index.md) | 由一条消息中的 [QuoteReply](../-quote-reply/index.md) 得到的 [MessageSource](./index.md). 此消息源可能来自一条与机器人无关的消息. 因此无法提供对象化的 `sender` 或 `target` 获取.`abstract class OfflineMessageSource : `[`MessageSource`](./index.md) |
| [OnlineMessageSource](../-online-message-source/index.md) | 在线消息的 [MessageSource](./index.md). 拥有对象化的 [sender](../-online-message-source/sender.md), [target](../-online-message-source/target.md), 也可以直接 [recall](../recall.md) 和 [quote](../quote.md)`sealed class OnlineMessageSource : `[`MessageSource`](./index.md) |

