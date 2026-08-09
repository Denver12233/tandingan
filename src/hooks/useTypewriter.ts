"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export type TypewriterPhase = "typing" | "pausedTyped" | "deleting" | "pausedEmpty";

interface TypewriterState {
  typed: string;
  phase: TypewriterPhase;
  cursorVisible: boolean;
}

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  fullPauseMs?: number;
  emptyPauseMs?: number;
}

export function useTypewriter(text: string, options: TypewriterOptions = {}): TypewriterState {
  const {
    typeSpeed = 50,
    deleteSpeed = 30,
    fullPauseMs = 1600,
    emptyPauseMs = 450,
  } = options;

  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = prefersReducedMotion === true;

  const [typed, setTyped] = useState(text);
  const [phase, setPhase] = useState<TypewriterPhase>("pausedTyped");
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setTyped(text);
      setPhase("pausedTyped");
      setCursorVisible(false);
      return;
    }

    setTyped("");
    setPhase("typing");
    setCursorVisible(true);

    let index = 0;
    let timer: number | undefined;

    const type = () => {
      setPhase("typing");
      index += 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) {
        setPhase("pausedTyped");
        timer = window.setTimeout(remove, fullPauseMs);
      } else {
        timer = window.setTimeout(type, typeSpeed);
      }
    };

    const remove = () => {
      setPhase("deleting");
      index -= 1;
      setTyped(text.slice(0, index));
      if (index <= 0) {
        setPhase("pausedEmpty");
        timer = window.setTimeout(type, emptyPauseMs);
      } else {
        timer = window.setTimeout(remove, deleteSpeed);
      }
    };

    timer = window.setTimeout(type, typeSpeed);

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [text, typeSpeed, deleteSpeed, fullPauseMs, emptyPauseMs, shouldReduceMotion]);

  return { typed, phase, cursorVisible };
}
