'use client';

import { Printer, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export function PrintButton() {
  const [isInIframe, setIsInIframe] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Vérifie si l'application s'exécute dans un iframe (comme l'aperçu AI Studio)
    setIsInIframe(window !== window.parent);
    setCurrentUrl(window.location.href);
  }, []);

  if (isInIframe) {
    return (
      <div className="text-center mt-6 no-print flex flex-col items-center">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg max-w-lg flex flex-col items-center gap-3 shadow-sm">
          <p className="text-amber-800 text-sm font-medium">
            L'impression est bloquée dans cet aperçu.
          </p>
          <p className="text-amber-700 text-xs text-center">
            Pour imprimer votre CV ou le sauvegarder en PDF, veuillez l'ouvrir dans un nouvel onglet.
          </p>
          <a 
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-sm font-medium mt-2"
          >
            <ExternalLink size={16} />
            Ouvrir dans un nouvel onglet
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center mt-6 no-print">
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-all shadow-lg hover:shadow-xl cursor-pointer"
      >
        <Printer size={20} />
        Imprimer le CV
      </button>
    </div>
  );
}
