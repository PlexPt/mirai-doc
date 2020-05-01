[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Group](index.md) / [quit](./quit.md)

# quit

`@SinceMirai("0.37.0") abstract suspend fun quit(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

让机器人退出这个群.

### Exceptions

`IllegalStateException` - 当机器人为群主时

**Return**
退出成功时 true; 已经退出时 false

