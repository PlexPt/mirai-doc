[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [ContactJavaFriendlyAPI](index.md) / [__sendMessageBlockingForJava__](./__send-message-blocking-for-java__.md)

# __sendMessageBlockingForJava__

`@JvmName("sendMessage") open fun __sendMessageBlockingForJava__(message: `[`Message`](../../net.mamoe.mirai.message.data/-message/index.md)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Contact`](../-contact/index.md)`>`

向这个对象发送消息.

单条消息最大可发送 4500 字符或 50 张图片.

### Exceptions

`EventCancelledException` - 当发送消息事件被取消时抛出

`BotIsBeingMutedException` - 发送群消息时若 [Bot](../../net.mamoe.mirai/-bot/index.md) 被禁言抛出

`MessageTooLargeException` - 当消息过长时抛出

**See Also**

[FriendMessageSendEvent](../../net.mamoe.mirai.event.events/-message-send-event/-friend-message-send-event/index.md)

[GroupMessageSendEvent](../../net.mamoe.mirai.event.events/-message-send-event/-group-message-send-event/index.md)

**Return**
消息回执. 可 [引用回复](#)（仅群聊）或 [撤回](#) 这条消息.

`@JvmName("sendMessage") open fun __sendMessageBlockingForJava__(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`MessageReceipt`](../../net.mamoe.mirai.message/-message-receipt/index.md)`<`[`Contact`](../-contact/index.md)`>`