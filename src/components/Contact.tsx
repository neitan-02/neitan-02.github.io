"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, Loader2, RotateCcw } from "lucide-react";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "TU_ACCESS_KEY_AQUI",
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData(defaultFormState);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center shadow-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 15, delay: 0.1 }}
              className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle2 className="w-8 h-8" />
            </motion.div>

            <h3 className="text-xl font-bold text-neutral-800 mb-2">
              ¡Mensaje recibido con éxito!
            </h3>
            <p className="text-neutral-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Gracias por ponerte en contacto. He recibido tus datos correctamente y revisaré tu propuesta para responderte a tu correo en menos de 24 horas.
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200 rounded-lg text-sm font-semibold transition shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Enviar otro mensaje
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="form"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <input
                type="text"
                required
                placeholder="Tu Nombre"
                className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 px-3 py-2.5 rounded-md text-sm text-neutral-700 w-full transition"
                value={formData.name.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: { value: e.target.value, error: "" },
                  })
                }
              />
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 px-3 py-2.5 rounded-md text-sm text-neutral-700 w-full transition"
                value={formData.email.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: { value: e.target.value, error: "" },
                  })
                }
              />
            </div>
            <div>
              <textarea required placeholder="Tu Mensaje" rows={10}
                className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 px-3 mt-4 py-2.5 rounded-md text-sm text-neutral-700 w-full transition"
                value={formData.message.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: { value: e.target.value, error: "" },
                  })
                }
              />
            </div>

            <button
              disabled={status === "loading"}
              className="w-full px-4 py-3 mt-4 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-60 rounded-md font-bold text-white transition flex items-center justify-center gap-2 shadow-sm"
              type="submit"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando mensaje...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2.5 text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-lg text-sm mt-4"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>
                    Hubo un problema al enviar tu mensaje. Por favor verifica tu conexión e inténtalo de nuevo.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};