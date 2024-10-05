import { File } from "@/gql/graphql";
import { findFiles } from "@/modules/media/actions/media.actions";
import FileListTable from "@/modules/media/components/media-list-table";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function MediaPage() {
  const { code, message, data: files } = await findFiles();

  if (code !== 0) {
    throw new Error(message);
  }

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
        <FileListTable files={files as File[]} />
      </Suspense>
    </div>
  );
}
