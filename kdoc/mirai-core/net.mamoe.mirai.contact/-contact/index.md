[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Contact](./index.md)

# Contact

`abstract class Contact : CoroutineScope, `[`ContactJavaFriendlyAPI`](../-contact-java-friendly-a-p-i/index.md)`, `[`ContactOrBot`](../-contact-or-bot/index.md)

联系人. 虽然叫做联系人, 但他的子类有 [用户](../-user/index.md), 和 [群](../-group/index.md).

### Constructors

| [&lt;init&gt;](-init-.md) | 联系人. 虽然叫做联系人, 但他的子类有 [用户](../-user/index.md), 和 [群](../-group/index.md).`Contact()` |

### Properties

| [bot](bot.md) | 这个联系人所属 [Bot](../../net.mamoe.mirai/-bot/index.md).`abstract val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [id](id.md) | 可以是 QQ 号码或者群号码.`abstract val id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |

### Functions

| [equals](equals.md) | `fun equals(other: `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [hashCode](hash-code.md) | `fun hashCode(): `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [sendMessage](send-message.md) | 向这个对象发送消息.`abstract suspend fun sendMessage(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Contact`](./index.md)`>``suspend fun sendMessage(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Contact`](./index.md)`>` |
| [toString](to-string.md) | `abstract fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [uploadImage](upload-image.md) | 上传一个图片以备发送.`abstract suspend fun uploadImage(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md) |

### Extension Functions

| [recall](../recall.md) | `suspend fun `[`Contact`](./index.md)`.recall(source: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`suspend fun `[`Contact`](./index.md)`.recall(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recallIn](../recall-in.md) | `fun `[`Contact`](./index.md)`.recallIn(message: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`<br>`fun `[`Contact`](./index.md)`.recallIn(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job` |
| [sendImage](../../net.mamoe.mirai.message/send-image.md) | 在 [Dispatchers.IO](#) 中将图片发送到指定联系人. 不会保存临时文件`suspend fun <C : `[`Contact`](./index.md)`> C.sendImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](./index.md)`> C.sendImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](./index.md)`> C.sendImage(imageInput: Input): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](./index.md)`> C.sendImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中将文件作为图片发送到指定联系人`suspend fun <C : `[`Contact`](./index.md)`> C.sendImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [sendImage](../../net.mamoe.mirai.utils/send-image.md) | 将图片作为单独的消息发送给 [this](../../net.mamoe.mirai.utils/send-image/-this-.md)`suspend fun <C : `[`Contact`](./index.md)`> C.sendImage(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [uploadImage](../../net.mamoe.mirai.message/upload-image.md) | 在 [Dispatchers.IO](#) 中将图片上传, 但不发送. 不会保存临时文件`suspend fun `[`Contact`](./index.md)`.uploadImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](./index.md)`.uploadImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](./index.md)`.uploadImage(imageInput: Input): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](./index.md)`.uploadImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中将文件作为图片上传, 但不发送`suspend fun `[`Contact`](./index.md)`.uploadImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md) |

### Inheritors

| [Group](../-group/index.md) | 群.`abstract class Group : `[`Contact`](./index.md)`, CoroutineScope` |
| [User](../-user/index.md) | 代表一个 **用户**.`abstract class User : `[`Contact`](./index.md)`, CoroutineScope` |

