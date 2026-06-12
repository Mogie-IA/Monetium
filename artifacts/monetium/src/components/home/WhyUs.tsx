import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      title: "Meaningful",
      description: "Experiences designed around real consumer connection."
    },
    {
      title: "Impactful",
      description: "Campaigns that capture attention and leave a lasting impression."
    },
    {
      title: "Measurable",
      description: "Execution focused on visibility, engagement, and ROI."
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              We are committed to delivering bold, creative solutions that are meaningful, impactful, and measurable.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-6 items-start p-8 bg-card border border-border hover:border-primary/50 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="text-2xl font-serif font-bold text-foreground mb-2">{reason.title}</h4>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
