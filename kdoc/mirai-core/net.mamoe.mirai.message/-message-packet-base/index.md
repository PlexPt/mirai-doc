[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [MessagePacketBase](./index.md)

# MessagePacketBase

`abstract class ~~MessagePacketBase~~<out TSender : `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, out TSubject : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> : `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotEvent`](../../net.mamoe.mirai.event.events/-bot-event/index.md)
**Deprecated:** use ContactMessage

仅内部使用, 请使用 [ContactMessage](../-contact-message/index.md)

### Constructors

| [&lt;init&gt;](-init-.md) | 仅内部使用, 请使用 [ContactMessage](../-contact-message/index.md)`MessagePacketBase()` |

### Properties

| [bot](bot.md) | 接受到这条消息的`abstract val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [message](message.md) | 消息内容`abstract val message: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md) |
| [sender](sender.md) | 发送人.`abstract val sender: TSender` |
| [senderDeprecated](sender-deprecated.md) | `val ~~senderDeprecated~~: `[`QQ`](../../net.mamoe.mirai.contact/-q-q/index.md) |
| [senderName](sender-name.md) | `abstract val senderName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [source](source.md) | 消息源`open val source: Incoming` |
| [subject](subject.md) | 消息事件主体.`abstract val subject: TSubject` |
| [time](time.md) | 消息发送时间 (由服务器提供)`abstract val time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Functions

| [at](at.md) | `fun `[`QQ`](../../net.mamoe.mirai.contact/-q-q/index.md)`.~~at~~(): `[`At`](../../net.mamoe.mirai.message.data/-at/index.md) |
| [channel](channel.md) | 获取图片下载链接并开始下载.`suspend fun `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`.~~channel~~(): ByteReadChannel` |
| [get](get.md) | `operator fun <M : `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`> get(at: Key<M>): M` |
| [isBot](is-bot.md) | `fun `[`At`](../../net.mamoe.mirai.message.data/-at/index.md)`.isBot(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [member](member.md) | `fun `[`At`](../../net.mamoe.mirai.message.data/-at/index.md)`.~~member~~(): `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |
| [quoteReply](quote-reply.md) | 给这个消息事件的主体发送引用回复消息 对于好友消息事件, 这个方法将会给好友 ([subject](subject.md)) 发送消息 对于群消息事件, 这个方法将会给群 ([subject](subject.md)) 发送消息`suspend fun quoteReply(message: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>``suspend fun quoteReply(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`<br>`suspend fun quoteReply(plain: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`<br>`suspend fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.quoteReply(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`<br>`suspend fun `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`.quoteReply(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`<br>`suspend fun `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`.quoteReply(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>` |
| [reply](reply.md) | 给这个消息事件的主体发送消息 对于好友消息事件, 这个方法将会给好友 ([subject](subject.md)) 发送消息 对于群消息事件, 这个方法将会给群 ([subject](subject.md)) 发送消息`suspend fun reply(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>``suspend fun reply(plain: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`<br>`suspend fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.~~reply~~(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`<br>`suspend fun `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`.~~reply~~(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>` |
| [send](send.md) | `suspend fun `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`.send(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`<br>`suspend fun `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`.send(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`<br>`suspend fun `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`.send(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>`<br>`suspend fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.send(): `[`MessageReceipt`](../-message-receipt/index.md)`<TSubject>` |
| [upload](upload.md) | `suspend fun `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`.upload(): `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md) |
| [url](url.md) | 获取图片下载链接`suspend fun `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`.url(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

### Inheritors

| [MessagePacket](../-message-packet/index.md) | 一条从服务器接收到的消息事件. 请查看各平台的 `actual` 实现的说明.`abstract class ~~MessagePacket~~<TSender : `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, TSubject : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> : `[`MessagePacketBase`](./index.md)`<TSender, TSubject>` |

