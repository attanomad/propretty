import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { saveMediaFile } from "@/lib/media/server-actions";
import { cn } from "@/lib/utils";
import { ImageUp, Loader2, Trash2 } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, forwardRef, useRef } from "react";
import { Control, ControllerRenderProps, useFieldArray } from "react-hook-form";
import { FormSchema } from "../form-schema";
import { MAX_MEDIA_COUNT, MIN_MEDIA_COUNT } from "./constants";

export default function PictureField({
  label,
  control,
}: {
  label?: string;
  control: Control<FormSchema>;
}) {
  return (
    <FormField
      control={control}
      name={`mediaList`}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel title="Click to upload files">{label}</FormLabel>
          )}
          {/* <FormDescription>
            Images and/or videos of the property
          </FormDescription> */}
          <FormControl>
            <MediaInput
              control={control}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

const MediaInput = forwardRef<
  HTMLInputElement,
  {
    control: Control<FormSchema>;
  } & ControllerRenderProps<FormSchema>
>(({ control, onChange, value, ...field }, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { fields, update, append, remove } = useFieldArray<
    FormSchema,
    "mediaList"
  >({
    control: control,
    name: "mediaList",
  });

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      onChange(e);

      return;
    }

    const fileList = Array.from(e.target.files);

    await Promise.all(
      fileList.map((file, index) => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
          append({
            id: String(index),
            url: fileReader.result as string,
            _isReady: false,
          });
        };

        fileReader.readAsDataURL(file);

        const formData = new FormData();

        formData.append("file", file);

        return saveMediaFile(formData).then((res) => {
          if (res.code !== 0) {
            throw new Error(`Failed to upload image: ${res.message}`);
          }

          update(index, { ...res.data!, _isReady: true });

          return res.data!;
        });
      })
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="relative size-24 sm:size-36 md:size-48 rounded-xl overflow-hidden"
        >
          <Image
            src={field.url}
            alt="image"
            fill
            sizes="(min-width: 768px) 192px, (min-width: 640px) 144px, 96px"
            className="object-cover"
          />
          <div
            className={`${field._isReady ? "opacity-0 hover:opacity-100 bg-transparent hover:bg-[rgba(0,0,0,0.3)]" : "opacity-100 bg-[rgba(0,0,0,0.3)]"} absolute left-0 top-0 w-full h-full flex items-center justify-center z-10`}
          >
            {field._isReady ? (
              <Trash2
                className="size-6 text-white cursor-pointer"
                onClick={() => remove(index)}
              />
            ) : (
              <Loader2 className={cn("animate-spin text-white")} />
            )}
          </div>
        </div>
      ))}
      <div
        className="flex justify-center items-center border-2 rounded-xl cursor-pointer size-24 sm:size-36 md:size-48"
        onClick={() => inputRef.current?.click()}
      >
        <div className="flex flex-col gap-4 items-center justify-center text-muted-foreground">
          <ImageUp />
          <span>Click to Add</span>
        </div>
      </div>
      <Input
        ref={(element) => {
          inputRef.current = element; // Local ref stores the input element
          if (typeof ref === "function") {
            ref(element); // If ref is a callback, call it with the element
          } else if (ref) {
            ref.current = element; // If ref is an object, set its current value
          }
        }}
        type="file"
        multiple
        accept="image/*"
        min={MIN_MEDIA_COUNT}
        max={MAX_MEDIA_COUNT}
        {...field}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
});
