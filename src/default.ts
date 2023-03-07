export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  systemRule: ""
}

// 更多预设请去 [Github](https://github.com/ourongxing/chatgpt-vercel) PR。
export const defaultMessage = `
- 本站仅用于演示，填入自己的 key 才可使用。
- [源码](https://github.com/cs686/chatgpt-demo) 修改自 [Diu](https://github.com/ddiu8081/chatgpt-demo)，欢迎自部署。
- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Deno](https://dash.deno.com/) 提供支持。
- **Shift+Enter** 换行。开头输入 **/** 或者 **空格** 搜索 Prompt 预设。`
