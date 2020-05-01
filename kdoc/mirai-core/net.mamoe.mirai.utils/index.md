[mirai-core](../index.md) / [net.mamoe.mirai.utils](./index.md)

## Package net.mamoe.mirai.utils

### Types

| [BotConfiguration](-bot-configuration/index.md) | [Bot](../net.mamoe.mirai/-bot/index.md) 配置`open class BotConfiguration` |
| [Context](-context/index.md) | On Android, typealias to `android.content.Context` On JVM, empty class.`abstract class Context` |
| [ContextImpl](-context-impl/index.md) | `open class ContextImpl : `[`Context`](-context/index.md) |
| [DefaultLoginSolver](-default-login-solver/index.md) | 自动选择 [SwingSolver](-swing-solver/index.md) 或 [StandardCharImageLoginSolver](-standard-char-image-login-solver/index.md)`class DefaultLoginSolver : `[`LoginSolver`](-login-solver/index.md) |
| [DeviceInfo](-device-info/index.md) | 设备信息. 可通过继承 [SystemDeviceInfo](-system-device-info/index.md) 来在默认的基础上修改`abstract class DeviceInfo` |
| [DeviceInfoData](-device-info-data/index.md) | `class DeviceInfoData : `[`DeviceInfo`](-device-info/index.md) |
| [ExternalImage](-external-image/index.md) | 外部图片. 图片数据还没有读取到内存.`class ExternalImage` |
| [LockFreeLinkedList](-lock-free-linked-list/index.md) | Implementation of lock-free LinkedList.`open class LockFreeLinkedList<E>` |
| [LockFreeLinkedListNode](-lock-free-linked-list-node/index.md) | `open class LockFreeLinkedListNode<E>` |
| [LoginSolver](-login-solver/index.md) | 验证码, 设备锁解决器`abstract class LoginSolver` |
| [MiraiLogger](-mirai-logger/index.md) | 日志记录器. 所有的输出均依赖于它. 不同的对象可拥有只属于自己的 logger. 通过 [identity](-mirai-logger/identity.md) 来区分.`interface MiraiLogger` |
| [MiraiLoggerPlatformBase](-mirai-logger-platform-base/index.md) | 日志基类. 实现了 [follower](-mirai-logger-platform-base/follower.md) 的调用传递. 若 Mirai 自带的日志系统无法满足需求, 请继承这个类并实现其抽象函数.`abstract class MiraiLoggerPlatformBase : `[`MiraiLogger`](-mirai-logger/index.md) |
| [MiraiLoggerWithSwitch](-mirai-logger-with-switch/index.md) | 带有开关的 Logger. 仅能通过 [MiraiLogger.withSwitch](with-switch.md) 构造`class MiraiLoggerWithSwitch : `[`MiraiLoggerPlatformBase`](-mirai-logger-platform-base/index.md) |
| [PlatformLogger](-platform-logger/index.md) | 当前平台的默认的日志记录器. 在 *JVM 控制台* 端的实现为 [println](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/println.html) 在 *Android* 端的实现为 `android.util.Log``open class PlatformLogger : `[`MiraiLoggerPlatformBase`](-mirai-logger-platform-base/index.md) |
| [SilentLogger](-silent-logger/index.md) | 不做任何事情的 logger, keep silent.`object SilentLogger : `[`PlatformLogger`](-platform-logger/index.md) |
| [SimpleLogger](-simple-logger/index.md) | 简易日志记录, 所有类型日志都会被重定向 [logger](#)`class SimpleLogger : `[`MiraiLoggerPlatformBase`](-mirai-logger-platform-base/index.md) |
| [StandardCharImageLoginSolver](-standard-char-image-login-solver/index.md) | 使用字符图片展示验证码, 使用 [input](#) 获取输入, 使用 [overrideLogger](#) 输出`class StandardCharImageLoginSolver : `[`LoginSolver`](-login-solver/index.md) |
| [SwingSolver](-swing-solver/index.md) | `object SwingSolver : `[`LoginSolver`](-login-solver/index.md) |
| [SystemDeviceInfo](-system-device-info/index.md) | 通过本机信息来获取设备信息.`open class SystemDeviceInfo : `[`DeviceInfo`](-device-info/index.md) |
| [UnsafeWeakRef](-unsafe-weak-ref/index.md) | WeakRef that `getValue` for delegation throws an [IllegalStateException](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html) if the referent is released by GC. Therefore it returns notnull value only`class UnsafeWeakRef<T>` |

### Annotations

| [MiraiExperimentalAPI](-mirai-experimental-a-p-i/index.md) | 标记这个类, 类型, 函数, 属性, 字段, 或构造器为实验性的 API.`annotation class MiraiExperimentalAPI` |
| [MiraiInternalAPI](-mirai-internal-a-p-i/index.md) | 标记为一个仅供 Mirai 内部使用的 API.`annotation class MiraiInternalAPI` |
| [SinceMirai](-since-mirai/index.md) | 标记一个自 Mirai 某个版本起才支持或在这个版本修改过的 API.`annotation class SinceMirai` |
| [Throws](-throws/index.md) | This annotation indicates what exceptions should be declared by a function when compiled to a JVM method.`annotation class Throws` |
| [WeakRefProperty](-weak-ref-property/index.md) | Indicates that the property is delegated by a [WeakRef](-weak-ref/index.md)`annotation class WeakRefProperty` |

### Exceptions

| [OverFileSizeMaxException](-over-file-size-max-exception/index.md) | 图片文件过大`class OverFileSizeMaxException : `[`IllegalStateException`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html) |

### Extensions for External Classes

| [java.awt.image.BufferedImage](java.awt.image.-buffered-image/index.md) |  |
| [java.io.File](java.io.-file/index.md) |  |
| [java.io.InputStream](java.io.-input-stream/index.md) |  |
| [java.lang.ref.WeakReference](java.lang.ref.-weak-reference/index.md) |  |
| [java.net.URL](java.net.-u-r-l/index.md) |  |
| [kotlin.collections.Iterable](kotlin.collections.-iterable/index.md) |  |
| [kotlin.Int](kotlin.-int/index.md) |  |
| [kotlin.sequences.Sequence](kotlin.sequences.-sequence/index.md) |  |
| [kotlinx.coroutines.io.ByteReadChannel](kotlinx.coroutines.io.-byte-read-channel/index.md) |  |
| [kotlinx.io.core.Input](kotlinx.io.core.-input/index.md) |  |

### Properties

| [currentTimeMillis](current-time-millis.md) | 时间戳`val currentTimeMillis: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [currentTimeSeconds](current-time-seconds.md) | `val currentTimeSeconds: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [DefaultLogger](-default-logger.md) | 用于创建默认的日志记录器. 在一些需要使用日志的 Mirai 的组件, 如 [Bot](../net.mamoe.mirai/-bot/index.md), 都会通过这个函数构造日志记录器. 可直接修改这个变量的值来重定向日志输出.`var DefaultLogger: (identity: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?) -> `[`MiraiLogger`](-mirai-logger/index.md) |

### Functions

| [asSequence](as-sequence.md) | Builds a [Sequence](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html) containing all the elements in [this](as-sequence/-this-.md) in the same order.`fun <E> `[`LockFreeLinkedList`](-lock-free-linked-list/index.md)`<E>.asSequence(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<E>` |
| [debug](debug.md) | `fun `[`MiraiLogger`](-mirai-logger/index.md)`.debug(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](-mirai-logger/index.md)`.debug(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [error](error.md) | `fun `[`MiraiLogger`](-mirai-logger/index.md)`.error(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](-mirai-logger/index.md)`.error(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [getValue](get-value.md) | Provides delegate value.`operator fun <T> `[`UnsafeWeakRef`](-unsafe-weak-ref/index.md)`<T>.getValue(thisRef: `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?, property: `[`KProperty`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property/index.html)`<*>): T` |
| [info](info.md) | `fun `[`MiraiLogger`](-mirai-logger/index.md)`.info(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](-mirai-logger/index.md)`.info(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [isRemoved](is-removed.md) | `fun <E> `[`LockFreeLinkedListNode`](-lock-free-linked-list-node/index.md)`<E>.isRemoved(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [iterator](iterator.md) | `operator fun <E> `[`LockFreeLinkedList`](-lock-free-linked-list/index.md)`<E>.iterator(): `[`Iterator`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterator/index.html)`<E>` |
| [sendImage](send-image.md) | 将图片作为单独的消息发送给 [this](send-image/-this-.md)`suspend fun <C : `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`> C.sendImage(image: `[`ExternalImage`](-external-image/index.md)`): `[`MessageReceipt`](../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [sendTo](send-to.md) | 将图片作为单独的消息发送给指定联系人`suspend fun <C : `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`> `[`ExternalImage`](-external-image/index.md)`.sendTo(contact: C): `[`MessageReceipt`](../net.mamoe.mirai.message/-message-receipt/index.md)`<C>` |
| [toList](to-list.md) | Collect all the elements into a [MutableList](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html) then cast it as a [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`fun <E> `[`LockFreeLinkedList`](-lock-free-linked-list/index.md)`<E>.toList(): `[`List`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`<E>` |
| [toMutableList](to-mutable-list.md) | Collect all the elements into a [MutableList](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html).`fun <E> `[`LockFreeLinkedList`](-lock-free-linked-list/index.md)`<E>.toMutableList(): `[`MutableList`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html)`<E>` |
| [toMutableSet](to-mutable-set.md) | Collect all the elements into a [MutableSet](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html).`fun <E> `[`LockFreeLinkedList`](-lock-free-linked-list/index.md)`<E>.toMutableSet(): `[`MutableSet`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html)`<E>` |
| [toSet](to-set.md) | Collect all the elements into a [MutableSet](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html) then cast it as a [Set](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html)`fun <E> `[`LockFreeLinkedList`](-lock-free-linked-list/index.md)`<E>.toSet(): `[`Set`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html)`<E>` |
| [unsafeWeakRef](unsafe-weak-ref.md) | Provides a weak reference to [this](unsafe-weak-ref/-this-.md). The `getValue` for delegation throws an [IllegalStateException](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html) if the referent is released by GC. Therefore it returns notnull value only`fun <T> T.unsafeWeakRef(): `[`UnsafeWeakRef`](-unsafe-weak-ref/index.md)`<T>` |
| [upload](upload.md) | 上传图片并通过图片 ID 构造 [Image](../net.mamoe.mirai.message.data/-image/index.md) 这个函数可能需消耗一段时间`suspend fun `[`ExternalImage`](-external-image/index.md)`.upload(contact: `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`): `[`OfflineImage`](../net.mamoe.mirai.message.data/-offline-image/index.md) |
| [verbose](verbose.md) | `fun `[`MiraiLogger`](-mirai-logger/index.md)`.verbose(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](-mirai-logger/index.md)`.verbose(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [warning](warning.md) | `fun `[`MiraiLogger`](-mirai-logger/index.md)`.warning(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`fun `[`MiraiLogger`](-mirai-logger/index.md)`.warning(lazyMessage: () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?, e: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`?): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [weakRef](weak-ref.md) | Provides a weak reference to [this](weak-ref/-this-.md) The `getValue` for delegation returns [this](weak-ref/-this-.md) when [this](weak-ref/-this-.md) is not released by GC`fun <T> T.weakRef(): `[`WeakRef`](-weak-ref/index.md)`<T>` |
| [withSwitch](with-switch.md) | 给这个 logger 添加一个开关, 用于控制是否记录 log`fun `[`MiraiLogger`](-mirai-logger/index.md)`.withSwitch(default: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)` = true): `[`MiraiLoggerWithSwitch`](-mirai-logger-with-switch/index.md) |

