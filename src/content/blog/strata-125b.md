---
title: "神项目 Strata：消费级显卡运行 125B 大模型，无审查版本下载"
description: "Strata 把 GPU、系统内存、CPU 和 SSD 协同起来，让普通 Windows 或 Linux 电脑运行 Qwen3.8-Flash-Next 125B；本文介绍原理、硬件要求和社区无审查模型下载。"
pubDate: 2026-10-10
heroImage: "../../assets/strata-125b.png"
category: "AI 工具"
tags:
  - 本地大模型
  - Strata
  - Qwen
  - 无审查模型
  - WorkBuddy
draft: false
featured: false
series: "本地 AI 实测"
---

最近发现了一个很有意思的开源项目：**Strata**。

它的目标，是让普通消费级电脑也能本地运行超大规模模型。Strata 当前主要运行的是 **Qwen3.8-Flash-Next 125B**，可以聊天、写代码、读取图片，还能通过本地 API 接入各种应用和编程 Agent。

先把最容易误解的两点说清楚：

- 模型官方参数是 **125B**，网络上经常被简称为“128B 级”。
- Strata 官方当前建议最低使用 **12GB 显存、32GB 系统内存和约 80GB 可用磁盘空间**。8GB 显卡不属于官方保证配置，旧显卡和低显存运行属于实验性场景，速度和稳定性需要看整机配置。

## Strata 是怎么让消费级电脑跑 125B 模型的？

Strata 并不是把整个 125B 模型全部塞进显卡，而是把一台电脑里的几种硬件同时利用起来：

- **GPU 显存**保存使用频率最高的专家和关键权重
- **系统内存**保存其余专家
- **CPU**与显卡同时参与计算
- **SSD**保存体积较大的查找数据

Qwen3.8-Flash-Next 是 MoE（混合专家）模型。项目说明中提到，模型拥有大量小型专家，但每次生成一个 token 只会调用其中很少的一部分。Strata 利用这种特性，把常用部分放在速度最快的位置，其余部分留在内存和 SSD 中按需调用。

它还使用小模型先预测、大模型批量检查的方式提高生成速度。简单理解就是：**显卡负责最常用和最紧急的工作，内存、CPU 与 SSD 共同承担剩下的部分。**

## 需要什么配置？

根据项目当前的官方说明，推荐准备：

| 硬件 | 官方建议 |
|---|---|
| 显卡 | NVIDIA RTX 20/30/40/50 系列或部分 AMD 显卡，12GB 显存起步 |
| 系统内存 | 32GB 起步，48GB 或 64GB 更适合完整模型 |
| 磁盘 | 约 80GB 可用空间，推荐 NVMe SSD |
| 系统 | Windows 10/11 或 Linux |

32GB 内存更适合 Coder 精简版本；如果想使用保留全部专家的 Q2_0、IQ2_XS 或 IQ3 系列，建议准备更多系统内存。显存越大，能放进 GPU 的模型部分越多，速度通常也越快。

### 8GB 显卡到底能不能跑？

部分旧显卡和低显存设备存在社区实验方案，但这不等于“只要一张 8GB 显卡就能流畅运行”。Strata 还会大量使用系统内存、CPU 和 SSD，因此实际能否启动以及生成速度，取决于整台电脑，而不只是显存大小。

如果你的显卡只有 8GB，建议把它理解为**可以尝试的非官方实验配置**，不要把它当成项目当前承诺的最低配置。

## 项目地址与安装方式

- [Strata GitHub 项目主页](https://github.com/Niko1221/Strata)
- [中文项目说明](https://github.com/Niko1221/Strata/blob/main/README.zh-CN.md)
- [模型选择与内存需求说明](https://github.com/Niko1221/Strata/blob/main/docs/MODELS.md)

Windows 用户下载并解压项目后，可以运行：

```text
START-HERE.bat
```

Linux 用户进入项目目录后运行：

```bash
./setup.sh
```

安装程序会检测显卡、内存和磁盘，并推荐适合的模型。启动成功后，可以在浏览器打开：

```text
http://127.0.0.1:8080
```

Strata 还提供 OpenAI 和 Anthropic 兼容的本地接口，方便接入聊天工具、Codex 类编程助手或其他 Agent。

## 社区无审查模型

Strata 官方文档列出了 **OrcaRouter Flash-Next Uncensored IQ3_XXS** 的手动兼容方案。这个版本不在默认安装菜单中，需要手动适配和转换。

我把相关无审查模型资源整理到了夸克网盘：

- [打开夸克网盘下载](https://pan.quark.cn/s/d7e3834ca1cb?pwd=14E5)
- 提取码：`14E5`

“无审查”只代表模型减少了部分默认回答限制，并不代表输出一定正确、安全或合法。使用本地模型时，仍然需要自行核实内容，并遵守当地法律法规。第三方模型文件建议先做安全检查，再在隔离环境中测试。

## 使用 WorkBuddy 辅助安装

如果不熟悉命令行，也可以尝试使用 WorkBuddy 帮助检查硬件、阅读项目文档和完成安装步骤：

- [打开 WorkBuddy](https://www.workbuddy.cn/events/invite?inviteCode=rvw6lo7dxizxhjt2)

## 最后说一下

Strata 最有价值的地方，不是简单地宣称“小显卡运行超大模型”，而是提供了一套把 **显卡、内存、CPU 和 SSD 组合起来**的本地推理方案。

它仍然对系统内存和 SSD 有较高要求，也不适合所有电脑。但对于拥有普通游戏显卡、又想尝试 125B 级本地模型的人来说，这是一个非常值得关注的开源项目。
