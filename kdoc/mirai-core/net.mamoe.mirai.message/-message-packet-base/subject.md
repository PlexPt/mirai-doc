[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [MessagePacketBase](index.md) / [subject](./subject.md)

# subject

`abstract val subject: TSubject`

消息事件主体.

对于好友消息, 这个属性为 [QQ](../../net.mamoe.mirai.contact/-q-q/index.md) 的实例, 与 [sender](sender.md) 引用相同;
对于群消息, 这个属性为 [Group](../../net.mamoe.mirai.contact/-group/index.md) 的实例, 与 [GroupMessage.group](../-group-message/group.md) 引用相同

在回复消息时, 可通过 [subject](./subject.md) 作为回复对象

