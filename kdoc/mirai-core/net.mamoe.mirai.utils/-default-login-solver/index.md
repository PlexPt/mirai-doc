[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [DefaultLoginSolver](./index.md)

# DefaultLoginSolver

`class DefaultLoginSolver : `[`LoginSolver`](../-login-solver/index.md)

自动选择 [SwingSolver](../-swing-solver/index.md) 或 [StandardCharImageLoginSolver](../-standard-char-image-login-solver/index.md)

### Constructors

| [&lt;init&gt;](-init-.md) | 自动选择 [SwingSolver](../-swing-solver/index.md) 或 [StandardCharImageLoginSolver](../-standard-char-image-login-solver/index.md)`DefaultLoginSolver(input: suspend () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, overrideLogger: `[`MiraiLogger`](../-mirai-logger/index.md)`? = null)` |

### Properties

| [input](input.md) | `val input: suspend () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [overrideLogger](override-logger.md) | `val overrideLogger: `[`MiraiLogger`](../-mirai-logger/index.md)`?` |

### Functions

| [onSolvePicCaptcha](on-solve-pic-captcha.md) | `suspend fun onSolvePicCaptcha(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, data: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |
| [onSolveSliderCaptcha](on-solve-slider-captcha.md) | `suspend fun onSolveSliderCaptcha(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, url: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |
| [onSolveUnsafeDeviceLoginVerify](on-solve-unsafe-device-login-verify.md) | `suspend fun onSolveUnsafeDeviceLoginVerify(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, url: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |

