[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [MessageTooLargeException](./index.md)

# MessageTooLargeException

`@SinceMirai("0.32.0") class MessageTooLargeException : `[`RuntimeException`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-runtime-exception/index.html)

发送消息时消息过长抛出的异常.

**See Also**

[Contact.sendMessage](../-contact/send-message.md)

### Constructors

| [&lt;init&gt;](-init-.md) | 发送消息时消息过长抛出的异常.`MessageTooLargeException(target: `[`Contact`](../-contact/index.md)`, originalMessage: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`, messageAfterEvent: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`, exceptionMessage: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`)` |

### Properties

| [messageAfterEvent](message-after-event.md) | 经过事件拦截处理后的消息`val messageAfterEvent: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md) |
| [originalMessage](original-message.md) | 原发送消息`val originalMessage: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md) |
| [target](target.md) | `val target: `[`Contact`](../-contact/index.md) |

