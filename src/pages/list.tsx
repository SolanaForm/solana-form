import { useEffect, useState } from 'react';
import { message } from 'antd';
import { Wallet } from '@/components/Wallet';
import { useConnection, useWallet, useAnchorWallet } from '@solana/wallet-adapter-react';
import { useNavigate, useSearchParams } from 'umi';
import FormRender, { useForm } from 'form-render';
import { listSubmits, submitForm } from '@/apis/pb';


export default function FormPage() {
  const form = useForm();
  const { connected, connecting, connect, sendTransaction, select, publicKey } = useWallet();
  const a = useAnchorWallet()
  const [value, setValue] = useState<any>(JSON.parse(localStorage.getItem("save-schema") || '{}'));

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [submits, setSubmits] = useState<any>([])

  useEffect(() => {
    if (searchParams.get('id')) {
      listSubmits().then((res) => {
        setSubmits(res.items)
        console.log(res.items);

      })

    }
  }, [])
  function handleDeploy() {
    if (localStorage.getItem("wallet") === null) {
      return
    }

    navigate('/form')

  }

  function handleConnect() {
    select('Phantom' as any)
    connect()
  }

  async function handleFinish(data: any) {
    submitForm(data, searchParams.get('id') as string).then((res) => {
      messageApi.success('Submit success')
    })
  }

  const [messageApi, contextHolder] = message.useMessage()

  return (
    <div className="font-sans">
      <div className="flex justify-between items-center px-16">
        <h1 className="text-12 font-script" onClick={() => navigate('/home')}>SolanaForm</h1>

        <Wallet />
      </div>

      <div className="center mt-12">
        <div className='w-50vw rounded-3 p-4 shadow-lg transition-all duration-300 ease'>
          {submits.map((item: any, index: number) => <div key={index} className='p-4'>{JSON.stringify(item.data)}</div>)}
        </div>

      </div>



    </div>
  );
}


