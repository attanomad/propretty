import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { findFiles } from "./actions";
import FileListTable from "./media-list-table";

export default async function MediaPage() {
  const files = await findFiles();

  return (
    <div className="flex flex-col gap-4">
      <h1>files</h1>
      <Link
        href="/files/new"
        className="flex items-center content-center h-7 gap-1"
      >
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add File
        </span>
      </Link>
      <Suspense
        fallback={<p className="font-bold p-4 m-4">Loading property list...</p>}
      >
        <FileListTable files={files} />
      </Suspense>
    </div>
  );
}
