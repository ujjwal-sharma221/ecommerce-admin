"use client";

import toast from "react-hot-toast";

import { Clipboard, Shield } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";

const textMap: Record<APIAlertProps["variant"], string> = {
  Public: "Public",
  Admin: "Admin",
};

const variantMap: Record<APIAlertProps["variant"], BadgeProps["variant"]> = {
  Public: "secondary",
  Admin: "destructive",
};

const APIAlert = ({
  title,
  description,
  variant = "Public",
}: APIAlertProps) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("Copied to Clipboard");
  };

  return (
    <Alert>
      <Shield className="w-4 h-4"></Shield>
      <AlertTitle className="flex items-center gap-x-2 ">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="flex items-center justify-between mt-4">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm ">
          {description}
        </code>
        <Button variant="ghost" size="icon" onClick={onCopy}>
          <Clipboard className="w-4 h-4"></Clipboard>
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default APIAlert;
