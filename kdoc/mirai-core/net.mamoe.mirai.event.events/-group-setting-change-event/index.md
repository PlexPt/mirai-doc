[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [GroupSettingChangeEvent](./index.md)

# GroupSettingChangeEvent

`interface GroupSettingChangeEvent<T> : `[`GroupEvent`](../-group-event/index.md)`, `[`BotPassiveEvent`](../-bot-passive-event.md)`, `[`BroadcastControllable`](../../net.mamoe.mirai.event/-broadcast-controllable/index.md)

群设置改变. 此事件广播前修改就已经完成.

### Properties

| [new](new.md) | `abstract val new: T` |
| [origin](origin.md) | `abstract val origin: T` |
| [shouldBroadcast](should-broadcast.md) | `open val shouldBroadcast: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

### Inheritors

| [GroupAllowAnonymousChatEvent](../-group-allow-anonymous-chat-event/index.md) | 群 "匿名聊天" 功能状态改变. 此事件广播前修改就已经完成.`data class GroupAllowAnonymousChatEvent : `[`GroupSettingChangeEvent`](./index.md)`<`[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`>, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`GroupOperableEvent`](../-group-operable-event/index.md) |
| [GroupAllowConfessTalkEvent](../-group-allow-confess-talk-event/index.md) | 群 "坦白说" 功能状态改变. 此事件广播前修改就已经完成.`data class GroupAllowConfessTalkEvent : `[`GroupSettingChangeEvent`](./index.md)`<`[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`>, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [GroupAllowMemberInviteEvent](../-group-allow-member-invite-event/index.md) | 群 "允许群员邀请好友加群" 功能状态改变. 此事件广播前修改就已经完成.`data class GroupAllowMemberInviteEvent : `[`GroupSettingChangeEvent`](./index.md)`<`[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`>, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`GroupOperableEvent`](../-group-operable-event/index.md) |
| [GroupEntranceAnnouncementChangeEvent](../-group-entrance-announcement-change-event/index.md) | 入群公告改变. 此事件广播前修改就已经完成.`data class GroupEntranceAnnouncementChangeEvent : `[`GroupSettingChangeEvent`](./index.md)`<`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`>, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`GroupOperableEvent`](../-group-operable-event/index.md) |
| [GroupMuteAllEvent](../-group-mute-all-event/index.md) | 群 "全员禁言" 功能状态改变. 此事件广播前修改就已经完成.`data class GroupMuteAllEvent : `[`GroupSettingChangeEvent`](./index.md)`<`[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`>, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`GroupOperableEvent`](../-group-operable-event/index.md) |
| [GroupNameChangeEvent](../-group-name-change-event/index.md) | 群名改变. 此事件广播前修改就已经完成.`data class GroupNameChangeEvent : `[`GroupSettingChangeEvent`](./index.md)`<`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`>, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`GroupOperableEvent`](../-group-operable-event/index.md) |

