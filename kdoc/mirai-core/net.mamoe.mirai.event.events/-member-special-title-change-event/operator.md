[mirai-core](../../index.md) / [net.mamoe.mirai.event.events](../index.md) / [MemberSpecialTitleChangeEvent](index.md) / [operator](./operator.md)

# operator

`val operator: `[`Member`](../../net.mamoe.mirai.contact/-member/index.md)`?`

操作人.
不为 null 时一定为群主. 可能与 [member](member.md) 引用相同, 此时为群员自己修改.
为 null 时则是机器人操作.

