import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, Users, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4 py-10 text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Contact Us
          </span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-extrabold text-foreground">We are here to help</h1>
          <p className="mt-3 text-muted-foreground font-body max-w-2xl mx-auto">
            Please fill this form to raise your query. We will feel happy to help you.
          </p>
        </div>

        <div className="container mx-auto px-4 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-card p-5 card-shadow sm:p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Send us a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    required
                    className="bg-background"
                  />
                  <Input
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-background"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-background"
                />
                <Textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background"
                />
                <Button type="submit" className="w-full rounded-lg py-6 font-heading text-base font-bold text-highlight-foreground gradient-highlight">
                  <Send className="w-4 h-4 mr-2" /> Submit
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Help & Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">For General Query</p>
                      <p className="text-sm text-muted-foreground">+91 9850504437</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">For Trek Query</p>
                      <p className="text-sm text-muted-foreground">info@explorersgroup.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Support Hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Saturday: 10 AM to 10 PM (GMT +5:30)</p>
                      <p className="text-sm text-muted-foreground">Sunday: 10 AM to 06 PM (GMT +5:30)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Only For Agents (B2B)</h3>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">sales@explorerstreks.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Where to find us</h3>
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    1692, Bhagyadarshan Building, Shop No 5, Sadashiv Peth, Tilak Road, Pune 411030
                  </p>
                </div>
                <div className="h-40 overflow-hidden rounded-lg border border-border">
                  <iframe
                    src="https://maps.google.com/maps?q=1692%20Bhagyadarshan%20Building%20Shop%20No%205%20Sadashiv%20Peth%20Tilak%20Road%20Pune%20411030&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Explorers Office Location"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Follow us</h3>
                <div className="flex items-center gap-3">
                  <a className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-muted/70" href="#">
                    <Facebook className="w-5 h-5 text-foreground" />
                  </a>
                  <a className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-muted/70" href="#">
                    <Instagram className="w-5 h-5 text-foreground" />
                  </a>
                  <a className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-muted/70" href="#">
                    <Youtube className="w-5 h-5 text-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
