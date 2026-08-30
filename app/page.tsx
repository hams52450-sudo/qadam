'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  Languages,
  MapPin,
  MessageCircle,
  Play,
  Quote,
  Send,
  Sparkles,
  Star,
  Trophy,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollToForm = () => document.querySelector('#aloqa')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="hero-grid relative isolate min-h-screen">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_82%_10%,oklch(0.74_0.17_63/0.22),transparent_36%),radial-gradient(circle_at_8%_30%,oklch(0.54_0.18_252/0.12),transparent_30%)]" />

        <header className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Qadam bosh sahifa">
            <span className="grid size-11 place-items-center rounded-[14px] bg-primary text-primary-foreground shadow-[0_10px_24px_oklch(0.41_0.17_256/0.24)]">
              <BookOpen className="size-5" strokeWidth={2.4} />
            </span>
            <span>
              <span className="block text-xl font-black tracking-[-0.04em]">QADAM</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                ta&apos;lim markazi
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground lg:flex" aria-label="Asosiy menyu">
            <a className="transition-colors hover:text-primary" href="#kurslar">Kurslar</a>
            <a className="transition-colors hover:text-primary" href="#ustozlar">Ustozlar</a>
            <a className="transition-colors hover:text-primary" href="#natijalar">Natijalar</a>
            <a className="transition-colors hover:text-primary" href="#aloqa">Bog&apos;lanish</a>
          </nav>

          <Button onClick={scrollToForm} className="h-11 rounded-full bg-orange px-5 font-bold text-white shadow-[0_10px_24px_oklch(0.69_0.19_51/0.24)] hover:bg-orange/90">
            Sinov darsi
            <ArrowRight />
          </Button>
        </header>

        <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-20">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange-soft px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-dark">
              <Sparkles className="size-4" />
              2026 qabuli ochiq
            </div>

            <h1 className="max-w-3xl text-[clamp(3.4rem,8vw,6.6rem)] font-black leading-[0.91] tracking-[-0.065em] text-primary">
              Bilimdan
              <span className="relative ml-3 inline-block text-orange sm:ml-5">
                natijaga.
                <svg aria-hidden="true" className="absolute -bottom-3 left-1 h-4 w-[95%] text-orange/35" viewBox="0 0 280 18" fill="none">
                  <path d="M4 13C72 3 182 4 276 8" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              Bir qadam.
            </h1>

            <p className="mt-9 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Kuchli ustozlar, amaliy darslar va aniq reja bilan maqsadingizga tezroq yeting. Birinchi dars — bizdan.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button onClick={scrollToForm} className="h-14 rounded-full px-7 text-base font-bold shadow-[0_14px_30px_oklch(0.41_0.17_256/0.23)]">
                Bepul darsga yozilish
                <ArrowRight className="size-5" />
              </Button>
              <Button variant="outline" className="h-14 rounded-full border-primary/15 bg-white/80 px-7 text-base font-bold text-primary backdrop-blur hover:bg-primary/5">
                <span className="grid size-7 place-items-center rounded-full bg-orange text-white">
                  <Play className="ml-0.5 size-3.5 fill-current" />
                </span>
                Markaz bilan tanishing
              </Button>
            </div>

            <div id="natijalar" className="mt-12 flex flex-wrap gap-x-9 gap-y-5 border-t border-primary/10 pt-7">
              {[
                ['2 400+', 'bitiruvchi'],
                ['94%', 'muvaffaqiyat'],
                ['18+', 'tajribali ustoz'],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="block text-2xl font-black tracking-tight text-primary">{value}</strong>
                  <span className="text-sm font-medium text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
            <div className="absolute -left-6 top-16 size-32 rounded-full bg-orange/15 blur-2xl" />
            <div className="absolute -right-4 bottom-10 size-44 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative rounded-[38px] border border-white/80 bg-white/75 p-3 shadow-[0_35px_90px_oklch(0.3_0.1_250/0.18)] backdrop-blur-xl sm:p-5">
              <div className="overflow-hidden rounded-[28px] bg-primary p-6 text-white sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">Shaxsiy natijangiz</span>
                  <span className="size-2.5 rounded-full bg-orange shadow-[0_0_0_6px_oklch(0.69_0.19_51/0.18)]" />
                </div>
                <p className="mt-10 text-sm text-white/65">Bu haftadagi o&apos;sish</p>
                <div className="mt-1 flex items-end justify-between">
                  <strong className="text-5xl font-black tracking-[-0.05em]">+24%</strong>
                  <span className="rounded-full bg-orange px-3 py-1 text-xs font-extrabold">Ajoyib!</span>
                </div>
                <div className="mt-8 flex h-24 items-end gap-2" aria-label="Haftalik o‘sish grafigi">
                  {[34, 48, 42, 62, 58, 76, 92].map((height, index) => (
                    <span key={height} className={`flex-1 rounded-full ${index === 6 ? 'bg-orange' : 'bg-white/18'}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/45">
                  <span>Du</span><span>Se</span><span>Ch</span><span>Pa</span><span>Ju</span><span>Sh</span><span>Ya</span>
                </div>
              </div>

              <div className="grid gap-3 p-3 pt-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-soft p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/55">Eng mashhur</span>
                  <h2 className="mt-2 text-lg font-black text-primary">Ingliz tili</h2>
                  <p className="mt-1 text-sm text-muted-foreground">IELTS · General English</p>
                </div>
                <div className="rounded-2xl bg-orange-soft p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-dark/70">Kelajak kasbi</span>
                  <h2 className="mt-2 text-lg font-black text-primary">IT va dasturlash</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Frontend · Python</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 -top-6 hidden rotate-3 rounded-2xl bg-orange px-5 py-4 text-white shadow-xl sm:block">
              <span className="block text-xs font-bold uppercase tracking-widest text-white/70">Bugungi dars</span>
              <strong className="mt-1 block text-lg">18:30 · IELTS</strong>
            </div>
          </div>
        </section>
      </div>

      <section id="kurslar" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">Yo‘nalishlar</span>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] text-primary sm:text-6xl">
                O‘zingizga mos <br />kursni tanlang.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
              Har bir dastur amaliy mashg‘ulot, muntazam nazorat va shaxsiy rivojlanish xaritasi asosida tuzilgan.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Languages, title: 'Ingliz tili', meta: '6 oy · haftada 3 kun', accent: 'bg-primary text-white', tag: 'IELTS 7.0+' },
              { icon: Code2, title: 'IT va dasturlash', meta: '8 oy · haftada 3 kun', accent: 'bg-orange text-white', tag: 'Portfolio' },
              { icon: BrainCircuit, title: 'Matematika', meta: '4 oy · haftada 3 kun', accent: 'bg-blue-soft text-primary', tag: 'Imtihon' },
              { icon: Trophy, title: 'Prezident maktabi', meta: '5 oy · haftada 4 kun', accent: 'bg-orange-soft text-orange-dark', tag: 'Tayyorgarlik' },
            ].map((course, index) => (
              <article key={course.title} className="group flex min-h-72 flex-col rounded-[28px] border border-primary/8 bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-[0_22px_50px_oklch(0.3_0.08_250/0.1)]">
                <div className={`grid size-14 place-items-center rounded-2xl ${course.accent}`}>
                  <course.icon className="size-6" />
                </div>
                <span className="mt-8 text-xs font-extrabold uppercase tracking-[0.15em] text-muted-foreground">0{index + 1} · {course.tag}</span>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-primary">{course.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{course.meta}</p>
                <button onClick={scrollToForm} className="mt-auto flex items-center gap-2 pt-8 text-left text-sm font-extrabold text-primary transition group-hover:text-orange">
                  Batafsil ma’lumot <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,oklch(0.75_0.18_55/0.6),transparent_22%),linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:auto,54px_54px,54px_54px]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">QADAM usuli</span>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-6xl">Dars emas, natija uchun tizim.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Sizning maqsadingizdan boshlab, har haftalik o‘sishingizgacha — hammasi ko‘rinib turadi.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Users, title: 'Kichik guruhlar', text: 'Har bir o‘quvchiga ustoz e’tibori yetadigan 10–12 kishilik guruh.' },
              { icon: CheckCircle2, title: 'Amaliy yondashuv', text: 'Nazariya darhol mashq, loyiha va real vazifalar bilan mustahkamlanadi.' },
              { icon: CalendarDays, title: 'Aniq o‘sish rejasi', text: 'Haftalik natija, davomat va uy vazifalari bitta tushunarli tizimda.' },
              { icon: MessageCircle, title: 'Doimiy aloqa', text: 'Ustoz va kurator savollaringizga darsdan tashqari paytda ham yordam beradi.' },
            ].map((feature) => (
              <article key={feature.title} className="rounded-[26px] border border-white/10 bg-white/7 p-6 backdrop-blur-sm">
                <feature.icon className="size-7 text-orange" />
                <h3 className="mt-5 text-xl font-black">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ustozlar" className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[38px] bg-orange/12 blur-2xl" />
            <img
              src={`${import.meta.env.BASE_URL}og.png`}
              alt="QADAM ta’lim markazida birga o‘qiyotgan talabalar"
              className="relative aspect-video w-full rounded-[32px] object-cover shadow-[0_30px_70px_oklch(0.3_0.08_250/0.18)]"
            />
            <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur sm:left-auto sm:w-72">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-orange-soft text-orange-dark"><Star className="size-5 fill-current" /></div>
              <div><strong className="block text-lg font-black text-primary">4.9 / 5</strong><span className="text-xs text-muted-foreground">o‘quvchilar bahosi</span></div>
            </div>
          </div>

          <div className="lg:pl-8">
            <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">Kuchli jamoa</span>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] text-primary sm:text-6xl">O‘rgata oladigan ustozlar.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Bizda fan bilimining o‘zi yetarli emas. Ustoz tushuntira olishi, ilhomlantirishi va har bir o‘quvchining kuchli tomonini ko‘ra bilishi kerak.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/10 bg-white p-5">
                <span className="text-3xl font-black text-primary">8+ yil</span>
                <p className="mt-1 text-sm text-muted-foreground">o‘rtacha ustoz tajribasi</p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-white p-5">
                <span className="text-3xl font-black text-orange">72 soat</span>
                <p className="mt-1 text-sm text-muted-foreground">yillik metodik trening</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Quote className="mx-auto size-12 fill-orange-soft text-orange" />
          <blockquote className="mt-8 text-3xl font-black leading-snug tracking-[-0.035em] text-primary sm:text-5xl">
            “Oldin ingliz tilida gapirishdan qo‘rqardim. QADAM’da 5 oyda IELTS’dan 7.0 oldim va o‘zim istagan universitetga hujjat topshirdim.”
          </blockquote>
          <div className="mt-8">
            <strong className="block text-lg font-black text-primary">IELTS kursi o‘quvchisi</strong>
            <span className="text-sm text-muted-foreground">IELTS kursi bitiruvchisi</span>
          </div>
        </div>
      </section>

      <section id="aloqa" className="bg-orange-soft py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[38px] bg-primary shadow-[0_34px_80px_oklch(0.3_0.1_250/0.2)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden p-8 text-white sm:p-12 lg:p-16">
            <div className="absolute -right-24 -top-24 size-64 rounded-full border-[38px] border-orange/70" />
            <div className="relative">
              <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">Birinchi qadam</span>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">Bepul sinov darsiga yoziling.</h2>
              <p className="mt-5 max-w-md leading-7 text-white/65">Menejerimiz siz bilan bog‘lanib, maqsadingizga mos kurs va guruhni tanlashga yordam beradi.</p>

              <div className="mt-10 space-y-4 text-sm font-semibold text-white/80">
                <div className="flex items-center gap-3"><Clock3 className="size-5 text-orange" /> Dushanba–shanba, 09:00–20:00</div>
                <div className="flex items-center gap-3"><MapPin className="size-5 text-orange" /> Toshkent shahri, Chilonzor</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 lg:p-16">
            {submitted ? (
              <div className="flex min-h-96 flex-col items-center justify-center text-center" role="status">
                <span className="grid size-20 place-items-center rounded-full bg-orange-soft text-orange"><Check className="size-9" strokeWidth={3} /></span>
                <h3 className="mt-6 text-3xl font-black tracking-tight text-primary">Arizangiz qabul qilindi!</h3>
                <p className="mt-3 max-w-sm leading-7 text-muted-foreground">Tez orada siz bilan bog‘lanamiz va qulay vaqtni birga tanlaymiz.</p>
                <button onClick={() => setSubmitted(false)} className="mt-7 text-sm font-extrabold text-primary underline underline-offset-4">Yana ariza qoldirish</button>
              </div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                <h3 className="text-2xl font-black tracking-tight text-primary">Ma’lumotlaringiz</h3>
                <p className="mt-2 text-sm text-muted-foreground">Barcha maydonlarni to‘ldirish bir daqiqadan kam vaqt oladi.</p>
                <div className="mt-8 grid gap-5">
                  <label className="grid gap-2 text-sm font-bold text-primary">Ismingiz
                    <input required name="name" autoComplete="name" placeholder="Masalan: Sardor" className="h-13 rounded-xl border border-primary/12 bg-background px-4 font-medium outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/8" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-primary">Telefon raqamingiz
                    <input required name="phone" autoComplete="tel" inputMode="tel" placeholder="Telefon raqami (sinov)" className="h-13 rounded-xl border border-primary/12 bg-background px-4 font-medium outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/8" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-primary">Qaysi kursga qiziqasiz?
                    <select required name="course" defaultValue="" className="h-13 rounded-xl border border-primary/12 bg-background px-4 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/8">
                      <option value="" disabled>Kursni tanlang</option>
                      <option>Ingliz tili</option><option>IT va dasturlash</option><option>Matematika</option><option>Prezident maktabi</option>
                    </select>
                  </label>
                </div>
                <Button type="submit" className="mt-7 h-14 w-full rounded-full bg-orange text-base font-black text-white hover:bg-orange/90">
                  Ariza yuborish <Send className="size-5" />
                </Button>
                <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">Ariza yuborib, ma’lumotlaringiz bilan bog‘lanishimizga rozilik bildirasiz.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-primary py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-orange"><BookOpen className="size-5" /></span>
            <div><strong className="block text-lg font-black tracking-tight">QADAM</strong><span className="text-xs text-white/50">ta’lim markazi</span></div>
          </div>
          <p className="text-sm text-white/50">© 2026 QADAM. Bilimdan natijaga — bir qadam.</p>
          <button onClick={scrollToForm} className="flex items-center gap-2 text-sm font-extrabold text-orange">Sinov darsi <ArrowRight className="size-4" /></button>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-5 sm:px-8">
          <p className="border-t border-white/20 pt-6 text-center text-base font-semibold leading-relaxed text-white sm:text-lg">
            Bu sinov sayt — haqiqiy arizalar qabul qilinmaydi
          </p>
        </div>
      </footer>
    </main>
  );
}
