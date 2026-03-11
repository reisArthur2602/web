import { Heart } from "lucide-react";

const Icon = () => {
  return (
    <div className="bg-primary p-1 rounded-sm w-fit text-white">
      <Heart size={18} />
    </div>
  );
};

export const Logo = () => {
  return (
    <div className="flex items-center gap-1.5">
      <Icon />

      <div className="text-primary font-bold text-xl font-heading tracking-tighter">
        Painel
      </div>
    </div>
  );
};
