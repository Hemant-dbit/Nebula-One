import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  
  // In a real app, fetch product data by slug here
  if (!slug) return notFound();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Product: {slug}</h1>
      <p className="text-lg text-gray-400 mb-8">This is a placeholder for the dynamic product page.</p>
      <a href="/" className="text-blue-400 hover:underline">Back to Home</a>
    </main>
  );
} 