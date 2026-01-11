'use client'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchExtensions } from "../store/reducer";
import { useExtension } from "../hooks/useExtension";
import Screen from "../layout/Screen";
import NavBar from "../components/navigation";
import Section from "../layout/Section";
import Header from "../layout/Header";
import FilterButtons from "../components/filter-buttons";
import ExtensionsList from "../components/extensions-list";

export default function Home() {
  const { show, data } = useAppSelector(state => state["reducer/extensions"].extensions)
  const { renderList, filterList } = useExtension()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) return
    dispatch(fetchExtensions())
  }, [])

  useEffect(() => {
    if (!data) return
    filterList(show, data)
  }, [show, data])

  return (
    <Screen className="flex flex-col gap-10">
      <NavBar />

      <Section>
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
          <Header title="Extension List" />
          <FilterButtons />
        </div>

        <div>
          {renderList && <ExtensionsList renderList={renderList} />}
        </div>
      </Section>
    </Screen>
  );
}