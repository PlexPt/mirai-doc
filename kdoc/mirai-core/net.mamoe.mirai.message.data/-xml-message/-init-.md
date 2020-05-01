[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [XmlMessage](index.md) / [&lt;init&gt;](./-init-.md)

# &lt;init&gt;

`XmlMessage(content: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`)``XmlMessage(serviceId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)` = 60, content: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`)`

XML 消息, 如分享, 卡片等.

由于 [serviceId](../-service-message/service-id.md) 不准确, 请使用 [ServiceMessage](../-service-message/index.md) 并手动指定 `serviceId`

### Parameters

`serviceId` - 目前未知, 一般为 60

**See Also**

[buildXmlMessage](../build-xml-message.md)

