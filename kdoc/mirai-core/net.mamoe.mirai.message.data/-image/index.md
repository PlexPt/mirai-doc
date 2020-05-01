[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [Image](./index.md)

# Image

`interface Image : `[`Message`](../-message/index.md)`, `[`MessageContent`](../-message-content.md)

自定义表情 (收藏的表情) 和普通图片.

最推荐的存储方式是存储图片原文件, 每次发送图片时都使用文件上传.
在上传时服务器会根据其缓存情况回复已有的图片 ID 或要求客户端上传. 详见 [Contact.uploadImage](../../net.mamoe.mirai.contact/-contact/upload-image.md)

### [toString](../-message/to-string.md) 和 [contentToString](../-message/content-to-string.md)

* [toString](../-message/to-string.md) 固定返回 `[mirai:image:<ID>]` 格式字符串, 其中 `<ID>` 代表 [imageId](image-id.md).
* [contentToString](../-message/content-to-string.md) 固定返回 `"[图片]"`

### 上传和发送图片

**See Also**

[Contact.uploadImage](../../net.mamoe.mirai.contact/-contact/upload-image.md)

[Contact.sendImage](#)

[Image.sendTo](../send-to.md)

[FlashImage](../-flash-image/index.md)

[Image.flash](../flash.md)

### Types

| [Key](-key/index.md) | `companion object Key : Key<`[`Image`](./index.md)`>` |

### Properties

| [DoNotImplementThisClass](-do-not-implement-this-class.md) | `abstract val ~~DoNotImplementThisClass~~: `[`Nothing`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html)`?` |
| [imageId](image-id.md) | 图片的 id.`abstract val imageId: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Companion Object Properties

| [typeName](type-name.md) | 此 [Key](../-message/-key/index.md) 指代的 [Message](../-message/index.md) 类型名. 一般为 `class.simpleName`, 如 "QuoteReply", "PlainText"`val typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Properties

| [md5](../md5.md) | `val `[`Image`](./index.md)`.md5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |

### Extension Functions

| [flash](../flash.md) | `fun `[`Image`](./index.md)`.flash(): `[`FlashImage`](../-flash-image/index.md) |
| [flash2](../flash2.md) | `fun `[`Image`](./index.md)`.~~flash2~~(): `[`FlashImage`](../-flash-image/index.md) |
| [flatten](../flatten.md) | 扁平化 [Message](../-message/index.md)`fun `[`Message`](../-message/index.md)`.flatten(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>` |
| [isContentEmpty](../is-content-empty.md) | 判断消息内容是否为空.`fun `[`Message`](../-message/index.md)`.isContentEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isContentNotEmpty](../is-content-not-empty.md) | `fun `[`Message`](../-message/index.md)`.isContentNotEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain](../is-not-plain.md) | `fun `[`Message`](../-message/index.md)`.isNotPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain2](../is-not-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isNotPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain](../is-plain.md) | `fun `[`Message`](../-message/index.md)`.isPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain2](../is-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [queryUrl](../query-url.md) | 查询原图下载链接.`suspend fun `[`Image`](./index.md)`.queryUrl(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [repeat](../repeat.md) | `fun `[`Message`](../-message/index.md)`.repeat(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [repeat2](../repeat2.md) | `fun `[`Message`](../-message/index.md)`.~~repeat2~~(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [sendTo](../send-to.md) | `suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`Message`](../-message/index.md)`.sendTo(contact: C): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [times](../times.md) | `operator fun `[`Message`](../-message/index.md)`.times(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [toForwardMessage](../to-forward-message.md) | 转换为 [ForwardMessage](../-forward-message/index.md)`fun `[`Message`](../-message/index.md)`.toForwardMessage(sender: `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md)<br>`fun `[`Message`](../-message/index.md)`.toForwardMessage(senderId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, senderName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md) |

### Inheritors

| [AbstractImage](../-abstract-image/index.md) | 所有 [Image](./index.md) 实现的基类.`sealed class ~~AbstractImage~~ : `[`Image`](./index.md) |
| [OfflineImage](../-offline-image/index.md) | 离线的图片, 即为客户端主动上传到服务器而获得的 [Image](./index.md) 实例. 不能直接获取它在服务器上的链接. 需要通过 [Bot.queryImageUrl](../../net.mamoe.mirai/-bot/query-image-url.md) 查询`interface OfflineImage : `[`Image`](./index.md) |
| [OnlineImage](../-online-image/index.md) | 在服务器上的图片. 它可以直接获取下载链接.`interface OnlineImage : `[`Image`](./index.md) |

