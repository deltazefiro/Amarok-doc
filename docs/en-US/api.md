# API

Amarok provides a quick hide API. You can trigger Amarok by sending Intent Broadcasts.

:::tip Intent API <Badge text="Since v0.8.7a2" />

- Package: *(package name of Amarok)*
- Class: `deltazero.amarok.receivers.ActionReceiver`
- Action:
    - `deltazero.amarok.HIDE` (hide)
    - `deltazero.amarok.UNHIDE` (unhide)
:::

The package name of Amarok either `deltazero.amarok` (standard version) or `deltazefiro.amarok.foss` (F-Droid version).

:::warning
The Amarok API cannot be triggered by an Implicit Intent. Please use an Explicit Intent broadcast, which means you must specify Amarok as the receiver of this broadcast. For more details, see [Android Developer Documentation](https://developer.android.com/guide/components/intents-filters#ExampleExplicit).
:::

You can use ADB or automation tools like MacroDroid to broadcast intents to trigger hidings. Here are some examples.

## Shell (ADB)

```bash
# Hide
adb shell am broadcast -a deltazero.amarok.HIDE -n ${APP_ID}/deltazero.amarok.receivers.ActionReceiver
# Unhide
adb shell am broadcast -a deltazero.amarok.UNHIDE -n ${APP_ID}/deltazero.amarok.receivers.ActionReceiver
```

Where `${APP_ID}` is the package name of Amarok.

## MacroDroid

Please refer to [MacrodroidForum](https://www.macrodroidforum.com/index.php?threads/how-to-use-action-send-intent/).

## Tasker

```json
{"target":"Broadcast Receiver","action":"deltazero.amarok.HIDE","package":"<APP_ID>","class":"deltazero.amarok.receivers.ActionReceiver"}
```
Please replace `<APP_ID>` with the package name of Amarok.

Refer to [joaoapps.com](https://joaoapps.com/autoshare/intentbuilder/) for usage.

## Java

You can use the following Java code in your application to trigger stealth.

```java
Intent intent = new Intent("deltazero.amarok.HIDE");
intent.setClassName(amarokApplicationID, "deltazero.amarok.receivers.ActionReceiver");
sendBroadcast(intent);
```

Where `amarokApplicationID` is the package name of Amarok.