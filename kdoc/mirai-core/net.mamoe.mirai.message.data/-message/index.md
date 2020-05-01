[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [Message](./index.md)

# Message

`interface Message`

可发送的或从服务器接收的消息.
采用这样的消息模式是因为 QQ 的消息多元化, 一条消息中可包含 [纯文本](../-plain-text/index.md), [图片](../-image/index.md) 等.

[消息](./index.md) 分为

* [SingleMessage](../-single-message/index.md):
* [MessageMetadata](../-message-metadata.md) 消息元数据, 包括: [消息来源](../-message-source/index.md), [引用回复](../-quote-reply/index.md).
* [MessageContent](../-message-content.md) 含内容的消息, 包括: [纯文本](../-plain-text/index.md), [@群员](../-at/index.md), [@全体成员](../-at-all/index.md) 等.
* [MessageChain](../-message-chain/index.md): 不可变消息链, 链表形式链接的多个 [SingleMessage](../-single-message/index.md) 实例.

#### 在 Kotlin 使用 [Message](./index.md):

这与使用 [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) 的使用非常类似.

比较 [SingleMessage](../-single-message/index.md) 与 [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html):
`if(message.contentToString() == "你好") qq.sendMessage(event)`

连接 [Message](./index.md) 与 [Message](./index.md), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), (使用 operator [Message.plus](plus.md)):

``` kotlin
    text = PlainText("Hello ")
    qq.sendMessage(text + "world")
```

`Message1 + Message2 + Message3`, 类似 [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) 的连接:

+----------+   plus  +----------+   plus  +----------+
| Message1 | &lt;------ | Message2 | &lt;------ | Message3 |
+----------+         +----------+         +----------+

但注意: 不能 `String + Message`. 只能 `Message + String`

#### 实现规范

除 [MessageChain](../-message-chain/index.md) 外, 所有 [Message](./index.md) 的实现类都有伴生对象实现 [Key](-key/index.md) 接口.

#### [CharSequence](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html) 继承

所有 [CharSequence](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html) 的行为均由 [toString](to-string.md) 委托.

即, `appendable.append(message)` 相当于 `appendable.append(message.toString())`

**See Also**

[PlainText](../-plain-text/index.md)

[Image](../-image/index.md)

[Face](../-face/index.md)

[At](../-at/index.md)

[AtAll](../-at-all/index.md)

[QuoteReply](../-quote-reply/index.md)

[RichMessage](../-rich-message/index.md)

[HummerMessage](../-hummer-message/index.md)

[CustomMessage](../-custom-message/index.md)

[MessageChain](../-message-chain/index.md)

[buildMessageChain](../build-message-chain.md)

[Contact.sendMessage](../../net.mamoe.mirai.contact/-contact/send-message.md)

### Types

| [Key](-key/index.md) | 类型 Key. 由伴生对象实现, 表示一个 [Message](./index.md) 对象的类型.`interface Key<out M : `[`Message`](./index.md)`>` |

### Functions

