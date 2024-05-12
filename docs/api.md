# API

Amarok 提供隐藏控制 API。您可以采用意图广播 (Intent Broadcast) 来触发隐藏。

:::tip Intent API <Badge text="Since v0.8.7a2" />

- Package: *(ApplicationID of Amarok)*
- Class: `deltazero.amarok.receivers.ActionReceiver`
- Action:
    - `deltazero.amarok.HIDE` (hide)
    - `deltazero.amarok.UNHIDE` (unhide)
:::

其中 Amarok 的包名是 `deltazero.amarok`（普通分发版本） 或 `deltazefiro.amarok.foss`（F-Droid 分发版本）。

:::warning
Amarok API 无法通过隐式意图（Implicit Intent）触发。请使用显式意图 (Explicit Intent) 广播，即您必须指定 Amarok 为此广播的接受者。详见 [Android 开发者文档](https://developer.android.com/guide/components/intents-filters#ExampleExplicit)。
:::

您可以使用 ADB 或如 MacroDroid 之类的自动化工具广播意图以触发隐藏。下面是一些示例。

## Shell (ADB)

```bash
# 隐藏内容
adb shell am broadcast -a deltazero.amarok.HIDE -n ${APP_ID}/.receivers.ActionReceiver
# 取消隐藏
adb shell am broadcast -a deltazero.amarok.UNHIDE -n ${APP_ID}/.receivers.ActionReceiver
```

其中 `${APP_ID}` 是 Amarok 的包名。

## MacroDroid

请参考 [MacrodroidForum](https://www.macrodroidforum.com/index.php?threads/how-to-use-action-send-intent/)。

## Tasker

```json
{"target":"Broadcast Receiver","action":"deltazero.amarok.HIDE","package":"<APP_ID>","class":"deltazero.amarok.receivers.ActionReceiver"}
```
其中请把 `<APP_ID>` 替换为 Amarok 的包名。

请参考 [joaoapps.com](https://joaoapps.com/autoshare/intentbuilder/) 进行使用。

## Java

您可以在您的应用程序中使用以下 Java 代码来触发隐藏。

```java
Intent intent = new Intent("deltazero.amarok.HIDE");
intent.setClassName(amarokApplicationID, "deltazero.amarok.receivers.ActionReceiver");
sendBroadcast(intent);
```

其中 `amarokApplicationID` 是 Amarok 的包名。