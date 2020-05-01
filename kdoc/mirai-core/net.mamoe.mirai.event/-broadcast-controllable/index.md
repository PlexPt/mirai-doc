[mirai-core](../../index.md) / [net.mamoe.mirai.event](../index.md) / [BroadcastControllable](./index.md)

# BroadcastControllable

`interface BroadcastControllable : `[`Event`](../-event.md)

可控制是否需要广播这个事件包

### Properties

| [shouldBroadcast](should-broadcast.md) | `open val shouldBroadcast: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Extension Functions

| [broadcast](../broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../-event.md)`> E.broadcast(): E` |

### Inheritors

| [FriendMessage](../../net.mamoe.mirai.message/-friend-message/index.md) | 好友消息`class FriendMessage : `[`ContactMessage`](../../net.mamoe.mirai.message/-contact-message/index.md)`, `[`BroadcastControllable`](./index.md) |
| [GroupSettingChangeEvent](../../net.mamoe.mirai.event.events/-group-setting-change-event/index.md) | 群设置改变. 此事件广播前修改就已经完成.`interface GroupSettingChangeEvent<T> : `[`GroupEvent`](../../net.mamoe.mirai.event.events/-group-event/index.md)`, `[`BotPassiveEvent`](../../net.mamoe.mirai.event.events/-bot-passive-event.md)`, `[`BroadcastControllable`](./index.md) |
| [TempMessage](../../net.mamoe.mirai.message/-temp-message/index.md) | 临时会话消息`class TempMessage : `[`ContactMessage`](../../net.mamoe.mirai.message/-contact-message/index.md)`, `[`BroadcastControllable`](./index.md) |

