import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Award,
  Smartphone,
  Bus,
  Play,
  Youtube,
  Instagram,
  MessageCircle,
  Copy,
  ExternalLink,
  Menu,
  X,
  Check,
  ChevronRight,
  Star,
  Users,
  BookOpen,
  Briefcase,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

// 업로드된 실제 파일명에 맞춰 경로를 연결합니다.
const PROFILE_IMAGE_URL = "/157.jpg";

const CONTACT_INFO = {
  youtube: "https://www.youtube.com/channel/UC0bDgE8ANqkVTceXQviwj1g",
  email: "2cswisdom@gmail.com",
  instagram: "https://www.instagram.com/ji_wisdom80/",
  kakao: "https://open.kakao.com/o/sM8DSvri",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "연구소 소개", href: "#home" },
    { name: "강의분야", href: "#education" },
    { name: "진로체험", href: "#career" },
    { name: "유튜브", href: "#youtube" },
    { name: "창의교구", href: "#robot" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-black tracking-tighter text-slate-900 md:text-2xl"
        >
          <span className="text-[#2563eb]">AI</span>
          <span className="font-light">지혜 연구소</span>
        </a>

        <div className="hidden items-center space-x-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 transition-colors hover:text-[#2563eb]"
            >
              {link.name}
            </a>
          ))}
          <a
            href={CONTACT_INFO.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#2563eb] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-100 transition-all hover:scale-105 hover:bg-[#1e40af]"
          >
            교육문의
          </a>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-slate-800 lg:hidden"
          aria-label="메뉴 열기"
        >
          <Menu size={28} />
        </button>
      </div>

      <div className="w-full overflow-hidden border-t border-blue-500/30 bg-blue-600 py-2">
        <div className="flex whitespace-nowrap animate-scroll">
          <div className="flex items-center space-x-12 px-4 text-[11px] font-bold tracking-wider text-white uppercase md:text-xs">
            <span>🚀 2026년 상반기 AI 특강 모집 중</span>
            <span className="opacity-30">/</span>
            <span>🏆 ITQ·컴활 단기 합격율 98%</span>
            <span className="opacity-30">/</span>
            <span>🤖 핑퐁로봇·마이크로비트·3D펜 교구 완비</span>
            <span className="opacity-30">/</span>
            <span>📍 강원·수도권 전 지역 출강 가능</span>
            <span className="opacity-30">/</span>
          </div>
          <div className="flex items-center space-x-12 px-4 text-[11px] font-bold tracking-wider text-white uppercase md:text-xs">
            <span>🚀 2026년 상반기 AI 특강 모집 중</span>
            <span className="opacity-30">/</span>
            <span>🏆 ITQ·컴활 단기 합격율 98%</span>
            <span className="opacity-30">/</span>
            <span>🤖 핑퐁로봇·마이크로비트·3D펜 교구 완비</span>
            <span className="opacity-30">/</span>
            <span>📍 강원·수도권 전 지역 출강 가능</span>
            <span className="opacity-30">/</span>
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] flex flex-col bg-white lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-slate-50 p-6">
              <span className="text-xl font-black text-[#2563eb]">
                AI 지혜 연구소
              </span>
              <button onClick={() => setIsOpen(false)} aria-label="메뉴 닫기">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-8 p-8 text-2xl font-bold text-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={CONTACT_INFO.kakao}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-[#2563eb]"
              >
                교육 상담/의뢰
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <header
    id="home"
    className="relative overflow-hidden bg-[#f8fafc] px-5 pb-20 pt-40 text-center md:pt-56"
  >
    <div className="absolute left-[-5%] top-[-10%] h-64 w-64 rounded-full bg-blue-100 opacity-50 blur-3xl" />
    <div className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-cyan-100 opacity-30 blur-3xl" />

    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="lg:flex lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:w-3/5 lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block rounded-full bg-[#eff6ff] px-4 py-1.5 text-xs font-bold tracking-wider text-[#2563eb] uppercase"
          >
            Professional Digital Lab
          </motion.span>
          <h1 className="mb-8 text-4xl leading-tight font-black text-slate-900 md:text-6xl">
            디지털 미래를 더
            <br />
            <span className="text-[#2563eb]">지혜롭게 디자인하는,</span>
            <br />
            김지혜 강사입니다.
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed font-medium text-slate-600 md:text-xl lg:mx-0">
            AI와 하드웨어가 융합된 최신 디지털 교구로 더 넓은 세상을 경험하세요.
            <br />
            복잡한 기술을 '딸깍' 한 번의 클릭처럼 명쾌하게!
            <br />
            실무의 정석을 전하는 당신의 교육 파트너입니다.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={CONTACT_INFO.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#2563eb] px-10 py-4 text-center text-lg font-bold text-white shadow-xl shadow-blue-100 transition-all hover:scale-105 hover:bg-[#1e40af]"
            >
              강의 신청하기
            </a>
            <div className="flex justify-center gap-3">
              <a
                href={CONTACT_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-red-600 shadow-sm transition-transform hover:scale-110"
              >
                <Youtube />
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-blue-500 shadow-sm transition-transform hover:scale-110"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex justify-center lg:mt-0 lg:w-2/5"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-blue-200/40 blur-2xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-[3rem] border-4 border-white bg-slate-200 shadow-2xl md:h-[500px] md:w-[400px]">
              <img
                src={PROFILE_IMAGE_URL}
                alt="김지혜 소장"
                className="block h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-900/90 p-5 text-center shadow-lg backdrop-blur-md">
                <p className="text-xl font-black text-white">
                  김지혜 (Kim Jihye)
                </p>
                <p className="mt-1 text-xs font-bold tracking-widest text-[#06b6d4] uppercase">
                  AI &amp; Digital Expert
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </header>
);

const Stats = () => (
  <section className="bg-white py-16">
    <div className="mx-auto max-w-6xl px-5">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {[
          { label: "누적 교육생", value: "15,000+", icon: Users },
          { label: "현장 강의 경력", value: "850회+", icon: BookOpen },
          { label: "수강생 만족도", value: "98%", icon: Star },
          { label: "기관 파트너십", value: "120+", icon: Briefcase },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eff6ff] text-[#2563eb]">
              <stat.icon size={24} />
            </div>
            <p className="mb-1 text-3xl font-black text-slate-900">
              {stat.value}
            </p>
            <p className="text-sm font-bold text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EducationField = () => {
  const fields = [
    {
      title: "AI 실무 마스터",
      desc: "챗GPT부터 최신 생성형 AI 도구들을 업무와 일상에 즉각 도입하는 최적의 프롬프팅 기술을 전수합니다.",
      icon: <Zap />,
      color: "bg-blue-50",
      textColor: "text-blue-600",
      tags: ["GPT 프롬프트", "업무 자동화"],
    },
    {
      title: "국가 자격증 취득",
      desc: "ITQ 및 컴퓨터활용능력 시험의 핵심 빈출 유형을 분석하여 최단기 합격을 보장하는 커리큘럼입니다.",
      icon: <Award />,
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
      tags: ["ITQ 마스터", "컴활 전략"],
      highlight: true,
    },
    {
      title: "디지털 리터러시",
      desc: "기초 디지털 활용부터 필수 소프트웨어까지, 모든 세대가 소외되지 않는 정보 활용 능력을 배양합니다.",
      icon: <Smartphone />,
      color: "bg-cyan-50",
      textColor: "text-cyan-600",
      tags: ["디지털 역량", "정보 격차 해소"],
    },
  ];

  return (
    <section id="education" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
            핵심 교육 솔루션
          </h2>
          <p className="mx-auto max-w-2xl font-medium text-slate-500">
            수많은 현장 사례를 통해 검증된 독보적인 디지털 교육 콘텐츠입니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {fields.map((field, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`rounded-[2.5rem] p-10 transition-all duration-300 ${
                field.highlight
                  ? "border-2 border-[#2563eb] bg-white shadow-2xl shadow-blue-100"
                  : "border border-slate-100 bg-white shadow-sm"
              }`}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${field.color} ${field.textColor}`}
              >
                {field.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {field.title}
              </h3>
              <p className="mb-8 leading-relaxed text-slate-600">
                {field.desc}
              </p>
              <div className="flex gap-2">
                {field.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-black tracking-wider text-slate-400 uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerSection = () => (
  <section id="career" className="bg-white py-24">
    <div className="mx-auto max-w-6xl px-5">
      <div className="lg:flex lg:items-center lg:gap-20">
        <div className="mb-12 lg:mb-0 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl leading-tight font-black text-slate-900 md:text-4xl">
              기관 및 학교로
              <br />
              <span className="text-[#2563eb]">찾아가는 전문 교육</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              수요 기관의 목적과 교육생의 수준을 정밀하게 분석하여, 현장감 넘치는
              맞춤형 커스터마이징 교육을 제공합니다.
            </p>
            <div className="space-y-4">
              {[
                "초·중·고 학년별 맞춤형 미래 캠프",
                "지자체 공무원 디지털 역량 강화 교육",
                "3D펜을 활용한 창의 융합 예술 수업",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 font-bold text-slate-800"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eff6ff] text-[#2563eb]">
                    <Check size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <a
              href={CONTACT_INFO.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-800"
            >
              상세 교육 문의하기 <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative overflow-hidden rounded-[3rem] border-4 border-white bg-[#eff6ff] p-12 text-center shadow-2xl">
            <div className="absolute right-0 top-0 p-4 opacity-10">
              <Bus size={120} />
            </div>
            <div className="relative z-10">
              <Bus size={64} className="mx-auto mb-6 text-[#2563eb]" />
              <h4 className="mb-4 text-2xl font-black text-slate-900">
                전국 단위 출강 지원
              </h4>
              <p className="mb-10 font-medium leading-relaxed text-slate-600">
                핑퐁로봇, 마이크로비트 등 최신 교구를
                <br />
                구비하여 어디든 지혜로운 교육을 배달합니다.
              </p>
              <a
                href={CONTACT_INFO.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-2xl bg-[#2563eb] py-4 font-black text-white shadow-lg shadow-blue-200 transition-all hover:bg-[#1e40af]"
              >
                상담 신청하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const YouTubeSection = () => (
  <section id="youtube" className="overflow-hidden bg-slate-900 py-24">
    <div className="mx-auto max-w-7xl px-5">
      <div className="mb-16 gap-12 lg:flex lg:items-center lg:justify-between">
        <div className="text-white lg:w-1/2">
          <h2 className="mb-6 text-3xl leading-tight font-black tracking-tight text-white md:text-5xl">
            지혜로운 디지털
            <br />
            <span className="text-[#2563eb]">무료 교육 팁</span>
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            시간과 장소에 구애받지 않고 배울 수 있는 핵심 노하우를 공개합니다.
            연구소 채널에서 구독하고 매주 새로운 소식을 받아보세요.
          </p>

          <a
            href={CONTACT_INFO.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-2xl bg-[#2563eb] px-10 py-5 text-xl font-black text-white shadow-2xl shadow-blue-900/20 transition-all hover:bg-[#1e40af]"
          >
            <Youtube size={32} />
            교육 팁 전체보기
            <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-0 lg:w-1/2">
          {[
            "3D펜 입문 가이드",
            "마이크로비트 기초",
            "핑퐁로봇 댄스 코딩",
            "AI 이미지 딸깍 비법",
          ].map((title, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 shadow-2xl"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <Play
                  fill="white"
                  className="text-white opacity-40 transition-opacity group-hover:opacity-100"
                  size={32}
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <p className="line-clamp-2 text-xs leading-tight font-bold text-white">
                  {title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const RobotNewsletter = () => {
  const newsItems = [
    {
      date: "2026.04.10",
      category: "교육 현장",
      title: "청소년 수련관 '3D펜 창의 융합 클래스' 개강",
      content:
        "3D펜으로 나만의 입체 작품을 만들며 공간 지각력과 창의력을 키우는 시간! 아이들의 놀라운 집중력을 확인했습니다.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
    },
    {
      date: "2026.03.25",
      category: "신규 교구",
      title: "핑퐁로봇으로 배우는 '군집 로봇' 코딩 워크샵",
      content:
        "하나의 앱으로 여러 개의 로봇을 동시에 제어한다면? 핑퐁로봇의 무궁무진한 확장성을 경험하는 현장을 전합니다.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
    },
    {
      date: "2026.02.15",
      category: "디지털 리터러시",
      title: "마이크로비트로 만드는 '스마트 홈' 프로젝트",
      content:
        "온도 센서와 빛 센서를 활용해 생활 속 문제를 해결합니다. 하드웨어 코딩의 즐거움을 깨닫는 소중한 시간입니다.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section
      id="robot"
      className="rounded-t-[4rem] border-t border-slate-200 bg-[#f8fafc] py-24 md:rounded-t-[6rem]"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-3xl font-black text-slate-900 md:text-5xl"
            >
              미래를 디자인하는
              <br />
              <span className="text-[#2563eb]">창의 융합 뉴스레터</span>
            </motion.h2>
            <p className="text-lg font-medium text-slate-500">
              핑퐁로봇, 마이크로비트, 3D펜을 활용한 생생한 교육 현장 소식을
              전해드립니다.
            </p>
          </div>
          <a
            href={CONTACT_INFO.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border-2 border-slate-200 px-6 py-3 text-center font-bold text-slate-400 transition-all hover:border-[#2563eb] hover:text-[#2563eb]"
          >
            뉴스레터 구독하기
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {newsItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-6 top-6">
                  <span className="rounded-xl bg-white/90 px-4 py-2 text-[10px] font-black tracking-widest text-[#2563eb] uppercase shadow-sm backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-grow flex-col p-8">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold text-slate-400">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="mb-4 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-[#2563eb]">
                  {item.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-500">
                  {item.content}
                </p>
                <div className="mt-auto">
                  <a
                    href={CONTACT_INFO.kakao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-[#2563eb] transition-all hover:gap-3"
                  >
                    자세히 읽기 <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const el = document.createElement("textarea");
    el.value = CONTACT_INFO.email;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-slate-100 bg-white px-5 pb-16 pt-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-10 inline-block text-center">
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-[#2563eb] bg-slate-200 shadow-lg">
            <img
              src={PROFILE_IMAGE_URL}
              alt="김지혜 소장"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200";
              }}
            />
          </div>
          <p className="mt-3 font-black tracking-widest text-[#2563eb] uppercase">
            Director Jihye Kim
          </p>
        </div>
        <h2 className="mb-10 text-4xl leading-tight font-black text-slate-900 md:text-5xl">
          AI 시대, 지혜로운 도약을
          <br />
          연구소와 함께 시작하세요.
        </h2>

        <div className="mb-24 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
          <button
            onClick={copyEmail}
            className="group flex items-center justify-between rounded-[2.5rem] border border-slate-100 bg-[#f8fafc] p-10 transition-all hover:border-[#2563eb]"
          >
            <div>
              <p className="mb-2 text-[10px] font-black tracking-widest text-[#2563eb] uppercase italic">
                Research Contact
              </p>
              <p className="text-xl font-bold text-slate-800">
                {CONTACT_INFO.email}
              </p>
            </div>
            <Copy
              size={24}
              className="text-slate-200 transition-colors group-hover:text-[#2563eb]"
            />
          </button>

          <a
            href={CONTACT_INFO.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:border-[#2563eb]"
          >
            <div>
              <p className="mb-2 text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
                Official Kakao
              </p>
              <p className="text-xl font-bold text-slate-800">
                오픈채팅 상담하기
              </p>
            </div>
            <ExternalLink
              size={24}
              className="text-slate-200 transition-colors group-hover:text-[#2563eb]"
            />
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-50 pt-20 md:flex-row">
          <div className="text-2xl font-black tracking-tighter text-[#2563eb]">
            AI 지혜 연구소
          </div>
          <div className="flex gap-8 text-slate-300">
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={24}
                className="transition-colors hover:text-blue-500"
              />
            </a>
            <a
              href={CONTACT_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube
                size={24}
                className="transition-colors hover:text-red-600"
              />
            </a>
            <a
              href={CONTACT_INFO.kakao}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle
                size={24}
                className="transition-colors hover:text-yellow-500"
              />
            </a>
          </div>
          <p className="text-[10px] font-black tracking-[0.2em] text-slate-300 uppercase">
            © 2026 AI Wisdom Lab. All Rights Reserved.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-[200] flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-white shadow-2xl"
          >
            <Check size={18} className="text-[#06b6d4]" />
            <span className="text-sm font-bold">
              이메일 주소가 복사되었습니다!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default function App() {
  return (
    <div className="scroll-smooth bg-[#f8fafc] font-sans text-[#0f172a] antialiased selection:bg-blue-100 selection:text-[#2563eb]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <EducationField />
        <CareerSection />
        <YouTubeSection />
        <RobotNewsletter />
      </main>
      <Contact />
    </div>
  );
}
