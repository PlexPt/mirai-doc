[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [MemberPermissionChangeEvent](./index.md)

# MemberPermissionChangeEvent

`data class MemberPermissionChangeEvent : `[`GroupMemberEvent`](../-group-member-event/index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)

成员权限改变的事件. 成员不可能是机器人自己.

### Constructors

| [&lt;init&gt;](-init-.md) | 成员权限改变的事件. 成员不可能是机器人自己.`MemberPermissionChangeEvent(member: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`, origin: `[`MemberPermission`](../../net.mamoe.mirai.contact/-member-permission/index.md)`, new: `[`MemberPermission`](../../net.mamoe.mirai.contact/-member-permission/index.md)`)` |

### Properties

| [member](member.md) | `val member: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |
| [new](new.md) | `val new: `[`MemberPermission`](../../net.mamoe.mirai.contact/-member-permission/index.md) |
| [origin](origin.md) | `val origin: `[`MemberPermission`](../../net.mamoe.mirai.contact/-member-permission/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

