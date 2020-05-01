[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [LoginSolver](index.md) / [onSolveUnsafeDeviceLoginVerify](./on-solve-unsafe-device-login-verify.md)

# onSolveUnsafeDeviceLoginVerify

`abstract suspend fun onSolveUnsafeDeviceLoginVerify(bot: `[`Bot`](../../net.mamoe.mirai/-bot/index.md)`, url: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`?`

处理不安全设备验证.
在处理完成后返回任意内容 (包含 `null`) 均视为处理成功.
抛出一个 [LoginFailedException](../../net.mamoe.mirai.network/-login-failed-exception/index.md) 以正常地终止登录, 抛出任意其他 [Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html) 将视为异常终止.

### Exceptions

`LoginFailedException` -

**Return**
任意内容. 返回值保留以供未来更新.

