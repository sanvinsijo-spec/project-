import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Filter, 
  Check, 
  Bookmark, 
  BookmarkCheck, 
  SlidersHorizontal, 
  Clock, 
  Flame, 
  Maximize2,
  TrendingUp,
  Search,
  CheckCircle2,
  ArrowUpDown
} from 'lucide-react';
import { 
  FaceShape, 
  Hairstyle, 
  GenderFilter, 
  HairTextureFilter, 
  HairLengthFilter, 
  ConsultationItem 
} from '../types';
import { HAIRSTYLES_CATALOG } from '../data/styleAdvisorData';

interface HairstyleCatalogProps {
  currentShape: FaceShape;
  onSelectStyle: (style: Hairstyle) => void;
  onAddToConsultation: (style: Hairstyle) => void;
  consultationItems: ConsultationItem[];
}

export const HairstyleCatalog: React.FC<HairstyleCatalogProps> = ({
  currentShape,
  onSelectStyle,
  onAddToConsultation,
  consultationItems
}) => {
  const [selectedGender, setSelectedGender] = useState<GenderFilter>('All');
  const [selectedTexture, setSelectedTexture] = useState<HairTextureFilter>('All');
  const [selectedLength, setSelectedLength] = useState<HairLengthFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'match' | 'price-asc' | 'price-desc'>('match');

  // Check if hairstyle is already in consultation docket
  const isItemSaved = (styleId: string) => {
    return consultationItems.some(item => item.hairstyle.id === styleId);
  };

  // Filter and sort hairstyles
  const filteredStyles = useMemo(() => {
    return HAIRSTYLES_CATALOG.filter(style => {
      // Gender filter
      if (selectedGender !== 'All' && style.gender !== selectedGender) {
        return false;
      }
      // Texture filter
      if (selectedTexture !== 'All' && style.primaryTexture !== selectedTexture) {
        return false;
      }
      // Length filter
      if (selectedLength !== 'All' && style.length !== selectedLength) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = style.name.toLowerCase().includes(q);
        const matchesCat = style.categoryName.toLowerCase().includes(q);
        if (!matchesName && !matchesCat) return false;
      }
      return true;
    }).sort((a, b) => {
      const matchA = a.shapeCompatibility[currentShape]?.score || 70;
      const matchB = b.shapeCompatibility[currentShape]?.score || 70;

      if (sortBy === 'match') {
        return matchB - matchA;
      } else if (sortBy === 'price-asc') {
        return a.salonServicePriceINR - b.salonServicePriceINR;
      } else if (sortBy === 'price-desc') {
        return b.salonServicePriceINR - a.salonServicePriceINR;
      }
      return 0;
    });
  }, [currentShape, selectedGender, selectedTexture, selectedLength, searchQuery, sortBy]);

  // Badge class helper based on score
  const getBadgeClass = (score: number) => {
    if (score >= 93) return 'badge-best';
    if (score >= 85) return 'badge-ideal';
    if (score >= 75) return 'badge-great';
    return 'badge-sand';
  };

  return (
    <section id="hairstyle-catalog-section" style={{ marginTop: '64px', marginBottom: '80px' }}>
      {/* Catalog Title & Intro */}
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
            <span>Curated Haute Cut Catalog</span>
          </div>
          <h2 style={{ fontSize: '32px', color: '#FFFFFF', margin: 0 }}>
            Proportion-Matched Hairstyle Collection
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '6px' }}>
            Live compatibility metrics computed against your <strong style={{ color: 'var(--sand-primary)' }}>{currentShape}</strong> face shape.
          </p>
        </div>

        {/* Search & Sort bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Search Box */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '12px' }} />
            <input
              type="text"
              placeholder="Search cut or texture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#FFFFFF',
                padding: '9px 12px 9px 36px',
                fontSize: '13px',
                width: '190px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--sand-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
            />
          </div>

          {/* Sort Selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '6px 12px'
          }}>
            <ArrowUpDown size={14} color="var(--sand-primary)" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '12.5px',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="match" style={{ background: '#11141B' }}>Sort: Best Match Score</option>
              <option value="price-asc" style={{ background: '#11141B' }}>Price: Low to High</option>
              <option value="price-desc" style={{ background: '#11141B' }}>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter Tabs Toolbar */}
      <div className="aura-card" style={{ padding: '16px 20px', marginBottom: '28px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {/* Gender Filter */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <span style={{
              fontSize: '11.5px',
              fontFamily: 'var(--font-display)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              minWidth: '85px'
            }}>
              Category:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {(['All', 'Women', 'Men', 'Gender-Neutral'] as GenderFilter[]).map((gender) => (
                <button
                  key={gender}
                  onClick={() => setSelectedGender(gender)}
                  style={{
                    background: selectedGender === gender ? 'var(--sand-gradient)' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedGender === gender ? '#0B0D11' : 'var(--text-muted)',
                    border: selectedGender === gender ? 'none' : '1px solid var(--border-subtle)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12px',
                    fontWeight: selectedGender === gender ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          {/* Texture & Length Filters Subrow */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '12px'
          }}>
            {/* Hair Texture Filter */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{
                fontSize: '11.5px',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                minWidth: '60px'
              }}>
                Texture:
              </span>
              {(['All', 'Straight', 'Wavy', 'Curly'] as HairTextureFilter[]).map((texture) => (
                <button
                  key={texture}
                  onClick={() => setSelectedTexture(texture)}
                  style={{
                    background: selectedTexture === texture ? 'rgba(222, 203, 179, 0.16)' : 'transparent',
                    color: selectedTexture === texture ? 'var(--sand-primary)' : 'var(--text-dim)',
                    border: selectedTexture === texture ? '1px solid var(--border-sand)' : '1px solid transparent',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontWeight: selectedTexture === texture ? 600 : 400
                  }}
                >
                  {texture}
                </button>
              ))}
            </div>

            {/* Length Filter */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{
                fontSize: '11.5px',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                minWidth: '60px'
              }}>
                Length:
              </span>
              {(['All', 'Short', 'Medium', 'Long'] as HairLengthFilter[]).map((len) => (
                <button
                  key={len}
                  onClick={() => setSelectedLength(len)}
                  style={{
                    background: selectedLength === len ? 'rgba(222, 203, 179, 0.16)' : 'transparent',
                    color: selectedLength === len ? 'var(--sand-primary)' : 'var(--text-dim)',
                    border: selectedLength === len ? '1px solid var(--border-sand)' : '1px solid transparent',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontWeight: selectedLength === len ? 600 : 400
                  }}
                >
                  {len}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Hairstyle Cards */}
      {filteredStyles.length === 0 ? (
        <div style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: 'var(--radius-lg)',
          border: '1px dashed var(--border-subtle)'
        }}>
          <Filter size={36} color="var(--text-dim)" style={{ margin: '0 auto 12px' }} />
          <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '6px' }}>No hairstyles match the selected filters</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', marginBottom: '16px' }}>
            Try resetting your gender, texture, or length filters to view more styles.
          </p>
          <button
            onClick={() => {
              setSelectedGender('All');
              setSelectedTexture('All');
              setSelectedLength('All');
              setSearchQuery('');
            }}
            className="btn-secondary"
            style={{ fontSize: '13px' }}
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid-styles">
          {filteredStyles.map((style) => {
            const matchInfo = style.shapeCompatibility[currentShape] || {
              score: 75,
              label: 'Great Match',
              whyItWorks: ['Complements general facial symmetry with tailored styling.']
            };
            const isSaved = isItemSaved(style.id);

            return (
              <div 
                key={style.id}
                className="aura-card"
                style={{
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(180deg, #131722 0%, #0F1219 100%)',
                  border: isSaved ? '1px solid var(--sand-primary)' : '1px solid var(--border-subtle)',
                  overflow: 'hidden'
                }}
              >
                {/* Image Container with Badges */}
                <div style={{
                  position: 'relative',
                  height: '240px',
                  width: '100%',
                  overflow: 'hidden',
                  background: '#0B0D11',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectStyle(style)}
                >
                  <img
                    src={style.image}
                    alt={style.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.45s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />

                  {/* Gradient Vignette */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(10,12,16,0.2) 0%, rgba(10,12,16,0.85) 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Top Floating Match Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    zIndex: 2
                  }}>
                    <span 
                      className={`badge ${getBadgeClass(matchInfo.score)}`}
                      style={{ 
                        fontSize: '11.5px',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                      }}
                    >
                      <Sparkles size={12} />
                      {matchInfo.score}% • {matchInfo.label}
                    </span>
                  </div>

                  {/* Top Right Expand Icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectStyle(style);
                    }}
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(10, 12, 16, 0.75)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 2,
                      transition: 'background 0.2s'
                    }}
                    title="Open Side-by-Side Face Comparison"
                  >
                    <Maximize2 size={14} />
                  </button>

                  {/* Bottom Category pill and texture info */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '14px',
                    right: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 2
                  }}>
                    <span style={{
                      fontSize: '11px',
                      color: 'var(--sand-primary)',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}>
                      {style.categoryName}
                    </span>

                    <span style={{
                      fontSize: '11px',
                      color: '#FFFFFF',
                      background: 'rgba(255, 255, 255, 0.12)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      {style.gender} • {style.length}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Style Title & Price */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                    <h3 
                      onClick={() => onSelectStyle(style)}
                      style={{
                        fontSize: '17.5px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        margin: 0,
                        cursor: 'pointer',
                        lineHeight: 1.3
                      }}
                    >
                      {style.name}
                    </h3>

                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <span style={{
                        fontSize: '16px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        color: 'var(--sand-primary)'
                      }}>
                        ₹{style.salonServicePriceINR.toLocaleString('en-IN')}
                      </span>
                      <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                        Studio Cut
                      </span>
                    </div>
                  </div>

                  {/* Why It Works Bullets (Crucial Requirement) */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px',
                    marginBottom: '16px',
                    flex: 1
                  }}>
                    <div style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--sand-200)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 700,
                      marginBottom: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <CheckCircle2 size={12} color="var(--match-best)" />
                      <span>Why it balances {currentShape}:</span>
                    </div>

                    <ul style={{
                      margin: 0,
                      paddingLeft: '14px',
                      color: 'var(--text-muted)',
                      fontSize: '12.5px',
                      lineHeight: 1.45
                    }}>
                      {matchInfo.whyItWorks.slice(0, 2).map((bullet, idx) => (
                        <li key={idx} style={{ marginBottom: '4px' }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Meta Indicators: Maintenance & Styling Time */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '11.5px',
                    color: 'var(--text-dim)',
                    marginBottom: '18px',
                    padding: '0 4px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Flame size={13} color="var(--sand-gold)" />
                      <span>{style.maintenance} Maintenance</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={13} color="var(--sand-gold)" />
                      <span>{style.stylingTime} Styling</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
                    <button
                      onClick={() => onAddToConsultation(style)}
                      className={isSaved ? "btn-secondary" : "btn-sand"}
                      style={{
                        padding: '9px 14px',
                        fontSize: '12.5px',
                        fontWeight: 600
                      }}
                    >
                      {isSaved ? (
                        <>
                          <BookmarkCheck size={14} color="var(--sand-primary)" />
                          <span>In Consultation</span>
                        </>
                      ) : (
                        <>
                          <Bookmark size={14} />
                          <span>Add to Consultation</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onSelectStyle(style)}
                      className="btn-secondary"
                      style={{ padding: '9px 12px' }}
                      title="Compare Face Landmark Side-by-Side"
                    >
                      <Maximize2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
