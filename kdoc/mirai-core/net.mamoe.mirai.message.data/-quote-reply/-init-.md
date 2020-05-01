[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [QuoteReply](index.md) / [&lt;init&gt;](./-init-.md)

# &lt;init&gt;

`QuoteReply(source: `[`MessageSource`](../-message-source/index.md)`)`

引用回复.

支持引用任何一条消息发送给任何人.

#### [source](source.md) 的类型:

* 在发送引用回复时, [source](source.md) 类型为 [OnlineMessageSource](../-online-message-source/index.md) 或 [OfflineMessageSource](../-offline-message-source/index.md)
* 在接收引用回复时, [source](source.md) 类型一定为 [OfflineMessageSource](../-offline-message-source/index.md)

#### 原消息内容

引用回复的原消息内容完全由 [source](source.md) 中 [MessageSource.originalMessage](../-message-source/original-message.md) 控制, 客户端不会自行寻找原消息.

#### 客户端内跳转

客户端在跳转原消息时, 会通过 [MessageSource.id](../-message-source/id.md) 等 metadata

**See Also**

[MessageSource](../-message-source/index.md)

