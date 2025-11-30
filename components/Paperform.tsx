import React, { useEffect } from 'react';

export const Paperform: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Ignore removal errors if script was already moved/removed by external scripts
      }
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-4 rounded-xl shadow-lg border border-rodeo-gold/20">
      <div data-paperform-id="zqgrvgce"></div>
    </div>
  );
};
