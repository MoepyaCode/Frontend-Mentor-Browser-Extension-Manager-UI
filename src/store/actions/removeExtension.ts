import { ExtensionState } from "@/src/types/extension";
import { PayloadAction } from "@reduxjs/toolkit";

export type RemoveExtensionPayloadAction = {
  name: string;
};

export function removeExtensionAction(
  state: ExtensionState,
  action: PayloadAction<{ name: string }>
): ExtensionState {
  const { data } = state.extensions;

  if (!data) return state;

  const { name } = action.payload;
  const updatedData = data.filter((extension) => extension.name !== name);
  const updatedExtensions = { ...state.extensions, data: updatedData };

  return { ...state, extensions: updatedExtensions };
}
