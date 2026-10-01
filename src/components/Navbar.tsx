import React from 'react';
import { Sparkles, Bookmark, Scissors, Shield, Phone } from 'lucide-react';
import { ConsultationItem } from '../types';

interface NavbarProps {
  consultationItems: ConsultationItem[];
  onOpenDocket: () => void;
  onScrollToDetector: () => void;
  onScrollToCatalog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  consultationItems, 
  onOpenDocket,
  onScrollToDetector,
  onScrollToCatalog 
}) => {
  return (
    <header style={{
      height: '72px',
      background: 'rgba(10, 12, 16, 0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px'
    }}>
      {/* Brand Identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }} onClick={onScrollToDetector}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #1C2230 0%, #10141D 100%)',
          border: '1px solid var(--border-sand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(222, 203, 179, 0.2)'
        }}>
          <Sparkles size={18} color="var(--sand-primary)" />
        </div>

        <div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: '#FFFFFF'
          }}>
            AURA<span style={{ color: 'var(--sand-primary)' }}>STYLE</span>
          </span>
          <span style={{
            fontSize: '9.5px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            display: 'block',
            lineHeight: 1,
            marginTop: '2px'
          }}>
            AI Face Shape & Hairstyle Advisor
          </span>
        </div>
      </div>

      {/* Center navigation shortcuts */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-only-nav">
        <button onClick={onScrollToDetector} className="btn-ghost">
          AI Face Detector
        </button>
        <button onClick={onScrollToCatalog} className="btn-ghost">
          Hairstyle Catalog
        </button>
        <span style={{ color: 'var(--border-subtle)', margin: '0 4px' }}>|</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-dim)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--match-best)' }} />
          <span>Atelier Suite • Studio Open</span>
        </div>
      </nav>

      {/* Right actions: Consultation Docket Drawer Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <button
          onClick={onOpenDocket}
          className="btn-sand"
          style={{ position: 'relative', padding: '9px 18px', fontSize: '13px' }}
        >
          <Bookmark size={15} />
          <span>My Consultation</span>
          {consultationItems.length > 0 && (
            <span style={{
              background: '#0B0D11',
              color: 'var(--sand-primary)',
              borderRadius: 'var(--radius-full)',
              fontSize: '11px',
              fontWeight: 800,
              padding: '1px 6px',
              marginLeft: '4px'
            }}>
              {consultationItems.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
