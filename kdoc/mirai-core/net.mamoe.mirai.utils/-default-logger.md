[mirai-core](../index.md) / [net.mamoe.mirai.utils](index.md) / [DefaultLogger](./-default-logger.md)

# DefaultLogger

`var DefaultLogger: (identity: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?) -> `[`MiraiLogger`](-mirai-logger/index.md)

用于创建默认的日志记录器. 在一些需要使用日志的 Mirai 的组件, 如 [Bot](../net.mamoe.mirai/-bot/index.md), 都会通过这个函数构造日志记录器.
可直接修改这个变量的值来重定向日志输出.

**注意:** 请务必将所有的输出定向到日志记录系统, 否则在某些情况下 (如 web 控制台中) 将无法接收到输出

**注意:** 请为日志做好分类, 即不同的模块使用不同的 [MiraiLogger](-mirai-logger/index.md).
如, [Bot](../net.mamoe.mirai/-bot/index.md) 中使用 identity 为 "Bot(qqId)" 的 [MiraiLogger](-mirai-logger/index.md)
而 [Bot](../net.mamoe.mirai/-bot/index.md) 的网络处理中使用 identity 为 "BotNetworkHandler" 的.

