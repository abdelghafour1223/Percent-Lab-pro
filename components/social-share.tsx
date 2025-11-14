'use client';

import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Twitter, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  title: string;
  description?: string;
  result: string;
  calculatorName: string;
}

export function SocialShare({ title, description, result, calculatorName }: SocialShareProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Get current URL
  const url = typeof window !== 'undefined' ? window.location.href : '';

  // Create shareable text
  const shareText = `I just calculated ${result} using the ${calculatorName} on PercentLab! 📊`;
  const fullText = description
    ? `${shareText}\n\n${description}\n\nTry it yourself:`
    : `${shareText}\n\nTry it yourself:`;

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(fullText)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${fullText} ${url}`)}`,
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: fullText,
          url: url,
        });
      } catch (error) {
        // User cancelled or share failed
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${fullText} ${url}`);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Share2 className="h-4 w-4" />
        <span>Share your result</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Twitter */}
        <Button
          variant="outline"
          size="default"
          onClick={() => handleShare('twitter')}
          className="gap-2 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
          <span className="hidden sm:inline">Twitter</span>
        </Button>

        {/* Facebook */}
        <Button
          variant="outline"
          size="default"
          onClick={() => handleShare('facebook')}
          className="gap-2 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
          <span className="hidden sm:inline">Facebook</span>
        </Button>

        {/* LinkedIn */}
        <Button
          variant="outline"
          size="default"
          onClick={() => handleShare('linkedin')}
          className="gap-2 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
          <span className="hidden sm:inline">LinkedIn</span>
        </Button>

        {/* WhatsApp */}
        <Button
          variant="outline"
          size="default"
          onClick={() => handleShare('whatsapp')}
          className="gap-2 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Button>

        {/* Native Share (mobile) or Copy Link */}
        <div className="relative">
          <Button
            variant="outline"
            size="default"
            onClick={handleNativeShare}
            className="gap-2"
            aria-label="Share or copy link"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">More</span>
          </Button>
          {showTooltip && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
              Link copied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
