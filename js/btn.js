let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  // 1. Default browser prompt ko rokein
  e.preventDefault();
  // 2. Event ko variable mein save karein
  deferredPrompt = e;
  // 3. Apna install button show karein
// me isko block se nono kar deta hoo
  installBtn.style.display = 'none';
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    // 4. Prompt show karein
    deferredPrompt.prompt();
    // 5. User ka response check karein
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    // 6. Reset karein
    deferredPrompt = null;
    installBtn.style.display = 'none'; // Install hone ke baad button chhupa dein
  }
});