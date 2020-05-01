[mirai-core](../../../index.md) / [net.mamoe.mirai.message.data](../../index.md) / [ForwardMessageBuilder](../index.md) / [BuilderNode](./index.md)

# BuilderNode

`inner class BuilderNode : INode`

### Constructors

| [&lt;init&gt;](-init-.md) | `BuilderNode()` |

### Properties

| [message](message.md) | 消息内容`lateinit var message: `[`Message`](../../-message/index.md) |
| [senderId](sender-id.md) | 发送人 [User.id](../../../net.mamoe.mirai.contact/-user/id.md)`var senderId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [senderName](sender-name.md) | 发送人名称`var senderName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [time](time.md) | 时间戳秒`var time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Functions

| [at](at.md) | 指定时间.`infix fun at(time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): BuilderNode` |
| [message](message.md) | 指定消息内容`infix fun message(message: `[`Message`](../../-message/index.md)`): BuilderNode`<br>`infix fun message(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): BuilderNode` |
| [named](named.md) | 指定发送人名称.`infix fun named(name: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): BuilderNode` |
| [says](says.md) | 添加一条消息`infix fun says(message: `[`Message`](../../-message/index.md)`): `[`ForwardMessageBuilder`](../index.md)<br>`infix fun says(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`ForwardMessageBuilder`](../index.md)<br>构造并添加一个 [MessageChain](../../-message-chain/index.md)`infix fun says(chain: `[`MessageChainBuilder`](../../-message-chain-builder/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`ForwardMessageBuilder`](../index.md) |
| [sender](sender.md) | 指定发送人 id 和名称.`infix fun sender(user: `[`User`](../../../net.mamoe.mirai.contact/-user/index.md)`): BuilderNode` |
| [senderId](sender-id.md) | 指定发送人 id.`infix fun senderId(id: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): BuilderNode`<br>`infix fun senderId(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): BuilderNode` |
| [senderName](sender-name.md) | 指定发送人名称.`infix fun senderName(name: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): BuilderNode` |
| [time](time.md) | 指定时间.`infix fun time(time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): BuilderNode` |

