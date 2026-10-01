import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Bookmark, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  FileText,
  User,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ConsultationItem, FaceShape } from '../types';
import { FACE_SHAPES_DATA } from '../data/styleAdvisorData';

interface ConsultationDocketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ConsultationItem[];
  onRemoveItem: (styleId: string) => void;
  onUpdateNotes: (styleId: string, notes: string) => void;
  currentShape: FaceShape;
  onExploreCatalog: () => void;
}

export const ConsultationDocketDrawer: React.FC<ConsultationDocketDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateNotes,
  currentShape,
  onExploreCatalog
}) => {
  const [clientName, setClientName] = useState('Ananya Sharma');
  const [clientPhone, setClientPhone] = useState('+91 98765 43210');
  const [selectedDate, setSelectedDate] = useState('2026-10-05');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:30 AM');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const shapeInfo = FACE_SHAPES_DATA[currentShape];

  // Calculate total in INR
  const subtotal = items.reduce((sum, item) => sum + item.hairstyle.salonServicePriceINR, 0);
  const consultationFee = 0; // Complimentary with booking
  const totalINR = subtotal;

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '03:45 PM',
    '05:30 PM',
    '07:00 PM'
  ];

  const handleConfirmBooking = () => {
    // Generate luxury ref code
    const randomCode = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomCode);
    setIsBooked(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DECBB3', '#FFFFFF', '#10B981', '#CDB391']
    });
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        justifyContent: 'flex-end',
        padding: 0
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          height: '100vh',
          background: '#11141B',
          borderLeft: '1px solid var(--border-sand)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-lg), 0 0 50px rgba(0,0,0,0.8)',
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <style>{`
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}</style>

        {/* Drawer Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(10, 12, 16, 0.9)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(222, 203, 179, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-sand)'
            }}>
              <Bookmark size={16} color="var(--sand-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                Salon Consultation Docket
              </h3>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {items.length} {items.length === 1 ? 'Style' : 'Styles'} Selected • {currentShape} Face Profile
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {isBooked ? (
            /* Booking Confirmation Screen */
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid var(--match-best)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px',
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.25)'
              }}>
                <CheckCircle2 size={32} color="var(--match-best)" />
              </div>

              <span className="badge badge-best" style={{ marginBottom: '12px' }}>
                Consultation Reserved
              </span>

              <h3 style={{ fontSize: '24px', color: '#FFFFFF', margin: '0 0 8px 0', fontFamily: 'var(--font-display)' }}>
                You're Scheduled for AuraStyle Atelier
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', marginBottom: '24px' }}>
                Your master stylist has received your biometric face shape blueprint and curated reference styles.
              </p>

              {/* Reference Card */}
              <div style={{
                background: 'rgba(222, 203, 179, 0.05)',
                border: '1px solid var(--border-sand)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Booking Reference:</span>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--sand-primary)', fontFamily: 'var(--font-display)' }}>
                    {bookingRef}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Client Name:</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>{clientName}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Date & Slot:</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--sand-100)' }}>
                    {selectedDate} at {selectedTimeSlot}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Analyzed Face Shape:</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--match-best)' }}>
                    {currentShape} Geometry
                  </span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '10px', marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Estimated Studio Total:</span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--sand-primary)', fontFamily: 'var(--font-display)' }}>
                    ₹{totalINR.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => alert(`Consultation Docket #${bookingRef} sent to ${clientPhone} via WhatsApp!`)}
                  className="btn-sand"
                  style={{ width: '100%', padding: '12px' }}
                >
                  <Share2 size={16} />
                  <span>Send Docket to WhatsApp</span>
                </button>

                <button
                  onClick={handleReset}
                  className="btn-secondary"
                  style={{ width: '100%', padding: '11px' }}
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Active Docket Items & Booking Form */
            <>
              {/* Client Face Profile Summary Card */}
              <div style={{
                background: 'rgba(222, 203, 179, 0.05)',
                border: '1px solid var(--border-sand)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 16px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sand-primary)', fontWeight: 700 }}>
                    Client AI Face Shape
                  </span>
                  <span className="badge badge-best" style={{ fontSize: '11px' }}>
                    {currentShape} Shape
                  </span>
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--sand-200)', margin: 0, lineHeight: 1.4 }}>
                  Goal: {shapeInfo.aestheticGoal}
                </p>
              </div>

              {/* Items List */}
              {items.length === 0 ? (
                <div style={{
                  padding: '40px 16px',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--border-subtle)',
                  marginBottom: '24px'
                }}>
                  <Bookmark size={30} color="var(--text-dim)" style={{ margin: '0 auto 10px' }} />
                  <h4 style={{ color: '#FFFFFF', fontSize: '15px', marginBottom: '4px' }}>No styles in your docket</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '12.5px', marginBottom: '16px' }}>
                    Browse our proportion-matched hairstyle catalog and save styles to bring to your consultation.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onExploreCatalog();
                    }}
                    className="btn-sand"
                    style={{ fontSize: '12.5px', padding: '8px 16px' }}
                  >
                    Explore Hairstyles
                  </button>
                </div>
              ) : (
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '10px' }}>
                    Selected Cut References ({items.length})
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {items.map((item) => {
                      const matchScore = item.hairstyle.shapeCompatibility[currentShape]?.score || 90;
                      return (
                        <div
                          key={item.hairstyle.id}
                          style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            padding: '12px',
                            display: 'flex',
                            gap: '12px'
                          }}
                        >
                          {/* Thumbnail */}
                          <img
                            src={item.hairstyle.image}
                            alt={item.hairstyle.name}
                            style={{
                              width: '64px',
                              height: '64px',
                              borderRadius: 'var(--radius-sm)',
                              objectFit: 'cover',
                              flexShrink: 0
                            }}
                          />

                          {/* Info */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '4px' }}>
                              <h5 style={{
                                fontSize: '14px',
                                color: '#FFFFFF',
                                margin: 0,
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}>
                                {item.hairstyle.name}
                              </h5>
                              <button
                                onClick={() => onRemoveItem(item.hairstyle.id)}
                                style={{
                                  background: 'transparent',
                                  border: 'none',
                                  color: 'var(--text-dim)',
                                  cursor: 'pointer',
                                  padding: '2px'
                                }}
                                title="Remove"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '4px 0' }}>
                              <span style={{ fontSize: '11px', color: 'var(--match-best)', fontWeight: 600 }}>
                                {matchScore}% Match
                              </span>
                              <span style={{ color: 'var(--border-subtle)' }}>•</span>
                              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                                {item.hairstyle.length}
                              </span>
                              <span style={{ color: 'var(--border-subtle)' }}>•</span>
                              <span style={{ fontSize: '12px', color: 'var(--sand-primary)', fontWeight: 700 }}>
                                ₹{item.hairstyle.salonServicePriceINR.toLocaleString('en-IN')}
                              </span>
                            </div>

                            {/* Stylist Notes Input */}
                            <input
                              type="text"
                              placeholder="Notes for stylist (e.g. keep sideburns soft)..."
                              value={item.userNotes || ''}
                              onChange={(e) => onUpdateNotes(item.hairstyle.id, e.target.value)}
                              style={{
                                width: '100%',
                                background: 'rgba(0, 0, 0, 0.3)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '4px',
                                color: '#FFFFFF',
                                fontSize: '11.5px',
                                padding: '4px 8px',
                                outline: 'none',
                                marginTop: '4px'
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Consultation Booking Form Details */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sand-primary)', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
                  Atelier Appointment Details
                </span>

                {/* Name & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                  <div>
                    <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                      Client Name
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      style={{
                        width: '100%',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#FFFFFF',
                        padding: '7px 10px',
                        fontSize: '12.5px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                      Phone (WhatsApp)
                    </label>
                    <input
                      type="text"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      style={{
                        width: '100%',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#FFFFFF',
                        padding: '7px 10px',
                        fontSize: '12.5px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Date Picker */}
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#FFFFFF',
                      padding: '7px 10px',
                      fontSize: '12.5px',
                      outline: 'none',
                      colorScheme: 'dark'
                    }}
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    Select Time Slot
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        style={{
                          background: selectedTimeSlot === slot ? 'var(--sand-primary)' : 'rgba(255,255,255,0.04)',
                          color: selectedTimeSlot === slot ? '#0A0C10' : '#FFFFFF',
                          border: selectedTimeSlot === slot ? 'none' : '1px solid var(--border-subtle)',
                          borderRadius: '4px',
                          padding: '6px',
                          fontSize: '11.5px',
                          fontWeight: selectedTimeSlot === slot ? 700 : 500,
                          cursor: 'pointer'
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Calculation in ₹ INR */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  <span>Haircut Services Subtotal:</span>
                  <span style={{ color: '#FFFFFF' }}>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <span>AI Biometric Face Consultation:</span>
                  <span style={{ color: 'var(--match-best)', fontWeight: 600 }}>Complimentary (₹0)</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '10px',
                  marginTop: '6px'
                }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>Total Estimated Amount:</span>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--sand-primary)', fontFamily: 'var(--font-display)' }}>
                    ₹{totalINR.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {!isBooked && (
          <div style={{
            padding: '18px 24px',
            borderTop: '1px solid var(--border-subtle)',
            background: 'rgba(10, 12, 16, 0.95)'
          }}>
            <button
              onClick={handleConfirmBooking}
              disabled={items.length === 0}
              className="btn-sand"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                opacity: items.length === 0 ? 0.5 : 1,
                cursor: items.length === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              <Calendar size={16} />
              <span>Confirm & Book Consultation (₹{totalINR.toLocaleString('en-IN')})</span>
            </button>
            <span style={{ fontSize: '11px', color: 'var(--text-dim)', textAlign: 'center', display: 'block', marginTop: '8px' }}>
              Free cancellation up to 2 hours before your appointment.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
