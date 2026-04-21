interface PageTitleProps {
    title: string;
    description: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
    return (
      <section>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </section>
    );
}