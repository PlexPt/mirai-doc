[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [GroupEvent](./index.md)

# GroupEvent

`interface GroupEvent : `[`BotEvent`](../-bot-event/index.md)

有关群的事件

### Properties

| [bot](bot.md) | `open val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |
| [group](group.md) | `abstract val group: `[`Group`](../../net.mamoe.mirai.contact/-group/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

### Inheritors

| [BotGroupPermissionChangeEvent](../-bot-group-permission-change-event/index.md) | Bot 在群里的权限被改变. 操作人一定是群主`data class BotGroupPermissionChangeEvent : `[`BotPassiveEvent`](../-bot-passive-event.md)`, `[`GroupEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [BotJoinGroupEvent](../-bot-join-group-event/index.md) | Bot 成功加入了一个新群`data class BotJoinGroupEvent : `[`BotPassiveEvent`](../-bot-passive-event.md)`, `[`GroupEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [BotMuteEvent](../-bot-mute-event/index.md) | Bot 被禁言`data class BotMuteEvent : `[`GroupEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md) |
| [BotUnmuteEvent](../-bot-unmute-event/index.md) | Bot 被取消禁言`data class BotUnmuteEvent : `[`GroupEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md) |
| [GroupMemberEvent](../-group-member-event/index.md) | 有关群成员的事件`interface GroupMemberEvent : `[`GroupEvent`](./index.md) |
| [GroupOperableEvent](../-group-operable-event/index.md) | 可由 [Member](../../net.mamoe.mirai.contact/-member/index.md) 或 [Bot](../../net.mamoe.mirai/-bot/index.md) 操作的事件`interface GroupOperableEvent : `[`GroupEvent`](./index.md) |
| [GroupSettingChangeEvent](../-group-setting-change-event/index.md) | 群设置改变. 此事件广播前修改就已经完成.`interface GroupSettingChangeEvent<T> : `[`GroupEvent`](./index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md)`, `[`BroadcastControllable`](../../net.mamoe.mirai.event/-broadcast-controllable/index.md) |

