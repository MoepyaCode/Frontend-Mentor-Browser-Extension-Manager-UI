import { ExtensionI } from "@/src/types/extension"
import Extension from "./Extension"

function ExtensionsList(props: { renderList: ExtensionI[] }) {
  const { renderList } = props

  return (
    <div className="flex flex-wrap justify-between md:justify-between items-center gap-3">
      {renderList.map((extension, index) => <Extension key={index} {...extension} />)}
    </div>
  )
}

export default ExtensionsList