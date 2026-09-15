"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

// Loads the Cal.com embed script once and wires up its UI theme. Any
// element on the page with data-cal-link="<slug>" opens the booking flow
// as an in-page modal on click — no separate component needed per button,
// and no navigation away from the page the way a plain link to cal.com
// used to.
export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#1a1a1a" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}
