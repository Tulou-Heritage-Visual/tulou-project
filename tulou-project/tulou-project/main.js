// main.js 

document.addEventListener('DOMContentLoaded', () => {
  // 页面切换
  initPageSwitch();

  // 调用独立桑基图
  initSankey();
});

// 页面切换逻辑
function initPageSwitch() {
  const menuBtns = document.querySelectorAll('.menu-btn');
  const pages = document.querySelectorAll('.page');

  menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      menuBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetPage = btn.dataset.page;
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById(targetPage).classList.add('active');
    });
  });
}

// 弹窗功能
function openModal(id) {
  document.getElementById(id).classList.add('show');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('show');
  });
});