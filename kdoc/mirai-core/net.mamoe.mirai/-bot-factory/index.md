[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [BotFactory](./index.md)

# BotFactory

`interface BotFactory`

构造 [Bot](-bot.md) 的工厂.

在协议模块中有各自的实现.

* `mirai-core-timpc`: `TIMPC`
* `mirai-core-qqandroid`: `QQAndroid`

### Functions

| [Bot](-bot.md) | 使用指定的 [配置](-bot.md#net.mamoe.mirai.BotFactory$Bot(net.mamoe.mirai.utils.Context, kotlin.Long, kotlin.String, net.mamoe.mirai.utils.BotConfiguration)/configuration) 构造 [Bot](../-bot/index.md) 实例`abstract fun Bot(context: `[`Context`](../../net.mamoe.mirai.utils/-context/index.md)`, qq: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, password: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, configuration: `[`BotConfiguration`](../../net.mamoe.mirai.utils/-bot-configuration/index.md)` = BotConfiguration.Default): `[`Bot`](../-bot/index.md)<br>`abstract fun Bot(context: `[`Context`](../../net.mamoe.mirai.utils/-context/index.md)`, qq: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, passwordMd5: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`, configuration: `[`BotConfiguration`](../../net.mamoe.mirai.utils/-bot-configuration/index.md)` = BotConfiguration.Default): `[`Bot`](../-bot/index.md) |

### Extension Functions

| [Bot](../-bot.md) | 使用指定的 [配置](../-bot.md#net.mamoe.mirai$Bot(net.mamoe.mirai.BotFactory, net.mamoe.mirai.utils.Context, kotlin.Long, kotlin.String, kotlin.Function1((net.mamoe.mirai.utils.BotConfiguration, kotlin.Unit)))/configuration) 构造 [Bot](../-bot/index.md) 实例`fun `[`BotFactory`](./index.md)`.Bot(context: `[`Context`](../../net.mamoe.mirai.utils/-context/index.md)`, qq: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, password: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, configuration: `[`BotConfiguration`](../../net.mamoe.mirai.utils/-bot-configuration/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Bot`](../-bot/index.md)<br>`fun `[`BotFactory`](./index.md)`.Bot(context: `[`Context`](../../net.mamoe.mirai.utils/-context/index.md)`, qq: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`, password: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`, configuration: `[`BotConfiguration`](../../net.mamoe.mirai.utils/-bot-configuration/index.md)`.() -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Bot`](../-bot/index.md) |

