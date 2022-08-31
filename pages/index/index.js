// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    steps: [{
      text: '1',
      plan: "第1期供应",
      status: '1',
      first: true,
      result: null
    },
    {
      text: '2',
      plan: "第2期供应",
      status: '1',
      result: ["未提示", "已提示"]
    }, {
      text: '3',
      plan: "步骤3",
      status: '0',
      result: ["未确认", "已确认"]
    },
    {
      text: '4',
      plan: "第4期供应",
      status: '0',
      result: ["未完成", "已完成"]
    },
    {
      text: '5',
      plan: "第5期供应",
      status: '0',
      result: ["未完成", "已完成"]
    },
    {
      text: '6',
      plan: "第6期供应",
      status: '0',
      result: ["未完成", "已接受"],
    }
  ],
  },
  onLoad() {
   
  },
 
})
