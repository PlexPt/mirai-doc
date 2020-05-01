[mirai-core](../index.md) / [net.mamoe.mirai.event.events](index.md) / [BotPassiveEvent](./-bot-passive-event.md)

# BotPassiveEvent

`interface BotPassiveEvent : `[`BotEvent`](-bot-event/index.md)

[Bot](../net.mamoe.mirai/-bot/index.md) 被动接收的事件. 这些事件可能与机器人有关

### Extension Functions

| [broadcast](../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

### Inheritors

| [BotGroupPermissionChangeEvent](-bot-group-permission-change-event/index.md) | Bot 在群里的权限被改变. 操作人一定是群主`data class BotGroupPermissionChangeEvent : `[`BotPassiveEvent`](./-bot-passive-event.md)`, `[`GroupEvent`](-group-event/index.md)`, `[`Packet`](../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [BotJoinGroupEvent](-bot-join-group-event/index.md) | Bot 成功加入了一个新群`data class BotJoinGroupEvent : `[`BotPassiveEvent`](./-bot-passive-event.md)`, `[`GroupEvent`](-group-event/index.md)`, `[`Packet`](../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [BotMuteEvent](-bot-mute-event/index.md) | Bot 被禁言`data class BotMuteEvent : `[`GroupEvent`](-group-event/index.md)`, `[`Packet`](../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotPassiveEvent`](./-bot-passive-event.md) |
| [BotUnmuteEvent](-bot-unmute-event/index.md) | Bot 被取消禁言`data class BotUnmuteEvent : `[`GroupEvent`](-group-event/index.md)`, `[`Packet`](../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotPassiveEvent`](./-bot-passive-event.md) |
| [GroupSettingChangeEvent](-group-setting-change-event/index.md) | 群设置改变. 此事件广播前修改就已经完成.`interface GroupSettingChangeEvent<T> : `[`GroupEvent`](-group-event/index.md)`, `[`BotPassiveEvent`](./-bot-passive-event.md)`, `[`BroadcastControllable`](../net.mamoe.mirai.event/-broadcast-controllable/index.md) |
| [MemberJoinEvent](-member-join-event/index.md) | 成员已经加入群的事件`sealed class MemberJoinEvent : `[`GroupMemberEvent`](-group-member-event/index.md)`, `[`BotPassiveEvent`](./-bot-passive-event.md)`, `[`Packet`](../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [MemberPermissionChangeEvent](-member-permission-change-event/index.md) | 成员权限改变的事件. 成员不可能是机器人自己.`data class MemberPermissionChangeEvent : `[`GroupMemberEvent`](-group-member-event/index.md)`, `[`BotPassiveEvent`](./-bot-passive-event.md)`, `[`Packet`](../net.mamoe.mirai.qqandroid.network/-packet/index.md) |

