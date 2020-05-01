[mirai-core](../../../index.md) / [net.mamoe.mirai.message.data](../../index.md) / [OnlineMessageSource](../index.md) / [Incoming](./index.md)

# Incoming

`sealed class Incoming : `[`OnlineMessageSource`](../index.md)

接收到的一条消息的 [MessageSource](../../-message-source/index.md)

### Types

| [FromFriend](-from-friend/index.md) | `abstract class FromFriend : Incoming` |
| [FromGroup](-from-group/index.md) | `abstract class FromGroup : Incoming` |
| [FromTemp](-from-temp/index.md) | `abstract class FromTemp : Incoming` |
| [Key](-key/index.md) | `companion object Key : Key<Incoming>` |

### Properties

| [fromId](from-id.md) | 发送人.`val fromId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [sender](sender.md) | 消息发送人. 可能为 [机器人](../../../net.mamoe.mirai/-bot/index.md) 或 [好友](../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [群员](../../../net.mamoe.mirai.contact/-member/index.md). 即类型必定为 [Bot](../../../net.mamoe.mirai/-bot/index.md), [QQ](../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [Member](../../../net.mamoe.mirai.contact/-member/index.md)`abstract val sender: `[`User`](../../../net.mamoe.mirai.contact/-user/index.md) |
| [target2](target2.md) | `val ~~target2~~: `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html) |
| [targetId](target-id.md) | 消息发送目标.`val targetId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |

### Companion Object Properties

| [typeName](type-name.md) | 此 [Key](../../-message/-key/index.md) 指代的 [Message](../../-message/index.md) 类型名. 一般为 `class.simpleName`, 如 "QuoteReply", "PlainText"`val typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

