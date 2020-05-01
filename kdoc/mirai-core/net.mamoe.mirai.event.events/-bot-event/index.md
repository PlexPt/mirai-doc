[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [BotEvent](./index.md)

# BotEvent

`interface BotEvent : `[`Event`](../../net.mamoe.mirai.event/-event.md)

有关一个 [Bot](../../net.mamoe.mirai/-bot/index.md) 的事件

### Properties

| [bot](bot.md) | `abstract val bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md) |

### Extension Functions

| [broadcast](../../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

### Inheritors

| [BeforeImageUploadEvent](../-before-image-upload-event/index.md) | 图片上传前. 可以阻止上传`data class BeforeImageUploadEvent : `[`BotEvent`](./index.md)`, `[`BotActiveEvent`](../-bot-active-event.md)`, `[`AbstractCancellableEvent`](../../net.mamoe.mirai.event/-abstract-cancellable-event/index.md) |
| [BotActiveEvent](../-bot-active-event.md) | 由 [Bot](../../net.mamoe.mirai/-bot/index.md) 主动发起的动作的事件`interface BotActiveEvent : `[`BotEvent`](./index.md) |
| [BotInvitedJoinGroupRequestEvent](../-bot-invited-join-group-request-event/index.md) | [Bot](../../net.mamoe.mirai/-bot/index.md) 被邀请加入一个群.`data class BotInvitedJoinGroupRequestEvent : `[`BotEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [BotLeaveEvent](../-bot-leave-event/index.md) | 机器人被踢出群或在其他客户端主动退出一个群. 在事件广播前 [Bot.groups](../../net.mamoe.mirai/-bot/groups.md) 就已删除这个群.`sealed class BotLeaveEvent : `[`BotEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [BotOfflineEvent](../-bot-offline-event/index.md) | [Bot](../../net.mamoe.mirai/-bot/index.md) 离线.`sealed class BotOfflineEvent : `[`BotEvent`](./index.md) |
| [BotPassiveEvent](../-bot-passive-event.md) | [Bot](../../net.mamoe.mirai/-bot/index.md) 被动接收的事件. 这些事件可能与机器人有关`interface BotPassiveEvent : `[`BotEvent`](./index.md) |
| [BotReloginEvent](../-bot-relogin-event/index.md) | [Bot](../../net.mamoe.mirai/-bot/index.md) 主动重新登录.`data class BotReloginEvent : `[`BotEvent`](./index.md)`, `[`BotActiveEvent`](../-bot-active-event.md) |
| [ContactMessage](../../net.mamoe.mirai.message/-contact-message/index.md) | 一条消息事件. 它是一个 [BotEvent](./index.md), 因此可以被 [监听](#)`abstract class ContactMessage : `[`MessagePacket`](../../net.mamoe.mirai.message/-message-packet/index.md)`<`[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`>, `[`BotEvent`](./index.md) |
| [FriendAddEvent](../-friend-add-event/index.md) | 成功添加了一个新好友的事件`data class FriendAddEvent : `[`BotEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [FriendDeleteEvent](../-friend-delete-event/index.md) | 好友已被删除的事件.`data class FriendDeleteEvent : `[`BotEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [FriendEvent](../-friend-event/index.md) | 有关好友的事件`interface FriendEvent : `[`BotEvent`](./index.md) |
| [FriendRemarkChangeEvent](../-friend-remark-change-event/index.md) | 好友昵称改变事件. 目前仅支持解析 (来自 PC 端的修改).`data class FriendRemarkChangeEvent : `[`BotEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [GroupEvent](../-group-event/index.md) | 有关群的事件`interface GroupEvent : `[`BotEvent`](./index.md) |
| [ImageUploadEvent](../-image-upload-event/index.md) | 图片上传完成`sealed class ImageUploadEvent : `[`BotEvent`](./index.md)`, `[`BotActiveEvent`](../-bot-active-event.md)`, `[`AbstractCancellableEvent`](../../net.mamoe.mirai.event/-abstract-cancellable-event/index.md) |
| [MemberJoinRequestEvent](../-member-join-request-event/index.md) | 一个账号请求加入群事件, [Bot](../../net.mamoe.mirai/-bot/index.md) 在此群中是管理员或群主.`data class MemberJoinRequestEvent : `[`BotEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |
| [MessagePacketBase](../../net.mamoe.mirai.message/-message-packet-base/index.md) | 仅内部使用, 请使用 [ContactMessage](../../net.mamoe.mirai.message/-contact-message/index.md)`abstract class ~~MessagePacketBase~~<out TSender : `[`User`](../../net.mamoe.mirai.contact/-user/index.md)`, out TSubject : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> : `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md)`, `[`BotEvent`](./index.md) |
| [MessageRecallEvent](../-message-recall-event/index.md) | 消息撤回事件. 可是任意消息被任意人撤回.`sealed class MessageRecallEvent : `[`BotEvent`](./index.md) |
| [MessageSendEvent](../-message-send-event/index.md) | 主动发送消息`sealed class MessageSendEvent : `[`BotEvent`](./index.md)`, `[`BotActiveEvent`](../-bot-active-event.md)`, `[`AbstractCancellableEvent`](../../net.mamoe.mirai.event/-abstract-cancellable-event/index.md) |
| [NewFriendRequestEvent](../-new-friend-request-event/index.md) | 一个账号请求添加机器人为好友的事件`data class NewFriendRequestEvent : `[`BotEvent`](./index.md)`, `[`Packet`](../../net.mamoe.mirai.qqandroid.network/-packet/index.md) |

