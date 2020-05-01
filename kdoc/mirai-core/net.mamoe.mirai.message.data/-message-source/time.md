[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageSource](index.md) / [time](./time.md)

# time

`abstract val time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

发送时间时间戳, 单位为秒.

时间戳可能来自服务器, 也可能来自 mirai, 且无法保证两者时间同步.

撤回消息时需要此值.

