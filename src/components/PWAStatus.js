import React, { useState, useEffect } from 'react';

const PWAStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isInstalled, setIsInstalled] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    // Check if app is installed (running in standalone mode)
    setIsInstalled(window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone);

    // Online/offline detection
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Install prompt handling
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    const result = await installPrompt.prompt();
    console.log('Install prompt result:', result);
    setInstallPrompt(null);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      zIndex: 1000,
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }}>
      {/* Online/Offline Status */}
      <div style={{
        padding: '8px 12px',
        borderRadius: '20px',
        fontSize: '12px',
        color: 'white',
        background: isOnline ? '#2ecc71' : '#e74c3c',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'white'
        }}></div>
        {isOnline ? 'Online' : 'Offline'}
      </div>

      {/* Install Button */}
      {installPrompt && !isInstalled && (
        <button
          onClick={handleInstallClick}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            background: '#4a90e2',
            color: 'white',
            fontSize: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          📱 Install App
        </button>
      )}

      {/* Installed Status */}
      {isInstalled && (
        <div style={{
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          color: 'white',
          background: '#9b59b6',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          ✓ Installed
        </div>
      )}
    </div>
  );
};

export default PWAStatus;
