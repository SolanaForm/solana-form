import { Wallet } from '@/components/Wallet';

export default function HomePage() {
  const list = [1, 2, 3, 4].map((_, index) => <FormCard key={index} />)

  return (
    <div className="font-sans">
      <div className="flex justify-between items-center px-16">
        <h1 className="text-12 font-script">SolanaForm</h1>
        <Wallet />
      </div>

      <div className="grid grid-cols-4 gap-14 mt-12 px-16">
        {list}
      </div>

    </div>
  );
}

export function FormCard() {
  return (
    <div className='w-full border border-amber border-solid rounded-3 p-4 shadow-lg transition-all duration-300 ease'>
      123
    </div>
  )
}


