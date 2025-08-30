# MCP服务器演示项目

## 项目简介

这是一个使用 Model Context Protocol (MCP) SDK 创建的 TypeScript 服务器演示项目。该服务器通过标准输入/输出 (STDIO) 与客户端通信，提供了三个简单的工具函数：加法、乘法和问候功能。

## 安装和设置

1. 确保已安装 Node.js (推荐版本 20.0.0 或更高)

2. 克隆或下载此项目到本地

3. 安装项目依赖：
   
   ```bash
   npm install
   ```

## 运行方式

### 编译并运行 (TypeScript)

```bash
# 编译 TypeScript 代码
npm run build

# 运行编译后的 JavaScript 代码
npm start
```

## MCP服务器配置

以下是本项目MCP服务器的JSON配置示例：

```json
{
  "mcpServers": {
    "my-mcp-server": {
      "command": "node",
      "args": [
        "D:/workspace/other/mcpSeversDemo/dist/index.js"
      ]
    }
  }
}
```

这个配置文件定义了如何启动和配置MCP服务器，指定了服务器名称为"my-mcp-server"，以及使用node命令运行编译后的dist/index.js文件。

## 实现说明