interface Props {
  children: React.ReactNode;
}

export default function Loading({ children }: Props) {
  return (
    <main className="flex min-h-[100dvh] lg:items-center justify-center">
      <div className="container mx-auto px-8 pt-6 pb-10">{children}</div>
    </main>
  );
}
