import { useState } from 'react';

import { Wallet } from '@/components/Wallet';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useNavigate } from 'umi';
import FormRender, { useForm } from 'form-render';


export default function ConfirmPage() {
  const form = useForm();

  const [value, setValue] = useState<any>(JSON.parse(localStorage.getItem("save-schema") || '{}'));
  const navigate = useNavigate();

  // const { connection } = useConnection();
  // const { publicKey, sendTransaction } = useWallet();

  // connection.getBlockHeight().then((res) => {
  //   console.log(res)
  // })



  return (
    <div className="font-sans">
      <div className="flex justify-between items-center px-16">
        <h1 className="text-12 font-script">SolanaForm</h1>
        {/* <button className="bg-white border rounded-2 center px-4 py-2 font-bold">
          <div className="i-solar-wallet-outline mr-2 text-5"></div>
          Connect Wallet
        </button> */}
        <Wallet />
      </div>

      <div className="center mt-12">
        <div className='w-50vw rounded-3 p-4 shadow-lg transition-all duration-300 ease'>
          <FormRender
            form={form}
            schema={value}
            footer={true}
          />
        </div>

      </div>

      <div className="center mt-12">
        <button className={`border rounded-2 center px-4 py-2 text-4 font-bold text-white`} onClick={() => navigate('/builder')}>
          <div className="i-solar-screen-share-outline mr-3 text-5"></div>
          Deploy
        </button>
      </div>

    </div>
  );
}


