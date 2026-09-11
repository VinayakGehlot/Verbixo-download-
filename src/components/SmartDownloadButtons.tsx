import React from 'react';
import { useDevice } from '../utils/useDevice';
import { GooglePlayButton } from './GooglePlayButton';
import { AppleAppStoreButton } from './AppleAppStoreButton';

interface SmartDownloadButtonsProps {
  className?: string;
  size?: 'default' | 'large' | 'compact';
  showBadge?: boolean;
}

export const SmartDownloadButtons: React.FC<SmartDownloadButtonsProps> = ({
  className = '',
  size = 'default',
  showBadge = true,
}) => {
  const { isIOS, isAndroid } = useDevice();

  const isCompact = size === 'compact';
  const isLarge = size === 'large';

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 ${className}`}>
      {/* Google Play Button */}
      <div className="relative w-full sm:w-auto">
        {showBadge && isAndroid && (
          <span className="absolute -top-2.5 right-4 z-20 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500 text-black shadow-md animate-pulse">
            Your Device
          </span>
        )}
        <GooglePlayButton
          id="smart-google-play-cta"
          variant={isLarge ? 'primary' : isCompact ? 'compact' : 'primary'}
          label={isLarge ? 'GET IT ON' : 'Download for'}
          sublabel="Google Play"
          className="w-full sm:w-auto justify-center"
        />
      </div>

      {/* iOS Button */}
      <div className="relative w-full sm:w-auto">
        {showBadge && isIOS && (
          <span className="absolute -top-2.5 right-4 z-20 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#A855F7] text-white shadow-md animate-pulse">
            Your Device
          </span>
        )}
        <AppleAppStoreButton
          id="smart-ios-app-cta"
          variant={isLarge && isIOS ? 'primary' : isCompact ? 'compact' : 'secondary'}
          label={isLarge ? 'GET IT ON' : 'Available on'}
          sublabel="iOS / Web"
          className="w-full sm:w-auto justify-center"
        />
      </div>
    </div>
  );
};
