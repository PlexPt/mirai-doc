[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [MemberJoinEvent](./index.md)

# MemberJoinEvent

`sealed class MemberJoinEvent : `[`GroupMemberEvent`](../-group-member-event/index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)

成员已经加入群的事件

### Types

| [Active](-active/index.md) | 成员主动加入群`data class Active : `[`MemberJoinEvent`](./index.md) |
| [Invite](-invite/index.md) | 被邀请加入群`data class Invite : `[`MemberJoinEvent`](./index.md) |

### Properties

| [member](member.md) | `open val member: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

