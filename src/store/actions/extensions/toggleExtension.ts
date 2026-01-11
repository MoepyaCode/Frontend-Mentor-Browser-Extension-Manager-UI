import { ExtensionI, ExtensionState } from "@/src/types/extension";
import { PayloadAction } from "@reduxjs/toolkit";

export type ToggleExtentionPayloadAction = {
  name: ExtensionI["name"];
};

export function toggleExtension(
  state: ExtensionState,
  action: PayloadAction<ToggleExtentionPayloadAction>
): ExtensionState {
  const { extensions } = state;
  const { data } = extensions;

  if (!data) return state;

  const updatedData = data.map((extension) =>
    extension.name === action.payload.name
      ? { ...extension, isActive: !extension.isActive }
      : extension
  );

  const updatedExtensions = {
    ...extensions,
    data: updatedData,
  };

  return { ...state, extensions: updatedExtensions };
}
