import { LinkButton, Logo } from "@zenread/ui";

export const AboutContent = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Logo type="default" className="w-[200px]" />
      <span className="text-secondary-50% font-text">
        Version: {import.meta.env.VERSION}
      </span>
      <span className="text-secondary-50% font-text">
        Maked with ❤️ by Mike Noired
      </span>
      <span className="text-secondary-50% font-text flex gap-3">
        Powered on <LinkButton title="Tauri" link="https://tauri.app/" />
      </span>
    </div>
  );
};
