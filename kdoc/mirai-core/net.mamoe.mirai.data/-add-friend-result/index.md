[mirai-core](../../index.md) / [net.mamoe.mirai.data](../index.md) / [AddFriendResult](./index.md)

# AddFriendResult

`sealed class AddFriendResult`

### Types

| [ADDED](-a-d-d-e-d/index.md) | 成功添加 (只在对方设置为允许任何人直接添加为好友时才会获得这个结果)`object ADDED : DONE` |
| [ALREADY_ADDED](-a-l-r-e-a-d-y_-a-d-d-e-d/index.md) | 这个人已经是好友`object ALREADY_ADDED : DONE` |
| [DONE](-d-o-n-e/index.md) | `abstract class DONE : `[`AddFriendResult`](./index.md) |
| [REJECTED](-r-e-j-e-c-t-e-d/index.md) | 对方拒绝添加好友`object REJECTED : `[`AddFriendResult`](./index.md) |
| [WAITING_FOR_APPROVAL](-w-a-i-t-i-n-g_-f-o-r_-a-p-p-r-o-v-a-l/index.md) | 等待对方同意`object WAITING_FOR_APPROVAL : DONE` |

