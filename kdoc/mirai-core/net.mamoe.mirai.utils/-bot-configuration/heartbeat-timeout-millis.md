[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [BotConfiguration](index.md) / [heartbeatTimeoutMillis](./heartbeat-timeout-millis.md)

# heartbeatTimeoutMillis

`var heartbeatTimeoutMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)

每次心跳时等待结果的时间.
一旦心跳超时, 整个网络服务将会重启 (将消耗约 5s). 除正在进行的任务 (如图片上传) 会被中断外, 事件和插件均不受影响.

