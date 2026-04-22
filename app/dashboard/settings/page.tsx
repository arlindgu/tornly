import PageTitle from "@/components/PageTitle";
import { getCookie } from "@/lib/cookies";
import SliderCard from "@/components/settings/SliderCard";
import APICard from "@/components/settings/APICard";

export default async function SettingsPage() {
    const apiKey = await getCookie("tornly:apikey")
    const rpm = await getCookie("tornly:rpm")

    return (
      <main className="flex flex-col gap-6">
        <section>
          <PageTitle
            title="Settings"
            description="Configure your Tornly experience."
          />
        </section>
        <section className="flex flex-col md:flex-row gap-4">
            <APICard cookieapiKey={apiKey || ""} />
            <SliderCard rpm={rpm ? parseInt(rpm) : 50} />
        </section>
      </main>
    );
}