import LoginField from "@/components/login/LoginField";

export default function LoginPage() {
    return (
      <section className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl uppercase font-heading mb-8">Tornly</h1>
        <LoginField />
      </section>
    );
}