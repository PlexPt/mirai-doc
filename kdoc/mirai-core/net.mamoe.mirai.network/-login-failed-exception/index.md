[mirai-core](../../index.md) / [net.mamoe.mirai.network](../index.md) / [LoginFailedException](./index.md)

# LoginFailedException

`sealed class LoginFailedException : `[`RuntimeException`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-runtime-exception/index.html)

在 [登录](../../net.mamoe.mirai/-bot/login.md) 失败时抛出, 可正常地中断登录过程.

### Properties

| [killBot](kill-bot.md) | 是否可因此登录失败而关闭 [Bot](../../net.mamoe.mirai/-bot/index.md). 一般是密码错误, 被冻结等异常时.`val killBot: `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

### Inheritors

| [CustomLoginFailedException](../-custom-login-failed-exception/index.md) | 非 mirai 实现的异常`abstract class CustomLoginFailedException : `[`LoginFailedException`](./index.md) |
| [NoServerAvailableException](../-no-server-available-exception/index.md) | 无可用服务器`class NoServerAvailableException : `[`LoginFailedException`](./index.md) |
| [NoStandardInputForCaptchaException](../-no-standard-input-for-captcha-exception/index.md) | 无标准输入或 Kotlin 不支持此输入.`class NoStandardInputForCaptchaException : `[`LoginFailedException`](./index.md) |
| [UnsupportedSMSLoginException](../-unsupported-s-m-s-login-exception/index.md) | 需要短信验证时抛出. mirai 目前还不支持短信验证.`class UnsupportedSMSLoginException : `[`LoginFailedException`](./index.md) |
| [WrongPasswordException](../-wrong-password-exception/index.md) | 密码输入错误`class WrongPasswordException : `[`LoginFailedException`](./index.md) |

