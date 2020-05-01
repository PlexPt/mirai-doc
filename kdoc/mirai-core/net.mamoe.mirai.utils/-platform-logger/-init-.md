[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [PlatformLogger](index.md) / [&lt;init&gt;](./-init-.md)

# &lt;init&gt;

`PlatformLogger(identity: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`? = "Mirai")`

当前平台的默认的日志记录器.
在 *JVM 控制台* 端的实现为 [println](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/println.html)
在 *Android* 端的实现为 `android.util.Log`

不应该直接构造这个类的实例. 请使用 [DefaultLogger](../-default-logger.md), 或使用默认的顶层日志记录 [MiraiLogger.Companion](../-mirai-logger/-companion.md)

`PlatformLogger(identity: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`? = "Mirai", output: (`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`)`

JVM 控制台日志实现

