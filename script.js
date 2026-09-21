// Mobile nav + footer year
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Copy-email fallback (for visitors with no default mail app set)
  const copyBtn = document.getElementById('copy-email-btn');
  const copyNote = document.getElementById('copy-email-note');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email') || 'jamesldaily@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
      } catch (e) {
        const ta = document.createElement('textarea');
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      const orig = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      if (copyNote) copyNote.style.display = 'block';
      setTimeout(() => { copyBtn.textContent = orig; }, 2000);
    });
  }
});
