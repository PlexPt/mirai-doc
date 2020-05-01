[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Member](./index.md)

# Member

`abstract class Member : `[`MemberJavaFriendlyAPI`](../-member-java-friendly-a-p-i/index.md)

群成员.

群成员可能也是好友, 但他们在对象类型上不同.
群成员可以通过 [asFriend](../as-friend.md) 得到相关好友对象.

### Constructors

| [&lt;init&gt;](-init-.md) | 群成员.`Member()` |

### Properties

| [group](group.md) | 所在的群.`abstract val group: `[`Group`](../-group/index.md) |
| [muteTimeRemaining](mute-time-remaining.md) | 被禁言剩余时长. 单位为秒.`abstract val muteTimeRemaining: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [nameCard](name-card.md) | 群名片. 可能为空.`abstract var nameCard: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [permission](permission.md) | 成员的权限, 动态更新.`abstract val permission: `[`MemberPermission`](../-member-permission/index.md) |
| [specialTitle](special-title.md) | 群头衔.`abstract var specialTitle: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Functions

| [kick](kick.md) | 踢出该成员.`abstract suspend fun kick(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = ""): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [mute](mute.md) | 禁言.`abstract suspend fun mute(durationSeconds: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [sendMessage](send-message.md) | 向群成员发送消息. 若群成员同时是好友, 则会发送好友消息. 否则发送临时会话消息.`abstract suspend fun sendMessage(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Member`](./index.md)`>``suspend fun sendMessage(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Member`](./index.md)`>` |
| [toString](to-string.md) | `fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [unmute](unmute.md) | 解除禁言.`abstract suspend fun unmute(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

### Extension Properties

| [isFriend](../is-friend.md) | 判断此成员是否为好友`val `[`Member`](./index.md)`.isFriend: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isMuted](../is-muted.md) | 判断群成员是否处于禁言状态.`val `[`Member`](./index.md)`.isMuted: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [nameCardOrNick](../name-card-or-nick.md) | 获取非空群名片或昵称.`val `[`Member`](./index.md)`.nameCardOrNick: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [asFriend](../as-friend.md) | 得到此成员作为好友的对象.`fun `[`Member`](./index.md)`.asFriend(): `[`Friend`](../-friend/index.md) |
| [asFriendOrNull](../as-friend-or-null.md) | 得到此成员作为好友的对象.`fun `[`Member`](./index.md)`.asFriendOrNull(): `[`Friend`](../-friend/index.md)`?` |
| [at](../../net.mamoe.mirai.message.data/at.md) | At 这个成员`fun `[`Member`](./index.md)`.at(): `[`At`](../../net.mamoe.mirai.message.data/-at/index.md) |
| [isAdministrator](../is-administrator.md) | 判断权限是否为管理员`fun `[`Member`](./index.md)`.isAdministrator(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isMuted](../is-muted.md) | 判断改成员是否处于禁言状态.`fun `[`Member`](./index.md)`.~~isMuted~~(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isOperator](../is-operator.md) | 判断权限是否为管理员或群主`fun `[`Member`](./index.md)`.isOperator(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [isOwner](../is-owner.md) | 判断权限是否为群主`fun `[`Member`](./index.md)`.isOwner(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [mute](../mute.md) | `suspend fun `[`Member`](./index.md)`.mute(duration: `[`Duration`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.time/-duration/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`suspend fun `[`Member`](./index.md)`.mute(durationSeconds: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recall](../recall.md) | `suspend fun `[`Contact`](../-contact/index.md)`.recall(source: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`suspend fun `[`Contact`](../-contact/index.md)`.recall(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recallIn](../recall-in.md) | `fun `[`Contact`](../-contact/index.md)`.recallIn(message: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`<br>`fun `[`Contact`](../-contact/index.md)`.recallIn(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job` |
| [sendImage](../../net.mamoe.mirai.message/send-image.md) | 在 [Dispatchers.IO](#) 中将图片发送到指定联系人. 不会保存临时文件`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(imageInput: Input): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中将文件作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [sendImage](../../net.mamoe.mirai.utils/send-image.md) | 将图片作为单独的消息发送给 [this](../../net.mamoe.mirai.utils/send-image/-this-.md)`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [takeIfIsFriend](../take-if-is-friend.md) | 如果此成员是好友, 则执行 [block](../take-if-is-friend.md#net.mamoe.mirai.contact$takeIfIsFriend(net.mamoe.mirai.contact.Member, kotlin.Function1((net.mamoe.mirai.contact.Friend, net.mamoe.mirai.contact.takeIfIsFriend.R)))/block) 并返回其返回值. 否则返回 `null``fun <R> `[`Member`](./index.md)`.takeIfIsFriend(block: (`[`Friend`](../-friend/index.md)`) -> R): R?` |
| [uploadImage](../../net.mamoe.mirai.message/upload-image.md) | 在 [Dispatchers.IO](#) 中将图片上传, 但不发送. 不会保存临时文件`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(imageInput: Input): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中将文件作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md) |

