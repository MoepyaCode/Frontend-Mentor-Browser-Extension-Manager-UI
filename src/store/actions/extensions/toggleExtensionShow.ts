import { ExtensionFilters } from "@/src/enums/extension.enum";
import { ExtensionI, ExtensionState } from "@/src/types/extension";
import { PayloadAction } from "@reduxjs/toolkit";

export type ToggleExtensionShow = {
  show: ExtensionFilters;
};

export function toggleExtensionShow(
  state: ExtensionState,
  action: PayloadAction<ToggleExtensionShow>
): ExtensionState {
  const { show } = action.payload;

  if (show === state.extensions.show) return state;

  const updatedExtension = { ...state.extensions, show };

  return { ...state, extensions: updatedExtension };
}
