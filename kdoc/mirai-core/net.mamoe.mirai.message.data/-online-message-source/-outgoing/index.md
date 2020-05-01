[mirai-core](../../../index.md) / [net.mamoe.mirai.message.data](../../index.md) / [OnlineMessageSource](../index.md) / [Outgoing](./index.md)

# Outgoing

`sealed class Outgoing : `[`OnlineMessageSource`](../index.md)

由 [机器人主动发送消息](../../../net.mamoe.mirai.contact/-contact/send-message.md) 产生的 [MessageSource](../../-message-source/index.md), 可通过 [MessageReceipt](../../../net.mamoe.mirai.message/-message-receipt/index.md) 获得.

### Types

| [Key](-key/index.md) | `companion object Key : Key<Outgoing>` |
| [ToFriend](-to-friend/index.md) | `abstract class ToFriend : Outgoing` |
| [ToGroup](-to-group/index.md) | `abstract class ToGroup : Outgoing` |
| [ToTemp](-to-temp/index.md) | `abstract class ToTemp : Outgoing` |

### Properties

| [fromId](from-id.md) | 发送人.`val fromId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [sender](sender.md) | 消息发送人. 可能为 [机器人](../../../net.mamoe.mirai/-bot/index.md) 或 [好友](../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [群员](../../../net.mamoe.mirai.contact/-member/index.md). 即类型必定为 [Bot](../../../net.mamoe.mirai/-bot/index.md), [QQ](../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [Member](../../../net.mamoe.mirai.contact/-member/index.md)`abstract val sender: `[`Bot`](../../../net.mamoe.mirai/-bot/index.md) |
| [target](target.md) | 消息发送目标. 可能为 [机器人](../../../net.mamoe.mirai/-bot/index.md) 或 [好友](../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [群](../../../net.mamoe.mirai.contact/-group/index.md). 即类型必定为 [Bot](../../../net.mamoe.mirai/-bot/index.md), [QQ](../../../net.mamoe.mirai.contact/-q-q/index.md) 或 [Group](../../../net.mamoe.mirai.contact/-group/index.md)`abstract val target: `[`Contact`](../../../net.mamoe.mirai.contact/-contact/index.md) |
| [targetId](target-id.md) | 消息发送目标.`val targetId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |

### Companion Object Properties

| [typeName](type-name.md) | 此 [Key](../../-message/-key/index.md) 指代的 [Message](../../-message/index.md) 类型名. 一般为 `class.simpleName`, 如 "QuoteReply", "PlainText"`val typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

