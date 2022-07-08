import BasicLayout from '../layouts/Basic'
import PrivateKeyTable from "../components/PrivateKeyTable";

export default function Home() {
    return (
        <BasicLayout>
            <div className='mx-auto w-max text-xl my-5'>
                Iterate private key from 1 ~ <a href='https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch04.asciidoc#generating-a-private-key-from-a-random-number' target='_blank' className='hover:underline text-red-500 active:text-bold'>1.1578 * 10^77</a>
            </div>
            <div className=''>
                <PrivateKeyTable/>
            </div>
        </BasicLayout>
    )
}
