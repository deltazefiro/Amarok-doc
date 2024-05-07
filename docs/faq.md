# 常见问题

## 隐藏应用会导致它们在桌面上的图标位置改变，有办法解决吗？

Amarok 通过禁用应用程序来实现隐藏。从启动器的角度来看，隐藏的应用等同于已被卸载，解除隐藏时重新安装。除非 Hook 启动器，否则我们对此无能为力。

## 为什么我在某个应用中仍然可以看到隐藏的文件或图片？

可能是该应用的文件缓存导致的。尝试杀掉此应用后台或或重启您的设备。

## 我在未取消隐藏的情况下不小心卸载了Amarok。我该如何恢复它们？

1. 安装最新版本的Amarok。[获取Amarok](/download.md)
2. 将应用程序隐藏模式和文件隐藏模式设置成**与您用于隐藏的模式相同**。
3. 在“设置隐藏文件”和“设置隐藏应用程序”中添加回您隐藏的所有文件夹和应用程序。
4. `更多设置` > `其他` > `强制取消隐藏`

## 我使用 Amarok 隐藏了文件和应用，但因为某些原因无法恢复。如何手动恢复隐藏的东西？

您需要一台已安装 [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) 的计算机。

### 恢复隐藏应用

```bash
# 获取所有隐藏的包
$ fgrep -v -f <(adb shell pm list packages |sort) <(adb shell pm list packages -u|sort)
package:first.hidden.pkgname
package:second.hidden.pkgname
...

# 显示包
$ adb shell su -c "pm unhide first.hidden.pkgname & pm enable first.hidden.pkgname "
$ adb shell su -c "pm unhide second.hidden.pkgname & pm enable second.hidden.pkgname "
...
```

### 恢复隐藏文件

如果你使用 *Chmod* 模式隐藏了文件：

```
$ adb shell su -c "chmod 755 /path/to/hidden/file"
```
或者如果你使用 *混淆* 模式隐藏，请参考 Github 上的 [这个 issue](https://github.com/deltazefiro/Amarok-Hider/issues/20#issuecomment-1386721641)。