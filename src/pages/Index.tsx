import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const CORRELATIONS = [
  { label: "Личностная тревожность", value: 0.83, color: "rose", desc: "Устойчивая мнительность — постоянный фоновый стресс" },
  { label: "Ситуативная тревожность", value: 0.72, color: "amber", desc: "Операциональные трудности — резкие скачки напряжения" },
  { label: "Эмотивность", value: 0.57, color: "violet", desc: "Глубокая интернализация рабочих проблем" },
  { label: "Нейротизм", value: 0.48, color: "violet", desc: "Эмоциональная лабильность как катализатор стресса" },
  { label: "Самоконтроль (обратная)", value: -0.43, color: "teal", desc: "Блокировка произвольного контроля при перенапряжении" },
];

const WEEKS = [
  {
    week: 1,
    title: "Диагностика и осознанность",
    icon: "ScanSearch",
    color: "teal",
    days: [
      { day: "Пн", title: "Тест тревожности Спилбергера", desc: "Оценка личностной и ситуативной тревожности (20 мин)" },
      { day: "Вт", title: "Дыхательная гимнастика 4-7-8", desc: "3 подхода по 4 цикла утром и вечером" },
      { day: "Ср", title: "Дневник напряжения", desc: "Фиксация триггеров стресса в течение рабочего дня" },
      { day: "Чт", title: "Прогрессивная мышечная релаксация", desc: "Техника Джейкобсона — 15 минут перед сном" },
      { day: "Пт", title: "Анализ паттернов", desc: "Разбор дневника — выявление 3 главных стрессоров" },
    ],
    result: "Карта личных стрессоров готова",
  },
  {
    week: 2,
    title: "Регуляция тревоги",
    icon: "Brain",
    color: "violet",
    days: [
      { day: "Пн", title: "Когнитивная реструктуризация", desc: "Работа с иррациональными установками (тревога-мысль-факт)" },
      { day: "Вт", title: "Техника «заземления» 5-4-3-2-1", desc: "Снижение острой тревоги за 3 минуты" },
      { day: "Ср", title: "Регламент рабочего дня", desc: "Внедрение 10-минутных пауз каждые 1.5 часа" },
      { day: "Чт", title: "Медитация на принятие", desc: "Практика mindfulness — отделение себя от проблемы" },
      { day: "Пт", title: "Групповая рефлексия", desc: "Мини-собрание: делимся успехами без осуждения (30 мин)" },
    ],
    result: "Снижение ситуативной тревожности на 20–30%",
  },
  {
    week: 3,
    title: "Восстановление самоконтроля",
    icon: "Shield",
    color: "amber",
    days: [
      { day: "Пн", title: "Матрица приоритетов Эйзенхауэра", desc: "Разделение задач: срочно/важно — 1 час практики" },
      { day: "Вт", title: "Техника СТОП", desc: "Пауза перед эмоциональной реакцией — 4 шага" },
      { day: "Ср", title: "Профилактика ошибок", desc: "Чек-листы для оформления виз и бронирований" },
      { day: "Чт", title: "Аутотренинг по Шульцу", desc: "Классическая техника саморегуляции — 20 мин" },
      { day: "Пт", title: "Разбор кейсов", desc: "Анализ рабочих ошибок без самокритики — поиск систем" },
    ],
    result: "Снижение технических ошибок на 40%",
  },
  {
    week: 4,
    title: "Устойчивость и профилактика",
    icon: "Sprout",
    color: "rose",
    days: [
      { day: "Пн", title: "Итоговый тест тревожности", desc: "Повторная диагностика — сравнение с базовым уровнем" },
      { day: "Вт", title: "Личный антистресс-план", desc: "Составление индивидуальной карты восстановления" },
      { day: "Ср", title: "Эргономика рабочего места", desc: "Оптимизация пространства для снижения фоновой нагрузки" },
      { day: "Чт", title: "Ресурсные практики", desc: "Определение 5 личных восстанавливающих активностей" },
      { day: "Пт", title: "Закрепление и поддержка", desc: "Создание системы взаимоподдержки в коллективе" },
    ],
    result: "Устойчивая система самопомощи сформирована",
  },
];

