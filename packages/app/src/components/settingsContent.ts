export interface SettingsContentType {
  linkLabel: string;
  group: {
    title: string;
    controls: {
      title: string;
      desc: string;
      control: ControlType;
      configName: string;
    }[];
  }[];
}

export type ControlType = "toggle" | "slider" | "select";

const settingsContent: SettingsContentType[] = [
  {
    linkLabel: "Font",
    group: [
      {
        title: "Title",
        controls: [
          {
            title: "title",
            desc: "fgdgdgs",
            control: "toggle",
            configName: "gdsgds",
          },
          {
            title: "title",
            desc: "fgdgdgs",
            control: "toggle",
            configName: "gdsgds",
          },
        ],
      },
    ],
  },
  {
    linkLabel: "Color scheme",
    group: [
      {
        title: "Title",
        controls: [
          {
            title: "title",
            desc: "fgdgdgs",
            control: "slider",
            configName: "gdsgds",
          },
        ],
      },
    ],
  },
];

export default settingsContent;
