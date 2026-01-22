import { useEffect, useMemo, useState } from "react";

function Assistant({ air, target, olahraga, tidur, sarapan, meditasi, jalan }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  // LOGIKA AI (RULE-BASED)
  const messages = useMemo(() => {
    const tips = [];

    // Respon air (utama)
    if (air === 0) tips.push("Halo! Yuk mulai hari ini dengan minum air 💧");
    if (air === 1) tips.push("Bagus 👍 1 gelas air sudah diminum.");
    if (air === 2) tips.push("Tubuhmu mulai terhidrasi dengan baik 🚰");
    if (air === 3) tips.push("Teruskan! Air membantu kerja organ tubuh 💦");
    if (air === 4) tips.push("Setengah jalan! Jangan lupa minum lagi 🥤");
    if (air === 5) tips.push("Hidrasi yang baik bantu fokus belajar 📚");
    if (air === 6) tips.push("Air cukup bantu metabolisme tubuh ⚙️");
    if (air === 7) tips.push("Sedikit lagi mencapai target 🎯");
    if (air >= target) tips.push("Target air hari ini tercapai! Keren sekali ✅");

    // Saran tambahan
    if (!olahraga) tips.push("Coba olahraga ringan 15 menit ya 🏃‍♂️");
    if (!tidur) tips.push("Tidur cukup penting untuk kesehatan mental 😴");
    if (!sarapan) tips.push("Sarapan membantu energi sepanjang hari 🍽️");
    if (!meditasi) tips.push("Meditasi singkat bisa mengurangi stres 🧘");
    if (!jalan) tips.push("Jalan kaki santai baik untuk jantung 🚶");

    return tips;
  }, [air, target, olahraga, tidur, sarapan, meditasi, jalan]);

  // EFEK PESAN MUNCUL SATU PER SATU + TYPING
  useEffect(() => {
    setVisibleCount(0);
    setTyping(true);

    if (messages.length === 0) return;

    const DELAY = 500;
    const timers = [];

    messages.forEach((_, index) => {
      const t = setTimeout(() => {
        setTyping(false);
        setVisibleCount((prev) => prev + 1);
        if (index < messages.length - 1) setTyping(true);
      }, index * DELAY);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [messages]);

  return (
    <div className="card assistant fade-in">
      <h3>Asisten SmartLife 🤖</h3>

      <div className="chat-box">
        {messages.slice(0, visibleCount).map((msg, i) => (
          <div key={i} className="chat-bubble ai">
            {msg}
          </div>
        ))}

        {typing && (
          <div className="chat-bubble typing">
            <span></span><span></span><span></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Assistant;
