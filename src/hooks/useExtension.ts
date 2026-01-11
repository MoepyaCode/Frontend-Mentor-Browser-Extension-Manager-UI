import { useState } from "react";
import { ExtensionFilters } from "../enums/extension.enum";
import { ExtensionHook, ExtensionI } from "../types/extension";

export function useExtension(): ExtensionHook {
  const [renderList, setRenderList] = useState<ExtensionI[] | null>(null);

  const filterList = (show: ExtensionFilters, list: ExtensionI[]) => {
    if (list === undefined) return renderList;

    switch (show) {
      case ExtensionFilters.All:
        return setRenderList(list);
      case ExtensionFilters.Active:
        return setRenderList(activeFilter(list));
      case ExtensionFilters.Inactive:
        return setRenderList(inactiveFilter(list));
    }
  };

  return {
    renderList,
    filterList,
  };
}

function activeFilter(extensions: ExtensionI[]) {
  return extensions.filter((extension) => extension.isActive);
}

function inactiveFilter(extensions: ExtensionI[]) {
  return extensions.filter((extension) => !extension.isActive);
}