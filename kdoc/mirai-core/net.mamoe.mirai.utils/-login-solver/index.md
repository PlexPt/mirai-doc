[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [LoginSolver](./index.md)

# LoginSolver

`abstract class LoginSolver`

验证码, 设备锁解决器

### Constructors

| [&lt;init&gt;](-init-.md) | 验证码, 设备锁解决器`LoginSolver()` |

### Functions

| [onSolvePicCaptcha](on-solve-pic-captcha.md) | 处理图片验证码. 返回 null 以表示无法处理验证码, 将会刷新验证码或重试登录. 抛出一个 [LoginFailedException](../../net.mamoe.mirai.network/-login-failed-exception/index.md) 以正常地终止登录, 抛出任意其他 [Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html) 将视为异常终止`abstract suspend fun onSolvePicCaptcha(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, data: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |
| [onSolveSliderCaptcha](on-solve-slider-captcha.md) | 处理滑动验证码. 返回 null 以表示无法处理验证码, 将会刷新验证码或重试登录. 抛出一个 [LoginFailedException](../../net.mamoe.mirai.network/-login-failed-exception/index.md) 以正常地终止登录, 抛出任意其他 [Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html) 将视为异常终止`abstract suspend fun onSolveSliderCaptcha(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, url: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |
| [onSolveUnsafeDeviceLoginVerify](on-solve-unsafe-device-login-verify.md) | 处理不安全设备验证. 在处理完成后返回任意内容 (包含 `null`) 均视为处理成功. 抛出一个 [LoginFailedException](../../net.mamoe.mirai.network/-login-failed-exception/index.md) 以正常地终止登录, 抛出任意其他 [Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html) 将视为异常终止.`abstract suspend fun onSolveUnsafeDeviceLoginVerify(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, url: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |

### Companion Object Properties

| [Default](-default.md) | `val Default: `[`LoginSolver`](./index.md) |

### Inheritors

| [DefaultLoginSolver](../-default-login-solver/index.md) | 自动选择 [SwingSolver](../-swing-solver/index.md) 或 [StandardCharImageLoginSolver](../-standard-char-image-login-solver/index.md)`class DefaultLoginSolver : `[`LoginSolver`](./index.md) |
| [StandardCharImageLoginSolver](../-standard-char-image-login-solver/index.md) | 使用字符图片展示验证码, 使用 [input](#) 获取输入, 使用 [overrideLogger](#) 输出`class StandardCharImageLoginSolver : `[`LoginSolver`](./index.md) |
| [SwingSolver](../-swing-solver/index.md) | `object SwingSolver : `[`LoginSolver`](./index.md) |

