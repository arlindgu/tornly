import PageTitle from "@/components/PageTitle";
import { getUserCreationDate } from "@/lib/api/user/log";

export default async function EnergyPage() {

    const CONST_CREATION_DATE = await (await getUserCreationDate()).data?.log[0]?.timestamp || 0;
    const CURRENT_DATE = Math.floor(Date.now() / 1000);
    const DIFFERENCE = CURRENT_DATE - CONST_CREATION_DATE;

    const BEEN_DONATOR = 31*16*24*60*60

    const NON_DONATOR_ENERGY = 15*60
    const DONATOR_ENERGY = 10*60

    const nonDonatorDays = DIFFERENCE - BEEN_DONATOR

    const nonDonatorEnergy = Math.floor(nonDonatorDays / NON_DONATOR_ENERGY);
    const donatorEnergy = Math.floor(BEEN_DONATOR / DONATOR_ENERGY);

    const totalEnergy = nonDonatorEnergy + donatorEnergy;





    return (
      <main className="flex flex-col gap-6">
        <PageTitle
          title="Energy"
          description="Check out your energy stats and history."
        />
        <section className="flex flex-col lg:grid lg:grid-cols-5 gap-4">
          <p>{CONST_CREATION_DATE}</p>
          <p>{CURRENT_DATE}</p>
          <p>Diff: {CURRENT_DATE - CONST_CREATION_DATE}</p>
          <p>Been Donator: {BEEN_DONATOR}</p>
            <p>Non Donator Energy: {nonDonatorEnergy}</p>
            <p>Donator Energy: {donatorEnergy}</p>
            <p>Total Energy: {totalEnergy}</p>
        </section>
      </main>
    );
}