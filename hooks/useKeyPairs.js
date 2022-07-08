import useSWR from 'swr'
import {fetcher, isNullString} from "../utils/util";
import { api_host } from "../utils/const";
import {useRouter} from "next/router";

export default function useKeyPairs () {
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

    const { data, error } = useSWR(`${api_host}/api/key/pair?page=${_page}&page_size=${_pageSize}`, fetcher, {revalidateAll: false})

    // debugger
    let key_pairs = []
    if (data !== undefined && data.key_pairs !== undefined) {
        key_pairs = data.key_pairs
    }

    return {
        keyPairs: key_pairs,
        isLoading: !error && !data,
        isError: error
    }
}
