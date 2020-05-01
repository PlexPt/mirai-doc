[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Friend](./index.md)

# Friend

`abstract class Friend : `[`QQ`](../-q-q/index.md)`, CoroutineScope`

好友 对象.
注意: 一个 [Friend](./index.md) 实例并不是独立的, 它属于一个 [Bot](../../net.mamoe.mirai/-bot/index.md).
它不能被直接构造. 任何时候都应从 [Bot.getFriend](../../net.mamoe.mirai/-bot/get-friend.md) 或事件中获取.

对于同一个 [Bot](../../net.mamoe.mirai/-bot/index.md) 任何一个人的 [Friend](./index.md) 实例都是单一的.
它不能被直接构造. 任何时候都应从 [Bot.getFriend](../../net.mamoe.mirai/-bot/get-friend.md) 或事件中获取.

### Constructors

| [&lt;init&gt;](-init-.md) | 好友 对象. 注意: 一个 [Friend](./index.md) 实例并不是独立的, 它属于一个 [Bot](../../net.mamoe.mirai/-bot/index.md). 它不能被直接构造. 任何时候都应从 [Bot.getFriend](../../net.mamoe.mirai/-bot/get-friend.md) 或事件中获取.`Friend()` |

### Properties

| [avatarUrl](avatar-url.md) | 头像下载链接`open val avatarUrl: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [id](id.md) | QQ 号码`abstract val id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [nick](nick.md) | 昵称`abstract val nick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Functions

| [sendMessage](send-message.md) | 向这个对象发送消息.`abstract suspend fun sendMessage(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Friend`](./index.md)`>``suspend fun sendMessage(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Friend`](./index.md)`>` |
| [toString](to-string.md) | `fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Properties

| [nameCardOrNick](../name-card-or-nick.md) | 获取非空群名片或昵称.`val `[`User`](../-user/index.md)`.nameCardOrNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [recall](../recall.md) | `suspend fun `[`Contact`](../-contact/index.md)`.recall(source: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`suspend fun `[`Contact`](../-contact/index.md)`.recall(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recallIn](../recall-in.md) | `fun `[`Contact`](../-contact/index.md)`.recallIn(message: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`<br>`fun `[`Contact`](../-contact/index.md)`.recallIn(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job` |
| [sendImage](../../net.mamoe.mirai.message/send-image.md) | 在 [Dispatchers.IO](#) 中将图片发送到指定联系人. 不会保存临时文件`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(imageInput: Input): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中将文件作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [sendImage](../../net.mamoe.mirai.utils/send-image.md) | 将图片作为单独的消息发送给 [this](../../net.mamoe.mirai.utils/send-image/-this-.md)`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [uploadImage](../../net.mamoe.mirai.message/upload-image.md) | 在 [Dispatchers.IO](#) 中将图片上传, 但不发送. 不会保存临时文件`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(imageInput: Input): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中将文件作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md) |

