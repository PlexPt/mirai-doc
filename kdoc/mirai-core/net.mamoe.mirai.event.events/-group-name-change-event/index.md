[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [GroupNameChangeEvent](./index.md)

# GroupNameChangeEvent

`data class GroupNameChangeEvent : `[`GroupSettingChangeEvent`](../-group-setting-change-event/index.md)`<`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`>, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`GroupOperableEvent`](../-group-operable-event/index.md)

群名改变. 此事件广播前修改就已经完成.

### Constructors

| [&lt;init&gt;](-init-.md) | 群名改变. 此事件广播前修改就已经完成.`GroupNameChangeEvent(origin: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, new: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md)`, operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?)` |

### Properties

| [group](group.md) | `val group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md) |
| [isByBot](is-by-bot.md) | `val ~~isByBot~~: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [new](new.md) | `val new: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [operator](operator.md) | 操作人. 为 null 时则是机器人操作`val operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?` |
| [origin](origin.md) | `val origin: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Properties

| [isByBot](../is-by-bot.md) | 是否由 [Bot](../../net.mamoe.mirai/-bot/index.md) 操作`val `[`GroupOperableEvent`](../-group-operable-event/index.md)`.isByBot: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [operatorOrBot](../operator-or-bot.md) | 当操作人为 [Member](../../net.mamoe.mirai.contact/-member/index.md) 时获取这个 [Member](../../net.mamoe.mirai.contact/-member/index.md), 当操作人为 [Bot](../../net.mamoe.mirai/-bot/index.md) 时获取 [Group.botAsMember](../../net.mamoe.mirai.contact/-group/bot-as-member.md)`val `[`GroupOperableEvent`](../-group-operable-event/index.md)`.operatorOrBot: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

