import useSWR from 'swr'
import {fetcherPost} from "../utils/util";
import {api_host} from "../utils/const";

export default function useAddressBalance(addresses= []) {

    const params = {
        addresses: addresses
    }
    const {data, error} = useSWR(
        {
            url: `${api_host}/api/balance`,
            payload: JSON.stringify(params)
        }, fetcherPost, {revalidateAll: false})

    let balance = {}
    let address_script_dict = {}
    if (data !== undefined && data.balance !== undefined) {
        balance = data.balance
        address_script_dict = data.address_script_dict
    }

    return {
        balance: balance,
        address_script_dict: address_script_dict,
        isLoading: !error && !data,
        isError: error
    }
}
