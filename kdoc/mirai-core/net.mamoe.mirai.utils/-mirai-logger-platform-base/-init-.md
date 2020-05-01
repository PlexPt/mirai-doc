[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [MiraiLoggerPlatformBase](index.md) / [&lt;init&gt;](./-init-.md)

# &lt;init&gt;

`MiraiLoggerPlatformBase()`

日志基类. 实现了 [follower](follower.md) 的调用传递.
若 Mirai 自带的日志系统无法满足需求, 请继承这个类并实现其抽象函数.

这个类不应该被用作变量的类型定义. 只应被作为继承对象.
在定义 logger 变量时, 请一直使用 [MiraiLogger](../-mirai-logger/index.md) 或者 [MiraiLoggerWithSwitch](../-mirai-logger-with-switch/index.md).

