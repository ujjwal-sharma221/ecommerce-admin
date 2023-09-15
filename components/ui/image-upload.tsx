"use client";

import { useEffect, useState } from "react";
import { ImagePlusIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "./button";

const ImageUpload = ({
  onChange,
  onRemove,
  value,
  disabled,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) return null;
  return (
    <div>
      <div className="flex items-center mb-4 gao-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden "
          >
            <div className="absolute z-10 top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                size="icon"
                variant="secondary"
              >
                <Trash2 className="w-4 h-4"></Trash2>
              </Button>
            </div>
            <Image fill className="object-cover" alt="image" src={url}></Image>
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="syrmcols">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type="button"
              disabled={disabled}
              variant="secondary"
              onClick={onClick}
            >
              <ImagePlusIcon className="w-4 h-4 mr-2"></ImagePlusIcon>
              Upload an image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
