[mirai-core](../index.md) / [net.mamoe.mirai.event](index.md) / [MessageListener](./-message-listener.md)

# MessageListener

`typealias MessageListener<T, R> = suspend T.(`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`) -> R`

消息事件的处理器.

注:
接受者 T 为 [ContactMessage](../net.mamoe.mirai.message/-contact-message/index.md)
参数 String 为 转为字符串了的消息 ([Message.toString](../net.mamoe.mirai.message.data/-message/to-string.md))

