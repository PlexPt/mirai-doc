[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [NullMessageChain](./index.md)

# NullMessageChain

`@PlannedRemoval("1.0.0") object ~~NullMessageChain~~ : `[`MessageChain`](../-message-chain/index.md)
**Deprecated:** ambiguous. use `null` or EmptyMessageChain instead

Null 的 [MessageChain](../-message-chain/index.md).
它不包含任何元素, 也没有创建任何 list.

### Properties

| [size](size.md) | 元素数量. [EmptyMessageChain](../-empty-message-chain/index.md) 不参加计数.`val size: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Functions

| [contentToString](content-to-string.md) | 转为最接近官方格式的字符串. 如 `At(member) + "test"` 将转为 `"@群名片 test"`.`fun contentToString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [equals](equals.md) | `fun equals(other: `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [iterator](iterator.md) | `fun iterator(): `[`MutableIterator`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-iterator/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>` |
| [toString](to-string.md) | `fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Properties

| [bot](../bot.md) | 消息内部 id. 仅从服务器接收的消息才可以获取`val `[`MessageChain`](../-message-chain/index.md)`.bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [id](../id.md) | 消息 id. 仅从服务器接收的消息才可以获取`val `[`MessageChain`](../-message-chain/index.md)`.id: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [internalId](../internal-id.md) | 消息内部 id. 仅从服务器接收的消息才可以获取`val `[`MessageChain`](../-message-chain/index.md)`.internalId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [source](../source.md) | 获取这条消息源 仅从服务器接收的消息才可以获取消息源`val `[`MessageChain`](../-message-chain/index.md)`.source: `[`MessageSource`](../-message-source/index.md) |
| [time](../time.md) | 消息时间. 仅从服务器接收的消息才可以获取`val `[`MessageChain`](../-message-chain/index.md)`.time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Extension Functions

| [allContent](../all-content.md) | 如果每一个 [消息内容](../-message-content.md) 都满足 [block](../all-content.md#net.mamoe.mirai.message.data$allContent(net.mamoe.mirai.message.data.MessageChain, kotlin.Function1((net.mamoe.mirai.message.data.MessageContent, kotlin.Boolean)))/block), 返回 `true``fun `[`MessageChain`](../-message-chain/index.md)`.allContent(block: (`[`MessageContent`](../-message-content.md)`) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [any](../any.md) | 获取第一个 [M](../any.md#M) 类型的 [Message](../-message/index.md) 实例`fun <M : `[`Message`](../-message/index.md)`> `[`MessageChain`](../-message-chain/index.md)`.any(key: Key<M>): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [anyIsInstance](../any-is-instance.md) | 获取第一个 [M](../any-is-instance.md#M) 类型的 [Message](../-message/index.md) 实例`fun <M : `[`Message`](../-message/index.md)`> `[`MessageChain`](../-message-chain/index.md)`.anyIsInstance(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [first](../first.md) | 获取第一个 [M](../first.md#M) 类型的 [Message](../-message/index.md) 实例`fun <M : `[`Message`](../-message/index.md)`> `[`MessageChain`](../-message-chain/index.md)`.first(key: Key<M>): M` |
| [firstIsInstance](../first-is-instance.md) | 获取第一个 [M](../first-is-instance.md#M) 类型的 [Message](../-message/index.md) 实例`fun <M : `[`Message`](../-message/index.md)`> `[`MessageChain`](../-message-chain/index.md)`.firstIsInstance(): M` |
| [firstIsInstanceOrNull](../first-is-instance-or-null.md) | 获取第一个 [M](../first-is-instance-or-null.md#M) 类型的 [Message](../-message/index.md) 实例`fun <M : `[`Message`](../-message/index.md)`?> `[`MessageChain`](../-message-chain/index.md)`.firstIsInstanceOrNull(): M?` |
| [firstOrNull](../first-or-null.md) | 获取第一个 [M](../first-or-null.md#M) 类型的 [Message](../-message/index.md) 实例`fun <M : `[`Message`](../-message/index.md)`> `[`MessageChain`](../-message-chain/index.md)`.firstOrNull(key: Key<M>): M?` |
| [forEachContent](../for-each-content.md) | 遍历每一个 [消息内容](../-message-content.md)`fun `[`MessageChain`](../-message-chain/index.md)`.forEachContent(block: (`[`MessageContent`](../-message-content.md)`) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [foreachContent](../foreach-content.md) | `fun `[`MessageChain`](../-message-chain/index.md)`.~~foreachContent~~(block: (`[`MessageContent`](../-message-content.md)`) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [getValue](../get-value.md) | 提供一个类型的值的委托. 若不存在则会抛出异常 [NoSuchElementException](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-no-such-element-exception/index.html)`operator fun <T : `[`Message`](../-message/index.md)`> `[`MessageChain`](../-message-chain/index.md)`.getValue(thisRef: `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?, property: `[`KProperty`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property/index.html)`<*>): T` |
| [isContentEmpty](../is-content-empty.md) | 判断消息内容是否为空.`fun `[`Message`](../-message/index.md)`.isContentEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isContentNotEmpty](../is-content-not-empty.md) | `fun `[`Message`](../-message/index.md)`.isContentNotEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain](../is-not-plain.md) | `fun `[`Message`](../-message/index.md)`.isNotPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain2](../is-not-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isNotPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain](../is-plain.md) | `fun `[`Message`](../-message/index.md)`.isPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain2](../is-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [noneContent](../none-content.md) | 如果每一个 [消息内容](../-message-content.md) 都不满足 [block](../none-content.md#net.mamoe.mirai.message.data$noneContent(net.mamoe.mirai.message.data.MessageChain, kotlin.Function1((net.mamoe.mirai.message.data.MessageContent, kotlin.Boolean)))/block), 返回 `true``fun `[`MessageChain`](../-message-chain/index.md)`.noneContent(block: (`[`MessageContent`](../-message-content.md)`) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [orElse](../or-else.md) | 提供一个类型的 [Message](../-message/index.md) 的委托, 若不存在这个类型的 [Message](../-message/index.md) 则委托会提供 `null``fun <T : `[`Message`](../-message/index.md)`?> `[`MessageChain`](../-message-chain/index.md)`.orElse(lazyDefault: () -> T): `[`OrNullDelegate`](../-or-null-delegate/index.md)`<T>` |
| [orNull](../or-null.md) | 提供一个类型的 [Message](../-message/index.md) 的委托, 若不存在这个类型的 [Message](../-message/index.md) 则委托会提供 `null``fun <T : `[`Message`](../-message/index.md)`> `[`MessageChain`](../-message-chain/index.md)`.orNull(): `[`OrNullDelegate`](../-or-null-delegate/index.md)`<T?>` |
| [quote](../quote.md) | 引用这条消息`fun `[`MessageChain`](../-message-chain/index.md)`.quote(): `[`QuoteReply`](../-quote-reply/index.md) |
| [recall](../recall.md) | 撤回这条消息. 可撤回自己 2 分钟内发出的消息, 和任意时间的群成员的消息.`suspend fun `[`MessageChain`](../-message-chain/index.md)`.recall(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recallIn](../recall-in.md) | 在一段时间后撤回这条消息. 可撤回自己 2 分钟内发出的消息, 和任意时间的群成员的消息.`fun `[`MessageChain`](../-message-chain/index.md)`.recallIn(millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job` |
| [repeat](../repeat.md) | `fun `[`Message`](../-message/index.md)`.repeat(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [repeat2](../repeat2.md) | `fun `[`Message`](../-message/index.md)`.~~repeat2~~(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [sendTo](../send-to.md) | `suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`Message`](../-message/index.md)`.sendTo(contact: C): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>将 [this](../send-to/-this-.md) 发送给指定联系人`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`MessageChain`](../-message-chain/index.md)`.sendTo(contact: C): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [times](../times.md) | `operator fun `[`Message`](../-message/index.md)`.times(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [toForwardMessage](../to-forward-message.md) | 转换为 [ForwardMessage](../-forward-message/index.md)`fun `[`Message`](../-message/index.md)`.toForwardMessage(sender: `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md)<br>`fun `[`Message`](../-message/index.md)`.toForwardMessage(senderId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, senderName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md) |

