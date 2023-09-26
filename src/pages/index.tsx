import { Wallet } from '@/components/Wallet';
import { useNavigate } from 'umi';
import FormRender, { useForm } from 'form-render';

const sampleSchema = {
  "type": "object",
  "properties": {
    "fr-5pqi": {
      "title": "数字输入框",
      "type": "number",
      "widget": "inputNumber"
    },
    "fr-dy3l": {
      "title": "日期区间选择",
      "type": "range",
      "format": "date",
      "props": {
        "placeholder": [
          "开始时间",
          "结束时间"
        ]
      },
      "widget": "dateRange"
    },
    "fr-47yy": {
      "title": "时间区间",
      "type": "range",
      "format": "time",
      "props": {
        "placeholder": [
          "开始时间",
          "结束时间"
        ]
      },
      "maxWidth": "340px",
      "widget": "timeRange"
    },
    "fr-gh3o": {
      "title": "下拉多选",
      "type": "array",
      "widget": "multiSelect",
      "props": {
        "options": [
          {
            "label": "A",
            "value": "A"
          },
          {
            "label": "B",
            "value": "B"
          }
        ],
        "placeholder": "请选择"
      }
    },
    "fr-fbba": {
      "title": "点击多选",
      "type": "array",
      "props": {
        "options": [
          {
            "label": "A",
            "value": "1"
          },
          {
            "label": "B",
            "value": "2"
          },
          {
            "label": "C",
            "value": "3"
          }
        ],
        "direction": "row"
      },
      "maxWidth": "340px",
      "widget": "checkboxes"
    },
    "fr-hhzp": {
      "title": "日期选择",
      "type": "string",
      "props": {
        "placeholder": "请选择日期"
      },
      "widget": "datePicker"
    },
    "single_text1": {
      "title": "单行文本",
      "type": "string",
      "format": "email",
      "widget": "input"
    }
  },
  "displayType": "row",
  "maxWidth": "340px"
};

export default function HomePage() {
  const form = useForm();
  const navigate = useNavigate();

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
        {/* <img className="w-30vw rounded-3 p-4 shadow-lg transition-all duration-300 ease blur-sm hover:blur-0" src={sampleImg} /> */}
        <div className='w-30vw rounded-3 p-4 shadow-lg transition-all duration-300 ease blur-sm hover:blur-0'>
          <FormRender
            form={form}
            schema={sampleSchema}
            footer={true}
          />
        </div>
        <div className="ml-16 w-38vw">
          <div className="text-12 font-bold mt-4">Better way to collect data in the decentralized web</div>
          <div className="text-5 mt-6 mb-10">Collect more data—such as signups for airdrops, event invitations, and anything else—through <b>「Onchain Program」(form)</b> on <b className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-70% to-emerald-500 to-90% bg-clip-text text-transparent text-6">Solana.</b></div>
          <button className="bg-black border rounded-2 center px-8 py-4 text-7 font-bold text-white" onClick={() => navigate('/builder')}>
            <div className="i-solar-magic-stick-3-line-duotone mr-4 text-8"></div>
            Get started
          </button>
        </div>

      </div>

    </div>
  );
}


