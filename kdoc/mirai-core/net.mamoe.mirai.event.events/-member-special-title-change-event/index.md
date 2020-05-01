[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [MemberSpecialTitleChangeEvent](./index.md)

# MemberSpecialTitleChangeEvent

`data class MemberSpecialTitleChangeEvent : `[`GroupMemberEvent`](../-group-member-event/index.md)`, `[`GroupOperableEvent`](../-group-operable-event/index.md)

成员群头衔改动. 一定为群主操作

### Constructors

| [&lt;init&gt;](-init-.md) | 成员群头衔改动. 一定为群主操作`MemberSpecialTitleChangeEvent(origin: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, new: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, member: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`, operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?)` |

### Properties

| [member](member.md) | `val member: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |
| [new](new.md) | 修改后`val new: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [operator](operator.md) | 操作人. 不为 null 时一定为群主. 可能与 [member](member.md) 引用相同, 此时为群员自己修改. 为 null 时则是机器人操作.`val operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?` |
| [origin](origin.md) | 修改前`val origin: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Properties

| [isByBot](../is-by-bot.md) | 是否由 [Bot](../../net.mamoe.mirai/-bot/index.md) 操作`val `[`GroupOperableEvent`](../-group-operable-event/index.md)`.isByBot: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [operatorOrBot](../operator-or-bot.md) | 当操作人为 [Member](../../net.mamoe.mirai.contact/-member/index.md) 时获取这个 [Member](../../net.mamoe.mirai.contact/-member/index.md), 当操作人为 [Bot](../../net.mamoe.mirai/-bot/index.md) 时获取 [Group.botAsMember](../../net.mamoe.mirai.contact/-group/bot-as-member.md)`val `[`GroupOperableEvent`](../-group-operable-event/index.md)`.operatorOrBot: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

