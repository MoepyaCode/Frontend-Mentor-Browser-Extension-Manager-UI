import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  toggleExtension as toggleExtensionAction,
  ToggleExtentionPayloadAction,
} from "../actions/extensions/toggleExtension";
import { ExtensionI, ExtensionState } from "@/src/types/extension";
import { ExtensionFilters } from "@/src/enums/extension.enum";
import {
  toggleExtensionShow as toggleExtensionShowAction,
  ToggleExtensionShow,
} from "../actions/extensions/toggleExtensionShow";
import {
  removeExtensionAction,
  RemoveExtensionPayloadAction,
} from "../actions/removeExtension";

export const fetchExtensions = createAsyncThunk(
  "fetch/extensions",
  async () => {
    const response = await fetch("/data/extensions.json");
    return (await response.json()) as ExtensionI[];
  }
);

const initialState: ExtensionState = {
  extensions: {
    show: ExtensionFilters.All,
    data: null,
  },
  loading: false,
  success: null,
  error: null,
};

const ExtensionSlice = createSlice({
  name: "reducer/extensions",
  initialState,
  reducers: {
    toggleExtension: (
      state,
      action: PayloadAction<ToggleExtentionPayloadAction>
    ) => toggleExtensionAction(state, action),
    toggleExtensionShow: (state, action: PayloadAction<ToggleExtensionShow>) =>
      toggleExtensionShowAction(state, action),
    removeExtension: (
      state,
      action: PayloadAction<RemoveExtensionPayloadAction>
    ) => removeExtensionAction(state, action),
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchExtensions.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchExtensions.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.extensions = {
          ...state.extensions,
          data: action.payload,
        };
      })
      .addCase(fetchExtensions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleExtension, toggleExtensionShow, removeExtension } = ExtensionSlice.actions;
export default ExtensionSlice;
