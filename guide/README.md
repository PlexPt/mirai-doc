# 简介

   <div align="center">
   <img width="160" src="http://img.mamoe.net/2020/02/16/a759783b42f72.png" alt="logo"></br>


   <img width="95" src="http://img.mamoe.net/2020/02/16/c4aece361224d.png" alt="title">

----

[![Gitter](https://badges.gitter.im/mamoe/mirai.svg)](https://gitter.im/mamoe/mirai?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Actions Status](https://github.com/mamoe/mirai/workflows/CI/badge.svg)](https://github.com/mamoe/mirai/actions)
[![Download](https://api.bintray.com/packages/him188moe/mirai/mirai-core/images/download.svg)](https://bintray.com/him188moe/mirai/mirai-core/)  

Mirai 是一个在全平台下运行，提供 QQ Android 和 TIM PC 协议支持的高效率机器人框架

这个项目的名字来源于
     <p><a href = "http://www.kyotoanimation.co.jp/">京都动画</a>作品<a href = "https://zh.moegirl.org/zh-hans/%E5%A2%83%E7%95%8C%E7%9A%84%E5%BD%BC%E6%96%B9">《境界的彼方》</a>的<a href = "https://zh.moegirl.org/zh-hans/%E6%A0%97%E5%B1%B1%E6%9C%AA%E6%9D%A5">栗山未来(Kuriyama <b>Mirai</b>)</a></p>
     <p><a href = "https://www.crypton.co.jp/">CRYPTON</a>以<a href = "https://www.crypton.co.jp/miku_eng">初音未来</a>为代表的创作与活动<a href = "https://magicalmirai.com/2019/index_en.html">(Magical <b>Mirai</b>)</a></p>
图标以及形象由画师<a href = "">DazeCake</a>绘制
</div>


::: tip 愿景
**QQ Android** 协议支持库与高效率的机器人框架   
纯 Kotlin 实现协议和支持框架    
mirai 既可以作为项目中的 QQ 协议支持库, 也可以作为单独的应用程序与插件承载 QQ 机器人服务。  
:::

**一切开发旨在学习，请勿用于非法用途**

加入 [![Gitter](https://badges.gitter.im/mamoe/mirai.svg)](https://gitter.im/mamoe/mirai?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge), 或加入 QQ 群: 
群：655057127
 
## 特性


| 消息相关                    | 支持              |
|:----------------------|:----------------|
| 文字                  | 群聊 \| 好友 \| 临时会话 |
| 原生表情                  | 群聊 \| 好友 \| 临时会话 |
| 图片 上传 / 发送 / 解析 (最大 20M)           | 群聊 \| 好友 \| 临时会话 |
| 图片下载           | 群聊 \| 好友 \| 临时会话 |
| XML, JSON 等富文本消息           | 群聊 \| 好友 \| 临时会话 |
| 长消息 (5000 字符 + 50 图片) | 群聊               |
| 引用回复                  | 群聊 \| 好友 \| 临时会话 |
| 合并转发 (最大 200 条)                  | 群聊  |
| 撤回                  | 群聊 \| 好友 \| 临时会话 |
| At (含 At 全体成员)                  | 群聊 |
| 撤回群员消息                  | 群聊 |


| 群相关                    |
|:----------------------|
| 完整群列表; 完整群成员列表|
| 群员权限获取|
| 禁言群员; 全员禁言; 禁言时间获取|
| 群公告管理(获取, 发布, 删除)|
| 群设置(自动审批, 入群公告, 坦白说, 成员邀请, 匿名聊天)|
| 处理入群申请; 移除群员 |

| 好友相关 |
|:----|
| 完整好友列表 |
| 处理新好友申请 |

### 不会支持的协议:
- 点赞
- 收付款
- 主动添加好友
- 主动加入群
- 主动邀请好友加群

**一切开发旨在学习，请勿用于非法用途**

## 开发者

**了解 mirai 架构**： [Wiki](https://github.com/mamoe/mirai/wiki/Home) 


## 框架结构

( )我是结构图

## 代码托管

> **[Gitee](https://gitee.com/mamoe/mirai)** | **[Github](https://github.com/mamoe/mirai)**


## 优秀视频

::: tip
第三方录制的优秀视频教程，加入该列表必须是免费教程。
:::

( )todo

## 优秀案例

::: tip
名称登记不分先后，需加入列表的同学可以告诉我们。
:::

- （官方）`Java` 或 `Kotlin`： 为 [mirai-console](https://github.com/mamoe/mirai-console) 直接编写插件并与其他插件开发者合作共享
- （官方）`C`, `C++` 等原生语言： [mirai-native](https://github.com/iTXTech/mirai-native) 支持酷Q插件在mirai上运行
- （社区）`Python`: [python-mirai](https://github.com/NatriumLab/python-mirai) 基于 `mirai-api-http` 的机器人开发框架
- （社区）`JavaScript`(`Node.js`): [node-mirai](https://github.com/RedBeanN/node-mirai) mirai 的 Node.js SDK
- （社区）`Go`: [gomirai](https://github.com/Logiase/gomirai) 基于 mirai-api-http 的 GoLang SDK
- （社区）`Mozilla Rhino`: [mirai-rhinojs-sdk](https://github.com/StageGuard/mirai-rhinojs-sdk)为基于 Rhino(如 Auto.js 等安卓 app 或运行环境)的 JavaScript 提供简单易用的 SDK
- （社区）`Lua`: [lua-mirai](https://github.com/only52607/lua-mirai) 基于mirai-core 的Lua SDK，并提供了java扩展支持，可在lua中调用java代码开发机器人
- （社区）`C++`: [mirai-cpp](https://github.com/cyanray/mirai-cpp) mirai-http-api 的 C++ 封装，方便使用 C++ 开发 mirai-http-api 插件
- （社区）`C++`: [miraipp](https://github.com/Chlorie/miraipp-template) mirai-http-api 的另一个 C++ 封装，使用现代 C++ 特性，并提供了较完善的说明文档
- （官方）其他任意语言：使用由 [mirai-api-http](https://github.com/mamoe/mirai-api-http) 提供的 http 接口进行接入

### 其他平台的使用者

- 酷Q的插件可以在 mirai 中加载, 详见 [Mirai-Native](https://github.com/iTXTech/mirai-native)
- 使用 `酷Q HTTP API` 的插件将可以在 mirai 中加载，`Mirai-CQ-Adapter` 正在进行中


## 我想马上开始使用它

请下载这里的一键安装包[下载地址](https://suihou-my.sharepoint.com/:f:/g/personal/user18_5tb_site/ErWGr97FpPVDjkboIDmDAJkBID-23ZMNbTPggGajf1zvGw?e=51NZWM)，它可以让你快速在你的服务器/个人电脑上运行mirai-console

**请注意**
* 使用时请留意安装包里的说明文字
* 目前本安装包只支持Windows系统，且mirai-console仍在开发中，可能会存在一些bug
* 关于安装包本身的一切问题请到QQ群内反馈
* 如果上面的链接下载过慢，你可以到QQ群内高速下载

## 更新日志

* 在 [Project](https://github.com/mamoe/mirai/projects/3) 查看已支持功能和计划
* 在 [CHANGELOG](https://github.com/mamoe/mirai/blob/master/CHANGELOG.md) 查看版本更新记录 (仅发布的版本)

## [参与贡献](https://github.com/mamoe/mirai/blob/master/CONTRIBUTING.md)

- 贡献代码：代码地址 [mirai](https://github.com/mamoe/mirai) ，欢迎提交 Issue 或者 Pull Requests
- 维护文档：文档地址 [mirai-doc](https://github.com/mamoe/mirai-doc) ，欢迎参与翻译和修订


我们欢迎一切形式的贡献。  
我们也期待有更多人能加入 mirai 的开发。  
欢迎各路好汉一起来参与完善 mirai，我们期待你的 PR！


若在使用过程中有任何疑问, 可提交 `issue` 或是[邮件联系](mailto:support@mamoe.net). 我们希望 mirai 变得更易用.

您的 `star` 是对我们最大的鼓励(点击项目右上角)

## 鸣谢

特别感谢 [JetBrains](https://www.jetbrains.com/?from=mirai) 为开源项目提供免费的 [IntelliJ IDEA](https://www.jetbrains.com/idea/?from=mirai) 等 IDE 的授权  
[<img src="/jetbrains-variant-3.png" width="200"/>](https://www.jetbrains.com/?from=mirai)


## 许可证

协议原版权归属腾讯科技股份有限公司所有，本项目其他代码遵守：  
**GNU AFFERO GENERAL PUBLIC LICENSE version 3**  

其中部分要求:  

- (见 LICENSE 第 13 节) 尽管本许可协议有其他规定，但如果您修改本程序，则修改后的版本必须显着地为所有通过计算机网络与它进行远程交互的用户（如果您的版本支持这种交互）提供从网络服务器通过一些标准或惯用的软件复制方法**免费**访问相应的**源代码**的机会
- (见 LICENSE 第 4 节) 您可以免费或收费地传递这个项目的源代码或目标代码(即编译结果), **但前提是提供明显的版权声明** (您需要标注本 `GitHub` 项目地址)

------

    Copyright (C) 2019-2020 mamoe and Mirai contributors
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

------
