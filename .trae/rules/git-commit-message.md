---
alwaysApply: true
scene: git_message
---

在此处编写规则，自定义 AI 生成提交信息的风格。
# 提交信息生成规则

## 语言
- 使用中文编写提交信息

## 格式
- 使用 Conventional Commits 规范
- 格式: `<type>: <subject>`

## 类型 (type)
- ⚙️ feat: 新功能
- 🔧 fix: 修复问题
- 📃 docs: 文档修改
- 🎲 style: 代码格式修改（不影响功能）
- 🧱 refactor: 代码重构
- 🧩 perf: 性能优化
- 🕹️ test: 测试相关
- 🛠️ chore: 构建/工具相关

## 主题 (subject)
- 不超过 50 个字符
- 使用动词开头，描述做了什么
- 结尾不加句号

## 示例
- ⚙️ feat: 添加用户登录功能
- 🔧 fix: 修复空指针异常
- 📃 docs: 更新安装说明