const FINDINGS = [
  {
    num: "01",
    icon: "AlertTriangle",
    color: "rose",
    title: "Сквозные предикторы напряжения",
    body: "Психическая напряженность напрямую определяется тревожностью: личностная (r = 0,83) создаёт постоянный фоновый стресс, ситуативная (r = 0,72) провоцирует резкие скачки при рабочих трудностях.",
  },
  {
    num: "02",
    icon: "Users",
    color: "violet",
    title: "Характерологическая уязвимость",
    body: "Эмотивность (r = 0,57) и нейротизм (r = 0,48) усиливают стресс. Сотрудники группы риска (>110 баллов) глубоко переживают проблемы и длительно удерживают вегетативное напряжение. Все интроверты — в группе риска.",
  },
  {
    num: "03",
    icon: "Zap",
    color: "amber",
    title: "Декомпенсация самоконтроля",
    body: "При перенапряжении блокируется произвольный самоконтроль (r = –0,43): сотрудники теряют «социальный фасад», растёт число ошибок при оформлении виз и бронирований, падает качество сервиса.",
  },
];

const colorMap: Record<string, { bar: string; text: string; bg: string; badge: string; border: string }> = {
  rose:   { bar: "gradient-rose",   text: "text-rose",   bg: "bg-rose-500/10",   badge: "bg-rose-500/20 text-rose-300",   border: "border-rose-500/30" },
  amber:  { bar: "gradient-amber",  text: "text-amber",  bg: "bg-amber-500/10",  badge: "bg-amber-500/20 text-amber-300",  border: "border-amber-500/30" },
  violet: { bar: "gradient-violet", text: "text-violet", bg: "bg-violet-500/10", badge: "bg-violet-500/20 text-violet-300", border: "border-violet-500/30" },
  teal:   { bar: "gradient-teal",   text: "text-teal",   bg: "bg-teal-500/10",   badge: "bg-teal-500/20 text-teal-300",   border: "border-teal-500/30" },
};

function CorrelationBar({ item, index }: { item: typeof CORRELATIONS[0]; index: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const c = colorMap[item.color];
  const isNeg = item.value < 0;
  const abs = Math.abs(item.value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(abs * 100), index * 120);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [abs, index]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-foreground/80">{item.label}</span>
        <span className={`text-sm font-semibold ${c.text}`}>{isNeg ? "" : "+"}{item.value.toFixed(2)}</span>
      </div>
      <div className="progress-bar">
        <div
          className={`progress-fill ${c.bar}`}
          style={{ width: `${width}%`, opacity: isNeg ? 0.65 : 1 }}
        />
      </div>
      <p className="text-xs text-muted-foreground">{item.desc}</p>
    </div>
  );
}

