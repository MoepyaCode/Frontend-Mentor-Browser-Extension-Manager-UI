'use client'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchExtensions } from "../store/reducer";
import { useExtension } from "../hooks/useExtension";

export default function Home() {
  const { show, data } = useAppSelector(state => state["reducer/extensions"].extensions)
  const { renderList, filterList } = useExtension()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data !== null) return
    dispatch(fetchExtensions())
  }, [])

  useEffect(() => {
    if (!data) return
    filterList(show, data)
  }, [show, data])

  return (
    <div>

    </div>
  );
}