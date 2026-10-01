import React from 'react';
import { 
  Sparkles, 
  Target, 
  Sliders, 
  AlertOctagon, 
  CheckCircle2, 
  Lightbulb, 
  Ruler, 
  Percent,
  Layers,
  Compass
} from 'lucide-react';
import { FaceShape } from '../types';
import { FACE_SHAPES_DATA } from '../data/styleAdvisorData';

interface StyleAnalysisPanelProps {
  currentShape: FaceShape;
  onExploreStyles: () => void;
}

export const StyleAnalysisPanel: React.FC<StyleAnalysisPanelProps> = ({
  currentShape,
  onExploreStyles
}) => {
  const analysis = FACE_SHAPES_DATA[currentShape];

  return (
    <section id="style-analysis-section" style={{ marginTop: '48px' }}>
      {/* Header bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '24px',
        gap: '16px'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--sand-primary)',
            background: 'rgba(222, 203, 179, 0.08)',
            padding: '5px 12px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-sand)',
            marginBottom: '10px'
          }}>
            <Sparkles size={13} />
            <span>Biometric Architectural Blueprint</span>
          </div>
          <h2 style={{ fontSize: '32px', color: '#FFFFFF', margin: 0 }}>
            AI Facial Morphology Analysis
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '6px' }}>
            Real-time aesthetic balancing recommendations tailored for your detected facial structure.
          </p>
        </div>

        <button 
          onClick={onExploreStyles}
          className="btn-sand"
          style={{ padding: '10px 20px', fontSize: '13.5px' }}
        >
          <span>View Matching Hairstyles</span>
          <span style={{ fontSize: '15px' }}>→</span>
        </button>
      </div>

      {/* Main Analysis Card Container */}
      <div className="aura-card aura-card-gold-border" style={{ padding: '32px' }}>
        {/* Top detected banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          paddingBottom: '28px',
          borderBottom: '1px solid var(--border-subtle)',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge badge-best" style={{ fontSize: '12px', padding: '5px 12px' }}>
                <CheckCircle2 size={13} />
                Detected: {currentShape} Shape
              </span>
              <span style={{ color: 'var(--text-dim)', fontSize: '12px' }}>
                Confidence: 98.4%
              </span>
            </div>

            <h3 style={{
              fontSize: '26px',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.01em',
              marginBottom: '8px'
            }}>
              {analysis.name}
            </h3>

            <p style={{ color: 'var(--sand-200)', fontSize: '14.5px', lineHeight: 1.5, margin: 0 }}>
              {analysis.subtitle}
            </p>
          </div>

          {/* Aesthetic Goal Highlight Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(222, 203, 179, 0.08) 0%, rgba(20, 24, 34, 0.6) 100%)',
            border: '1px solid var(--border-sand)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 24px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--sand-primary)' }}>
              <Target size={17} />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                Primary Aesthetic Goal
              </span>
            </div>
            <p style={{
              color: '#FFFFFF',
              fontSize: '14.5px',
              fontWeight: 500,
              lineHeight: 1.5,
              margin: 0
            }}>
              "{analysis.aestheticGoal}"
            </p>
          </div>
        </div>

        {/* Biometric Proportions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          padding: '24px 0',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {/* Ratio metric */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '11.5px', marginBottom: '6px' }}>
              <Ruler size={13} color="var(--sand-primary)" />
              <span>Face Length / Width Ratio</span>
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
              {analysis.proportions.faceLengthToWidth}
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-dim)', marginTop: '4px' }}>
              Vertical balance indicator
            </div>
          </div>

          {/* Widest Point */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '11.5px', marginBottom: '6px' }}>
              <Compass size={13} color="var(--sand-primary)" />
              <span>Widest Facial Point</span>
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
              {analysis.proportions.widestPoint}
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-dim)', marginTop: '4px' }}>
              Architectural focal apex
            </div>
          </div>

          {/* Jawline Geometry */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '11.5px', marginBottom: '6px' }}>
              <Sliders size={13} color="var(--sand-primary)" />
              <span>Jawline Geometry</span>
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
              {analysis.proportions.jawlineDescription}
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-dim)', marginTop: '4px' }}>
              Perimeter bone structure
            </div>
          </div>

          {/* Golden Ratio Alignment */}
          <div style={{
            background: 'rgba(222, 203, 179, 0.04)',
            border: '1px solid var(--border-sand)',
            borderRadius: 'var(--radius-md)',
            padding: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--sand-primary)', fontSize: '11.5px', marginBottom: '6px' }}>
              <Percent size={13} />
              <span>Golden Ratio Alignment</span>
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--sand-100)', fontFamily: 'var(--font-display)' }}>
              {analysis.proportions.goldenRatioScore}% <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--match-best)' }}>• Optimal Harmony</span>
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--sand-300)', marginTop: '4px' }}>
              Phi (1.618) spatial score
            </div>
          </div>
        </div>

        {/* Recommendations & Styles to Avoid Dual Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          marginTop: '28px'
        }}>
          {/* Left Column: Recommended Lengths & Textures */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '22px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'var(--match-best-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CheckCircle2 size={16} color="var(--match-best)" />
              </div>
              <h4 style={{ fontSize: '18px', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-display)' }}>
                Recommended Lengths & Cuts
              </h4>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                Flattering Cut Lengths:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {analysis.recommendedLengths.map((len, idx) => (
                  <span 
                    key={idx} 
                    style={{
                      background: 'rgba(16, 185, 129, 0.09)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      color: '#E2FBE8',
                      fontSize: '12.5px',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 500
                    }}
                  >
                    ✓ {len}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                Recommended Textures & Motion:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {analysis.recommendedTextures.map((tex, idx) => (
                  <span 
                    key={idx} 
                    style={{
                      background: 'rgba(56, 189, 248, 0.09)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      color: '#BAE6FD',
                      fontSize: '12.5px',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 500
                    }}
                  >
                    • {tex}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Styles to Avoid (Visual Don'ts) */}
          <div style={{
            background: 'rgba(248, 113, 113, 0.03)',
            border: '1px solid rgba(248, 113, 113, 0.18)',
            borderRadius: 'var(--radius-md)',
            padding: '22px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'var(--match-avoid-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <AlertOctagon size={16} color="var(--match-avoid)" />
              </div>
              <h4 style={{ fontSize: '18px', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-display)' }}>
                Styles to Avoid (Styling Don'ts)
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {analysis.stylesToAvoid.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(20, 24, 34, 0.6)',
                    border: '1px solid rgba(248, 113, 113, 0.22)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 14px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FCA5A5', fontWeight: 600, fontSize: '13.5px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '15px' }}>✕</span>
                    <span>{item.title}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12.5px', lineHeight: 1.45, margin: 0 }}>
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Master Stylist Pro-Tip Callout */}
        <div style={{
          marginTop: '24px',
          background: 'rgba(222, 203, 179, 0.05)',
          borderLeft: '3px solid var(--sand-primary)',
          borderRadius: '0 var(--radius-md) var(--radius-md) 0',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <Lightbulb size={18} color="var(--sand-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--sand-primary)',
              display: 'block',
              marginBottom: '2px'
            }}>
              Master Stylist Note:
            </span>
            <p style={{ color: 'var(--sand-100)', fontSize: '13.5px', margin: 0, lineHeight: 1.5 }}>
              {analysis.idealStylingTip}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
