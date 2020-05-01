[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [GroupMuteAllEvent](./index.md)

# GroupMuteAllEvent

`data class GroupMuteAllEvent : `[`GroupSettingChangeEvent`](../-group-setting-change-event/index.md)`<`[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`>, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`GroupOperableEvent`](../-group-operable-event/index.md)

群 "全员禁言" 功能状态改变. 此事件广播前修改就已经完成.

### Constructors

| [&lt;init&gt;](-init-.md) | 群 "全员禁言" 功能状态改变. 此事件广播前修改就已经完成.`GroupMuteAllEvent(origin: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`, new: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`, group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md)`, operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?)` |

### Properties

| [group](group.md) | `val group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md) |
| [new](new.md) | `val new: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [operator](operator.md) | 操作人. 为 null 时则是机器人操作`val operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?` |
| [origin](origin.md) | `val origin: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Extension Properties

| [isByBot](../is-by-bot.md) | 是否由 [Bot](../../net.mamoe.mirai/-bot/index.md) 操作`val `[`GroupOperableEvent`](../-group-operable-event/index.md)`.isByBot: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [operatorOrBot](../operator-or-bot.md) | 当操作人为 [Member](../../net.mamoe.mirai.contact/-member/index.md) 时获取这个 [Member](../../net.mamoe.mirai.contact/-member/index.md), 当操作人为 [Bot](../../net.mamoe.mirai/-bot/index.md) 时获取 [Group.botAsMember](../../net.mamoe.mirai.contact/-group/bot-as-member.md)`val `[`GroupOperableEvent`](../-group-operable-event/index.md)`.operatorOrBot: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

