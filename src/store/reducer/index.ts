import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  toggleExtension,
  ToggleExtentionPayloadAction,
} from "../actions/extensions/toggleExtension";
import { ExtensionI, ExtensionState } from "@/src/types/extension";
import { ExtensionFilters } from "@/src/enums/extension.enum";
import {
  toggleExtensionShow,
  ToggleExtensionShow,
} from "../actions/extensions/toggleExtensionShow";

export const fetchExtensions = createAsyncThunk(
  "fetch/extensions",
  async () => {
    const response = await fetch("/data/extensions.json");
    return (await response.json()) as ExtensionI[];
  }
);

const initialState: ExtensionState = {
  extensions: {
    show: ExtensionFilters.Inactive,
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
    ) => toggleExtension(state, action),
    toggleExtensionToggle: (
      state,
      action: PayloadAction<ToggleExtensionShow>
    ) => toggleExtensionShow(state, action),
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

export const {} = ExtensionSlice.actions;
export default ExtensionSlice;
