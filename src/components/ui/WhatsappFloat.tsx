"use client"; // Adicione isso pois teremos interatividade (onClick)

import { MessageCircle } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google"; // Importe a função

import { CONTACT_INFO } from "@/constants/images";

export function WhatsappFloat() {
  const whatsappNumber = CONTACT_INFO.whatsapp;
  const defaultMessage = "Olá, estou no site e gostaria de tirar uma dúvida.";

  const handleClick = () => {
    sendGAEvent("event", "conversion_whatsapp", {
      page_location: "floating_button",
      label: "contato_geral",
    });
  };

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        defaultMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick} // Adicione o evento de clique
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center animate-in slide-in-from-bottom-10 fade-in"
      aria-label="Falar no WhatsApp"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
    >
      <MessageCircle size={32} fill="white" className="text-green-500" />
    </a>
  );
}
