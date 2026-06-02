import Icon from "@/components/ui/icon";

const IMG_DESK   = "https://cdn.poehali.dev/projects/ac488391-bda5-46a2-98e4-d4fe9adec63c/files/938c7077-20bd-46b7-8b80-2c5c27ae6f9b.jpg";
const IMG_TEAM   = "https://cdn.poehali.dev/projects/ac488391-bda5-46a2-98e4-d4fe9adec63c/files/f683c107-81e5-4153-abed-078fcf91e5ed.jpg";
const IMG_BREATH = "https://cdn.poehali.dev/projects/ac488391-bda5-46a2-98e4-d4fe9adec63c/files/d0f43dbb-65ce-46bd-a39a-95821763e2a9.jpg";

const DIRS = [
  {
    num: "01",
    tag: "Организационное",
    tagBg: "bg-blue-soft text-blue border border-blue-s",
    numColor: "text-blue",
    accent: "border-l-[3px] border-l-[hsl(210_65%_42%)]",
    icon: "Building2",
    iconColor: "text-blue",
    iconBg: "bg-blue-soft",
    image: IMG_DESK,
    subtitle: "Внешний каркас",
    items: [
      { icon: "ListChecks", color: "text-blue",     bg: "bg-blue-soft",    title: "Алгоритмизация", body: "Чек-листы и инструкции для каждой сложной задачи. Снижает операциональный стресс (r = 0,72)." },
      { icon: "Layers",     color: "text-lavender", bg: "bg-lavender-soft",title: "Дозированный контроль", body: "Делегировать задачи поэтапно — тревожный сотрудник обретает ощущение управляемости." },
      { icon: "UserCog",    color: "text-sage",     bg: "bg-sage-soft",    title: "Учёт интроверсии", body: "Интровертам — глубокая работа с документами; «холодные» переговоры — стабильным коллегам." },
    ],
  },
  {
    num: "02",
    tag: "Коммуникативное",
    tagBg: "bg-coral-soft text-coral border border-coral-s",
    numColor: "text-coral",
    accent: "border-l-[3px] border-l-[hsl(15_80%_62%)]",
    icon: "MessageCircle",
    iconColor: "text-coral",
    iconBg: "bg-coral-soft",
    image: IMG_TEAM,
    subtitle: "Экологичная среда",
    items: [
      { icon: "ShieldCheck", color: "text-coral",   bg: "bg-coral-soft",  title: "Легитимизация ошибок", body: "Ошибки — часть обучения. Снятие страха наказания снижает личностную тревожность (r = 0,83)." },
      { icon: "MessageSquare", color: "text-amber-b", bg: "bg-amber-soft", title: "Только личная критика", body: "Публичные замечания — сильнейший стрессор для эмотивных сотрудников (r = 0,57)." },
      { icon: "Sandwich",   color: "text-sage",     bg: "bg-sage-soft",   title: "Правило «бутерброда»", body: "Похвала → конкретная правка → уверенность в успехе. Поддерживает эмоционально лабильных." },
    ],
  },
  {
    num: "03",
    tag: "Психологическое",
    tagBg: "bg-sage-soft text-sage border border-sage-s",
    numColor: "text-sage",
    accent: "border-l-[3px] border-l-[hsl(150_35%_52%)]",
    icon: "Brain",
    iconColor: "text-sage",
    iconBg: "bg-sage-soft",
    image: IMG_BREATH,
    subtitle: "Саморегуляция",
    items: [
      { icon: "Wind",   color: "text-sage",     bg: "bg-sage-soft",    title: "Физиологическая регуляция", body: "Дыхание 4-7-8 и мышечная релаксация нейтрализуют нейротизм как базу стресса (r = 0,48)." },
      { icon: "Brain",  color: "text-lavender", bg: "bg-lavender-soft",title: "КПТ-тренинги", body: "Распознавание «катастрофизации» — ключ к снижению личностной тревожности (r = 0,83)." },
      { icon: "Clock",  color: "text-amber-b",  bg: "bg-amber-soft",   title: "Микропаузы", body: "10 мин после переговоров — восстановление самоконтроля перед оформлением виз (r = −0,43)." },
    ],
  },
];

