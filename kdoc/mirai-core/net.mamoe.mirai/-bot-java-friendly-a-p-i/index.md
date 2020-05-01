[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [BotJavaFriendlyAPI](./index.md)

# BotJavaFriendlyAPI

`abstract class BotJavaFriendlyAPI`

[Bot](../-bot/index.md) 中为了让 Java 使用者调用更方便的 API 列表.

### Constructors

| [&lt;init&gt;](-init-.md) | [Bot](../-bot/index.md) 中为了让 Java 使用者调用更方便的 API 列表.`BotJavaFriendlyAPI()` |

### Functions

| [__addFriendBlockingForJava__](__add-friend-blocking-for-java__.md) | 添加一个好友`fun __addFriendBlockingForJava__(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`? = null, remark: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`? = null): `[`AddFriendResult`](../../net.mamoe.mirai.data/-add-friend-result/index.md) |
| [__joinBlockingForJava__](__join-blocking-for-java__.md) | 阻塞当前线程直到 [Bot](../-bot/index.md) 下线.`fun __joinBlockingForJava__(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [__loginAsyncForJava__](__login-async-for-java__.md) | 异步调用 [](#)`fun __loginAsyncForJava__(): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`>` |
| [__loginBlockingForJava__](__login-blocking-for-java__.md) | 登录, 或重新登录. 这个函数总是关闭一切现有网路任务, 然后重新登录并重新缓存好友列表和群列表.`fun __loginBlockingForJava__(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [__queryImageUrlAsyncForJava__](__query-image-url-async-for-java__.md) | 异步调用 [](#)`fun __queryImageUrlAsyncForJava__(image: `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`>` |
| [__queryImageUrlBlockingForJava__](__query-image-url-blocking-for-java__.md) | 获取图片下载链接`fun __queryImageUrlBlockingForJava__(image: `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [__recallAsyncForJava__](__recall-async-for-java__.md) | 异步调用 [](#)`fun __recallAsyncForJava__(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`>`<br>`fun __recallAsyncForJava__(source: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`>` |
| [__recallBlockingForJava__](__recall-blocking-for-java__.md) | 撤回这条消息. 可撤回自己 2 分钟内发出的消息, 和任意时间的群成员的消息.`fun __recallBlockingForJava__(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>撤回这条消息. 根据 [message](__recall-blocking-for-java__.md#net.mamoe.mirai.BotJavaFriendlyAPI$__recallBlockingForJava__(net.mamoe.mirai.message.data.MessageChain)/message) 内的 [MessageSource](../../net.mamoe.mirai.message.data/-message-source/index.md) 进行相关判断.`fun __recallBlockingForJava__(message: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [__recallIn_MemberForJava__](__recall-in_-member-for-java__.md) | 在一段时间后撤回这条消息. 将根据 [MessageSource.groupId](#) 判断消息是群消息还是好友消息.`fun __recallIn_MemberForJava__(source: `[`MessageSource`](../../net.mamoe.mirai.message.data/-message-source/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>在一段时间后撤回这条消息.`fun __recallIn_MemberForJava__(source: `[`MessageChain`](../../net.mamoe.mirai.message.data/-message-chain/index.md)`, millis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

### Inheritors

| [Bot](../-bot/index.md) | 机器人对象. 一个机器人实例登录一个 QQ 账号. Mirai 为多账号设计, 可同时维护多个机器人.`abstract class Bot : CoroutineScope, `[`LowLevelBotAPIAccessor`](../-low-level-bot-a-p-i-accessor/index.md)`, `[`BotJavaFriendlyAPI`](./index.md)`, `[`ContactOrBot`](../../net.mamoe.mirai.contact/-contact-or-bot/index.md) |

