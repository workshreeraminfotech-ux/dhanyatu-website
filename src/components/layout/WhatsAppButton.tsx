import { motion } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "919924599312";
  const message = encodeURIComponent("Hello Dhanyatu Group, I would like to make an inquiry.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba5a] animate-whatsapp border-2 border-white/10"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M12.004 2c-5.51 0-9.99 4.49-9.99 10 0 1.91.53 3.69 1.46 5.25L2 22l5.05-1.44a9.907 9.907 0 0 0 4.95 1.34h.01c5.51 0 9.99-4.49 9.99-10 0-5.51-4.48-10-9.99-10zm0 18.33a8.307 8.307 0 0 1-4.24-1.17l-.3-.18-3.14.89.9-3.05-.2-.31a8.312 8.312 0 0 1-1.28-4.51c0-4.58 3.73-8.31 8.31-8.31s8.31 3.73 8.31 8.31c-.01 4.59-3.74 8.32-8.31 8.32zm4.56-6.22c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8 1-.15.16-.3.18-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.09-.16.04-.3-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.5-.4-.43-.56-.43-.14 0-.3-.02-.47-.02-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.29z" />
      </svg>
    </motion.a>
  );
}
