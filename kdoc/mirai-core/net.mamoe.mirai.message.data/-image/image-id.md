[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [Image](index.md) / [imageId](./image-id.md)

# imageId

`abstract val imageId: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

图片的 id.

图片 id 不一定会长时间保存, 也可能在将来改变格式, 因此不建议使用 id 发送图片.

### 格式

群图片:

* [GROUP_IMAGE_ID_REGEX](../-g-r-o-u-p_-i-m-a-g-e_-i-d_-r-e-g-e-x.md), 示例: `{01E9451B-70ED-EAE3-B37C-101F1EEBF5B5}.mirai` (后缀一定为 `".mirai"`)

好友图片:

* [FRIEND_IMAGE_ID_REGEX_1](../-f-r-i-e-n-d_-i-m-a-g-e_-i-d_-r-e-g-e-x_1.md), 示例: `/f8f1ab55-bf8e-4236-b55e-955848d7069f`
* [FRIEND_IMAGE_ID_REGEX_2](../-f-r-i-e-n-d_-i-m-a-g-e_-i-d_-r-e-g-e-x_2.md), 示例: `/000000000-3814297509-BFB7027B9354B8F899A062061D74E206`

**See Also**

[Image](index.md)

