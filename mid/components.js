// components.js - entire studios 品牌組件

/**
 * 生成導航列 HTML
 */
function generateNavbar() {
    return `
    <nav class="navbar">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="showcase.html">Showcase</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  `;
}

/**
 * 生成側邊欄 HTML
 * @param {boolean} showOverlay - 是否顯示懸浮效果和連結
 */
function generateSidebar(showOverlay = true) {
    const avatarContent = `
    <img src="https://i.pinimg.com/736x/31/3a/02/313a025906fbbf32086f3bb7b2073d8e.jpg"
         class="first-avatar"
         alt="entire studios founders" />
    <img src="https://i.pinimg.com/736x/b5/a7/e8/b5a7e8592a0a0a182d4a4adf0c0c5562.jpg"
         class="second-avatar"
         alt="entire studios collection" />
    ${showOverlay ? `
      <div class="avatar-overlay">
        <span class="overlay-text">ICE CREAM</span>
      </div>
    ` : ''}
  `;

    return `
    <aside class="hero">
      <div class="avatar">
        ${avatarContent}
      </div>
      <div class="intro">
        <h1>Ice Cream</h1>
        <p>Est. 2003 | dali</p>
        <p>Email: <a href="https://www.bing.com/search?pglt=299&q=%E8%91%B3%E8%91%B3%E5%A4%A2%E5%A4%A2&cvid=72937b9abfdc4eaca905a5a80bad530e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhA0gEINTQ0OGowajGoAgCwAgA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531">StrawberryCake.com</a></p>
        <p>Website: <a href="https://www.coldstone.com.tw/" target="_blank">sofuckinggood.com</a></p>
      </div>
    </aside>
  `;
}

/**
 * 生成頁尾 HTML
 */
function generateFooter() {
    return `
    <footer>
      <p>2025 entire studios©</p>
    </footer>
  `;
}

/**
 * 初始化所有共用組件
 * @param {Object} options - 配置選項
 * @param {boolean} options.sidebarOverlay - 側邊欄是否顯示懸浮效果
 * @param {boolean} options.showFooter - 是否顯示頁尾
 */
function initComponents(options = {}) {
    const { sidebarOverlay = true, showFooter = true } = options;

    // 插入導航列
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.outerHTML = generateNavbar();
    }

    // 插入側邊欄
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
        sidebarPlaceholder.outerHTML = generateSidebar(sidebarOverlay);
    }

    // 插入頁尾
    if (showFooter) {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = generateFooter();
        }
    }

}



// 當 DOM 載入完成後自動初始化
document.addEventListener('DOMContentLoaded', function() {
    initComponents({
        sidebarOverlay: true,
        showFooter: true
    });
});