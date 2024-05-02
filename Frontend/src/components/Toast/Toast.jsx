function Toast(mainRef, { title = '', message = '', type = '', duration = 3000 }) {
  const main = mainRef.current;

  if (main) {
    const toast = document.createElement('div');

    // Auto remove toast
    const autoRemoveToast = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when click
    toast.onclick = function (e) {
      if (e.target.closest('.toast__close')) {
        main.removeChild(toast);
        clearTimeout(autoRemoveToast);
      }
    };

    const icons = {
      success: 'fa-solid fa-circle-check',
      info: 'fa-solid fa-circle-info',
      warning: 'fa-solid fa-triangle-exclamation',
      error: 'fa-solid fa-bug',
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.className = `toast toast--${type} flex items-center bg-white rounded-sm py-5 min-w-[400px] max-w-[450px] border-l-4`;
    toast.style.animation = `slideInLeft .3s ease, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
          <div class="toast__icon text-2xl px-4">
              <i class="${icon}"></i>
          </div>
              <div class="flex-grow">
                  <h3 class="text-base font-semibold text-[#333]">${title}</h3>
                  <p class="text-sm text-[#888] mt-[6px] leading-normal">${message}</p>
              </div>
              <div class="toast__close px-4 text-xl text-[#333] cursor-pointer transition-all ease-linear duration-200 hover:opacity-70">
                  <i class="fa-solid fa-xmark"></i>
              </div>
      `;
    main.appendChild(toast);
  }
}

export default Toast;
