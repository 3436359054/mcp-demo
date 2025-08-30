// mcp-wrapper.js 的类型声明文件
export interface McpServer {
  new (config: any): McpServer;
  registerTool(name: string, config: any, handler: Function): void;
  connect(transport: any): Promise<void>;
  // 添加其他必要的类型定义
}

export interface StdioServerTransport {
  new (): StdioServerTransport;
  // 添加其他必要的类型定义
}

export declare const McpServer: { new (config: any): McpServer };
export declare const StdioServerTransport: { new (): StdioServerTransport };