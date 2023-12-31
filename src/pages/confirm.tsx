import { useEffect, useState } from 'react';

import { Wallet } from '@/components/Wallet';
import { useConnection, useWallet, useAnchorWallet } from '@solana/wallet-adapter-react';
import { useNavigate } from 'umi';
import FormRender, { useForm } from 'form-render';
import { deployForm, login } from '@/apis/pb';


export default function ConfirmPage() {
  const form = useForm();
  const { connected, connecting, connect, sendTransaction, select, publicKey } = useWallet();
  const a = useAnchorWallet()
  const [value, setValue] = useState<any>(JSON.parse(localStorage.getItem("save-schema") || '{}'));

  const navigate = useNavigate();

  async function handleDeploy() {
    if (!localStorage.getItem("walletName")) {
      return
    }
    await login()
    deployForm(value).then((res) => {
      navigate('/form?id=' + res.id)

    })

  }

  function handleConnect() {
    select('Phantom' as any)
    connect()
  }

  return (
    <div className="font-sans">
      <div className="flex justify-between items-center px-16">
        <h1 className="text-12 font-script">SolanaForm</h1>

        <Wallet />
      </div>

      <div className="center mt-12">
        <div className='w-50vw rounded-3 p-4 shadow-lg transition-all duration-300 ease'>
          <FormRender
            form={form}
            schema={value}
            footer={false}
          />
        </div>

      </div>

      <div className="center mt-12">
        <button className={`border rounded-2 center px-4 py-2 text-4 font-bold text-white bg-black`} onClick={handleDeploy}>
          <div className="i-solar-screen-share-outline mr-3 text-5"></div>
          Deploy
        </button>
      </div>

    </div>
  );
}


