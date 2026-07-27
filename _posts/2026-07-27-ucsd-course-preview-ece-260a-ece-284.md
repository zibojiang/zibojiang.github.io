---
layout: post
title: "UCSD 选课与课程预习记录：ECE 260A 与 ECE 284"
subtitle: "从数字前端到 CNN NPU"
date: 2026-07-27
author: Zibo Jiang
tags:
  - UCSD
  - VLSI
  - Digital Design
  - NPU
  - Course Notes
---

> 这篇文章记录的是我在正式上课前对两门课程的初步了解，以及现阶段的学习计划。很多认识还停留在预习阶段，等课程开始后，我会继续补充课堂内容、项目进展和自己的理解。

## 中文

这学期我计划在 UCSD 学习两门与数字芯片设计相关的课程：**ECE 260A — VLSI Digital Systems** 和 **ECE 284 — Low-Power VLSI Implementation for Machine Learning**。一门更偏向数字前端设计的基础与实现，另一门则进一步聚焦面向机器学习的低功耗硬件与 CNN NPU。两门课放在一起，正好形成了从基础数字电路到专用计算架构的一条学习路径。

### ECE 260A — VLSI Digital Systems

- **Instructor:** John Eldon
- **方向：** 数字前端设计
- **考核方式：** 以考试为主
- **课程项目：** 使用 Verilog 设计四输入加法器，并例化所设计的加法器，进一步搭建一个 FIR 滤波器

从目前了解到的信息看，这门课的教材和课程内容都很扎实。课程项目也不只是要求实现一个“能用”的加法器，而是需要继续思考：在不同的加法器结构中，怎样找到更合适的设计？

我希望在项目中重点关注以下问题：

1. 不同加法器结构在时序、面积和功耗之间有什么取舍？
2. 四输入相加应该采用怎样的组合方式，才能缩短关键路径？
3. 将加法器例化到 FIR 滤波器后，单个模块的选择会怎样影响整个数据通路？
4. 如何通过综合结果，而不是只看 RTL 功能，判断一个结构是否真的更好？

对我来说，这个项目的价值在于把 Verilog、数字电路结构和综合后的 PPA（Power、Performance、Area）联系起来。我希望通过这门课建立更系统的数字前端设计方法，而不只是完成 RTL 功能。

### ECE 284 — Low-Power VLSI Implementation for Machine Learning

- **Instructor:** Mingu Kang
- **方向：** CNN NPU 与低功耗机器学习硬件
- **课程内容：** 一部分围绕 PyTorch，另一部分介绍 NPU 的硬件结构
- **课程项目：** 设计一个基于二维脉动阵列（2D Systolic Array）的 NPU

这门课更接近我希望深入了解的专用计算架构。PyTorch 部分可以帮助我从模型和算子的角度理解 CNN 的计算过程；硬件部分则会进一步讨论这些运算怎样被映射到 NPU 中，以及二维脉动阵列如何组织数据流和并行计算。

我希望通过这门课逐步回答几个问题：

1. CNN 中的卷积和矩阵乘法如何映射到硬件阵列？
2. 二维脉动阵列中的数据如何流动，PE（Processing Element）之间如何协作？
3. 数据复用、片上存储和访存开销如何影响能效？
4. 如何从 PyTorch 中的模型描述出发，逐步理解并设计对应的 NPU 数据通路？

现阶段，我最期待的是学习一套完整的 NPU 设计方法：从理解工作负载，到选择数据流和阵列结构，再到分析性能、功耗与硬件资源之间的权衡。

### 两门课放在一起

我把 ECE 260A 看作数字设计能力的进一步训练：从加法器这样的基本模块出发，关注 RTL、关键路径和 PPA；ECE 284 则把这些能力放到更大的系统中，用于理解和设计 CNN 加速器。前者关注“怎样把一个数字模块做好”，后者进一步回答“怎样用这些模块构建一个高效的计算系统”。

