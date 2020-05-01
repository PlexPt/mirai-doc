[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [CustomMessageMetadata](index.md) / [&lt;init&gt;](./-init-.md)

# &lt;init&gt;

`CustomMessageMetadata()`

自定义消息元数据.

**实现方法**:

1. 实现一个类继承 [CustomMessageMetadata](index.md), 添加 `@Serializable` (来自 `kotlinx.serialization`)
2. 添加伴生对象, 继承 [CustomMessage.ProtoBufSerializerFactory](../-custom-message/-proto-buf-serializer-factory/index.md) 或 [CustomMessage.JsonSerializerFactory](../-custom-message/-json-serializer-factory/index.md), 或 [CustomMessage.Factory](../-custom-message/-factory/index.md)
3. 在需要解析消息前调用一次伴生对象以注册

**See Also**

[CustomMessage](../-custom-message/index.md)

[ConstrainSingle](../-constrain-single/index.md)

