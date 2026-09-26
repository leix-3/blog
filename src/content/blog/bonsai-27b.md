---
title: "27B 大模型压到 5.9GB：Ternary Bonsai 2 27B Mac 本地实测"
description: "PrismML 发布基于 Qwen3.8 27B 的三值模型 Ternary Bonsai 2 27B；在 16GB Mac mini 上可运行 32K 上下文，实测生成速度约 15 tokens/s，并提供 Mac 一键整合包。"
pubDate: 2026-09-27
heroImage: "../../assets/ternary-bonsai-27b.png"
category: "AI 工具"
tags:
  - 本地大模型
  - Mac mini
  - Ternary Bonsai
  - Qwen
  - WorkBuddy
draft: false
featured: false
series: "本地 AI 实测"
---

PrismML 最近发布了 **Ternary Bonsai 2 27B**。它最吸引我的地方，是把一款 27B 级别的大模型压缩到了普通电脑也有机会本地运行的大小。

我在自己的 **M6 Mac mini（16GB 统一内存）** 上进行了测试：

- 可以运行约 **32K 上下文**
- 实测生成速度约 **15 tokens/s**
- 日常聊天、资料整理和本地知识库问答已经具备可用性

下面简单介绍这个模型，并附上官方地址和我制作的 Mac 一键整合包。

## Ternary Bonsai 2 27B 是什么？

Ternary Bonsai 2 27B 是 PrismML 基于 **Qwen3.8 27B** 制作的低比特本地模型。

普通大模型通常使用 FP16 等高精度权重保存参数，对内存和存储空间要求很高。Ternary Bonsai 2 27B 则把大量权重压缩为三种取值：

```text
-1、0、+1
```

同时搭配 **FP16 分组缩放系数**，在大幅降低模型体积的同时，尽量保留原模型能力。

按照 PrismML 公布的数据，它具有以下特点：

- 约 **1.76 bit/权重**
- 模型体积约 **5.9GB**
- 相比 FP16 版本缩小超过 9 倍
- 官方标称最高支持 **262K 上下文**
- 支持文本与图片输入
- 采用 Apache 2.0 许可证

这里需要注意：262K 是模型的官方上限，不代表所有电脑都适合直接开到这个长度。上下文越大，KV Cache 占用的内存越多。对于 16GB Mac，我个人测试时采用约 32K 上下文，更符合实际使用情况。

## 我的 Mac mini 实测

我的测试设备是 **M6 Mac mini，16GB 统一内存**。

在当前配置下，模型可以完整加载，并运行约 32K 上下文。实际对话时，生成速度可以达到约 **15 tokens/s**。速度会受到上下文长度、提示词内容、后台程序和运行方式影响，因此这个数字仅代表我的机器与当前整合包下的实测结果。

对一台只有 16GB 内存的小主机来说，能够本地运行 27B 级模型，是这类三值压缩模型最有意思的地方：

- 对话内容可以保留在本机
- 不依赖云端 API
- 可以接入本地文档和知识库
- 适合反复使用，不按调用次数付费

## 官方模型地址

根据自己的运行环境，可以选择不同格式：

- [PrismML 官方发布说明](https://prismml.com/news/bonsai-2-27b)
- [Hugging Face：Ternary Bonsai 2 27B GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
- [Hugging Face：Ternary Bonsai 2 27B MLX 2-bit（Apple Silicon）](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)
- [官方 Bonsai Demo 与安装脚本](https://github.com/PrismML-Eng/Bonsai-demo)

目前 Bonsai 2 的部分格式仍需要 PrismML 提供的运行环境或兼容版本。直接使用整合包会更省事；如果选择手动安装，建议先阅读模型页面的运行说明和已知问题。

## Mac 一键整合包

为了让不熟悉命令行的朋友也能快速体验，我制作了一个 **Mac 版本一键整合包**。下载后按照包内说明操作即可。

> 文件名称：Bonsai本地聊天.zip

- [夸克网盘下载](https://pan.quark.cn/s/3a54b760b4ee?pwd=rqWW)
- 提取码：`rqWW`

这个整合包是我使用 **WorkBuddy** 辅助制作的。如果你也想尝试使用 AI 工具完成软件整合、自动化操作或其他电脑任务，可以从下面的地址了解：

- [打开 WorkBuddy](https://www.workbuddy.cn/events/invite?inviteCode=njdltej5m7vv)

## 最后说一下

Ternary Bonsai 2 27B 的意义，不只是“把文件压小了”。它让 27B 级模型真正进入了普通本地设备可以尝试的范围。

从我的实际体验来看，16GB Mac mini 使用 32K 上下文、约 15 tokens/s 的速度，已经可以承担日常聊天、内容整理和本地知识库问答。后面我还会继续测试它在长文档、编程和 Agent 场景中的实际表现。

> 提醒：模型输出可能存在错误，请勿把未经核实的结果直接用于医疗、法律、投资等高风险场景。网盘链接如有失效，我会在文章中更新。
