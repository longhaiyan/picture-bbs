
import { env } from '@/utils/config'

const api = {
    dev: {
        'list': '/data?name=items_management_category',
        'error':'/data?name=error'

    },
    pro: {

    }
}
export default api[env]