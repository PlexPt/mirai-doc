[mirai-core](../../index.md) / [net.mamoe.mirai](../index.md) / [Bot](index.md) / [login](./login.md)

# login

`abstract suspend fun login(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

登录, 或重新登录.
这个函数总是关闭一切现有网路任务 (但不会关闭其他任务), 然后重新登录并重新缓存好友列表和群列表.

一般情况下不需要重新登录. Mirai 能够自动处理掉线情况.

### Exceptions

`LoginFailedException` - 正常登录失败时抛出

**See Also**

[alsoLogin](../also-login.md)

