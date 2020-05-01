[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [java.io.File](./index.md)

### Extensions for java.io.File

| [loadAsDeviceInfo](load-as-device-info.md) | 加载一个设备信息. 若文件不存在或为空则随机并创建一个设备信息保存.`fun `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`.loadAsDeviceInfo(context: `[`Context`](../-context/index.md)` = ContextImpl()): `[`DeviceInfo`](../-device-info/index.md) |
| [suspendToExternalImage](suspend-to-external-image.md) | 在 [IO](#) 中进行 [File.toExternalImage](to-external-image.md)`suspend fun `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`.suspendToExternalImage(): `[`ExternalImage`](../-external-image/index.md) |
| [toExternalImage](to-external-image.md) | 直接使用文件 [inputStream](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.io/java.io.-file/input-stream.html) 构造 [ExternalImage](../-external-image/index.md)`fun `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`.toExternalImage(): `[`ExternalImage`](../-external-image/index.md) |

