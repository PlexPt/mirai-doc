[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [StandardCharImageLoginSolver](./index.md)

# StandardCharImageLoginSolver

`class StandardCharImageLoginSolver : `[`LoginSolver`](../-login-solver/index.md)

使用字符图片展示验证码, 使用 [input](#) 获取输入, 使用 [overrideLogger](#) 输出

### Constructors

| [&lt;init&gt;](-init-.md) | 使用字符图片展示验证码, 使用 [input](#) 获取输入, 使用 [overrideLogger](#) 输出`StandardCharImageLoginSolver(input: suspend () -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`, overrideLogger: `[`MiraiLogger`](../-mirai-logger/index.md)`? = null)` |

### Functions

| [onSolvePicCaptcha](on-solve-pic-captcha.md) | `suspend fun onSolvePicCaptcha(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, data: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |
| [onSolveSliderCaptcha](on-solve-slider-captcha.md) | `suspend fun onSolveSliderCaptcha(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, url: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |
| [onSolveUnsafeDeviceLoginVerify](on-solve-unsafe-device-login-verify.md) | `suspend fun onSolveUnsafeDeviceLoginVerify(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, url: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?` |

