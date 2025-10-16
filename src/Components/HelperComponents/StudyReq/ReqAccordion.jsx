import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ReqAccordion({
  title,
  subtitle,
  items,
  backgroundImage,
  ctaText,
  onCtaClick,
  accentColor = "text-amber-400",
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 p-8 m-6 rounded-3xl">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-extrabold ${accentColor} mb-3`}
          >
            {title}
          </h2>
          {subtitle && <p className="text-amber-100/90 text-lg">{subtitle}</p>}
        </motion.div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className={`bg-stone-900/60 border border-stone-700 rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "shadow-lg shadow-amber-800/40 border-amber-600/60"
                      : "hover:shadow-md hover:shadow-amber-900/20"
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    {Icon && (
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-lg bg-stone-800/80 ${accentColor}`}
                      >
                        <Icon size={22} />
                      </div>
                    )}
                    <span className="flex-1 text-lg font-semibold text-amber-100">
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-amber-400"
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </button>

                  {/* Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="px-6 pb-5"
                      >
                        <ul className="space-y-2 mt-2">
                          {item.content.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start text-amber-100/90 text-sm leading-relaxed"
                            >
                              <span className="mt-2 mr-3 w-1.5 h-1.5 bg-amber-400 rounded-full" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-amber-200 mb-4 text-lg">
              Ready to start your journey?
            </p>
            <button
              onClick={onCtaClick}
              className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
            >
              {ctaText}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
