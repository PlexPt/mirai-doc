[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [User](index.md) / [sendMessage](./send-message.md)

# sendMessage

`abstract suspend fun sendMessage(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`User`](index.md)`>`

向这个对象发送消息.

单条消息最大可发送 4500 字符或 50 张图片.

### Exceptions

`EventCancelledException` - 当发送消息事件被取消时抛出

`BotIsBeingMutedException` - 发送群消息时若 [Bot](../../net.mamoe.mirai/-bot/index.md) 被禁言抛出

`MessageTooLargeException` - 当消息过长时抛出

`IllegalArgumentException` - 当消息内容为空时抛出 (详见 [Message.isContentEmpty](#))

**See Also**

[FriendMessageSendEvent](../../net.mamoe.mirai.event.events/-message-send-event/-friend-message-send-event/index.md)

[GroupMessageSendEvent](../../net.mamoe.mirai.event.events/-message-send-event/-group-message-send-event/index.md)

**Return**
消息回执. 可进行撤回 ([MessageReceipt.recall](#))

`suspend fun sendMessage(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`User`](index.md)`>`

**See Also**

[sendMessage](./send-message.md)