const STATS = [
  { val: "0,83", label: "Личностная тревожность", color: "text-coral" },
  { val: "0,72", label: "Ситуативная тревожность", color: "text-blue" },
  { val: "0,57", label: "Эмотивность", color: "text-lavender" },
  { val: "−0,43", label: "Самоконтроль ↓", color: "text-sage" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[hsl(35_20%_93%)] flex flex-col items-center py-8 font-rubik">

      {/* Print button */}
      <div className="no-print mb-4 flex items-center gap-3">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-white text-[hsl(210_65%_42%)] border border-[hsl(210_65%_42%/0.3)] text-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow font-medium"
        >
          <Icon name="Printer" size={14} />
          Печать / PDF
        </button>
        <span className="text-xs text-[hsl(220_15%_52%)]">Один лист A4</span>
      </div>

      {/* A4 Sheet */}
      <div className="a4-page font-rubik" style={{ padding: 0, background: "hsl(207 70% 96%)" }}>

        {/* Rainbow stripe */}
        <div className="a4-header-stripe" />

        <div style={{ padding: "18px 22px 14px" }}>

          {/* ── Header row ── */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-blue-soft flex items-center justify-center">
                  <Icon name="HeartPulse" size={11} className="text-blue" />
                </div>
                <span className="text-[9px] text-[hsl(220_15%_52%)] uppercase tracking-widest font-medium">
                  Психологическое заключение · Туристическая организация · 2024
                </span>
              </div>
              <h1 className="font-cormorant text-[19px] font-bold text-foreground leading-snug">
                Профилактика стрессовых состояний персонала в организации как проблема психологического консультирования
              </h1>
              <p className="text-[10px] text-[hsl(220_15%_52%)] mt-0.5 leading-snug max-w-lg">
                Стандартные тимбилдинги неэффективны. ППН детерминирован личностными особенностями.
                Необходим индивидуальный подход.
              </p>
            </div>

            {/* Stats mini row */}
            <div className="flex gap-2 ml-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center rounded-xl px-2.5 py-1.5 shadow-sm border border-[hsl(207_60%_88%)]" style={{ minWidth: 52, background: "hsl(0 0% 100% / 0.8)" }}>
                  <div className={`font-cormorant text-[17px] font-bold leading-none ${s.color}`}>{s.val}</div>
                  <div className="text-[8px] text-[hsl(220_15%_52%)] leading-tight mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Thin divider */}
          <div className="divider-rainbow mb-3" />

          {/* ── Key finding banner ── */}
          <div className="flex items-start gap-2 border-l-[3px] border-l-[hsl(210_65%_42%)] rounded-r-xl px-3 py-2 mb-4" style={{ background: "hsl(210 65% 42% / 0.08)" }}>
            <Icon name="Lightbulb" size={14} className="text-blue flex-shrink-0 mt-0.5" />
            <p className="text-[10.5px] text-foreground leading-snug">
              <strong>Ключевой вывод:</strong> высокий ППН обусловлен нейротизмом (r = 0,48), личностной тревожностью (r = 0,83) и эмотивностью (r = 0,57).
              Эффективна только синергия управленческих, коммуникативных и психологических мер.
            </p>
          </div>

          {/* ── Three directions (columns) ── */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {DIRS.map((dir) => (
              <div key={dir.num} className="flex flex-col gap-2">

                {/* Direction header */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[hsl(30_15%_90%)]">
                  <img src={dir.image} alt={dir.subtitle} className="w-full object-cover" style={{ height: 110 }} />
                  <div className="px-3 pt-2 pb-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`font-cormorant text-[13px] font-bold leading-none ${dir.numColor} opacity-30`}>{dir.num}</span>
                      <span className={`text-[8.5px] font-medium px-2 py-0.5 rounded-full border ${dir.tagBg}`}>{dir.tag}</span>
                    </div>
                    <p className={`text-[9px] font-semibold uppercase tracking-wide ${dir.numColor}`}>{dir.subtitle}</p>
                  </div>
                </div>

                {/* Recommendation items */}
                {dir.items.map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-xl px-3 py-2 shadow-sm border border-[hsl(207_60%_88%)] ${dir.accent}`}
                    style={{ background: "hsl(0 0% 100% / 0.75)" }}
                  >
                    <div className="flex items-start gap-2">
                      <div className={`w-6 h-6 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon name={item.icon} size={12} className={item.color} fallback="Star" />
                      </div>
                      <div>
                        <p className={`text-[10px] font-semibold ${item.color} leading-none mb-0.5`}>{item.title}</p>
                        <p className="text-[9.5px] text-[hsl(220_15%_45%)] leading-snug">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* ── Conclusion row ── */}
          <div className="divider-rainbow mb-3" />

          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "TrendingDown", color: "text-blue",   bg: "bg-blue-soft",   val: "−40%", label: "ошибок при оформлении", sub: "виз и бронирований" },
              { icon: "Users",        color: "text-sage",   bg: "bg-sage-soft",   val: "↑",    label: "качество сервиса", sub: "«социальный фасад» сохраняется" },
              { icon: "Sparkles",     color: "text-coral",  bg: "bg-coral-soft",  val: "→",    label: "тревожность → продуктивность", sub: "чувствительность как актив" },
            ].map((o) => (
              <div key={o.label} className="rounded-xl px-3 py-2.5 shadow-sm border border-[hsl(207_60%_88%)] flex items-center gap-3" style={{ background: "hsl(0 0% 100% / 0.75)" }}>
                <div className={`w-8 h-8 rounded-xl ${o.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={o.icon} size={16} className={o.color} fallback="Star" />
                </div>
                <div>
                  <span className={`font-cormorant text-xl font-bold ${o.color} leading-none`}>{o.val}</span>
                  <p className="text-[10px] font-semibold text-foreground leading-none mt-0.5">{o.label}</p>
                  <p className="text-[9px] text-[hsl(220_15%_52%)]">{o.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-3 pt-2.5 border-t border-[hsl(30_15%_88%)] flex items-center justify-between">
            <span className="text-[9px] text-[hsl(220_15%_60%)]">
              Составлено на основе факторного и корреляционного анализа · Конфиденциально
            </span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-blue-soft flex items-center justify-center">
                <Icon name="HeartPulse" size={7} className="text-blue" />
              </div>
              <span className="text-[9px] text-[hsl(220_15%_60%)]">АнтиСтресс · 2024</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}