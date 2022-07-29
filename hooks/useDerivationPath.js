import useSWR from 'swr'
import {defaultValue, fetcher} from "../utils/util";
import { api_host, derivationPaths } from "../utils/const";
import {useRouter} from "next/router";

export default function useDerivationPath () {
    const {query} = useRouter()
    const {mnemonic, page, pageSize, path} = query

    let _path = defaultValue(path, derivationPaths[0])
    let _page = defaultValue(page, 1)
    let _pageSize = defaultValue(pageSize, 32)

    const { data, error } = useSWR(`${api_host}/api/mnemonic/code/of/path?page=${_page}&page_size=${_pageSize}&words=${mnemonic}&path=${_path}`, fetcher, {revalidateAll: false})

    // debugger
    let keyPairs = []
    if (data !== undefined && data.key_pairs !== undefined) {
        keyPairs = data.key_pairs
    }

    return {
        keyPairs: keyPairs,
        isLoading: !error && !data,
        isError: error
    }
}
