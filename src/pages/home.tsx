import { listForms } from '@/apis/pb';
import { Wallet } from '@/components/Wallet';
import { useEffect, useState } from 'react';
import FormRender, { useForm } from 'form-render';
import { useNavigate } from 'umi';

export default function HomePage() {
  const list = [1, 2, 3, 4].map((_, index) => <FormCard key={index} />)

  const [items, setItems] = useState<any>([])

  useEffect(() => {
    listForms().then((res) => {
      console.log(res);
      setItems(res.items);

    })
  }, [])

  return (
    <div className="font-sans">
      <div className="flex justify-between items-center px-16">
        <h1 className="text-12 font-script">SolanaForm</h1>
        <Wallet />
      </div>

      <div className="grid grid-cols-4 gap-14 mt-12 px-16">
        {items.map((item: any, index: number) => <FormCard key={index} form={item} />)}
      </div>

    </div>
  );
}

export function FormCard({ form }: { form: any }) {
  const f = useForm()
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/list?id=${form.id}`)} className='w-full flex flex-col items-center rounded-3 p-4 shadow-lg transition-all duration-300 ease'>
      <div>
        {form.id}
      </div>
      <div className='w-full mt-8'>
        <FormRender
          form={f}
          schema={form.schema}
          footer={false}
        />
      </div>
    </div>
  )
}


