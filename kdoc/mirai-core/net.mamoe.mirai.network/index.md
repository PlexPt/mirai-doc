[mirai-core](../index.md) / [net.mamoe.mirai.network](./index.md)

## Package net.mamoe.mirai.network

### Exceptions

| [CustomLoginFailedException](-custom-login-failed-exception/index.md) | 非 mirai 实现的异常`abstract class CustomLoginFailedException : `[`LoginFailedException`](-login-failed-exception/index.md) |
| [ForceOfflineException](-force-offline-exception/index.md) | 当 [Bot](../net.mamoe.mirai/-bot/index.md) 被迫下线时抛出, 作为 [Job.cancel](#) 的 `cause``class ForceOfflineException : CancellationException` |
| [LoginFailedException](-login-failed-exception/index.md) | 在 [登录](../net.mamoe.mirai/-bot/login.md) 失败时抛出, 可正常地中断登录过程.`sealed class LoginFailedException : `[`RuntimeException`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-runtime-exception/index.html) |
| [NoServerAvailableException](-no-server-available-exception/index.md) | 无可用服务器`class NoServerAvailableException : `[`LoginFailedException`](-login-failed-exception/index.md) |
| [NoStandardInputForCaptchaException](-no-standard-input-for-captcha-exception/index.md) | 无标准输入或 Kotlin 不支持此输入.`class NoStandardInputForCaptchaException : `[`LoginFailedException`](-login-failed-exception/index.md) |
| [UnsupportedSMSLoginException](-unsupported-s-m-s-login-exception/index.md) | 需要短信验证时抛出. mirai 目前还不支持短信验证.`class UnsupportedSMSLoginException : `[`LoginFailedException`](-login-failed-exception/index.md) |
| [WrongPasswordException](-wrong-password-exception/index.md) | 密码输入错误`class WrongPasswordException : `[`LoginFailedException`](-login-failed-exception/index.md) |

### Functions

| [closeAndJoin](close-and-join.md) | `suspend fun BotNetworkHandler.closeAndJoin(cause: `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`? = null): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

