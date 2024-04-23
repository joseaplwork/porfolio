interface Props {
  children: React.ReactNode;
}

export default function Loading({ children }: Props) {
  return (
    <main className="flex h-[100dvh] lg:items-center justify-center">
      <div className='container mx-auto px-8 py-6"'>{children}</div>
    </main>
  );
}
