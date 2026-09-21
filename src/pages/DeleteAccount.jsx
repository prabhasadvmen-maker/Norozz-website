import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SeoHead } from '@/components/common/SeoHead';
import { Trash2, AlertTriangle, CheckCircle2, Mail, Phone, ShieldOff } from 'lucide-react';

export const DeleteAccount = () => {
  const [step, setStep] = useState(1); // 1: info, 2: form, 3: submitted
  const [formData, setFormData] = useState({ phone: '', email: '', reason: '', confirm: false });

  const reasons = [
    'I no longer use the app',
    'Privacy concerns',
    'Too many notifications',
    'Switching to another service',
    'Other',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-surface">
      <SeoHead
        title="Delete Account — NOROZZ"
        description="Request permanent deletion of your NOROZZ account and all associated data."
      />

      <section className="py-16">
        <Container>
          <div className="max-w-xl mx-auto">

            {/* Step 1: Warning Info */}
            {step === 1 && (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-subtle p-8 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                    <Trash2 className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-extrabold text-navy font-heading">Delete Your Account</h1>
                    <p className="text-sm text-slate-500">This action is permanent and cannot be undone.</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800 space-y-1">
                    <p className="font-bold">Before you proceed, please note:</p>
                    <ul className="list-disc list-inside space-y-1 text-amber-700">
                      <li>All your booking history will be permanently deleted</li>
                      <li>Your profile, saved addresses & preferences will be removed</li>
                      <li>Any active bookings will be cancelled</li>
                      <li>You will lose access to all offers & loyalty points</li>
                      <li>This process may take up to 30 days to complete</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <ShieldOff className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Your data will be deleted in accordance with our <a href="/privacy" className="text-primary font-semibold hover:underline">Privacy Policy</a>.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Need help instead? Email us at <a href="mailto:NOROZZCARE@GMAIL.COM" className="text-primary font-semibold hover:underline">NOROZZCARE@GMAIL.COM</a></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Or call support: <a href="tel:8796612243" className="text-primary font-semibold hover:underline">8796612243</a></span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors text-sm"
                  >
                    Continue to Delete
                  </button>
                  <a
                    href="/"
                    className="flex-1 py-3 px-6 bg-slate-100 hover:bg-slate-200 text-navy font-bold rounded-xl transition-colors text-sm text-center"
                  >
                    Cancel, Go Back
                  </a>
                </div>
              </div>
            )}

            {/* Step 2: Form */}
            {step === 2 && (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-subtle p-8 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                    <Trash2 className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-navy font-heading">Confirm Account Deletion</h2>
                    <p className="text-sm text-slate-500">Fill in your details to submit the request.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-navy">Registered Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 87966 12243"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-navy bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder:text-slate-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-navy">Registered Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-navy bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder:text-slate-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-navy">Reason for Deletion</label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-navy bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a reason (optional)</option>
                      {reasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="confirm"
                      required
                      checked={formData.confirm}
                      onChange={(e) => setFormData({ ...formData, confirm: e.target.checked })}
                      className="mt-1 w-4 h-4 accent-red-500 cursor-pointer"
                    />
                    <label htmlFor="confirm" className="text-sm text-slate-600 cursor-pointer">
                      I understand that deleting my account is <strong className="text-red-500">permanent and irreversible</strong>. All my data will be erased.
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors text-sm"
                    >
                      Submit Deletion Request
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 px-6 bg-slate-100 hover:bg-slate-200 text-navy font-bold rounded-xl transition-colors text-sm"
                    >
                      Go Back
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-subtle p-10 text-center space-y-5">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9 text-green-500" />
                </div>
                <h2 className="text-2xl font-extrabold text-navy font-heading">Request Submitted</h2>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Your account deletion request has been received. We will process it within <strong>30 days</strong> and send a confirmation to <strong>{formData.email}</strong>.
                </p>
                <p className="text-xs text-slate-400">
                  If you change your mind, contact us at <a href="mailto:NOROZZCARE@GMAIL.COM" className="text-primary font-semibold hover:underline">NOROZZCARE@GMAIL.COM</a> before processing is complete.
                </p>
                <a
                  href="/"
                  className="inline-block mt-2 py-3 px-8 bg-slate-100 hover:bg-slate-200 text-navy font-bold rounded-xl transition-colors text-sm"
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
