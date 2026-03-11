import { Heading } from "@/components/shared/heading";
import { Form } from "@/components/ui/form";
import { FolderClosedIcon } from "lucide-react";
import { useForm } from "react-hook-form";

const useFTPConfiguration = () => {
  const form = useForm();
  return { form };
};

export const FTPConfiguration = () => {
  const { form } = useFTPConfiguration();
  return (
    <div className="bg-white rounded-2xl border p-6 grid gap-6">
      <Heading title="FTP Configuration" icon={FolderClosedIcon} />
      <Form {...form}>
        <form className="grid grid-cols-2 gap-6"></form>
      </Form>
    </div>
  );
};
