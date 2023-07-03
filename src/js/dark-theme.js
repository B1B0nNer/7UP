function theme() {
  const checkbox = document.querySelector('.switch input[type="checkbox"]');
  const el = document.documentElement;

    
    // Цей код відповідає за зміну теми при зміні стану чекбоксу.
    //  Коли користувач клікає на чекбокс і стан змінюється, спрацьовує обробник події change.
  checkbox.addEventListener('change', () => {
    if (el.hasAttribute('data-theme')) {
      el.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    } else {
      el.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

    // ця функція перевіряє, чи пристрій встановлений на тему "dark" за замовчуванням,
    // і встановлює відповідний стан чекбоксу та атрибут data - theme для елемента el при завантаженні сторінки.
  function setThemeFromMediaQuery() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      el.setAttribute('data-theme', 'dark');
      checkbox.checked = true;
    }
  }

    // ця функція змінює тему сторінки в залежності від поточного часу,
    // встановлюючи темну тему вечором і вночі, а денну тему вдень.
  function updateThemeByTime() {
    const currentHour = new Date().getHours();
    if (currentHour >= 18 || currentHour < 6) {
      el.setAttribute('data-theme', 'dark');
      checkbox.checked = true;
    } else {
      el.removeAttribute('data-theme');
      checkbox.checked = false;
    }
  }

    // Це умова перевіряє, чи існує значення теми, збережене в локальному сховищі (localStorage).
    
  if (localStorage.getItem('theme') !== null) {
    el.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
  } else {
    setThemeFromMediaQuery();
    updateThemeByTime();
  }

  el.style.transition = 'background-color 0.3s, color 0.3s';
}

theme();
