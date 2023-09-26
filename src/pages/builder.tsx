
import SchemaBuilder from '@xrenders/schema-builder';
import { useNavigate } from 'umi';

export default function HomePage() {
  const navigate = useNavigate();

  const saveSchema = localStorage.getItem("save-schema")

  function handleGo(schema: any) {
    console.log(schema)
    localStorage.setItem("save-schema", JSON.stringify(schema))
    navigate('/confirm');
  }
  return (
    <div>
      <div style={{ height: '99vh' }}>
        {/* @ts-ignore */}
        <SchemaBuilder defaultValue={saveSchema} logo={{ image: '', title: 'SolanaForm' }} importBtn={true} exportBtn={false} saveBtn={false} pubBtn={false} extraBtns={[{ text: '确认创建', onClick: handleGo }]} />
      </div>
    </div>
  );
}
