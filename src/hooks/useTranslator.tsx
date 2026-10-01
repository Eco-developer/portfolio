import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { TRANSLATIONS, Language, TranslationKey } from '../constants/translations';
import { PROJECTS_EN, PROJECTS_ES } from '../constants/projects';
import { EXPERIENCE, EXPERIENCE_ES } from '../constants/experience';

interface TranslatorContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey, replacements?: Record<string, string | number>) => string;
  projects: typeof PROJECTS_EN;
  experience: typeof EXPERIENCE;
  cvUrl: string;
  cvFilename: string;
}

const TranslatorContext = createContext<TranslatorContextValue | null>(null);

export function TranslatorProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'es') return saved;
    // Default to browser language or 'en'
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'en' ? 'es' : 'en';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (key: TranslationKey, replacements?: Record<string, string | number>): string => {
      const langDict = TRANSLATIONS[language] || TRANSLATIONS.en;
      let text = (langDict as Record<string, string>)[key] || (TRANSLATIONS.en as Record<string, string>)[key] || key;

      if (replacements) {
        Object.entries(replacements).forEach(([placeholder, val]) => {
          text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), String(val));
        });
      }

      return text;
    },
    [language]
  );

  const projects = language === 'es' ? PROJECTS_ES : PROJECTS_EN;
  const experience = language === 'es' ? EXPERIENCE_ES : EXPERIENCE;
  const cvFilename = `Jose_Miguel_Quesada_Campos_CV_${language === 'es' ? 'ES' : 'EN'}.pdf`;
  const cvUrl = `${process.env.PUBLIC_URL}/assets/${cvFilename}`;

  return (
    <TranslatorContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        projects,
        experience,
        cvUrl,
        cvFilename,
      }}
    >
      {children}
    </TranslatorContext.Provider>
  );
}

export function useTranslator(): TranslatorContextValue {
  const context = useContext(TranslatorContext);
  if (!context) {
    throw new Error('useTranslator must be used within a TranslatorProvider');
  }
  return context;
}
