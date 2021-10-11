import create from "zustand";
import { persist } from "zustand/middleware";
import SessionData from "../interfaces/SessionDataInterface";

type SessionStoreProps = SessionData & {
  setSession: (props: SessionData) => void;
};

const useSessionStore = create<SessionStoreProps>(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      setSession: (data: SessionData) => set({ ...data }),
    }),
    {
      name: "@foxkey/global-state/session",
      getStorage: () => sessionStorage,
    }
  )
);

export default useSessionStore;
