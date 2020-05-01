[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [OfflineImage](./index.md)

# OfflineImage

`interface OfflineImage : `[`Image`](../-image/index.md)

离线的图片, 即为客户端主动上传到服务器而获得的 [Image](../-image/index.md) 实例.
不能直接获取它在服务器上的链接. 需要通过 [Bot.queryImageUrl](../../net.mamoe.mirai/-bot/query-image-url.md) 查询

一般由 [Contact.uploadImage](../../net.mamoe.mirai.contact/-contact/upload-image.md) 得到

### Types

| [Key](-key/index.md) | `companion object Key : Key<`[`OfflineImage`](./index.md)`>` |

### Companion Object Properties

| [typeName](type-name.md) | 此 [Key](../-message/-key/index.md) 指代的 [Message](../-message/index.md) 类型名. 一般为 `class.simpleName`, 如 "QuoteReply", "PlainText"`val typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Properties

| [md5](../md5.md) | `val `[`Image`](../-image/index.md)`.md5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |

### Extension Functions

| [flash](../flash.md) | `fun `[`Image`](../-image/index.md)`.flash(): `[`FlashImage`](../-flash-image/index.md) |
| [flash2](../flash2.md) | `fun `[`Image`](../-image/index.md)`.~~flash2~~(): `[`FlashImage`](../-flash-image/index.md) |
| [flatten](../flatten.md) | 扁平化 [Message](../-message/index.md)`fun `[`Message`](../-message/index.md)`.flatten(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>` |
| [isContentEmpty](../is-content-empty.md) | 判断消息内容是否为空.`fun `[`Message`](../-message/index.md)`.isContentEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isContentNotEmpty](../is-content-not-empty.md) | `fun `[`Message`](../-message/index.md)`.isContentNotEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain](../is-not-plain.md) | `fun `[`Message`](../-message/index.md)`.isNotPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isNotPlain2](../is-not-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isNotPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain](../is-plain.md) | `fun `[`Message`](../-message/index.md)`.isPlain(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isPlain2](../is-plain2.md) | `fun `[`Message`](../-message/index.md)`.~~isPlain2~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [queryUrl](../query-url.md) | 原图下载链接. 包含域名`suspend fun `[`OfflineImage`](./index.md)`.queryUrl(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [repeat](../repeat.md) | `fun `[`Message`](../-message/index.md)`.repeat(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [repeat2](../repeat2.md) | `fun `[`Message`](../-message/index.md)`.~~repeat2~~(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [sendTo](../send-to.md) | `suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`Message`](../-message/index.md)`.sendTo(contact: C): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [times](../times.md) | `operator fun `[`Message`](../-message/index.md)`.times(count: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChain`](../-message-chain/index.md) |
| [toForwardMessage](../to-forward-message.md) | 转换为 [ForwardMessage](../-forward-message/index.md)`fun `[`Message`](../-message/index.md)`.toForwardMessage(sender: `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md)<br>`fun `[`Message`](../-message/index.md)`.toForwardMessage(senderId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, senderName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = currentTimeSeconds.toInt(), displayStrategy: DisplayStrategy = DisplayStrategy): `[`ForwardMessage`](../-forward-message/index.md) |

### Inheritors

| [OfflineFriendImage](../-offline-friend-image/index.md) | 通过 [Group.uploadImage](../../net.mamoe.mirai.contact/-group/upload-image.md) 上传得到的 [GroupImage](../-group-image/index.md). 它的链接需要查询 [Bot.queryImageUrl](../../net.mamoe.mirai/-bot/query-image-url.md)`data class OfflineFriendImage : `[`FriendImage`](../-friend-image/index.md)`, `[`OfflineImage`](./index.md) |
| [OfflineGroupImage](../-offline-group-image/index.md) | 通过 [Group.uploadImage](../../net.mamoe.mirai.contact/-group/upload-image.md) 上传得到的 [GroupImage](../-group-image/index.md). 它的链接需要查询 [Bot.queryImageUrl](../../net.mamoe.mirai/-bot/query-image-url.md)`data class OfflineGroupImage : `[`GroupImage`](../-group-image/index.md)`, `[`OfflineImage`](./index.md) |

