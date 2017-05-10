
import { env } from '@/utils/config'

const api = {
    dev: {
        'category': 'data?name=category_map',
        'tag':'data?name=category_map'

    },
    pro: {
        'category': '/tag/category/list/data',
        'tag':'/tag/info/list'
    }
}
export default api[env]