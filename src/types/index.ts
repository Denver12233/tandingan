export type HeroMetaItem = {
  num: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  accentWord: string;
  noteText: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  metaItems: HeroMetaItem[];
  scrollCue: string;
};
