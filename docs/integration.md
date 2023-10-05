# 快速隐藏集成

Amarok 提供快速隐藏功能。您可以采用意图广播 (Intent Broadcast) 来触发隐藏。下面提供部分第三方软件的使用教程。

:::tip Note
若您是开发者，您可以在您的程序使用以下参数广播意图触发隐藏：
- Package: (The PackageID of Amarok)
- Class: `deltazero.amarok.ActionReceiver`
- Action:
    - `deltazero.amarok.HIDE` (hide)
    - `deltazero.amarok.UNHIDE` (unhide)
:::


## MacroDroid

> MacroDroid - Device Automation: [Web](https://www.macrodroid.com/) - [GooglePlay](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid)
