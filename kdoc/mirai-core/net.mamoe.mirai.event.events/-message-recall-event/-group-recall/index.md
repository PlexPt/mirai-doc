[mirai-core](../../../index.md) / [net.mamoe.mirai.event.events](../../index.md) / [MessageRecallEvent](../index.md) / [GroupRecall](./index.md)

# GroupRecall

`data class GroupRecall : `[`MessageRecallEvent`](../index.md)`, `[`GroupOperableEvent`](../../-group-operable-event/index.md)`, `[`Packet`](../../../net.mamoe.mirai.qqandroid.network/-packet/index.md)

群消息撤回事件.

### Constructors

| [&lt;init&gt;](-init-.md) | 群消息撤回事件.`GroupRecall(bot: `[`Bot`](../../../net.mamoe.mirai/-bot/index.md)`, authorId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, messageId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, messageInternalId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, messageTime: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, operator: `[`Member`](../../../net.mamoe.mirai.contact/-member/index.md)`?, group: `[`Group`](../../../net.mamoe.mirai.contact/-group/index.md)`)` |

### Properties

| [authorId](author-id.md) | 消息原发送人`val authorId: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [bot](bot.md) | `val bot: `[`Bot`](../../../net.mamoe.mirai/-bot/index.md) |
| [group](group.md) | `val group: `[`Group`](../../../net.mamoe.mirai.contact/-group/index.md) |
| [messageId](message-id.md) | 消息 id.`val messageId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [messageInternalId](message-internal-id.md) | 消息内部 id.`val messageInternalId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [messageTime](message-time.md) | 原发送时间`val messageTime: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [operator](operator.md) | 操作人. 为 null 时则为 [Bot](../../../net.mamoe.mirai/-bot/index.md) 操作.`val operator: `[`Member`](../../../net.mamoe.mirai.contact/-member/index.md)`?` |

