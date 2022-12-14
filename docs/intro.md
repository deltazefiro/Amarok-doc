# 功能介绍

## Amarok 是什么？
Amarok 是一个轻量级的安卓的文件应用隐藏器，旨在保护您的隐私。  

> 很多时候，我们使用一些复杂的加密器加密个人文件。  
> 它们加密速度慢，加密大型文件更是令人头疼，尽管确实很安全。  
> 但我们的文件其实**根本不需要严格的保护，只是不希望不小心被别人看见，或手滑发给错误的人。**  
> 我们只需要一个工具，不让它们被**随便看到**，使别人**心生好奇**。

而 Amarok 就是这样一个文件应用隐藏工具。  

:::tip
- Amarok 不加密文件内容，只混淆文件名使其无法被人类阅读。
- Amarok 使用停用应用的方式“隐藏”应用，只是在桌面不可见，但在系统设置中可见。
:::

## 功能
- 隐藏文件，混淆文件名并去除后缀  
- 隐藏应用，使应用在桌面上不可见

:::warning
Amarok 并非加密程序，隐藏后的文件可被轻易复原。请勿使用 Amarok 保护重要文件！
:::

## 特点 & Todos
- 一键隐藏&一键取消隐藏：文件应用，一键隐藏。
- 高速大文件隐藏：只混淆文件名，文件大小并不影响隐藏速度。
- 隐藏快捷开关：提供控制中心开关。
- 基于 Material3 的全新UI设计。
- 多模式免Root应用隐藏：支持 DSM/Shizuku 模式隐藏应用。


## 截图

![New UI](https://raw.githubusercontent.com/deltazefiro/ImageHost/master/Amarok-screenshot.jpg)


## 感谢

- [heruoxin/Icebox-SDK](https://github.com/heruoxin/IceBox-SDK), Unknown License
- [Sheep-y/Base85](https://github.com/Sheep-y/Base85/), [Apache v2](https://github.com/Sheep-y/Base85/blob/master/LICENSE) License
- [Icongeek26](https://www.flaticon.com/authors/icongeek26) & [Freepik](), For the icons


## 免责声明

<u>**切勿将 Amarok 用于重要文件或应用的隐藏。**</u>  
<u>**您使用 Amaork 导致的一切损失和后果（包括但不限于文件丢失、机密泄露）均由您自行承担。**</u>

## 更新记录
### Amarok v0.8.0b2
- Breakings
    - **这是 Amarok 的第一个 `beta` 公测版本，但非发布版本（仅提供旧版本用户升级）**
- New Features
    - **新增 `Shuziku/Sui` 免Root应用隐藏模式**
    - **新增 Amarok帮助文档**
- Optimize
    - 优化 隐藏器错误提示
    - 优化 文件隐藏日志输出，提高速度
- Fix
    - 修复 返回按键无法使用
### Amarok v0.7.4a5
- Breakings
    - **这是 Amarok 的最后一个 `alpha` 版本  欢迎进入 `beta` 阶段！** :tada: :tada: 
    - **加入 AppCenter 应用内升级功能，未来将会自动更新**
    - **Amarok 的图标由 月亮 更换为 爪印形**
- New Features
    - **支持 DSM 免 root 隐藏** ***[尚未测试]***
    - **支持同时隐藏多个目录**
- Optimize
    - 优化 `SharedPreferance` 储存方式
    - 优化 对于打开非本地文件是的反馈提示
    - 优化 中英文翻译
- Fix
    - 修复 暗色模式下状态栏颜色与 `AppBar` 不一致
    - 修复 亮色模式下状态栏文字颜色为白色
    - 修复 选择非本地储存中文件后崩溃 **(在 HarmonyOS 下隐藏文件崩溃的原因)**
### Amarok v0.7.3a3
- Breakings
    - 加入 Microsoft AppCenter 进行自动错误统计与分析。
    - 升级 Android targetSDK 到 32
- New Features
    - 加入 更多设置 界面
- Optimize
    - 优化 主界面布局
    - 优化 应用隐藏时对su命令的调用次数，减少Toast弹出数
    - 优化 应用隐藏速度
    - 优化 中文翻译
- Fix
    - 修复 设置隐藏应用 中包名太长超出显示区域
    - 修复 ShellUtil 在Logcat中刷屏
    - 修复 黑暗模式下图标暗色问题
    - 修复 文件隐藏器在隐藏过长文件名时崩溃

### Amarok v0.7.1
- Breakings
    - 优化配置储存结构 上一版本的配置文件将不可使用！
    - 增加 Android 12 支持，且停止支持 Android 9 以下的设备
- New Features
    - 增加对 Root 工作模式的支持
    - 增加自动权限请求
    - 增加中文支持
- Optimize
    - 使用 Material 3 重构UI，更加精美
    - 使用 Base64 代替 Ascii85 加密文件名称
    - 不再用 昼夜切换 描述隐藏状态，而是直接称呼为 Hidden 与 Visible
- Fix
    - 修复 QuickSetting 闪退
- Remove
    - 取消对 Icebox冰箱 工作模式的支持
    - 停用切换隐藏状态时切换昼夜主题