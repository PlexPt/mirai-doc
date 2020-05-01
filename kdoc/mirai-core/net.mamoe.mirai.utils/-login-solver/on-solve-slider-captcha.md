[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [LoginSolver](index.md) / [onSolveSliderCaptcha](./on-solve-slider-captcha.md)

# onSolveSliderCaptcha

`abstract suspend fun onSolveSliderCaptcha(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, url: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?`

处理滑动验证码.
返回 null 以表示无法处理验证码, 将会刷新验证码或重试登录.
抛出一个 [LoginFailedException](../../net.mamoe.mirai.network/-login-failed-exception/index.md) 以正常地终止登录, 抛出任意其他 [Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html) 将视为异常终止

### Exceptions

`LoginFailedException` -

**Return**
验证码解决成功后获得的 ticket.

