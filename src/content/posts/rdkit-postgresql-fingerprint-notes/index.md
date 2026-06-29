---
title: "RDKit 与 PostgreSQL 指纹检索笔记"
description: "分子标准化、fingerprint 存储、相似性检索和批量更新的工程化清单。"
date: "2026-06-18"
tags:
  - rdkit
  - postgresql
  - cheminformatics
---

RDKit 与 PostgreSQL 的组合很适合把化学信息学能力沉到平台底层，但真正难的部分往往不是函数调用，而是数据生命周期。

## 需要提前决定的事情

- 标准化策略是否在入库前完成，还是保留原始结构并派生 canonical 版本。
- fingerprint 类型是否服务于相似性检索、聚类、去重，还是多种任务共用。
- 任务失败时如何重新计算派生列，避免结果与源数据不同步。
- 数据库索引是否匹配最常见的查询路径。

## 平台视角

分子数据表不是静态表，它更像一个可审计的物化视图集合。结构清洗、盐拆分、tautomer 处理、fingerprint 计算都应该有版本号。

```sql
select compound_id, standardizer_version, fingerprint_version
from compound_features
where project_id = 1
order by updated_at desc;
```

版本字段看起来不起眼，但它让模型结果、实验记录和后续回放都有了共同语言。
