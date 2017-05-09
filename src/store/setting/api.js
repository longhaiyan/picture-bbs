
import { env } from '@/utils/config'

const api = {
    dev: {
        'userInfoPlus': '/data?name=user_info_plus',
        'error':'/data?name=error'

    },
    pro: {
        'userInfoPlus':'/user/profile/add'

    }
}
export default api[env]