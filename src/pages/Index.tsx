import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_DESK    = "https://cdn.poehali.dev/projects/ac488391-bda5-46a2-98e4-d4fe9adec63c/files/938c7077-20bd-46b7-8b80-2c5c27ae6f9b.jpg";
const IMG_TEAM    = "https://cdn.poehali.dev/projects/ac488391-bda5-46a2-98e4-d4fe9adec63c/files/f683c107-81e5-4153-abed-078fcf91e5ed.jpg";
const IMG_BREATH  = "https://cdn.poehali.dev/projects/ac488391-bda5-46a2-98e4-d4fe9adec63c/files/d0f43dbb-65ce-46bd-a39a-95821763e2a9.jpg";

// ─── data ────────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: 1,
    tag: "Направление 1",
    tagStyle: "bg-blue-soft text-blue border border-blue-s",
    num: "01",
    numColor: "text-blue",
    accentBar: "border-l-4 border-l-[hsl(210_65%_42%)]",
    title: "Организационно-управленческое",
    subtitle: "Создание внешнего каркаса",
    image: IMG_DESK,
    imageCaption: "Чёткие алгоритмы снижают ситуативную тревожность (r = 0,72)",
    intro: "Сотрудники с высокой тревожностью теряют внутреннюю уверенность в условиях неопределённости. Руководству необходимо создать надёжную «внешнюю опору».",
    items: [
      {
        icon: "ListChecks",
        color: "text-blue",
        bg: "bg-blue-soft",
        title: "Алгоритмизация задач",
        body: "Любая сложная задача должна сопровождаться подробными инструкциями и чек-листами. При отмене рейсов или овербукинге — готовые сценарии. Ситуативная тревожность снижается напрямую (r = 0,72).",
      },
      {
        icon: "Layers",
        color: "text-lavender",
        bg: "bg-lavender-soft",
        title: "Дозированный контроль",
        body: "Тотальный контроль усиливает тревогу. Задачи делегируются поэтапно — тревожный сотрудник обретает ощущение контроля над ситуацией и снижает риск эмоционального срыва.",
      },
      {
        icon: "UserCog",
        color: "text-sage",
        bg: "bg-sage-soft",
        title: "Учёт интроверсии",
        body: "Интровертированные сотрудники чаще попадают в группу риска. Им рекомендуется минимизировать шумный open-space. Сложные «холодные» переговоры — эмоционально стабильным коллегам.",
      },
    ],
  },
  {
    id: 2,
    tag: "Направление 2",
    tagStyle: "bg-coral-soft text-coral border border-coral-s",
    num: "02",
    numColor: "text-coral",
    accentBar: "border-l-4 border-l-[hsl(15_80%_62%)]",
    title: "Коммуникативное",
    subtitle: "Создание экологичной среды",
    image: IMG_TEAM,
    imageCaption: "Безопасная обратная связь снижает личностную тревожность (r = 0,83)",
    intro: "Сотрудники с высоким стрессом обладают выраженной эмотивностью (r = 0,57) и воспринимают любую критику как личную угрозу. Среда общения критически важна.",
    items: [
      {
        icon: "ShieldCheck",
        color: "text-coral",
        bg: "bg-coral-soft",
        title: "Легитимизация ошибок",
        body: "Руководитель транслирует установку: ошибки — часть обучения. Снятие страха наказания напрямую снижает личностную тревожность (r = 0,83) — главный фактор стресса в выборке.",
      },
      {
        icon: "MessageSquare",
        color: "text-amber-b",
        bg: "bg-amber-soft",
        title: "Только индивидуальная критика",
        body: "Публичные замечания — сильнейший стрессор для эмотивных сотрудников. Любая корректирующая обратная связь даётся исключительно в формате личной беседы.",
      },
      {
        icon: "Sandwich",
        color: "text-sage",
        bg: "bg-sage-soft",
        title: "Правило «бутерброда»",
        body: "Структура беседы: похвала → конструктивная критика конкретного действия → выражение уверенности в успехе. Поддерживает эмоционально лабильных сотрудников.",
      },
    ],
  },
  {
    id: 3,
    tag: "Направление 3",
    tagStyle: "bg-sage-soft text-sage border border-sage-s",
    num: "03",
    numColor: "text-sage",
    accentBar: "border-l-4 border-l-[hsl(150_35%_52%)]",
    title: "Психологическое сопровождение",
    subtitle: "Восстановление ресурса саморегуляции",
    image: IMG_BREATH,
    imageCaption: "Физиологическая саморегуляция компенсирует нейротизм (r = 0,48)",
    intro: "Сильное психическое напряжение блокирует механизмы сознательного волевого контроля (r = −0,43). Необходимы специальные меры по восстановлению ресурса саморегуляции.",
    items: [
      {
        icon: "Wind",
        color: "text-sage",
        bg: "bg-sage-soft",
        title: "Физиологическая саморегуляция",
        body: "Биологической базой стресса выступает нейротизм (r = 0,48). Инструменты работы с телом: дыхательные техники (4-7-8), прогрессивная мышечная релаксация — сбрасывают «заряд» напряжения.",
      },
      {
        icon: "Brain",
        color: "text-lavender",
        bg: "bg-lavender-soft",
        title: "Когнитивно-поведенческие тренинги",
        body: "Высокая личностная тревожность (r = 0,83) требует работы с мышлением. Сотрудников обучают распознавать «катастрофизацию» — преувеличение масштаба рабочей проблемы.",
      },
      {
        icon: "Clock",
        color: "text-amber-b",
        bg: "bg-amber-soft",
        title: "Микропаузы для восстановления",
        body: "Обязательные 10-минутные перерывы после тяжёлых переговоров. Менеджер восстанавливает внимание перед оформлением важных документов: виз, ваучеров, бронирований.",
      },
    ],
  },
];

