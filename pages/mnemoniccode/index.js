import BasicLayout from '../../layouts/Basic'
import MnemonicCodeTable from "../../components/MnemonicCodeTable";

export default function Index() {
    return (
        <BasicLayout>
            <div className=''>
                <MnemonicCodeTable />
            </div>
        </BasicLayout>
    )
}
