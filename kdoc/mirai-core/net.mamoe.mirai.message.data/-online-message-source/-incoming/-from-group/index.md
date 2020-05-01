[mirai-core](../../../../index.md) / [net.mamoe.mirai.message.data](../../../index.md) / [OnlineMessageSource](../../index.md) / [Incoming](../index.md) / [FromGroup](./index.md)

# FromGroup

`abstract class FromGroup : Incoming`

### Types

| [Key](-key/index.md) | `companion object Key : Key<FromGroup>` |

### Constructors

| [&lt;init&gt;](-init-.md) | `FromGroup()` |

### Properties

| [group](group.md) | `val group: `[`Group`](../../../../net.mamoe.mirai.contact/-group/index.md) |
| [sender](sender.md) | 消息发送人. 可能为 [机器人](../../../../net.mamoe.mirai/-bot/index.md) 或 [好友](../../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [群员](../../../../net.mamoe.mirai.contact/-member/index.md). 即类型必定为 [Bot](../../../../net.mamoe.mirai/-bot/index.md), [QQ](../../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [Member](../../../../net.mamoe.mirai.contact/-member/index.md)`abstract val sender: `[`Member`](../../../../net.mamoe.mirai.contact/-member/index.md) |
| [subject](subject.md) | 消息主体. 群消息时为 [Group](../../../../net.mamoe.mirai.contact/-group/index.md). 好友消息时为 [QQ](../../../../net.mamoe.mirai.contact/-q-q/index.md), 临时消息为 [Member](../../../../net.mamoe.mirai.contact/-member/index.md) 不论是机器人接收的消息还是发送的消息, 此属性都指向机器人能进行回复的目标.`val subject: `[`Group`](../../../../net.mamoe.mirai.contact/-group/index.md) |
| [target](target.md) | 消息发送目标. 可能为 [机器人](../../../../net.mamoe.mirai/-bot/index.md) 或 [好友](../../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [群](../../../../net.mamoe.mirai.contact/-group/index.md). 即类型必定为 [Bot](../../../../net.mamoe.mirai/-bot/index.md), [QQ](../../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [Group](../../../../net.mamoe.mirai.contact/-group/index.md)`val target: `[`Group`](../../../../net.mamoe.mirai.contact/-group/index.md) |

### Companion Object Properties

| [typeName](type-name.md) | 此 [Key](../../../-message/-key/index.md) 指代的 [Message](../../../-message/index.md) 类型名. 一般为 `class.simpleName`, 如 "QuoteReply", "PlainText"`val typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