const STATS = [
  { val: "0,83", label: "Личностная тревожность", color: "text-coral", sub: "главный предиктор ППН" },
  { val: "0,72", label: "Ситуативная тревожность", color: "text-blue", sub: "операциональный стресс" },
  { val: "0,57", label: "Эмотивность", color: "text-lavender", sub: "катализатор реакций" },
  { val: "−0,43", label: "Самоконтроль", color: "text-sage", sub: "блокируется при стрессе" },
];

// ─── components ──────────────────────────────────────────────────────────────

function RecommendationCard({ item, delay }: { item: typeof SECTIONS[0]["items"][0]; delay: string }) {
  return (
    <div className={`card-paper p-5 animate-fade-up ${delay}`}>
      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
          <Icon name={item.icon} size={18} className={item.color} fallback="Star" />
        </div>
        <div>
          <h4 className="font-semibold text-[15px] text-foreground mb-1">{item.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
        </div>
      </div>
    </div>
  );
}

function A4Section({ section, index }: { section: typeof SECTIONS[0]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <div className="a4-page mx-auto mb-10 font-rubik">
      {/* Rainbow stripe */}
      <div className="a4-header-stripe" />

      <div className="px-10 py-8">
        {/* Section header */}
        <div className={`flex items-start gap-5 mb-7 ${isEven ? "" : "flex-row-reverse"}`}>
          {/* Image block */}
          <div className="w-52 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={section.image}
                alt={section.subtitle}
                className="w-full h-36 object-cover"
              />
            </div>
            <p className="text-[11px] text-muted-foreground mt-2 text-center leading-snug italic">
              {section.imageCaption}
            </p>
          </div>

          {/* Title block */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${section.tagStyle}`}>
                {section.tag}
              </span>
            </div>
            <div className="relative">
              <span
                className={`absolute -top-3 right-0 font-cormorant text-7xl font-bold opacity-[0.07] leading-none select-none ${section.numColor}`}
              >
                {section.num}
              </span>
              <h2 className="font-cormorant text-3xl font-semibold text-foreground leading-tight mb-1">
                {section.title}
              </h2>
              <p className={`font-medium text-sm mb-3 ${section.numColor}`}>{section.subtitle}</p>
              <div className={`pl-3 py-2 ${section.accentBar}`}>
                <p className="text-sm text-foreground/75 leading-relaxed">{section.intro}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-rainbow mb-6" />

        {/* Recommendation cards */}
        <div className="space-y-3">
          {section.items.map((item, i) => (
            <RecommendationCard
              key={i}
              item={item}
              delay={`delay-${i + 1}`}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-blue-soft flex items-center justify-center">
              <Icon name="HeartPulse" size={11} className="text-blue" />
            </div>
            <span className="text-[11px] text-muted-foreground font-medium">
              Психологические рекомендации · Туристическая организация · 2024
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground">
            {index + 1} / {SECTIONS.length + 1}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── main page ────────────────────────────────────────────────────────────────

export default function Index() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background font-rubik">

      {/* Top navigation bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm no-print">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-soft flex items-center justify-center">
              <Icon name="HeartPulse" size={16} className="text-blue" />
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground leading-none">АнтиСтресс</p>
              <p className="text-[11px] text-muted-foreground">Туристическая организация</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  document.getElementById(`section-${s.id}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-150 ${s.tagStyle} hover:opacity-80`}
              >
                {s.tag}
              </button>
            ))}
          </div>
          <button
            onClick={() => window.print()}
            className="no-print flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-blue-soft text-blue border border-blue-s hover:opacity-80 transition-opacity"
          >
            <Icon name="Printer" size={13} />
            Печать
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-0">

        {/* ── Cover page ── */}
        <div className="a4-page mx-auto mb-10 animate-fade-up">
          <div className="a4-header-stripe" />
          <div className="px-10 py-10 flex flex-col h-full">

            {/* Cover top */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  Психологическое заключение
                </span>
                <h1 className="font-cormorant text-5xl font-bold text-foreground leading-tight mt-2">
                  Профилактика стресса<br />
                  <span className="text-blue">в туристической</span><br />
                  организации
                </h1>
                <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
                  Практические рекомендации на основе эмпирического исследования,
                  включающего факторный и корреляционный анализ
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 text-right">
                <span className="font-cormorant text-8xl font-bold text-foreground opacity-[0.04] leading-none select-none">
                  R
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {STATS.map((s) => (
                <div key={s.label} className="card-paper p-4 text-center animate-fade-up delay-2">
                  <div className={`font-cormorant text-3xl font-bold ${s.color} leading-none`}>{s.val}</div>
                  <div className="text-[11px] font-medium text-foreground mt-1">{s.label}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Cover image grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[IMG_DESK, IMG_TEAM, IMG_BREATH].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm animate-fade-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <img src={src} alt="" className="w-full h-28 object-cover" />
                </div>
              ))}
            </div>

            <div className="divider-rainbow mb-6" />

            {/* Key finding */}
            <div className="card-paper p-5 bg-blue-soft border-l-4 border-l-[hsl(210_65%_42%)] rounded-l-none animate-fade-up delay-4">
              <div className="flex items-start gap-3">
                <Icon name="Lightbulb" size={20} className="text-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground mb-1">Ключевой вывод исследования</p>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    Стандартные универсальные программы (тимбилдинги) <strong>неэффективны</strong> для данной организации.
                    Высокий ППН детерминирован глубинными личностными особенностями сотрудников:
                    нейротизмом, личностной тревожностью и эмотивностью.
                    Необходим индивидуальный подход по трём направлениям.
                  </p>
                </div>
              </div>
            </div>

            {/* Contents */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {SECTIONS.map((s) => (
                <div key={s.id} className={`rounded-xl p-3 border ${s.tagStyle} animate-fade-up delay-5`}>
                  <div className="text-xs font-medium mb-0.5">{s.tag}</div>
                  <div className="text-[13px] font-semibold leading-snug">{s.title}</div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">
                Психологические рекомендации · Туристическая организация · 2024
              </span>
              <span className="text-[11px] text-muted-foreground">1 / 4</span>
            </div>
          </div>
        </div>

        {/* ── Section pages ── */}
        {SECTIONS.map((section, i) => (
          <div key={section.id} id={`section-${section.id}`} className={`animate-fade-up delay-${i + 1}`}>
            <A4Section section={section} index={i} />
          </div>
        ))}

        {/* ── Conclusion page ── */}
        <div className="a4-page mx-auto mb-10 animate-fade-up delay-4">
          <div className="a4-header-stripe" />
          <div className="px-10 py-8">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-soft flex items-center justify-center">
                <Icon name="CheckCircle2" size={22} className="text-blue" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Итоговый вывод</p>
                <h2 className="font-cormorant text-3xl font-semibold text-foreground">Синергия мер</h2>
              </div>
            </div>

            <div className="divider-rainbow mb-6" />

            <div className="card-paper p-6 mb-6 border-l-4 border-l-[hsl(210_65%_42%)] rounded-l-none">
              <p className="text-[15px] text-foreground leading-relaxed">
                Эффективная профилактика стресса в организации возможна лишь при{" "}
                <strong>синергии управленческих и психологических мер</strong>.
                Создание алгоритмизированной среды в сочетании с обучением навыкам
                саморегуляции позволит компенсировать личностные уязвимости сотрудников
                и конвертировать их чувствительность в высокую профессиональную продуктивность.
              </p>
            </div>

            {/* Summary table */}
            <div className="space-y-3 mb-8">
              {[
                { icon: "Building2", color: "text-blue", bg: "bg-blue-soft", dir: "Организационное", effect: "Снижение ситуативной тревожности (r = 0,72) через алгоритмизацию" },
                { icon: "MessageCircle", color: "text-coral", bg: "bg-coral-soft", dir: "Коммуникативное", effect: "Снижение личностной тревожности (r = 0,83) через безопасную среду" },
                { icon: "Sparkles", color: "text-sage", bg: "bg-sage-soft", dir: "Психологическое", effect: "Восстановление самоконтроля (r = −0,43) через саморегуляцию" },
              ].map((row) => (
                <div key={row.dir} className="flex items-center gap-4 card-paper px-5 py-4">
                  <div className={`w-10 h-10 rounded-xl ${row.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={row.icon} size={18} className={row.color} fallback="Star" />
                  </div>
                  <div className="flex-1">
                    <span className={`font-semibold text-sm ${row.color}`}>{row.dir}</span>
                    <p className="text-sm text-muted-foreground">{row.effect}</p>
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground flex-shrink-0" />
                </div>
              ))}
            </div>

            {/* Expected outcomes */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: "TrendingDown", label: "Снижение ошибок", val: "−40%", desc: "при оформлении виз и бронирований", color: "text-blue", bg: "bg-blue-soft" },
                { icon: "Users", label: "Качество сервиса", val: "+↑", desc: "за счёт сохранения «социального фасада»", color: "text-sage", bg: "bg-sage-soft" },
                { icon: "HeartHandshake", label: "Команда риска", val: "→ норма", desc: "конвертация тревожности в чуткость к клиенту", color: "text-coral", bg: "bg-coral-soft" },
              ].map((o) => (
                <div key={o.label} className="card-paper p-4 text-center">
                  <div className={`w-10 h-10 rounded-xl ${o.bg} flex items-center justify-center mx-auto mb-2`}>
                    <Icon name={o.icon} size={18} className={o.color} fallback="Star" />
                  </div>
                  <div className={`font-cormorant text-3xl font-bold ${o.color}`}>{o.val}</div>
                  <div className="text-sm font-semibold text-foreground mt-1">{o.label}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{o.desc}</div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-blue-soft flex items-center justify-center">
                  <Icon name="HeartPulse" size={11} className="text-blue" />
                </div>
                <span className="text-[11px] text-muted-foreground font-medium">
                  Психологические рекомендации · Туристическая организация · 2024
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground">4 / 4</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
