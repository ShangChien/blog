import type { Locale } from "@lib/i18n";

export const profile = {
  zh: {
    homeTitle: "主页",
    homeDescription:
      "ShangChien 的个人介绍、AI 药物研发平台项目、计算化学工程经验与在线简历。",
    name: "ShangChien",
    intro:
      "算法原型落地工程师，专注 AI 药物研发、计算化学与分子信息学平台建设。",
    summary:
      "自 2024 年 4 月起参与并主导 Uni-QSAR、ADMET、Uni-PK、ToxScan、NMR-Solver 及分子结构检索数据库等核心产品研发，并独立开发可嵌入分子画板 Molio，覆盖算法原型、后端服务、数据库设计、前端交互、任务调度、用户鉴权、MCP 工具服务、线上部署与私有化交付。",
    philosophy:
      "我习惯把科研算法工具做成可交互、可调用、可部署的工程平台，帮助团队把计算化学和分子信息学能力转化为可商业化产品。",
    actions: {
      resume: "查看简历",
      projects: "项目笔记",
      blog: "技术文章",
      fullExperience: "查看完整经历",
    },
    stats: [
      { value: "6+", label: "核心平台研发与平台化建设" },
      { value: "9", label: "学术文章与交叉学科研究产出" },
      { value: "10", label: "发明专利与外观设计专利公开/授权" },
    ],
    projectHeading: "平台项目",
    capabilityHeading: "核心能力",
    deliveryHeading: "商业化与交付",
    contactHeading: "联系",
    delivery:
      "参与 Bohr 光子计费、VIP License 授权、域名版本试用申请、用户鉴权、权限管理、私有化部署与客户环境适配，能够从产品功能开发一路支撑到客户验证和交付。",
    contact:
      "欢迎交流 AI 药物研发平台、化学信息学基础设施、分子结构检索、计算化学工作流和科研算法产品化。",
    platformProjects: [
      {
        name: "Uni-QSAR",
        description:
          "面向药物分子活性预测和候选分子筛选的自动化定量构效关系建模平台。",
        tags: ["QSAR", "模型任务", "结果展示"],
      },
      {
        name: "ADMET",
        description:
          "用于评估药物分子吸收、分布、代谢、排泄和毒性风险的分子性质预测平台。",
        tags: ["性质预测", "可视化", "权限流程"],
      },
      {
        name: "Uni-PK",
        description:
          "药代动力学浓度-时间曲线模拟平台，将复杂计算模型封装为直观的在线分析流程。",
        tags: ["PK 模拟", "任务调度", "曲线分析"],
      },
      {
        name: "ToxScan",
        description:
          "面向早期药物研发的毒性风险预测平台，支持分子输入、预测任务和结果管理。",
        tags: ["毒性预测", "数据管理", "交付支持"],
      },
      {
        name: "NMR-Solver",
        description:
          "辅助分子结构解析和核磁数据分析的交互式平台，连接算法服务与科研用户工作流。",
        tags: ["NMR", "结构解析", "算法服务"],
      },
      {
        name: "分子结构检索数据库",
        description:
          "基于 PostgreSQL + RDKit 构建的高性能结构检索服务，支持相似度、子结构和复杂化学特征匹配。",
        tags: ["PostgreSQL", "RDKit", "结构检索"],
      },
      {
        name: "Molio",
        description:
          "基于 Vue 3、RDKit 与 VRender 的可嵌入二维分子编辑器内核，支持宿主集成、格式导入导出与插件扩展。",
        tags: ["Vue 3", "RDKit", "分子画板"],
      },
    ],
    capabilities: [
      "Python 后端与 Web API 设计",
      "RDKit 分子数据处理与结构检索",
      "PostgreSQL 数据库设计、索引与性能优化",
      "任务调度、模型服务封装与结果管理",
      "前端交互页面开发与科研工作流设计",
      "用户鉴权、IAM 租户架构与私有化交付",
    ],
    customers: ["华东医药", "仁和益康", "隆基绿能", "万华化学", "首都医科大学"],
  },
  en: {
    homeTitle: "Home",
    homeDescription:
      "Personal homepage for ShangChien, covering AI drug discovery platforms, computational chemistry engineering, and an online resume.",
    name: "ShangChien",
    intro:
      "Algorithm prototyping engineer focused on AI drug discovery, computational chemistry, and molecular informatics platforms.",
    summary:
      "Since April 2024, I have helped build and lead core products including Uni-QSAR, ADMET, Uni-PK, ToxScan, NMR-Solver, and a molecular structure search database, and independently developed Molio, an embeddable 2D molecular editor. My work spans algorithm prototypes, backend services, database design, frontend workflows, task orchestration, authentication, MCP tool services, deployment, and private delivery.",
    philosophy:
      "I turn research algorithms into interactive, callable, and deployable engineering platforms that make computational chemistry and molecular informatics capabilities ready for product and commercial use.",
    actions: {
      resume: "View resume",
      projects: "Project notes",
      blog: "Technical writing",
      fullExperience: "View full experience",
    },
    stats: [
      { value: "6+", label: "core platforms built and productized" },
      {
        value: "9",
        label: "research publications and interdisciplinary outputs",
      },
      { value: "10", label: "published or granted patents and design patents" },
    ],
    projectHeading: "Platform Projects",
    capabilityHeading: "Core Capabilities",
    deliveryHeading: "Commercialization & Delivery",
    contactHeading: "Contact",
    delivery:
      "I have supported Bohr photon billing, VIP License authorization, trial-domain applications, authentication, permission management, private deployment, and customer environment adaptation from feature development through validation and delivery.",
    contact:
      "I am open to conversations about AI drug discovery platforms, cheminformatics infrastructure, molecular structure search, computational chemistry workflows, and research algorithm productization.",
    platformProjects: [
      {
        name: "Uni-QSAR",
        description:
          "An automated quantitative structure-activity relationship modeling platform for molecular activity prediction and candidate screening.",
        tags: ["QSAR", "model tasks", "results UI"],
      },
      {
        name: "ADMET",
        description:
          "A molecular property prediction platform for absorption, distribution, metabolism, excretion, and toxicity risk assessment.",
        tags: ["property prediction", "visualization", "access flows"],
      },
      {
        name: "Uni-PK",
        description:
          "A pharmacokinetic concentration-time simulation platform that packages complex models into clear online analysis workflows.",
        tags: ["PK simulation", "task orchestration", "curve analysis"],
      },
      {
        name: "ToxScan",
        description:
          "A toxicity risk prediction platform for early drug discovery, covering molecule input, prediction tasks, and result management.",
        tags: ["toxicity prediction", "data management", "delivery support"],
      },
      {
        name: "NMR-Solver",
        description:
          "An interactive platform for molecular structure elucidation and NMR data analysis, connecting algorithm services with research workflows.",
        tags: ["NMR", "structure elucidation", "algorithm services"],
      },
      {
        name: "Molecular Structure Search Database",
        description:
          "A high-performance PostgreSQL + RDKit search service supporting similarity search, substructure search, and complex chemical feature matching.",
        tags: ["PostgreSQL", "RDKit", "structure search"],
      },
      {
        name: "Molio",
        description:
          "An embeddable Vue 3 2D molecular editor kernel built on RDKit and VRender, with host integration, format I/O, and plugin families.",
        tags: ["Vue 3", "RDKit", "molecular editor"],
      },
    ],
    capabilities: [
      "Python backend and Web API design",
      "RDKit molecular data processing and structure search",
      "PostgreSQL schema design, indexing, and performance tuning",
      "Task orchestration, model service wrapping, and result management",
      "Frontend workflows for research platforms",
      "Authentication, IAM tenant architecture, and private delivery",
    ],
    customers: [
      "Huadong Medicine",
      "Renhe Yikang",
      "LONGi Green Energy",
      "Wanhua Chemical",
      "Capital Medical University",
    ],
  },
} satisfies Record<Locale, unknown>;
