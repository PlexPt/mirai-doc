[mirai-core](../index.md) / [net.mamoe.mirai.event.events](index.md) / [BotActiveEvent](./-bot-active-event.md)

# BotActiveEvent

`interface BotActiveEvent : `[`BotEvent`](-bot-event/index.md)

由 [Bot](../net.mamoe.mirai/-bot/index.md) 主动发起的动作的事件

### Extension Functions

| [broadcast](../net.mamoe.mirai.event/broadcast.md) | 广播一个事件的唯一途径.`suspend fun <E : `[`Event`](../net.mamoe.mirai.event/-event.md)`> E.broadcast(): E` |

### Inheritors

| [BeforeImageUploadEvent](-before-image-upload-event/index.md) | 图片上传前. 可以阻止上传`data class BeforeImageUploadEvent : `[`BotEvent`](-bot-event/index.md)`, `[`BotActiveEvent`](./-bot-active-event.md)`, `[`AbstractCancellableEvent`](../net.mamoe.mirai.event/-abstract-cancellable-event/index.md) |
| [BotOnlineEvent](-bot-online-event/index.md) | [Bot](../net.mamoe.mirai/-bot/index.md) 登录完成, 好友列表, 群组列表初始化完成`data class BotOnlineEvent : `[`BotActiveEvent`](./-bot-active-event.md) |
| [BotReloginEvent](-bot-relogin-event/index.md) | [Bot](../net.mamoe.mirai/-bot/index.md) 主动重新登录.`data class BotReloginEvent : `[`BotEvent`](-bot-event/index.md)`, `[`BotActiveEvent`](./-bot-active-event.md) |
| [ImageUploadEvent](-image-upload-event/index.md) | 图片上传完成`sealed class ImageUploadEvent : `[`BotEvent`](-bot-event/index.md)`, `[`BotActiveEvent`](./-bot-active-event.md)`, `[`AbstractCancellableEvent`](../net.mamoe.mirai.event/-abstract-cancellable-event/index.md) |
| [MessageSendEvent](-message-send-event/index.md) | 主动发送消息`sealed class MessageSendEvent : `[`BotEvent`](-bot-event/index.md)`, `[`BotActiveEvent`](./-bot-active-event.md)`, `[`AbstractCancellableEvent`](../net.mamoe.mirai.event/-abstract-cancellable-event/index.md) |

