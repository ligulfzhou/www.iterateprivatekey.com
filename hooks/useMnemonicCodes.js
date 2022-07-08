import useSWR from 'swr'
import {fetcher, isNullString} from "../utils/util";
import { api_host } from "../utils/const";
import {useRouter} from "next/router";

export default function useMnemonicCodes () {
    const {query} = useRouter()
    const {page, pageSize} = query

    let _page = page
    if (isNullString(page)) {
        _page = 1
    }
    let _pageSize = pageSize
    if (isNullString(pageSize)) {
        _pageSize = 32
    }

    const { data, error } = useSWR(`${api_host}/api/mnemonic/code?page=${_page}&page_size=${_pageSize}`, fetcher, {revalidateAll: false})

    // debugger
    let mnemonic_codes = []
    if (data !== undefined && data.mnemonic_codes !== undefined) {
        mnemonic_codes = data.mnemonic_codes
    }

    return {
        mnemonic_codes: mnemonic_codes,
        isLoading: !error && !data,
        isError: error
    }
}
