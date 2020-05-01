[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [BotJavaFriendlyAPI](index.md) / [__loginBlockingForJava__](./__login-blocking-for-java__.md)

# __loginBlockingForJava__

`@JvmName("login") fun __loginBlockingForJava__(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

登录, 或重新登录.
这个函数总是关闭一切现有网路任务, 然后重新登录并重新缓存好友列表和群列表.

一般情况下不需要重新登录. Mirai 能够自动处理掉线情况.

最终调用 [net.mamoe.mirai.network.BotNetworkHandler.closeEverythingAndRelogin](#)

### Exceptions

`LoginFailedException` - 