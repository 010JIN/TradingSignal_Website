# TOP 1 Trading Signal - ALL YOU NEED Website

**你唯一需要的交易指标** - 一个专业的TradingView交易信号指标推广网站，支持邀请码验证和用户申请功能。

## 功能特性

### 🎯 核心功能
- **邀请码验证系统** - 支持KOL专属邀请码验证
- **用户申请表单** - 自动化的TradingView权限申请流程
- **响应式设计** - 完美适配桌面端和移动端
- **动画效果** - 丰富的交互动画和视觉效果

### 📱 页面结构
- **首页Hero区域** - 邀请码输入和验证
- **功能介绍** - 产品特性和优势展示
- **使用流程** - 4步简单使用指南
- **效果展示** - 实时信号和回测数据
- **常见问题** - 可折叠的FAQ区域
- **联系我们** - 社交媒体链接和联系表单

### 🎨 设计特色
- **现代暗色主题** - 专业的金融科技风格
- **渐变色彩** - 蓝色到绿色的渐变配色方案
- **玻璃拟态效果** - 半透明背景和模糊效果
- **流畅动画** - 页面滚动和交互动画

## 技术栈

- **HTML5** - 语义化标签和现代结构
- **CSS3** - Flexbox/Grid布局，CSS变量，动画
- **JavaScript ES6+** - 原生JavaScript，无依赖
- **Font Awesome** - 图标库
- **Google Fonts** - Inter字体

## 使用方法

### 1. 直接打开
```bash
# 在浏览器中打开 index.html
open index.html
```

### 2. 本地服务器（推荐）
```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx serve .

# 然后访问 http://localhost:8000
```

## 邀请码系统

### 有效邀请码
- `KOL2024` - KOL专属邀请码
- `TRADING50` - 交易优惠码
- `SIGNAL2024` - 信号指标码
- `BONUS50` - 奖金优惠码
- `WELCOME` - 欢迎新用户码

### 验证流程
1. 用户输入邀请码
2. 系统验证码的有效性
3. 验证成功后显示申请表单
4. 用户填写邮箱和TradingView用户名
5. 提交申请，系统处理权限开通

## 自定义配置

### 修改邀请码
在 `assets/js/script.js` 中找到 `validCodes` 数组：
```javascript
const validCodes = ['KOL2024', 'TRADING50', 'SIGNAL2024', 'BONUS50', 'WELCOME'];
```

### 修改样式
主要样式文件在 `assets/css/style.css`，使用CSS变量便于主题定制：
```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #10b981;
    --background-dark: #0f172a;
    --text-light: #e2e8f0;
}
```

### 添加新功能
JavaScript文件采用模块化结构，可以轻松添加新功能：
- `initNavigation()` - 导航功能
- `initInviteCode()` - 邀请码验证
- `initForms()` - 表单处理
- `initFAQ()` - FAQ折叠
- `initScrollAnimations()` - 滚动动画

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 部署建议

### 静态托管
- **Netlify** - 免费静态网站托管
- **Vercel** - 快速部署和CDN
- **GitHub Pages** - 与GitHub集成

### 服务器部署
- **Nginx** - 高性能Web服务器
- **Apache** - 传统Web服务器
- **CDN** - 加速全球访问

## 许可证

MIT License - 可自由使用和修改

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱：support@tradingsignal.com
- Telegram：@TradingSignal
- Twitter：@TradingSignal

---

**TOP 1 Trading Signal - ALL YOU NEED** - 你唯一需要的交易指标
