import { create } from 'zustand';

interface Subscription {
  id: string;
  customerName: string;
  plan: string;
  status: string;
  startDate: string;
  endDate: string;
}

interface Store {
  list: Subscription[];
  fetchSubscriptions: () => Promise<void>;
}

export const useSubscriptionStore = create<Store>((set) => ({
  list: [],
  fetchSubscriptions: async () => {
    const res = await fetch('/api/subscriptions');
    const data = await res.json();
    set({ list: data.data });
  },
}));