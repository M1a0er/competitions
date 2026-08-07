(function () {
  'use strict';

  // 注入暗色模式 CSS
  var style = document.createElement('style');
  style.id = 'dark-mode-styles';
  style.textContent = [
    '/* 切换按钮 */',
    '.dark-toggle {',
    '  position: fixed;',
    '  top: 16px;',
    '  right: 20px;',
    '  z-index: 999;',
    '  width: 38px;',
    '  height: 38px;',
    '  border-radius: 50%;',
    '  border: 1px solid var(--border, rgba(164,31,27,0.12));',
    '  background: #fff;',
    '  color: #111;',
    '  font-size: 18px;',
    '  cursor: pointer;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.2s;',
    '  line-height: 1;',
    '  padding: 0;',
    '  font-family: inherit;',
    '}',
    '.dark-toggle:hover {',
    '  transform: scale(1.1);',
    '  border-color: var(--accent, #a41f1b);',
    '}',

    '/* 暗色模式全局覆盖 */',
    'body.dark {',
'  --bg: #1f1f1f;',
    '  --text: #d4d0c8;',
    '  --text_y: #a09888;',
    '  --card-bg: #2f2f2f;',
    '  --border: rgba(164,31,27,0.18);',
    '}',

    'body.dark .dark-toggle {',
    '  background: #2f2f2f;',
    '  color: #d4d0c8;',
    '}',

    /* 将所有 #fff / #fdfcfb 背景替换为 #2f2f2f */
    'body.dark [style*="background:#fff"] { background: #2f2f2f !important; }',
    'body.dark [style*="background: #fff"] { background: #2f2f2f !important; }',
    'body.dark [style*="background:#fdfcfb"] { background: #2f2f2f !important; }',
    'body.dark [style*="background: #fdfcfb"] { background: #2f2f2f !important; }',
    'body.dark [style*="background:#ffffff"] { background: #2f2f2f !important; }',
    'body.dark [style*="background: #ffffff"] { background: #2f2f2f !important; }',

    /* 常见元素背景覆盖 */
    'body.dark .card,',
    'body.dark .search-input,',
    'body.dark .filter-select,',
    'body.dark input[type="text"],',
    'body.dark input[type="search"],',
    'body.dark select,',
    'body.dark textarea {',
    '  background: #2f2f2f;',
    '  color: #d4d0c8;',
    '}',

    /* 卡片内部文字 */
    'body.dark .card-name,',
    'body.dark .card h2,',
    'body.dark .card h3 {',
    '  color: #d4d0c8;',
    '}',

    /* 进度条背景 */
    'body.dark .card-bar-wrap,',
    'body.dark .progress-bg,',
    'body.dark [class*="bar-wrap"] {',
    '  background: rgba(164,31,27,0.12);',
    '}',

    /* 详情页常见亮色块 */
    'body.dark .info-block,',
    'body.dark .info-card,',
    'body.dark .detail-box,',
    'body.dark .stat-box {',
    '  background: #5a5a5a;',
    '}',

    /* placeholder 颜色 */
    'body.dark ::placeholder {',
    '  color: #a09888;',
    '}',

    /* 链接颜色微调 */
    'body.dark a {',
    '  color: #d4b8a0;',
    '}',

    /* 信息卡 oneliner */
    'body.dark .oneliner {',
    '  color: #968172;',
    '}',
    

    /* 信息卡 info-grid */
    'body.dark .info-grid {',
    '  background: rgba(164,31,27,0.25);',
    '  border-color: rgba(164,31,27,0.25);',
    '}',
    'body.dark .info-grid .label {',
    '  background: #2f1f1f;',
    '}',
    'body.dark .info-grid .value {',
    '  background: #2f2f2f;',
    '}',

    /* 表格 */
    'body.dark tbody td {',
    '  background: #2f2f2f;',
    '}',
    'body.dark tbody tr:nth-child(even) td {',
    '  background: #353535;',
    '}',

    
    'body.dark .rhythm-card .period{',
    '  background: #353535;',
    '}',
    
    'body.dark .rhythm-card .desc{',
    '  background: #2f2f2f;',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // 创建切换按钮
  var btn = document.createElement('button');
  btn.className = 'dark-toggle';
  btn.title = '切换暗色模式';
  document.body.appendChild(btn);

  // 读取本地存储偏好
  if (localStorage.getItem('darkMode') === '1') {
    document.body.classList.add('dark');
    btn.textContent = '☾'; // ☾
  } else {
    btn.textContent = '☀'; // ☀
  }

  // 切换逻辑
  btn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    var isDark = document.body.classList.contains('dark');
    btn.textContent = isDark ? '☾' : '☀';
    localStorage.setItem('darkMode', isDark ? '1' : '0');
  });
})();
