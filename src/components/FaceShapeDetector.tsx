import React, { useState, useRef } from 'react';
import { 
  Camera, 
  UploadCloud, 
  Sparkles, 
  Check, 
  Eye, 
  EyeOff, 
  RefreshCw, 
  ShieldCheck, 
  Sliders, 
  Info,
  Maximize2
} from 'lucide-react';
import { FaceShape, SamplePortrait } from '../types';
import { SAMPLE_PORTRAITS, FACE_SHAPES_DATA } from '../data/styleAdvisorData';

interface FaceShapeDetectorProps {
  currentShape: FaceShape;
  onSelectShape: (shape: FaceShape) => void;
  uploadedPhoto: string;
  onUploadPhoto: (dataUrl: string, detectedShape?: FaceShape) => void;
}

export const FaceShapeDetector: React.FC<FaceShapeDetectorProps> = ({
  currentShape,
  onSelectShape,
  uploadedPhoto,
  onUploadPhoto
}) => {
  const [showMesh, setShowMesh] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);
  const [activeTab, setActiveTab] = useState<'detector' | 'manual'>('detector');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Trigger a realistic simulated AI biometric scan
  const triggerScan = (imageUrl: string, predictedShape: FaceShape) => {
    setIsScanning(true);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          onUploadPhoto(imageUrl, predictedShape);
          onSelectShape(predictedShape);
          return 100;
        }
        return prev + 25;
      });
    }, 180);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          // Default predicted shape for custom uploads or let user fine-tune
          triggerScan(event.target.result as string, 'Oval');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectSample = (sample: SamplePortrait) => {
    triggerScan(sample.image, sample.faceShape);
  };

  const faceShapesList: FaceShape[] = ['Oval', 'Square', 'Round', 'Diamond', 'Heart', 'Oblong'];

  return (
    <section style={{ marginBottom: '48px' }} id="detector-section">
      
      {/* Hero Headline */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px', padding: '0 16px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'rgba(222, 203, 179, 0.1)', border: '1px solid var(--border-sand)', marginBottom: '14px' }}>
          <Sparkles size={14} color="var(--sand-primary)" />
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--sand-primary)', letterSpacing: '0.04em' }}>
            AI Facial Geometry & Biometrics
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: '#FFF', lineHeight: 1.15, marginBottom: '14px' }}>
          Discover the Haircuts Designed for <span className="text-sand-gradient">Your Facial Architecture</span>
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Upload a portrait or select your face shape to activate our AI ratio advisor. We map facial thirds, cheekbone width, and jaw taper to prescribe your most flattering cuts.
        </p>

        {/* Mode Toggle Pills: Detector vs Manual Diagram */}
        <div style={{
          display: 'inline-flex',
          background: 'rgba(255, 255, 255, 0.04)',
          padding: '4px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-subtle)',
          marginTop: '22px'
        }}>
          <button
            onClick={() => setActiveTab('detector')}
            style={{
              padding: '8px 22px',
              borderRadius: 'var(--radius-full)',
              background: activeTab === 'detector' ? 'var(--sand-gradient)' : 'transparent',
              color: activeTab === 'detector' ? '#0B0D11' : 'var(--text-muted)',
              border: 'none',
              fontWeight: activeTab === 'detector' ? 700 : 500,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            📸 AI Biometric Detector
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            style={{
              padding: '8px 22px',
              borderRadius: 'var(--radius-full)',
              background: activeTab === 'manual' ? 'var(--sand-gradient)' : 'transparent',
              color: activeTab === 'manual' ? '#0B0D11' : 'var(--text-muted)',
              border: 'none',
              fontWeight: activeTab === 'manual' ? 700 : 500,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            📐 Manual Shape Diagrams
          </button>
        </div>
      </div>

      {/* DETECTOR MODE */}
      {activeTab === 'detector' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '1100px',
          margin: '0 auto',
          alignItems: 'center'
        }}>
          
          {/* Left: Interactive Portrait Canvas with SVG Landmark Mesh */}
          <div className="aura-card aura-card-gold-border" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span className="badge badge-sand">
                <Sparkles size={11} /> Face Landmark Grid
              </span>

              <button
                onClick={() => setShowMesh(!showMesh)}
                className="btn-ghost"
                style={{ fontSize: '12px', padding: '4px 10px' }}
              >
                {showMesh ? <EyeOff size={14} /> : <Eye size={14} />}
                <span>{showMesh ? 'Hide Geometry' : 'Show Geometry'}</span>
              </button>
            </div>

            {/* Portrait Frame with Landmark Lines Overlay */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '360px',
              height: '420px',
              margin: '0 auto 16px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: '#0B0D12',
              border: '1px solid var(--border-sand)'
            }}>
              {/* Portrait Image */}
              <img 
                src={uploadedPhoto} 
                alt="Portrait for analysis" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: isScanning ? 'brightness(0.7) contrast(1.1)' : 'brightness(0.95)'
                }}
              />

              {/* Scanning Laser Line when scanning */}
              {isScanning && <div className="scan-line" />}

              {/* SVG Landmark Overlay */}
              {showMesh && (
                <svg
                  viewBox="0 0 360 420"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none'
                  }}
                >
                  {/* Facial Thirds Horizontal Guides */}
                  <line x1="40" y1="120" x2="320" y2="120" stroke="rgba(222, 203, 179, 0.45)" strokeWidth="1" strokeDasharray="4 3" />
                  <line x1="40" y1="210" x2="320" y2="210" stroke="rgba(222, 203, 179, 0.55)" strokeWidth="1.5" strokeDasharray="4 3" />
                  <line x1="60" y1="330" x2="300" y2="330" stroke="rgba(222, 203, 179, 0.45)" strokeWidth="1" strokeDasharray="4 3" />

                  {/* Vertical Symmetry Axis */}
                  <line x1="180" y1="50" x2="180" y2="370" stroke="rgba(222, 203, 179, 0.6)" strokeWidth="1" strokeDasharray="5 4" />

                  {/* Forehead Width Line */}
                  <line x1="80" y1="130" x2="280" y2="130" stroke="#DECBB3" strokeWidth="2" />
                  <circle cx="80" cy="130" r="4.5" fill="#DECBB3" className="pulse-node" />
                  <circle cx="280" cy="130" r="4.5" fill="#DECBB3" className="pulse-node" />

                  {/* Cheekbone Width Line */}
                  <line x1="55" y1="210" x2="305" y2="210" stroke="#DECBB3" strokeWidth="2" />
                  <circle cx="55" cy="210" r="5" fill="#DECBB3" className="pulse-node" />
                  <circle cx="305" cy="210" r="5" fill="#DECBB3" className="pulse-node" />

                  {/* Jawline Geometry Lines */}
                  <polyline 
                    points="55,210 90,320 180,365 270,320 305,210" 
                    fill="none" 
                    stroke="rgba(222, 203, 179, 0.75)" 
                    strokeWidth="1.75" 
                  />
                  <circle cx="90" cy="320" r="4.5" fill="#DECBB3" />
                  <circle cx="180" cy="365" r="5" fill="#DECBB3" />
                  <circle cx="270" cy="320" r="4.5" fill="#DECBB3" />

                  {/* Golden Ratio Facial Triangle */}
                  <polygon 
                    points="180,130 55,210 180,365 305,210" 
                    fill="rgba(222, 203, 179, 0.05)" 
                    stroke="rgba(222, 203, 179, 0.3)" 
                    strokeWidth="1" 
                  />

                  {/* Text Overlays for Biometric Indicators */}
                  <rect x="130" y="118" width="100" height="18" rx="4" fill="rgba(12, 14, 18, 0.85)" stroke="rgba(222, 203, 179, 0.4)" />
                  <text x="180" y="131" textAnchor="middle" fill="#DECBB3" fontSize="10.5" fontFamily="var(--font-sans)" fontWeight="600">
                    Forehead: 138mm
                  </text>

                  <rect x="125" y="198" width="110" height="18" rx="4" fill="rgba(12, 14, 18, 0.85)" stroke="rgba(222, 203, 179, 0.4)" />
                  <text x="180" y="211" textAnchor="middle" fill="#DECBB3" fontSize="10.5" fontFamily="var(--font-sans)" fontWeight="600">
                    Cheekbones: 154mm
                  </text>

                  <rect x="135" y="353" width="90" height="18" rx="4" fill="rgba(12, 14, 18, 0.85)" stroke="rgba(222, 203, 179, 0.4)" />
                  <text x="180" y="366" textAnchor="middle" fill="#DECBB3" fontSize="10.5" fontFamily="var(--font-sans)" fontWeight="600">
                    Jawline Angle
                  </text>
                </svg>
              )}

              {/* Status Pill in Corner */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                background: 'rgba(12, 14, 18, 0.88)',
                backdropFilter: 'blur(8px)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-sand)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Detected Geometry:</span>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--sand-primary)' }}>
                  {isScanning ? `Analyzing (${scanProgress}%)...` : `${currentShape} Architecture`}
                </span>
              </div>
            </div>

            {/* Upload or Drop Action */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                accept="image/*"
                onChange={handleFileUpload}
              />
              <button 
                onClick={() => fileInputRef.current?.click()} 
                className="btn-sand"
                style={{ fontSize: '12.5px', padding: '9px 18px' }}
              >
                <UploadCloud size={15} />
                <span>Upload Your Portrait</span>
              </button>
            </div>
          </div>

          {/* Right: Instant 1-Click Sample Portrait Presets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="aura-card" style={{ padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Sliders size={16} color="var(--sand-primary)" />
                <h3 style={{ fontSize: '17px', color: '#FFF' }}>Instant AI Presets</h3>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Don't have a photo ready? Tap any pre-calibrated face shape portrait to inspect its landmarks and recommendations immediately:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {SAMPLE_PORTRAITS.map(sample => {
                  const isSelected = currentShape === sample.faceShape && uploadedPhoto === sample.image;

                  return (
                    <button
                      key={sample.id}
                      onClick={() => handleSelectSample(sample)}
                      style={{
                        padding: '8px',
                        borderRadius: 'var(--radius-md)',
                        background: isSelected ? 'rgba(222, 203, 179, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: `1.5px solid ${isSelected ? 'var(--sand-primary)' : 'var(--border-subtle)'}`,
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <img 
                        src={sample.image} 
                        alt={sample.name} 
                        style={{ width: '100%', height: '70px', objectFit: 'cover', borderRadius: '8px', marginBottom: '6px' }}
                      />
                      <span style={{ fontSize: '12px', fontWeight: 600, color: isSelected ? 'var(--sand-primary)' : '#FFF', display: 'block' }}>
                        {sample.faceShape}
                      </span>
                      <span style={{ fontSize: '10px', color: 'var(--text-dim)' }}>
                        {sample.gender}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Biometric Analysis summary pill */}
            <div className="aura-card" style={{ padding: '18px 22px', borderLeft: '3px solid var(--sand-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
                  FACIAL SYMMETRY INDEX
                </span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--match-best)' }}>
                  {FACE_SHAPES_DATA[currentShape].proportions.goldenRatioScore}% Optimal
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {FACE_SHAPES_DATA[currentShape].subtitle}
              </p>
            </div>
          </div>

        </div>
      )}

      {/* MANUAL SHAPE SELECTOR FALLBACK */}
      {activeTab === 'manual' && (
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
              Select your face shape from the core 6 architectural silhouettes below:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px' }}>
            {faceShapesList.map(shape => {
              const isSelected = currentShape === shape;
              const shapeData = FACE_SHAPES_DATA[shape];

              return (
                <div
                  key={shape}
                  onClick={() => onSelectShape(shape)}
                  className={`aura-card ${isSelected ? 'aura-card-gold-border' : ''}`}
                  style={{
                    padding: '16px 12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    borderColor: isSelected ? 'var(--sand-primary)' : undefined,
                    background: isSelected ? 'rgba(222, 203, 179, 0.12)' : undefined,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {/* Clean Geometric Silhouette Diagram */}
                  <div style={{
                    width: '60px',
                    height: '75px',
                    margin: '0 auto 10px',
                    borderRadius: shape === 'Oval' ? '50% 50% 50% 50% / 60% 60% 40% 40%' :
                                  shape === 'Round' ? '50%' :
                                  shape === 'Square' ? '12px 12px 14px 14px' :
                                  shape === 'Diamond' ? '30% 30% 50% 50% / 50% 50% 50% 50%' :
                                  shape === 'Heart' ? '45% 45% 50% 50% / 50% 50% 50% 50%' :
                                  '10px 10px 10px 10px',
                    border: `2px solid ${isSelected ? 'var(--sand-primary)' : 'rgba(255, 255, 255, 0.25)'}`,
                    background: isSelected ? 'var(--sand-gradient)' : 'rgba(255, 255, 255, 0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {isSelected && <Check size={18} color="#0B0D11" strokeWidth={3} />}
                  </div>

                  <h4 style={{ fontSize: '14.5px', color: isSelected ? 'var(--sand-primary)' : '#FFF', fontWeight: 600 }}>
                    {shape}
                  </h4>
                  <span style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '2px', display: 'block' }}>
                    {shapeData.proportions.widestPoint}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </section>
  );
};