目前这些都只是课前了解和预习。正式开课后，我计划继续记录：

- 每周课程中最重要的概念；
- 作业和考试复习中的难点；
- 加法器、FIR 滤波器与 NPU 项目的设计迭代；
- 仿真、综合和性能分析中遇到的问题；
- 上完课程后，对数字前端与 NPU 设计方法的新理解。

希望学期结束时再回看这篇文章，能清楚地看到自己的认识是怎样从“提前了解”一步步变成实际设计经验的。

---

## English

This quarter, I plan to take two digital chip design courses at UCSD: **ECE 260A — VLSI Digital Systems** and **ECE 284 — Low-Power VLSI Implementation for Machine Learning**. The first course focuses more on the foundations and implementation of digital front-end design, while the second moves toward low-power machine-learning hardware and CNN NPUs. Together, they form a learning path from fundamental digital circuits to domain-specific accelerator architectures.

### ECE 260A — VLSI Digital Systems

- **Instructor:** John Eldon
- **Focus:** Digital front-end design
- **Assessment:** Primarily exam-based
- **Project:** Design a four-input adder in Verilog, then instantiate the adder to build an FIR filter

Based on my current understanding, the course has strong teaching materials and a solid treatment of digital design. The project is not only about building an adder that works. It also asks a more meaningful design question: among different adder architectures, which one is the most suitable for the target implementation?

During the project, I hope to explore the following questions:

1. What are the timing, area, and power trade-offs among different adder architectures?
2. How should four operands be combined to reduce the critical-path delay?
3. After the adder is instantiated in an FIR filter, how does the module-level choice affect the complete datapath?
4. How can synthesis results—rather than RTL functionality alone—be used to evaluate whether one architecture is actually better?

For me, the main value of this project is connecting Verilog and digital circuit structures with post-synthesis PPA (Power, Performance, and Area). I hope this course will help me develop a more systematic digital front-end design methodology instead of stopping at functional RTL implementation.

### ECE 284 — Low-Power VLSI Implementation for Machine Learning

- **Instructor:** Mingu Kang
- **Focus:** CNN NPUs and low-power machine-learning hardware
- **Course content:** Part PyTorch and part NPU hardware architecture
- **Project:** Design an NPU based on a two-dimensional systolic array

This course is closer to the domain-specific computing architectures that I want to understand in depth. The PyTorch portion should help me study CNN computation from the perspective of models and operators. The hardware portion will then explore how these operations are mapped onto an NPU and how a two-dimensional systolic array organizes data movement and parallel computation.

I hope the course will help me answer several questions:

1. How are convolution and matrix multiplication mapped onto a hardware array?
2. How does data move through a two-dimensional systolic array, and how do the processing elements cooperate?
3. How do data reuse, on-chip storage, and memory-access costs affect energy efficiency?
4. How can I move from a model described in PyTorch toward understanding and designing the corresponding NPU datapath?

At this stage, I am most interested in learning a complete NPU design methodology: understanding the workload, selecting a dataflow and array architecture, and then analyzing the trade-offs among performance, power, and hardware resources.

### Connecting the Two Courses

I see ECE 260A as further training in digital design: starting with fundamental modules such as adders and examining RTL, critical paths, and PPA. ECE 284 places these abilities in a larger system and applies them to CNN accelerator design. The first course asks, “How can I build a good digital module?” The second goes one step further: “How can these modules be organized into an efficient computing system?”

For now, all of this is based on my pre-course research and preparation. After the quarter begins, I plan to update this post with:

- the most important concepts from each week;
- challenging topics from assignments and exam preparation;
- design iterations for the adder, FIR filter, and NPU projects;
- issues encountered during simulation, synthesis, and performance analysis;
- my updated understanding of digital front-end and NPU design methodologies.

I hope that, by the end of the quarter, this post will show how my initial expectations gradually developed into practical design experience.
