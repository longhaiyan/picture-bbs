
import { env } from '@/utils/config'

const api = {
    dev: {
        'userInfoPlus': '/data?name=user_info_plus',
        'error':'/data?name=error',
        'list':'/data?name=money_list'

    },
    pro: {
        'userInfoPlus':'/user/profile/update',
        'list':'/account/info/data'

    }
}
export default api[env]