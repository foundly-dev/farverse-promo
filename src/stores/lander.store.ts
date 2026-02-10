import { create } from "zustand";
import { apps, type ContentItem } from "~/data/content";

interface LanderStore {
  selectedIndex: number;
  selectedApp: ContentItem;
  autoScrollPaused: boolean;
  setSelectedIndex: (index: number) => void;
  pauseAutoScroll: () => void;
  advance: () => void;
}

export const useLanderStore = create<LanderStore>((set, get) => ({
  selectedIndex: 0,
  selectedApp: apps[0]!,
  autoScrollPaused: false,
  setSelectedIndex: (index) =>
    set({ selectedIndex: index, selectedApp: apps[index]! }),
  pauseAutoScroll: () => set({ autoScrollPaused: true }),
  advance: () => {
    if (get().autoScrollPaused) return;
    const next = (get().selectedIndex + 1) % apps.length;
    set({ selectedIndex: next, selectedApp: apps[next]! });
  },
}));
