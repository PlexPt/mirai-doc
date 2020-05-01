[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [MemberCardChangeEvent](./index.md)

# MemberCardChangeEvent

`data class MemberCardChangeEvent : `[`GroupMemberEvent`](../-group-member-event/index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`GroupOperableEvent`](../-group-operable-event/index.md)

成员群名片改动. 此事件广播前修改就已经完成.

### Constructors

| [&lt;init&gt;](-init-.md) | 成员群名片改动. 此事件广播前修改就已经完成.`MemberCardChangeEvent(origin: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, new: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, member: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`, operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?)` |

### Properties

| [member](member.md) | `val member: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |
| [new](new.md) | 修改后`val new: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [operator](operator.md) | 此事件无法确定操作人, 将在未来版本删除`val ~~operator~~: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?` |
| [origin](origin.md) | 修改前`val origin: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Properties

| [isByBot](../is-by-bot.md) | 是否由 [Bot](../../net.mamoe.mirai/-bot/index.md) 操作`val `[`GroupOperableEvent`](../-group-operable-event/index.md)`.isByBot: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [operatorOrBot](../operator-or-bot.md) | 当操作人为 [Member](../../net.mamoe.mirai.contact/-member/index.md) 时获取这个 [Member](../../net.mamoe.mirai.contact/-member/index.md), 当操作人为 [Bot](../../net.mamoe.mirai/-bot/index.md) 时获取 [Group.botAsMember](../../net.mamoe.mirai.contact/-group/bot-as-member.md)`val `[`GroupOperableEvent`](../-group-operable-event/index.md)`.operatorOrBot: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

