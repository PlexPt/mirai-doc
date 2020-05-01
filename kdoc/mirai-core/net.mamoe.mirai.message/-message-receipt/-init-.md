[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [MessageReceipt](index.md) / [&lt;init&gt;](./-init-.md)

# &lt;init&gt;

`MessageReceipt(source: Outgoing, target: C, botAsMember: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?)`

发送消息后得到的回执. 可用于撤回.

此对象持有 [Contact](../../net.mamoe.mirai.contact/-contact/index.md) 的弱引用, [Bot](../../net.mamoe.mirai/-bot/index.md) 离线后将会释放引用, 届时 [target](target.md) 将无法访问.

### Parameters

`source` - 指代发送出去的消息

`target` - 消息发送对象

**See Also**

[Group.sendMessage](../../net.mamoe.mirai.contact/-group/send-message.md)

[QQ.sendMessage](../../net.mamoe.mirai.contact/-q-q/send-message.md)

[Member.sendMessage](../../net.mamoe.mirai.contact/-member/send-message.md)

[MessageReceipt.sourceId](../source-id.md)

[MessageReceipt.sourceTime](../source-time.md)

