[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [BotConfiguration](index.md) / [inheritCoroutineContext](./inherit-coroutine-context.md)

# inheritCoroutineContext

`@SinceMirai("0.38.0") suspend fun inheritCoroutineContext(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

使用当前协程的 [coroutineContext](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/coroutine-context.html) 作为 [parentCoroutineContext](parent-coroutine-context.md)

用例:

```
coroutineScope {
  val bot = Bot(...)
  bot.login()
} // coroutineScope 会等待 Bot 退出
```

