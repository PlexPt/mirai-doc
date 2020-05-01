[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [BotImpl](index.md) / [relogin](./relogin.md)

# relogin

`protected abstract suspend fun relogin(cause: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

Close server connection, resend login packet, BUT DOESN'T [BotNetworkHandler.init](#)

