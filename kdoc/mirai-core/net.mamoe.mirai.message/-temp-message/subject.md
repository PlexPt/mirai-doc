[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [TempMessage](index.md) / [subject](./subject.md)

# subject

`val subject: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)

消息事件主体.

对于好友消息, 这个属性为 [QQ](../../net.mamoe.mirai.contact/-q-q/index.md) 的实例, 与 [sender](../-message-packet-base/sender.md) 引用相同;
对于群消息, 这个属性为 [Group](../../net.mamoe.mirai.contact/-group/index.md) 的实例, 与 [GroupMessage.group](../-group-message/group.md) 引用相同

在回复消息时, 可通过 [subject](../-message-packet-base/subject.md) 作为回复对象

