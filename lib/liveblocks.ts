import { Liveblocks } from "@liveblocks/node";

export const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
  // secret: "sk_dev_nv7ne7Dqe6MhxPt_5sJeUhaU5HanrPtiQrkQXcJ2oqE9vHHFLC_TFhU1udwMSHme",
});
