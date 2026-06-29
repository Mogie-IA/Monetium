import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName:   z.string().min(1, "First name is required"),
  lastName:    z.string().min(1, "Last name is required"),
  service:     z.string().min(1, "Please select a service"),
  email:       z.string().email("Invalid email address"),
  newsletter:  z.boolean().optional(),
  message:     z.string().min(10, "Tell us a bit more about your project"),
});

type FormValues = z.infer<typeof formSchema>;

const lineInput =
  "w-full bg-transparent border-0 border-b border-foreground/25 rounded-none px-0 py-2.5 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-foreground/70 transition-colors";

export function Contact() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "", lastName: "", service: "", email: "",
      newsletter: false, message: "",
    },
  });

  function onSubmit(_values: FormValues) {
    toast({
      title: "Message Sent",
      description: "We've received your inquiry and will be in touch shortly.",
    });
    reset();
  }

  return (
    <section id="contact" className="bg-white pt-20 md:pt-28 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">

        {/* ── Giant heading ──────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[14vw] sm:text-[12vw] lg:text-[10vw] font-black leading-none tracking-tight text-foreground mb-14"
        >
          Contact Us
        </motion.h2>

        {/* ── 2-col: info + form ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 mb-16 md:mb-24">

          {/* Left: location + hours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 pt-1"
          >
            <div>
              <p className="text-sm text-foreground leading-relaxed">1, Ibadan Close, Off Afolabi Close,</p>
              <p className="text-sm text-foreground leading-relaxed">Off Agbaoku Street, by TFC Opebi,</p>
              <p className="text-sm text-foreground leading-relaxed">Lagos, Nigeria</p>
              <p className="text-sm text-foreground/50">2025</p>
            </div>
            <div>
              <p className="text-sm text-foreground/50">Office hours</p>
              <p className="text-sm text-foreground">Monday – Friday</p>
              <p className="text-sm text-foreground">9 AM – 6 PM</p>
            </div>
          </motion.div>

          {/* Right: minimal form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-0"
          >
            {/* Name row */}
            <div className="mb-1">
              <p className="text-xs font-medium text-foreground/60 mb-2">Name (required)</p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input
                    {...register("firstName")}
                    placeholder="First Name"
                    className={lineInput}
                  />
                  {errors.firstName && (
                    <p className="text-primary text-xs mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("lastName")}
                    placeholder="Last Name"
                    className={lineInput}
                  />
                  {errors.lastName && (
                    <p className="text-primary text-xs mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="mt-6">
              <select
                {...register("service")}
                className={lineInput + " appearance-none cursor-pointer"}
                defaultValue=""
              >
                <option value="" disabled>Service</option>
                <option value="event-activation">Event Activation</option>
                <option value="brand-engagement">Brand Engagement</option>
                <option value="sponsorship">Sponsorship & Partnership</option>
                <option value="field-force">Field Force Deployment</option>
                <option value="posm">POSM Conceptualization</option>
                <option value="other">Other</option>
              </select>
              {errors.service && (
                <p className="text-primary text-xs mt-1">{errors.service.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="mt-6">
              <p className="text-xs font-medium text-foreground/60 mb-2">Email (required)</p>
              <input
                {...register("email")}
                type="email"
                placeholder="your@email.com"
                className={lineInput}
              />
              {errors.email && (
                <p className="text-primary text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Newsletter checkbox */}
            <label className="flex items-center gap-3 mt-6 cursor-pointer">
              <input
                type="checkbox"
                {...register("newsletter")}
                className="w-4 h-4 accent-primary rounded"
              />
              <span className="text-sm text-foreground/60">Sign up for news and updates</span>
            </label>

            {/* Project description */}
            <div className="mt-6">
              <p className="text-xs font-medium text-foreground/60 mb-2">Project description</p>
              <textarea
                {...register("message")}
                placeholder="Tell us about your project..."
                rows={3}
                className={lineInput + " resize-none"}
              />
              {errors.message && (
                <p className="text-primary text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                className="px-7 py-2.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 transition-colors"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>

        {/* ── Large contact details ──────────────────────── */}
        <div className="border-t border-border/60 py-10 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <a
            href="mailto:info@monetiumltd.com"
            className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground hover:text-primary transition-colors leading-none"
          >
            info@monetiumltd.com
          </a>
          <a
            href="tel:+2348063218553"
            className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground hover:text-primary transition-colors leading-none"
          >
            +234 806 321 8553
          </a>
        </div>

      </div>
    </section>
  );
}