function WeekCard({
  week, activeWeek, completedSteps, onToggleStep, onSelect,
}: {
  week: typeof WEEKS[0];
  activeWeek: number;
  completedSteps: Record<string, boolean>;
  onToggleStep: (key: string) => void;
  onSelect: (n: number) => void;
}) {
  const isActive = activeWeek === week.week;
  const c = colorMap[week.color];
  const totalDone = week.days.filter((_, i) => completedSteps[`${week.week}-${i}`]).length;
  const pct = Math.round((totalDone / week.days.length) * 100);

  return (
    <div
      className={`glass rounded-2xl p-5 card-hover cursor-pointer border transition-all duration-300 ${
        isActive ? `${c.border} step-active` : "border-border/30"
      }`}
      onClick={() => onSelect(week.week)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
            <Icon name={week.icon} size={20} className={c.text} fallback="Star" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Неделя {week.week}</p>
            <h3 className="font-semibold text-sm leading-tight">{week.title}</h3>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${c.badge}`}>{pct}%</span>
      </div>

      <div className="progress-bar mb-2">
        <div className={`progress-fill ${c.bar}`} style={{ width: `${pct}%`, transition: "width 0.5s ease" }} />
      </div>

      {isActive && (
        <div className="space-y-2 mt-4" onClick={(e) => e.stopPropagation()}>
          {week.days.map((day, i) => {
            const key = `${week.week}-${i}`;
            const done = completedSteps[key];
            return (
              <div
                key={key}
                onClick={() => onToggleStep(key)}
                className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  done ? "step-completed" : "hover:bg-white/5"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center border transition-all duration-200 mt-0.5 ${
                    done ? `${c.bar} border-transparent` : "border-border"
                  }`}
                >
                  {done && <Icon name="Check" size={12} className="text-background" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${c.text}`}>{day.day}</span>
                    <span className={`text-sm font-medium ${done ? "line-through text-muted-foreground" : ""}`}>
                      {day.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{day.desc}</p>
                </div>
              </div>
            );
          })}
          <div className={`mt-3 p-3 rounded-xl ${c.bg} border ${c.border}`}>
            <div className="flex items-center gap-2">
              <Icon name="Target" size={14} className={c.text} />
              <span className="text-xs font-medium">{week.result}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Index() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<"research" | "program">("research");

  const totalSteps = WEEKS.reduce((acc, w) => acc + w.days.length, 0);
  const doneSteps = Object.values(completedSteps).filter(Boolean).length;
  const overallPct = Math.round((doneSteps / totalSteps) * 100);

  const toggleStep = (key: string) => {
    setCompletedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen font-golos">
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-border/30">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 gradient-teal rounded-lg flex items-center justify-center relative pulse-ring">
              <Icon name="HeartPulse" size={16} className="text-background" />
            </div>
            <div>
              <h1 className="font-bold text-sm leading-none">АнтиСтресс</h1>
              <p className="text-xs text-muted-foreground">Туристическая организация</p>
            </div>
          </div>
          <div className="flex items-center gap-2 glass-light px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Прогресс: <span className="text-teal font-semibold">{overallPct}%</span>
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">

        {/* Hero */}
        <section className="text-center space-y-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full text-xs text-muted-foreground mb-2">
            <Icon name="FlaskConical" size={12} className="text-teal" />
            Психологическое исследование · 2024 · выборка сотрудников
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold leading-tight">
            Стресс в туристическом<br />
            <span className="text-teal">бизнесе:</span> причины и выход
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Научно обоснованная программа снижения психической напряженности на основе корреляционного анализа
          </p>

          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            {[
              { label: "Выявлено факторов", val: "5", color: "text-rose" },
              { label: "Ключевых выводов", val: "3", color: "text-violet" },
              { label: "Недель программы", val: "4", color: "text-teal" },
              { label: "Дней практики", val: "20", color: "text-amber" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-2xl font-bold ${s.color}`}>{s.val}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabs */}
        <div className="flex glass-light rounded-2xl p-1 max-w-sm mx-auto">
          {(["research", "program"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === t ? "gradient-teal text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "research" ? "Исследование" : "Программа"}
            </button>
          ))}
        </div>

        {/* Research tab */}
        {activeTab === "research" && (
          <div className="space-y-8 animate-fade-up">
            <div className="grid sm:grid-cols-3 gap-4">
              {FINDINGS.map((f, i) => {
                const c = colorMap[f.color];
                return (
                  <div key={i} className={`glass rounded-2xl p-5 card-hover border ${c.border}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                        <Icon name={f.icon} size={18} className={c.text} fallback="AlertCircle" />
                      </div>
                      <span className={`text-3xl font-bold font-cormorant ${c.text} opacity-30`}>{f.num}</span>
                    </div>
                    <h3 className="font-semibold text-sm mb-2 leading-snug">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.body}</p>
                  </div>
                );
              })}
            </div>

            {/* Correlation bars */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold">Корреляционный профиль</h3>
                  <p className="text-xs text-muted-foreground mt-1">Зависимость ППН от личностных факторов</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Info" size={14} />
                  Коэффициент Пирсона
                </div>
              </div>
              <div className="space-y-5">
                {CORRELATIONS.map((item, i) => (
                  <CorrelationBar key={i} item={item} index={i} />
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { range: "0.7–1.0", label: "Сильная связь", color: "rose" },
                  { range: "0.4–0.7", label: "Умеренная", color: "amber" },
                  { range: "< 0", label: "Обратная", color: "teal" },
                ].map((leg) => {
                  const c = colorMap[leg.color];
                  return (
                    <div key={leg.label} className={`${c.bg} rounded-xl p-3 text-center`}>
                      <div className={`font-mono text-sm font-bold ${c.text}`}>{leg.range}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{leg.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Risk group */}
            <div className="glass rounded-2xl p-6 border border-rose-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                  <Icon name="UserX" size={18} className="text-rose" />
                </div>
                <div>
                  <h3 className="font-semibold">Группа высокого стресса</h3>
                  <p className="text-xs text-muted-foreground">Критерий: ППН более 110 баллов</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { icon: "TrendingUp", label: "ППН > 110 баллов", desc: "Порог декомпенсации" },
                  { icon: "MoonStar", label: "Все интроверты выборки", desc: "Факторный анализ" },
                  { icon: "HeartCrack", label: "Высокий нейротизм", desc: "Эмоциональная лабильность" },
                ].map((r) => (
                  <div key={r.label} className="glass-light rounded-xl p-3 flex items-start gap-3">
                    <Icon name={r.icon} size={16} className="text-rose mt-0.5 flex-shrink-0" fallback="AlertCircle" />
                    <div>
                      <div className="text-sm font-medium">{r.label}</div>
                      <div className="text-xs text-muted-foreground">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Program tab */}
        {activeTab === "program" && (
          <div className="space-y-6 animate-fade-up">
            {/* Overall progress */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-teal rounded-xl flex items-center justify-center">
                    <Icon name="Trophy" size={18} className="text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Общий прогресс</h3>
                    <p className="text-xs text-muted-foreground">{doneSteps} из {totalSteps} заданий выполнено</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-teal">{overallPct}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill gradient-teal" style={{ width: `${overallPct}%`, transition: "width 0.5s ease" }} />
              </div>
            </div>

            <div className="glass-light rounded-2xl p-4 flex items-start gap-3">
              <Icon name="MousePointerClick" size={18} className="text-teal flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Нажмите на неделю, чтобы раскрыть задания. Отмечайте выполненные — прогресс сохраняется в сессии.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {WEEKS.map((week) => (
                <WeekCard
                  key={week.week}
                  week={week}
                  activeWeek={activeWeek}
                  completedSteps={completedSteps}
                  onToggleStep={toggleStep}
                  onSelect={(n) => setActiveWeek(activeWeek === n ? 0 : n)}
                />
              ))}
            </div>

            {/* Techniques */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="BookOpen" size={16} className="text-teal" />
                Экспресс-техники для офиса
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: "Wind", color: "teal", title: "Дыхание 4-7-8", desc: "Вдох 4 сек → задержка 7 → выдох 8. Снимает острую тревогу за 3 минуты" },
                  { icon: "Crosshair", color: "violet", title: "Заземление 5-4-3-2-1", desc: "5 вижу → 4 слышу → 3 чувствую → 2 запаха → 1 вкус. Возврат в «здесь и сейчас»" },
                  { icon: "Pause", color: "amber", title: "Техника СТОП", desc: "Стоп → Три вдоха → Оцени → Продолжай. Пауза перед реакцией на раздражитель" },
                  { icon: "Layers", color: "rose", title: "Прогрессивная релаксация", desc: "Поочередное напряжение/расслабление мышц. 15 минут = 2 часа сна" },
                ].map((t) => {
                  const c = colorMap[t.color];
                  return (
                    <div key={t.title} className={`glass-light rounded-xl p-4 border ${c.border}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name={t.icon} size={16} className={c.text} fallback="Star" />
                        <span className="font-medium text-sm">{t.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 py-6 border-t border-border/20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">Психологическое исследование · Туристическая организация · 2024</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="Lock" size={12} />
            Конфиденциально · Только для внутреннего использования
          </div>
        </div>
      </footer>
    </div>
  );
}