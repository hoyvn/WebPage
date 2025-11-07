// script.js - entire studios showcase 互動功能

// ==================== Table Styler ====================

// 儲存表格的原始樣式
const originalTableStyles = {
    width: '',
    borderWidth: '',
    cellSpacing: '',
    backgroundColor: '#ffffff'
};

// 當頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    initTableStyler();
    initPolaroidSwitcher();
});

/**
 * 初始化表格樣式控制器
 */
function initTableStyler() {
    const table = document.getElementById('statsTable');
    const widthSelect = document.getElementById('widthSelect');
    const spacingSelect = document.getElementById('spacingSelect');
    const tableColor = document.getElementById('tableColor');
    const resetBtn = document.getElementById('resetTable');

    // 如果元素不存在（不在 showcase 頁面），直接返回
    if (!table || !widthSelect || !spacingSelect || !tableColor || !resetBtn) {
        return;
    }

    // 儲存原始樣式
    originalTableStyles.width = table.style.width || '100%';
    originalTableStyles.borderWidth = table.border || '';
    originalTableStyles.cellSpacing = table.cellSpacing || '';
    originalTableStyles.backgroundColor = table.style.backgroundColor || '#ffffff';

    // 寬度選擇器
    widthSelect.addEventListener('change', function() {
        if (this.value) {
            table.style.width = this.value;
        } else {
            table.style.width = originalTableStyles.width;
        }
    });

    // 邊框與間距選擇器
    spacingSelect.addEventListener('change', function() {
        if (this.value) {
            table.border = this.value;
            table.cellSpacing = this.value;
        } else {
            table.border = originalTableStyles.borderWidth;
            table.cellSpacing = originalTableStyles.cellSpacing;
        }
    });

    // 背景顏色選擇器（不影響 th）
    tableColor.addEventListener('input', function() {
        // 只改變 tbody 和 td 的背景色
        const tbody = table.querySelector('tbody');
        if (tbody) {
            tbody.style.backgroundColor = this.value;
        }

        const tds = table.querySelectorAll('td');
        tds.forEach(td => {
            td.style.backgroundColor = this.value;
        });
    });

    // 重置按鈕
    resetBtn.addEventListener('click', function() {
        // 重置表格樣式
        table.style.width = originalTableStyles.width;
        table.border = originalTableStyles.borderWidth;
        table.cellSpacing = originalTableStyles.cellSpacing;

        // 重置 tbody 背景
        const tbody = table.querySelector('tbody');
        if (tbody) {
            tbody.style.backgroundColor = originalTableStyles.backgroundColor;
        }

        // 重置所有 td 背景
        const tds = table.querySelectorAll('td');
        tds.forEach(td => {
            td.style.backgroundColor = originalTableStyles.backgroundColor;
        });

        // 重置選擇器和顏色輸入
        widthSelect.value = '';
        spacingSelect.value = '';
        tableColor.value = '#ffffff';
    });
}

// ==================== Polaroid Image Switcher ====================

// 圖片資料陣列
const polaroidImages = [
    {
        url: 'https://img.tagsis.com/202211/109531.jpeg',
        caption: 'red velvet'
    },
    {
        url: 'https://th.bing.com/th/id/R.b567a58793d15f1db49a5a497eec34d2?rik=xU58uE1IbA%2f5%2fA&riu=http%3a%2f%2fwww.coldstonecreamery.com%2fassets%2fimg%2fproducts%2fsignaturecreations%2foreooverload.jpg&ehk=l%2fxr7Zl4sX3x%2fxpQS0nZKpmbkWKvJGSpe9OPFZSqrJI%3d&risl=&pid=ImgRaw&r=0',
        caption: 'Oreo Overload'
    },
    {
        url: 'https://tse2.mm.bing.net/th/id/OIP.kqIvREJD5D9nkZzpqNX_rAHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3',
        caption: 'Matcha Pop'
    },
    {
        url: 'https://tse2.mm.bing.net/th/id/OIP.R5F6eE4c2t7O6mWC4Qf7sQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        caption: 'Our Strawberry Blonde'
    },
    {
        url: 'https://tse3.mm.bing.net/th/id/OIP.GvFxv-nGfNxVXDx3dx2azAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        caption: 'Cotton Candy Paradise'
    }
];

// 當前圖片索引
let currentImageIndex = 0;

/**
 * 初始化 Polaroid 圖片切換器
 */
function initPolaroidSwitcher() {
    const polaroidImage = document.getElementById('polaroidImage');
    const polaroidCounter = document.getElementById('polaroidCounter');
    const polaroidText = document.getElementById('polaroidText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // 如果元素不存在（不在 showcase 頁面），直接返回
    if (!polaroidImage || !polaroidCounter || !polaroidText || !prevBtn || !nextBtn) {
        return;
    }

    /**
     * 更新圖片顯示
     */
    function updateImage() {
        const currentImage = polaroidImages[currentImageIndex];
        polaroidImage.src = currentImage.url;
        polaroidCounter.textContent = `Image ${currentImageIndex + 1} of ${polaroidImages.length}`;
        polaroidText.textContent = currentImage.caption;
    }

    /**
     * 切換到上一張圖片
     */
    function showPrevious() {
        currentImageIndex--;
        // 循環：如果到第一張之前，跳到最後一張
        if (currentImageIndex < 0) {
            currentImageIndex = polaroidImages.length - 1;
        }
        updateImage();
    }

    /**
     * 切換到下一張圖片
     */
    function showNext() {
        currentImageIndex++;
        // 循環：如果超過最後一張，回到第一張
        if (currentImageIndex >= polaroidImages.length) {
            currentImageIndex = 0;
        }
        updateImage();
    }

    // 綁定按鈕事件
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    // 初始化顯示第一張圖片
    updateImage();

    // 可選：支援鍵盤左右鍵切換
    document.addEventListener('keydown', function(e) {
        // 只在 showcase 頁面且圖片元素存在時才響應
        if (!document.getElementById('polaroidImage')) return;

        if (e.key === 'ArrowLeft') {
            showPrevious();
        } else if (e.key === 'ArrowRight') {
            showNext();
        }
    });
}