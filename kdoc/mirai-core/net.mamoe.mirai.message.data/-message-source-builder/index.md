[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageSourceBuilder](./index.md)

# MessageSourceBuilder

`abstract class MessageSourceBuilder`

**See Also**

[buildMessageSource](../build-message-source.md)

### Constructors

| [&lt;init&gt;](-init-.md) | `MessageSourceBuilder()` |

### Properties

| [now](now.md) | `val now: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Functions

| [allFrom](all-from.md) | 从另一个 [MessageSource](../-message-source/index.md) 复制所有信息, 包括消息内容. 不会清空已有消息.`fun allFrom(source: `[`MessageSource`](../-message-source/index.md)`): `[`MessageSourceBuilder`](./index.md) |
| [clearMessages](clear-messages.md) | `fun clearMessages(): `[`MessageSourceBuilder`](./index.md) |
| [id](id.md) | `fun id(from: `[`MessageSource`](../-message-source/index.md)`): `[`MessageSourceBuilder`](./index.md)<br>`fun id(value: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageSourceBuilder`](./index.md) |
| [internalId](internal-id.md) | `fun internalId(from: `[`MessageSource`](../-message-source/index.md)`): `[`MessageSourceBuilder`](./index.md)<br>`fun internalId(value: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageSourceBuilder`](./index.md) |
| [messages](messages.md) | `fun messages(messages: `[`Iterable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)`<`[`Message`](../-message/index.md)`>): `[`MessageSourceBuilder`](./index.md)<br>`fun messages(vararg message: `[`Message`](../-message/index.md)`): `[`MessageSourceBuilder`](./index.md)<br>`fun messages(block: `[`MessageChainBuilder`](../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`MessageSourceBuilder`](./index.md) |
| [messagesFrom](messages-from.md) | 从另一个 [MessageSource](../-message-source/index.md) 复制 [消息内容](../-message-source/original-message.md). 不会清空已有消息.`fun messagesFrom(source: `[`MessageSource`](../-message-source/index.md)`): `[`MessageSourceBuilder`](./index.md) |
| [metadata](metadata.md) | 从另一个 [MessageSource](../-message-source/index.md) 复制 [id](id.md), [time](time.md), [internalId](internal-id.md). 这三个数据决定官方客户端能 "定位" 到的原消息`fun metadata(from: `[`MessageSource`](../-message-source/index.md)`): `[`MessageSourceBuilder`](./index.md) |
| [sendTo](send-to.md) | 设置 [发送人](send-to/-this-.md) 和 [发送目标](send-to.md#net.mamoe.mirai.message.data.MessageSourceBuilder$sendTo(net.mamoe.mirai.contact.ContactOrBot, net.mamoe.mirai.contact.ContactOrBot)/target), 并自动判断 [kind](#)`abstract infix fun `[`ContactOrBot`](../../net.mamoe.mirai.contact/-contact-or-bot/index.md)`.sendTo(target: `[`ContactOrBot`](../../net.mamoe.mirai.contact/-contact-or-bot/index.md)`): `[`MessageSourceBuilder`](./index.md) |
| [setSenderAndTarget](set-sender-and-target.md) | `fun setSenderAndTarget(sender: `[`ContactOrBot`](../../net.mamoe.mirai.contact/-contact-or-bot/index.md)`, target: `[`ContactOrBot`](../../net.mamoe.mirai.contact/-contact-or-bot/index.md)`): `[`MessageSourceBuilder`](./index.md) |
| [time](time.md) | `fun time(from: `[`MessageSource`](../-message-source/index.md)`): `[`MessageSourceBuilder`](./index.md)<br>`fun time(value: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageSourceBuilder`](./index.md) |

