import React, { useEffect, useState } from 'react';
import { generateRodeoImage } from '../services/geminiService';
import { Image as ImageIcon, Loader2 } from 'lucide-react';

interface GeneratedImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  overlayColor?: string;
}

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ 
  prompt, 
  alt, 
  className = "", 
  fallbackSrc = "https://picsum.photos/1200/800",
  overlayColor
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      // If we don't have an API key available in env, skip generation to save time/errors in demo
      if (!process.env.API_KEY) {
        if (isMounted) {
            setLoading(false);
            setError(true);
        }
        return;
      }

      try {
        const url = await generateRodeoImage(prompt);
        if (isMounted) {
          setImageUrl(url);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to generate image", err);
          setError(true);
          setLoading(false);
        }
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  const displayUrl = imageUrl || fallbackSrc;

  return (
    <div className={`relative overflow-hidden bg-rodeo-brown/10 ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-rodeo-tan z-10">
          <Loader2 className="w-8 h-8 animate-spin text-rodeo-gold" />
          <span className="ml-2 text-rodeo-brown text-sm">Designing asset...</span>
        </div>
      )}
      
      <img
        src={displayUrl}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
      />
      
      {overlayColor && (
        <div className={`absolute inset-0 ${overlayColor}`}></div>
      )}

      {/* Debug badge if using fallback due to error/missing key */}
      {error && !loading && process.env.API_KEY && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Fallback Img
        </div>
      )}
    </div>
  );
};
