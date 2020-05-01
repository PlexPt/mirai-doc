[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [ExternalImage](./index.md)

# ExternalImage

`class ExternalImage`

外部图片. 图片数据还没有读取到内存.

在 JVM, 请查看 'ExternalImageJvm.kt'

**See Also**

[ExternalImage.sendTo](../send-to.md)

[ExternalImage.upload](../upload.md)

### Constructors

| [&lt;init&gt;](-init-.md) | `ExternalImage(md5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`, input: ByteReadChannel, inputSize: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`)`<br>`ExternalImage(md5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`, input: Input, inputSize: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`)`<br>`ExternalImage(md5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`, input: ByteReadPacket)`<br>`ExternalImage(md5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`, input: InputStream)` |

### Properties

| [input](input.md) | `val input: `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html) |
| [inputSize](input-size.md) | `val inputSize: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [md5](md5.md) | `val md5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |

### Functions

| [calculateImageResourceId](calculate-image-resource-id.md) | `fun calculateImageResourceId(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [toString](to-string.md) | `fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Companion Object Properties

| [defaultFormatName](default-format-name.md) | `const val defaultFormatName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Companion Object Functions

| [generateImageId](generate-image-id.md) | `fun generateImageId(md5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [generateUUID](generate-u-u-i-d.md) | `fun generateUUID(md5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [sendTo](../send-to.md) | 将图片作为单独的消息发送给指定联系人`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`ExternalImage`](./index.md)`.sendTo(contact: C): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [upload](../upload.md) | 上传图片并通过图片 ID 构造 [Image](../../net.mamoe.mirai.message.data/-image/index.md) 这个函数可能需消耗一段时间`suspend fun `[`ExternalImage`](./index.md)`.upload(contact: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md) |

