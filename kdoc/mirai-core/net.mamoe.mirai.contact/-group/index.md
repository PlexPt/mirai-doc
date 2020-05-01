[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Group](./index.md)

# Group

`abstract class Group : `[`Contact`](../-contact/index.md)`, CoroutineScope`

群.

### Constructors

| [&lt;init&gt;](-init-.md) | 群.`Group()` |

### Properties

| [avatarUrl](avatar-url.md) | 群头像下载链接.`val avatarUrl: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [botAsMember](bot-as-member.md) | [Bot](../../net.mamoe.mirai/-bot/index.md) 在群内的 [Member](../-member/index.md) 实例`abstract val botAsMember: `[`Member`](../-member/index.md) |
| [botMuteRemaining](bot-mute-remaining.md) | 机器人被禁言还剩余多少秒`abstract val botMuteRemaining: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [botPermission](bot-permission.md) | 机器人在这个群里的权限`abstract val botPermission: `[`MemberPermission`](../-member-permission/index.md) |
| [id](id.md) | 同为 groupCode, 用户看到的群号码.`abstract val id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [members](members.md) | 群成员列表, 不含机器人自己, 含群主. 在 [Group](./index.md) 实例创建的时候查询一次. 并与事件同步事件更新`abstract val members: `[`ContactList`](../-contact-list/index.md)`<`[`Member`](../-member/index.md)`>` |
| [name](name.md) | 群名称.`abstract var name: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [owner](owner.md) | 群主.`abstract val owner: `[`Member`](../-member/index.md) |
| [settings](settings.md) | 群设置`abstract val settings: `[`GroupSettings`](../-group-settings/index.md) |

### Functions

| [__quitBlockingForJava__](__quit-blocking-for-java__.md) | `fun __quitBlockingForJava__(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [contains](contains.md) | 检查此 id 的群成员是否存在 当 [id](contains.md#net.mamoe.mirai.contact.Group$contains(kotlin.Long)/id) 为 [Bot.id](../../net.mamoe.mirai/-bot/id.md) 时返回 `true``abstract operator fun contains(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [get](get.md) | 获取群成员实例. 不存在时抛出 [kotlin.NoSuchElementException](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-no-such-element-exception/index.html) 当 [id](get.md#net.mamoe.mirai.contact.Group$get(kotlin.Long)/id) 为 [Bot.id](../../net.mamoe.mirai/-bot/id.md) 时返回 [botAsMember](bot-as-member.md)`abstract operator fun get(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Member`](../-member/index.md) |
| [getOrNull](get-or-null.md) | 获取群成员实例, 不存在则 null 当 [id](get-or-null.md#net.mamoe.mirai.contact.Group$getOrNull(kotlin.Long)/id) 为 [Bot.id](../../net.mamoe.mirai/-bot/id.md) 时返回 [botAsMember](bot-as-member.md)`abstract fun getOrNull(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Member`](../-member/index.md)`?` |
| [newMember](new-member.md) | 构造一个 [Member](../-member/index.md). 非特殊情况请不要使用这个函数. 优先使用 [get](get.md).`abstract fun newMember(memberInfo: `[`MemberInfo`](../../net.mamoe.mirai.data/-member-info/index.md)`): `[`Member`](../-member/index.md) |
| [quit](quit.md) | 让机器人退出这个群.`abstract suspend fun quit(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [sendMessage](send-message.md) | 向这个对象发送消息.`abstract suspend fun sendMessage(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Group`](./index.md)`>``suspend fun sendMessage(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Group`](./index.md)`>` |
| [uploadImage](upload-image.md) | 上传一个图片以备发送.`abstract suspend fun uploadImage(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`OfflineGroupImage`](../../net.mamoe.mirai.message.data/-offline-group-image/index.md) |

### Extension Properties

| [isBotMuted](../is-bot-muted.md) | 返回机器人是否正在被禁言`val `[`Group`](./index.md)`.isBotMuted: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Extension Functions

| [checkBotPermission](../check-bot-permission.md) | 要求 [Bot](../../net.mamoe.mirai/-bot/index.md) 在这个群里的权限为 [required](../check-bot-permission.md#net.mamoe.mirai.contact$checkBotPermission(net.mamoe.mirai.contact.Group, net.mamoe.mirai.contact.MemberPermission, kotlin.Function0((kotlin.String)))/required), 否则抛出异常 [PermissionDeniedException](../-permission-denied-exception/index.md)`fun `[`Group`](./index.md)`.checkBotPermission(required: `[`MemberPermission`](../-member-permission/index.md)`, lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = {
        "Permission denied: required $required, got actual $botPermission for $bot in group $id"
    }): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [checkBotPermissionOperator](../check-bot-permission-operator.md) | 要求 [Bot](../../net.mamoe.mirai/-bot/index.md) 在这个群里的权限为 [管理员或群主](../is-operator.md), 否则抛出异常 [PermissionDeniedException](../-permission-denied-exception/index.md)`fun `[`Group`](./index.md)`.checkBotPermissionOperator(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = {
        "Permission denied: required ${MemberPermission.ADMINISTRATOR} or ${MemberPermission.OWNER}, got actual $botPermission for $bot in group $id"
    }): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recall](../recall.md) | `suspend fun `[`Contact`](../-contact/index.md)`.recall(source: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`suspend fun `[`Contact`](../-contact/index.md)`.recall(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [recallIn](../recall-in.md) | `fun `[`Contact`](../-contact/index.md)`.recallIn(message: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job`<br>`fun `[`Contact`](../-contact/index.md)`.recallIn(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, coroutineContext: `[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/index.html)` = EmptyCoroutineContext): Job` |
| [sendImage](../../net.mamoe.mirai.message/send-image.md) | 在 [Dispatchers.IO](#) 中将图片发送到指定联系人. 不会保存临时文件`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(imageInput: Input): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>`<br>在 [Dispatchers.IO](#) 中将文件作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [sendImage](../../net.mamoe.mirai.utils/send-image.md) | 将图片作为单独的消息发送给 [this](../../net.mamoe.mirai.utils/send-image/-this-.md)`suspend fun <C : `[`Contact`](../-contact/index.md)`> C.sendImage(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [uploadImage](../../net.mamoe.mirai.message/upload-image.md) | 在 [Dispatchers.IO](#) 中将图片上传, 但不发送. 不会保存临时文件`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(imageInput: Input): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)<br>在 [Dispatchers.IO](#) 中将文件作为图片上传, 但不发送`suspend fun `[`Contact`](../-contact/index.md)`.uploadImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md) |

