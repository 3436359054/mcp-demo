// 使用包装文件导入MCP服务器相关模块
import { McpServer, StdioServerTransport } from '../mcp-wrapper.js';
import { z } from 'zod';

// 创建MCP服务器实例
const server = new McpServer({
  name: 'my-mcp-server',
  version: '1.0.0',
});

// 注册工具函数
server.registerTool('add', {
  description: 'Add two numbers',
  inputSchema: {
    a: z.number().describe('First number'),
    b: z.number().describe('Second number'),
  }
}, async ({ a, b }: { a: number; b: number }) => ({
  content: [{
    type: 'text',
    text: String(a + b)
  }]
}));

server.registerTool('multiply', {
  description: 'Multiply two numbers',
  inputSchema: {
    a: z.number().describe('First number'),
    b: z.number().describe('Second number'),
  }
}, async ({ a, b }: { a: number; b: number }) => ({
  content: [{
    type: 'text',
    text: String(a * b)
  }]
}));

server.registerTool('greet', {
  description: 'Greet a person',
  inputSchema: {
    name: z.string().describe('Person\'s name'),
  }
}, async ({ name }: { name: string }) => ({
  content: [{
    type: 'text',
    text: `Hello, ${name}!`
  }]
}));

// 启动服务器