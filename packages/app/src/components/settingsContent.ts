export interface SettingsContentType {
  linkLabel: string;
  url: string;
  group: {
    title: string;
    controls: {
      title: string;
      desc: string;
      control: ControlType;
      configName: string;
      selectItems?: string[];
      buttonLabel?: string;
    }[];
  }[];
}

export type ControlType = "toggle" | "slider" | "select" | "input" | "button";

const settingsContent: SettingsContentType[] = [
  {
    linkLabel: "Font",
    url: "font",
    group: [
      {
        title: "Font",
        controls: [
          {
            title: "Font size",
            desc: "Global font size of default text(px)",
            control: "input",
            configName: "font_size",
          },
          {
            title: "Font headings",
            desc: "Font type for headings",
            control: "select",
            configName: "font_headings",
            selectItems: ["Sans", "Serif", "Mono"],
          },
          {
            title: "Font text",
            desc: "Font type for text",
            control: "select",
            configName: "font_text",
            selectItems: ["Sans", "Serif", "Mono"],
          },
        ],
      },
    ],
  },
  {
    linkLabel: "Color scheme",
    url: "color",
    group: [
      {
        title: "Colors",
        controls: [
          {
            title: "Color scheme",
            desc: "Global color scheme for the app",
            control: "select",
            configName: "color_scheme",
            selectItems: ["Default", "Cat", "Dog"],
          },
          {
            title: "Dark mode",
            desc: "Toggle dark mode(default – set mode by system default)",
            control: "select",
            configName: "color_scheme",
            selectItems: ["System", "Light", "Dark"],
          },
        ],
      },
    ],
  },
  {
    linkLabel: "Storage",
    url: "storage",
    group: [
      {
        title: "Offline storage",
        controls: [
          {
            title: "Read list local storage",
            desc: "Where zen.read need to store your read list content",
            control: "button",
            configName: "read_list_storage",
            buttonLabel: "Open explorer",
          },
        ],
      },
    ],
  },
];

export default settingsContent;
