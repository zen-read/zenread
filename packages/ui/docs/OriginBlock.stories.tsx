import { OriginBlock } from "#OriginBlock/index.js";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OriginBlock> = {
  component: OriginBlock,
  decorators: [
    (Story) => (
      <div className="w-[700px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OriginBlock>;

export const Default: Story = {
  args: {
    originLogo:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAABAlBMVEX////lQzU0o1NCgO/2twQ6fO/6+/4/fu9aj/E0ee7lPi+6zfj2tAD87u32sgAkn0kanUPjLRnkNiXjIwT99PTtiYLqdm7kMh/mUUXzs6/53Nrqb2flRzruk4361pD3wkv++/L9894mdO786ML73qX62pn3uzD61Ynx+PN1u4YAmTjnV0zjKBDwo5/3zsz2xsPvm5boYljzsoTzpyDpYjTkODb3vgDtgDDxnSTnWDXqcDTzr2jm7fzS3/qqwfebuPXXx3OSr0pnq1OSyJ/TtTCIqvSrskV5rVGu1bfftSBQqFXQ5tV2n/LLzItVmsJJqmJBmppktHg0nXJBjM1Dlq49htYFuHDMAAACsElEQVRoge2V22KaQBCGESFRAuyCUTylVXMoGjXpIT2naUttbExLTdv3f5XCKrAg0HHBq/JdeMP6Of47M3BcQUFBQUFBrhwqyi6s7Vb9fFwjdBuT6WF+6mm9qemSVFoj6VqpcZGPutXUfK+PZOiT7OVfxKkJhtTKplY6RoKa6M/bWcrWU9RuOBp78ZdaqtpFqzO6G/92lySJrfPrBsDd3aWbrR1b0Uyc0amNDaOmBZfMWnc74tb1p5M2KbPd6uh6JjfXDPWgpB3RHa1M3O6XSozuy1DgRieqURoGc91KyD2Om5SJzrp9n+l03dPYM6xrqyc87155bi3ezcypLKgv1vYM2yMeweHlK2KXGjm7+yqxv3btRt4vzUeyQFDfXOlHObu5x4LH23HehfeEgHeRZ3vJwOR92XerJ5FnBwMxgcF7kPxYDeT9qLxaTmBwDZKfBHKhB5ZXD0Dy0yCWs+izFPkHkPwJm/xmh3IRJmeLBShnvFBY5mytCJSnDlF1n4aWw1qRGn/1Y1ReCRPIgRMaLC75EzZTT14HKYnA5bJeufLZZx5ZqSdnoufer8Dc65eF/IV3QGml74l+6uIMKCevOfkrT+TDlHNU7wDvk3NzkYVbfgWeQwovD4CRO/2ifrvjPfAi6di9n3hZvIe6Oe474gNQgn1GDRRwmxNMTMkTkqHd4F4hWChkH270zOLHYPvx9LBpOY+wFdIvhiP8M7jO7Qp3vh4KxtGj5XyVvbmwbOz8MfxQERkSJ8wjdrf8EXI/MPJ+79cqduBLiMbasG+Af7t2cctQCEOA/aHsJA+eny3tyP4jAndtFEAy6I7R7dwqQuluvGRVO5jLtOJRylaDFW8n6VHM4LLoY8Jx1InrcivITCJajOx59qoD/3xo4xGBX1p5mn1McxfWgoKCgoL/mb9j80UCDEMRHwAAAABJRU5ErkJggg==",
    originName: "Google",
    isSaved: true,
    loaded: true,
    description:
      "Google Search (also known simply as Google or Google.com) is a search engine operated by Google. It allows users to search for information on the Internet by entering keywords or phrases.",
    links: [
      {
        title: "Link 1",
        link: "https://www.google.com",
      },
      {
        title: "Link 2",
        link: "https://www.google.com",
      },
    ],
  },
};
