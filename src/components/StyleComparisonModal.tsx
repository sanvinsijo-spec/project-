import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Clock, 
  Bookmark, 
  BookmarkCheck, 
  ShoppingBag, 
  Layers, 
  Compass, 
  ChevronRight,
  ShieldCheck,
  RotateCw
} from 'lucide-react';
import { FaceShape, Hairstyle, ConsultationItem } from '../types';
import { FACE_SHAPES_DATA } from '../data/styleAdvisorData';

interface StyleComparisonModalProps {
  style: Hairstyle;
  currentShape: FaceShape;
  uploadedPhoto: string;
  onClose: () => void;
  onAddToConsultation: (style: Hairstyle) => void;
  consultationItems: ConsultationItem[];
}

export const StyleComparisonModal: React.FC<StyleComparisonModalProps> = ({
  style,
  currentShape,
  uploadedPhoto,
  onClose,
  onAddToConsultation,
  consultationItems
}) => {
  const [viewAngle, setViewAngle] = useState<'front' | 'profile'>('front');
  const shapeInfo = FACE_SHAPES_DATA[currentShape];
  const matchInfo = style.shapeCompatibility[currentShape] || {
    score: 85,
    label: 'Great Match',
    whyItWorks: ['Harmonizes facial dimensions with tailored proportioning.']
  };

  const isSaved = consultationItems.some(item => item.hairstyle.id === style.id);

  // Helper for maintenance color
  const getMaintenanceColor = (level: string) => {
    switch (level) {
      case 'Low': return 'var(--match-best)';
      case 'Medium': return 'var(--sand-gold)';
      case 'High': return 'var(--match-avoid)';
      default: return 'var(--sand-primary)';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '840px', padding: 0 }}
      >
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 28px',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(17, 20, 28, 0.95)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: 'rgba(222, 203, 179, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-sand)'
            }}>
              <Compass size={17} color="var(--sand-primary)" />
            </div>
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--sand-primary)', display: 'block' }}>
                Face Shape Architectural Lookbook
              </span>
              <h3 style={{ fontSize: '19px', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                {style.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '28px', maxHeight: 'calc(90vh - 150px)', overflowY: 'auto' }}>
          {/* Side-by-Side Dual Comparison Matrix */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '28px'
          }}>
            {/* Left: User Face Geometry Blueprint */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontWeight: 700
                }}>
                  Client Facial Profile
                </span>
                <span className="badge badge-best" style={{ fontSize: '11px' }}>
                  {currentShape} Geometry
                </span>
              </div>

              {/* Portrait Display */}
              <div style={{
                position: 'relative',
                height: '240px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: '#0B0D11',
                marginBottom: '16px',
                border: '1px solid var(--border-subtle)'
              }}>
                <img
                  src={uploadedPhoto}
                  alt="Client Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(10, 12, 16, 0.85) 100%)'
                }} />
                
                {/* Facial thirds overlay markers */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  right: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: 'var(--sand-200)'
                }}>
                  <span>Ratio: {shapeInfo.proportions.faceLengthToWidth}</span>
                  <span>Widest: {shapeInfo.proportions.widestPoint}</span>
                </div>
              </div>

              {/* Profile summary points */}
              <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <p style={{ margin: '0 0 6px 0' }}>
                  <strong style={{ color: '#FFFFFF' }}>Jaw Profile:</strong> {shapeInfo.proportions.jawlineDescription}
                </p>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: '#FFFFFF' }}>Aesthetic Goal:</strong> {shapeInfo.aestheticGoal}
                </p>
              </div>
            </div>

            {/* Right: Hairstyle Cut Perspective with Angle Toggle */}
            <div style={{
              background: 'linear-gradient(180deg, rgba(222, 203, 179, 0.04) 0%, rgba(18, 22, 31, 0.95) 100%)',
              border: '1px solid var(--border-sand)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <button
                    onClick={() => setViewAngle('front')}
                    style={{
                      background: viewAngle === 'front' ? 'var(--sand-primary)' : 'rgba(255, 255, 255, 0.05)',
                      color: viewAngle === 'front' ? '#0A0C10' : 'var(--text-muted)',
                      border: 'none',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Front Angle
                  </button>
                  <button
                    onClick={() => setViewAngle('profile')}
                    style={{
                      background: viewAngle === 'profile' ? 'var(--sand-primary)' : 'rgba(255, 255, 255, 0.05)',
                      color: viewAngle === 'profile' ? '#0A0C10' : 'var(--text-muted)',
                      border: 'none',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Profile / 3/4
                  </button>
                </div>

                <span className="badge badge-sand" style={{ fontSize: '11.5px', fontWeight: 800 }}>
                  <Sparkles size={11} /> {matchInfo.score}% Fit
                </span>
              </div>

              {/* Hairstyle Photo with Zoom Effect */}
              <div style={{
                position: 'relative',
                height: '240px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: '#0B0D11',
                marginBottom: '16px',
                border: '1px solid var(--border-subtle)'
              }}>
                <img
                  src={viewAngle === 'front' ? style.image : style.profileImage}
                  alt={`${style.name} ${viewAngle}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(10, 12, 16, 0.85) 100%)'
                }} />

                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  right: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '11.5px'
                }}>
                  <span style={{ color: 'var(--sand-primary)', fontWeight: 600 }}>
                    {style.primaryTexture} • {style.length}
                  </span>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                    ₹{style.salonServicePriceINR.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Why It Works Highlight */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px',
                fontSize: '12.5px',
                lineHeight: 1.5,
                color: 'var(--text-muted)'
              }}>
                <div style={{ color: 'var(--sand-primary)', fontWeight: 600, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <CheckCircle2 size={13} color="var(--match-best)" />
                  <span>Facial Proportion Counter-Balance</span>
                </div>
                {matchInfo.whyItWorks.map((bullet, idx) => (
                  <p key={idx} style={{ margin: '0 0 4px 0', fontSize: '12px' }}>
                    • {bullet}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Maintenance & Product Specs Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            {/* Maintenance Level Gauge */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '12px', marginBottom: '8px' }}>
                <Flame size={14} color={getMaintenanceColor(style.maintenance)} />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.06em' }}>Upkeep Commitment</span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                {style.maintenance} Maintenance
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '4px' }}>
                Estimated salon touch-up every 4–6 weeks
              </div>
            </div>

            {/* Daily Styling Time */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '12px', marginBottom: '8px' }}>
                <Clock size={14} color="var(--sand-gold)" />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.06em' }}>Daily Styling Time</span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
                {style.stylingTime}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '4px' }}>
                Fast routine with proper foundation blow-dry
              </div>
            </div>

            {/* Studio Service Price */}
            <div style={{
              background: 'rgba(222, 203, 179, 0.05)',
              border: '1px solid var(--border-sand)',
              borderRadius: 'var(--radius-md)',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--sand-primary)', fontSize: '12px', marginBottom: '8px' }}>
                <ShieldCheck size={14} />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.06em' }}>Studio Cut Price</span>
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
                ₹{style.salonServicePriceINR.toLocaleString('en-IN')}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--sand-300)', marginTop: '4px' }}>
                Includes wash, botanical scalp massage & styling
              </div>
            </div>
          </div>

          {/* Styling Products Recommended */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '18px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <ShoppingBag size={16} color="var(--sand-primary)" />
              <h4 style={{ fontSize: '15px', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-display)' }}>
                Stylist-Recommended Grooming Products
              </h4>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {style.recommendedProducts.map((prod, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(222, 203, 179, 0.1)',
                    border: '1px solid var(--border-sand)',
                    color: 'var(--sand-100)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12.5px',
                    fontWeight: 500
                  }}
                >
                  ✦ {prod}
                </span>
              ))}
            </div>
          </div>

          {/* How to Style Step-by-Step */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '18px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Layers size={16} color="var(--sand-primary)" />
              <h4 style={{ fontSize: '15px', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-display)' }}>
                Master Stylist At-Home Protocol
              </h4>
            </div>

            <ol style={{ paddingLeft: '18px', margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.6 }}>
              {style.howToStyleSteps.map((step, idx) => (
                <li key={idx} style={{ marginBottom: '6px' }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div style={{
          padding: '18px 28px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'rgba(17, 20, 28, 0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          <div>
            <span style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
              Estimated Service Duration
            </span>
            <div style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 600 }}>
              45–60 minutes in atelier
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '10px 18px' }}
            >
              Close
            </button>

            <button
              onClick={() => {
                onAddToConsultation(style);
              }}
              className="btn-sand"
              style={{ padding: '10px 22px' }}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck size={16} />
                  <span>Remove from Docket</span>
                </>
              ) : (
                <>
                  <Bookmark size={16} />
                  <span>Add to My Salon Consultation</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
