import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Portfolio Highlights
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer block h-[450px] relative overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-serif font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6">
                  {item.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
