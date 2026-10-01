import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { FaceShapeDetector } from './components/FaceShapeDetector';
import { StyleAnalysisPanel } from './components/StyleAnalysisPanel';
import { HairstyleCatalog } from './components/HairstyleCatalog';
import { StyleComparisonModal } from './components/StyleComparisonModal';
import { ConsultationDocketDrawer } from './components/ConsultationDocketDrawer';
import { FaceShape, Hairstyle, ConsultationItem } from './types';
import { SAMPLE_PORTRAITS, HAIRSTYLES_CATALOG } from './data/styleAdvisorData';
import { 
  Sparkles, 
  ShieldCheck, 
  Scissors, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Award,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export function App() {
  // Active Face Shape State
  const [currentShape, setCurrentShape] = useState<FaceShape>('Square');
  const [uploadedPhoto, setUploadedPhoto] = useState<string>(
    SAMPLE_PORTRAITS.find(p => p.faceShape === 'Square')?.image || SAMPLE_PORTRAITS[0].image
  );

  // Modal & Drawer State
  const [activeModalStyle, setActiveModalStyle] = useState<Hairstyle | null>(null);
  const [isDocketOpen, setIsDocketOpen] = useState(false);

  // Consultation Items (Pre-seeded with 1 luxury cut)
  const [consultationItems, setConsultationItems] = useState<ConsultationItem[]>([
    {
      hairstyle: HAIRSTYLES_CATALOG[1], // Layered Curtain Bangs with Soft Waves
      addedAt: new Date().toISOString(),
      userNotes: 'Requesting soft dimensional highlights around cheekbones.'
    }
  ]);

  // Handle Photo & Detected Shape
  const handleUploadPhoto = (dataUrl: string, detectedShape?: FaceShape) => {
    setUploadedPhoto(dataUrl);
    if (detectedShape) {
      setCurrentShape(detectedShape);
    }
  };

  // Add / Remove from Consultation Docket
  const handleToggleConsultation = (style: Hairstyle) => {
    const exists = consultationItems.some(item => item.hairstyle.id === style.id);
    if (exists) {
      setConsultationItems(prev => prev.filter(item => item.hairstyle.id !== style.id));
    } else {
      setConsultationItems(prev => [
        ...prev,
        {
          hairstyle: style,
          addedAt: new Date().toISOString(),
          userNotes: ''
        }
      ]);
    }
  };

  const handleRemoveConsultationItem = (styleId: string) => {
    setConsultationItems(prev => prev.filter(item => item.hairstyle.id !== styleId));
  };

  const handleUpdateNotes = (styleId: string, notes: string) => {
    setConsultationItems(prev =>
      prev.map(item =>
        item.hairstyle.id === styleId ? { ...item, userNotes: notes } : item
      )
    );
  };

  // Scroll Navigators
  const scrollToDetector = () => {
    const el = document.getElementById('face-detector-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAnalysis = () => {
    const el = document.getElementById('style-analysis-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('hairstyle-catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-app)' }}>
      {/* Top Luxury Navigation */}
      <Navbar
        consultationItems={consultationItems}
        onOpenDocket={() => setIsDocketOpen(true)}
        onScrollToDetector={scrollToDetector}
        onScrollToCatalog={scrollToCatalog}
      />

      {/* Main Experience Layout */}
      <main style={{ maxWidth: '1240px', width: '100%', margin: '0 auto', padding: '0 24px', flex: 1 }}>
        {/* Subtle Background Glows */}
        <div style={{
          position: 'fixed',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(222, 203, 179, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Hero Header Area */}
        <section style={{ textAlign: 'center', paddingTop: '56px', paddingBottom: '36px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11.5px',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            color: 'var(--sand-primary)',
            background: 'rgba(222, 203, 179, 0.08)',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-sand)',
            marginBottom: '18px'
          }}>
            <Sparkles size={13} />
            <span>Haute Coiffure & Biometric Precision Architecture</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 62px)',
            color: '#FFFFFF',
            lineHeight: 1.12,
            marginBottom: '18px',
            letterSpacing: '-0.02em'
          }}>
            The Golden Ratio of <br />
            <span className="text-sand-gradient font-editorial" style={{ fontStyle: 'italic', fontWeight: 500 }}>
              Face Shape & Hairstyle Harmony
            </span>
          </h1>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(15px, 1.8vw, 17.5px)',
            maxWidth: '680px',
            margin: '0 auto 28px',
            lineHeight: 1.6
          }}>
            Experience AI-driven biometric facial mapping. We analyze your forehead, cheekbones, and jawline angles to recommend bespoke haircuts that accentuate your unique bone structure.
          </p>

          {/* Quick trust metrics row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '12.5px',
            color: 'var(--text-dim)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="var(--match-best)" />
              <span style={{ color: 'var(--text-main)' }}>6 Core Face Shapes Analyzed</span>
            </div>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={16} color="var(--sand-primary)" />
              <span style={{ color: 'var(--text-main)' }}>Golden Ratio Proportions</span>
            </div>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Scissors size={16} color="var(--match-ideal)" />
              <span style={{ color: 'var(--text-main)' }}>Master Stylist Atelier Booking</span>
            </div>
          </div>
        </section>

        {/* 1. Hero & Interactive Face Shape Detector */}
        <FaceShapeDetector
          currentShape={currentShape}
          onSelectShape={setCurrentShape}
          uploadedPhoto={uploadedPhoto}
          onUploadPhoto={handleUploadPhoto}
        />

        {/* 2. AI Style Analysis Panel */}
        <StyleAnalysisPanel
          currentShape={currentShape}
          onExploreStyles={scrollToCatalog}
        />

        {/* 3. Curated Hairstyle Match Catalog */}
        <HairstyleCatalog
          currentShape={currentShape}
          onSelectStyle={(style) => setActiveModalStyle(style)}
          onAddToConsultation={handleToggleConsultation}
          consultationItems={consultationItems}
        />
      </main>

      {/* 4. Side-by-Side Comparison Lookbook Modal */}
      {activeModalStyle && (
        <StyleComparisonModal
          style={activeModalStyle}
          currentShape={currentShape}
          uploadedPhoto={uploadedPhoto}
          onClose={() => setActiveModalStyle(null)}
          onAddToConsultation={handleToggleConsultation}
          consultationItems={consultationItems}
        />
      )}

      {/* 5. Consultation Docket Drawer */}
      <ConsultationDocketDrawer
        isOpen={isDocketOpen}
        onClose={() => setIsDocketOpen(false)}
        items={consultationItems}
        onRemoveItem={handleRemoveConsultationItem}
        onUpdateNotes={handleUpdateNotes}
        currentShape={currentShape}
        onExploreCatalog={scrollToCatalog}
      />

      {/* Luxury Studio Footer */}
      <footer style={{
        marginTop: '80px',
        borderTop: '1px solid var(--border-subtle)',
        background: '#080A0D',
        padding: '56px 24px 36px'
      }}>
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '36px',
          paddingBottom: '40px',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {/* Brand info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #1C2230 0%, #10141D 100%)',
                border: '1px solid var(--border-sand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={16} color="var(--sand-primary)" />
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: '#FFFFFF'
              }}>
                AURA<span style={{ color: 'var(--sand-primary)' }}>STYLE</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '18px' }}>
              Bespoke face shape geometry and hair architecture for upscale salons, executive grooming studios, and private client ateliers.
            </p>

            <div style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
              Pricing displayed in Indian Rupee (<strong style={{ color: 'var(--sand-primary)' }}>₹ INR</strong>) inclusive of atelier amenities.
            </div>
          </div>

          {/* Atelier Hours */}
          <div>
            <h4 style={{ fontSize: '14px', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
              Studio Hours
            </h4>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
                <span>Monday – Friday:</span>
                <span style={{ color: '#FFFFFF' }}>09:30 AM – 09:00 PM</span>
              </p>
              <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
                <span>Saturday – Sunday:</span>
                <span style={{ color: 'var(--sand-primary)' }}>09:00 AM – 10:00 PM</span>
              </p>
              <p style={{ margin: '8px 0 0 0', color: 'var(--match-best)', fontSize: '12px' }}>
                • VIP Stylist Consultations Available by Appointment
              </p>
            </div>
          </div>

          {/* Salon Locations */}
          <div>
            <h4 style={{ fontSize: '14px', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
              Atelier Locations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} color="var(--sand-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} color="var(--sand-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Linking Road, Bandra West, Mumbai, Maharashtra 400050</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="var(--sand-primary)" />
                <span>+91 80 4912 3456 / +91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontSize: '12px',
          color: 'var(--text-dim)'
        }}>
          <div>
            © 2026 AuraStyle Atelier & Grooming Studio. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy Architecture</span>
            <span>Biometric Security</span>
            <span>Salon Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
