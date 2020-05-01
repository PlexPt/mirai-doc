[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [MiraiLogger](./index.md)

# MiraiLogger

`interface MiraiLogger`

日志记录器. 所有的输出均依赖于它.
不同的对象可拥有只属于自己的 logger. 通过 [identity](identity.md) 来区分.

注意: 如果你需要重新实现日志, 请不要直接实现这个接口, 请继承 [MiraiLoggerPlatformBase](../-mirai-logger-platform-base/index.md)

在定义 logger 变量时, 请一直使用 [MiraiLogger](./index.md) 或者 [MiraiLoggerWithSwitch](../-mirai-logger-with-switch/index.md).

Mirai 内建三种日志实现, 分别是 [SimpleLogger](../-simple-logger/index.md), [PlatformLogger](../-platform-logger/index.md), [SilentLogger](../-silent-logger/index.md)

**See Also**

[SimpleLogger](../-simple-logger/index.md)

[PlatformLogger](../-platform-logger/index.md)

[SilentLogger](../-silent-logger/index.md)

[MiraiLoggerPlatformBase](../-mirai-logger-platform-base/index.md)

### Types

| [Companion](-companion.md) | 顶层日志记录器.`companion object ~~Companion~~ : `[`MiraiLogger`](./index.md) |

### Properties

| [follower](follower.md) | 随从. 在 this 中调用所有方法后都应继续往 [follower](follower.md) 传递调用. [follower](follower.md) 的存在可以让一次日志被多个日志记录器记录.`abstract var follower: `[`MiraiLogger`](./index.md)`?` |
| [identity](identity.md) | 日志的标记. 在 Mirai 中, identity 可为`abstract val identity: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |
| [isEnabled](is-enabled.md) | 获取 [MiraiLogger](./index.md) 是否已开启`abstract val isEnabled: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Functions

| [debug](debug.md) | 记录一个 *调试* 级别的日志.`abstract fun debug(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`open fun debug(e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`abstract fun debug(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [error](error.md) | 记录一个 *错误* 级别的日志.`abstract fun error(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`open fun error(e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`abstract fun error(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [info](info.md) | 记录一个 *信息* 级别的日志.`abstract fun info(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`open fun info(e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`abstract fun info(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [plus](plus.md) | 添加一个 [follower](plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower), 返回 [follower](plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower) 它只会把 `this` 的属性 [MiraiLogger.follower](follower.md) 修改为这个函数的参数 [follower](plus.md#net.mamoe.mirai.utils.MiraiLogger$plus(net.mamoe.mirai.utils.MiraiLogger.plus.T)/follower), 然后返回这个参数. 若 [MiraiLogger.follower](follower.md) 已经有值, 则会替换掉这个值.`abstract operator fun <T : `[`MiraiLogger`](./index.md)`> plus(follower: T): T` |
| [plusAssign](plus-assign.md) | 添加一个 [follower](plus-assign.md#net.mamoe.mirai.utils.MiraiLogger$plusAssign(net.mamoe.mirai.utils.MiraiLogger)/follower) 若 [MiraiLogger.follower](follower.md) 已经有值, 则会对这个值调用 [plusAssign](plus-assign.md). 即会在日志记录器链的末尾添加这个参数 [follower](plus-assign.md#net.mamoe.mirai.utils.MiraiLogger$plusAssign(net.mamoe.mirai.utils.MiraiLogger)/follower)`abstract operator fun plusAssign(follower: `[`MiraiLogger`](./index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [verbose](verbose.md) | 记录一个 `verbose` 级别的日志. 无关紧要的, 经常大量输出的日志应使用它.`abstract fun verbose(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`open fun verbose(e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`abstract fun verbose(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [warning](warning.md) | 记录一个 *警告* 级别的日志.`abstract fun warning(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`open fun warning(e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`abstract fun warning(message: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

### Extension Functions

| [debug](../debug.md) | `fun `[`MiraiLogger`](./index.md)`.debug(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](./index.md)`.debug(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [error](../error.md) | `fun `[`MiraiLogger`](./index.md)`.error(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](./index.md)`.error(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [info](../info.md) | `fun `[`MiraiLogger`](./index.md)`.info(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](./index.md)`.info(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [verbose](../verbose.md) | `fun `[`MiraiLogger`](./index.md)`.verbose(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](./index.md)`.verbose(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [warning](../warning.md) | `fun `[`MiraiLogger`](./index.md)`.warning(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](./index.md)`.warning(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [withSwitch](../with-switch.md) | 给这个 logger 添加一个开关, 用于控制是否记录 log`fun `[`MiraiLogger`](./index.md)`.withSwitch(default: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true): `[`MiraiLoggerWithSwitch`](../-mirai-logger-with-switch/index.md) |

### Inheritors

| [MiraiLoggerPlatformBase](../-mirai-logger-platform-base/index.md) | 日志基类. 实现了 [follower](../-mirai-logger-platform-base/follower.md) 的调用传递. 若 Mirai 自带的日志系统无法满足需求, 请继承这个类并实现其抽象函数.`abstract class MiraiLoggerPlatformBase : `[`MiraiLogger`](./index.md) |

