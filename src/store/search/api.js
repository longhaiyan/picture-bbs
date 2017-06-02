
import { env } from '@/utils/config'

const api = {
    dev: {
        'search': '/data?name=search_data',
    },
    pro: {
        'search':'/search/data'

    }
}
export default api[env]