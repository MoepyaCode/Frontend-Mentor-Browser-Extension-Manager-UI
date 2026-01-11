import { ExtensionFilters } from "../enums/extension.enum";

export interface ExtensionI {
  name: string;
  description: string;
  isActive: boolean;
  logo: string;
}

export type ExtensionState = {
  extensions: {
    show: ExtensionFilters;
    data: ExtensionI[] | null;
  };
  loading: boolean;
  success: boolean | null;
  error: null | unknown;
};

export type ExtensionHook = {
  renderList: ExtensionI[] | null;
  filterList: (show: ExtensionFilters, list: ExtensionI[]) => void;
};