| [contains](contains.md) | `open operator fun ~~contains~~(sub: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [contentEquals](content-equals.md) | 判断内容是否与 [another](content-equals.md#net.mamoe.mirai.message.data.Message$contentEquals(net.mamoe.mirai.message.data.Message, kotlin.Boolean)/another) 相等.`open fun contentEquals(another: `[`Message`](./index.md)`, ignoreCase: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>`open fun contentEquals(another: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, ignoreCase: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = false): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [contentToString](content-to-string.md) | 转为最接近官方格式的字符串. 如 `At(member) + "test"` 将转为 `"@群名片 test"`.`abstract fun contentToString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [eq](eq.md) | `open infix fun ~~eq~~(other: `[`Message`](./index.md)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>将 [contentToString](content-to-string.md) 与 [other](eq.md#net.mamoe.mirai.message.data.Message$eq(kotlin.String)/other) 比较`open infix fun ~~eq~~(other: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [followedBy](followed-by.md) | 将 `this` 和 [tail](followed-by.md#net.mamoe.mirai.message.data.Message$followedBy(net.mamoe.mirai.message.data.Message)/tail) 连接.`open fun followedBy(tail: `[`Message`](./index.md)`): `[`MessageChain`](../-message-chain/index.md) |
| [followedBy1](followed-by1.md) | `open fun ~~followedBy1~~(tail: `[`Message`](./index.md)`): CombinedMessage` |
| [plus](plus.md) | `open operator fun plus(another: `[`Message`](./index.md)`): `[`MessageChain`](../-message-chain/index.md)<br>`open operator fun plus(another: `[`SingleMessage`](../-single-message/index.md)`): `[`MessageChain`](../-message-chain/index.md)<br>`open operator fun plus(another: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageChain`](../-message-chain/index.md)<br>`open operator fun plus(another: `[`CharSequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [plus1](plus1.md) | `open fun ~~plus1~~(another: `[`Message`](./index.md)`): CombinedMessage`<br>`open fun ~~plus1~~(another: `[`SingleMessage`](../-single-message/index.md)`): CombinedMessage`<br>`open fun ~~plus1~~(another: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): CombinedMessage`<br>`open fun ~~plus1~~(another: `[`CharSequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html)`): CombinedMessage` |
| [toString](to-string.md) | 得到包含 mirai 消息元素代码的, 易读的字符串. 如 `At(member) + "test"` 将转为 `"[mirai:at:qqId]test"``abstract fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [asMessageChain](../as-message-chain.md) | 得到包含 [this](../as-message-chain/-this-.md) 的 [MessageChain](../-message-chain/index.md).`fun `[`Message`](./index.md)`.asMessageChain(): `[`MessageChain`](../-message-chain/index.md) |
| [flatten](../flatten.md) | 扁平化 [Message](./index.md)`fun `[`Message`](./index.md)`.flatten(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>` |
| [isContentEmpty](../is-content-empty.md) | 判断消息内容是否为空.`fun `[`Message`](./index.md)`.isContentEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isContentNotEmpty](../is-content-not-empty.md) | `fun `[`Message`](./index.md)`.isContentNotEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain](../is-not-plain.md) | `fun `[`Message`](./index.md)`.isNotPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain2](../is-not-plain2.md) | `fun `[`Message`](./index.md)`.~~isNotPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain](../is-plain.md) | `fun `[`Message`](./index.md)`.isPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain2](../is-plain2.md) | `fun `[`Message`](./index.md)`.~~isPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [repeat](../repeat.md) | `fun `[`Message`](./index.md)`.repeat(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [repeat2](../repeat2.md) | `fun `[`Message`](./index.md)`.~~repeat2~~(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [sendTo](../send-to.md) | `suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`Message`](./index.md)`.sendTo(contact: C): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [times](../times.md) | `operator fun `[`Message`](./index.md)`.times(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [toForwardMessage](../to-forward-message.md) | 转换为 [ForwardMessage](../-forward-message/index.md)`fun `[`Message`](./index.md)`.toForwardMessage(sender: `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md)<br>`fun `[`Message`](./index.md)`.toForwardMessage(senderId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, senderName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md) |

### Inheritors

| [Image](../-image/index.md) | 自定义表情 (收藏的表情) 和普通图片.`interface Image : `[`Message`](./index.md)`, `[`MessageContent`](../-message-content.md) |
| [MessageChain](../-message-chain/index.md) | 消息链. 空的实现为 [EmptyMessageChain](../-empty-message-chain/index.md)`interface MessageChain : `[`Message`](./index.md)`, `[`Iterable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>` |
| [MessageSource](../-message-source/index.md) | 消息源, 它存在于 [MessageChain](../-message-chain/index.md) 中, 用于表示这个消息的来源.`sealed class MessageSource : `[`Message`](./index.md)`, `[`MessageMetadata`](../-message-metadata.md)`, `[`ConstrainSingle`](../-constrain-single/index.md)`<`[`MessageSource`](../-message-source/index.md)`>` |
| [QuoteReply](../-quote-reply/index.md) | 引用回复.`class QuoteReply : `[`Message`](./index.md)`, `[`MessageMetadata`](../-message-metadata.md)`, `[`ConstrainSingle`](../-constrain-single/index.md)`<`[`QuoteReply`](../-quote-reply/index.md)`>` |
| [SingleMessage](../-single-message/index.md) | `interface SingleMessage : `[`Message`](./index.md) |

