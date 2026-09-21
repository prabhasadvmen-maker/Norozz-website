import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SeoHead } from '@/components/common/SeoHead';
import { Trash2, AlertTriangle, CheckCircle2, Mail, Phone, ShieldOff, ChevronRight } from 'lucide-react';

const REASONS = [
  'I no longer use the app',
  'Privacy concerns',
  'Too many notifications',
  'Switching to another service',
  'Other',
];

const StepIndicator = ({ current }) => (
  <div className="flex items-center justify-center gap-2 mb-8">
    {[1, 2].map((s) => (
      <React.Fragment key={s}>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all
          ${current >= s ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
          {current > s ? <CheckCircle2 className="w-4 h-4" /> : s}
        </div>
        {s < 2 && (
          <div className={`h-0.5 w-12 rounded-full transition-all ${current > s ? 'bg-red-400' : 'bg-slate-200'}`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

export const DeleteAccount = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ phone: '', email: '', reason: '', confirm: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SeoHead
        title="Delete Account — NOROZZ"
        description="Request permanent deletion of your NOROZZ account and all associated data."
      />

      {/* Hero Banner */}
      <div className="bg-white border-b border-slate-200">
        <Container>
          <div className="py-10 text-left">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-600 font-medium">Delete Account</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                <Trash2 className="w-7 h-7 text-red-500" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">Delete Your Account</h1>
                <p className="text-sm text-slate-500 mt-0.5">Permanently remove your NOROZZ account and all associated data.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-12">
        <Container>
          <div className="max-w-lg mx-auto">

            {/* Step 1: Warning */}
            {step === 1 && (
              <div className="space-y-4">
                <StepIndicator current={1} />

                {/* Warning Card */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-sm text-red-800">
                    <p className="font-bold mb-2">This action is permanent and cannot be undone.</p>
                    <ul className="space-y-1.5 text-red-700">
                      {[
                        'All booking history will be permanently deleted',
                        'Profile, saved addresses & preferences will be removed',
                        'Any active bookings will be cancelled',
                        'All offers & loyalty points will be lost',
                        'Processing may take up to 30 days',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Help Links */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Need help instead?</p>
                  <a href="mailto:NOROZZCARE@GMAIL.COM" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Email Support</p>
                      <p className="text-sm font-bold text-navy group-hover:text-primary transition-colors">NOROZZCARE@GMAIL.COM</p>
                    </div>
                  </a>
                  <div className="border-t border-slate-100" />
                  <a href="tel:8796612243" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-teal-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Call Helpline</p>
                      <p className="text-sm font-bold text-navy group-hover:text-primary transition-colors">8796612243</p>
                    </div>
                  </a>
                  <div className="border-t border-slate-100" />
                  <a href="/privacy" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                      <ShieldOff className="w-4 h-4 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Data Deletion Policy</p>
                      <p className="text-sm font-bold text-navy group-hover:text-primary transition-colors">Read our Privacy Policy</p>
                    </div>
                  </a>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-3.5 px-6 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold rounded-xl transition-colors text-sm shadow-sm"
                  >
                    Continue to Delete
                  </button>
                  <a
                    href="/"
                    className="flex-1 py-3.5 px-6 bg-white hover:bg-slate-50 border border-slate-200 text-navy font-bold rounded-xl transition-colors text-sm text-center"
                  >
                    Cancel, Go Back
                  </a>
                </div>
              </div>
            )}

            {/* Step 2: Form */}
            {step === 2 && (
              <div className="space-y-4">
                <StepIndicator current={2} />

                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
                  <div>
                    <h2 className="text-lg font-extrabold text-navy font-heading">Confirm Your Identity</h2>
                    <p className="text-sm text-slate-500 mt-0.5">Enter your registered details to submit the deletion request.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-navy">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 87966 12243"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-navy bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent focus:bg-white placeholder:text-slate-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-navy">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-navy bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent focus:bg-white placeholder:text-slate-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-navy">Reason <span className="text-slate-400 font-normal">(optional)</span></label>
                      <select
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-navy bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent focus:bg-white transition-all"
                      >
                        <option value="">Select a reason</option>
                        {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="confirm"
                        required
                        checked={formData.confirm}
                        onChange={(e) => setFormData({ ...formData, confirm: e.target.checked })}
                        className="mt-0.5 w-4 h-4 accent-red-500 cursor-pointer shrink-0"
                      />
                      <label htmlFor="confirm" className="text-sm text-slate-600 cursor-pointer leading-relaxed">
                        I understand that deleting my account is <strong className="text-red-500">permanent and irreversible</strong>. All my data will be erased permanently.
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <button
                        type="submit"
                        className="flex-1 py-3.5 px-6 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold rounded-xl transition-colors text-sm shadow-sm"
                      >
                        Submit Deletion Request
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-3.5 px-6 bg-white hover:bg-slate-50 border border-slate-200 text-navy font-bold rounded-xl transition-colors text-sm"
                      >
                        Go Back
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center space-y-5">
                <div className="w-20 h-20 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-navy font-heading">Request Submitted</h2>
                  <p className="text-sm text-slate-500 mt-1">Your account deletion request has been received.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600 text-left space-y-2">
                  <p>📧 Confirmation will be sent to <strong className="text-navy">{formData.email}</strong></p>
                  <p>⏱ Processing time: <strong className="text-navy">up to 30 days</strong></p>
                  <p>💬 Changed your mind? Email <a href="mailto:NOROZZCARE@GMAIL.COM" className="text-primary font-semibold hover:underline">NOROZZCARE@GMAIL.COM</a></p>
                </div>
                <a
                  href="/"
                  className="inline-block py-3 px-8 bg-navy hover:bg-navy/90 text-white font-bold rounded-xl transition-colors text-sm"
                >
                  Back to Home
                </a>
              </div>
            )}

          </div>
        </Container>
      </section>
    </div>
  );
};

export default DeleteAccount;
